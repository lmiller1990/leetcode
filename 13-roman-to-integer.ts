const tokens = ["X", "V", "I", "L", "D", "M", "C"] as const;

type Token = typeof tokens[number];

function tokenize(s: string): Token[] {
  const toks = s.split("");
  toks.forEach((x) => {
    if (!tokens.includes(x as Token)) {
      throw Error(`${x} is not valid. Only ${tokens.join(",")} are valid.`);
    }
  });
  return toks as Token[];
}

const digits = new Map([
  ["I", 1],
  ["II", 2],
  ["III", 3],
  ["IV", 4],
  ["IX", 9],
  ["V", 5],
  ["X", 10],
  ["XL", 40],
  ["L", 50],
  ["XC", 90],
  ["C", 100],
  ["CD", 400],
  ["D", 500],
  ["CM", 900],
  ["M", 1000],
]);

function parse(toks: Token[]) {
  let nodes: string[] = [];

  while (toks.length) {
    const t = toks.shift();

    if (!t) {
      return nodes;
    }

    if (t === "I") {
      if (toks.at(0) === "I" && toks.at(1) === "I") {
        toks.shift();
        toks.shift();
        nodes.push("III");
      } else if (toks.at(0) === "I") {
        toks.shift();
        nodes.push("II");
      } else if (toks.at(0) === "V" || toks.at(0) === "X") {
        const n = toks.shift();
        nodes.push(`I${n}`);
      } else {
        nodes.push("I");
      }
    } else if (t === "V") {
      nodes.push("V");
    } else if (t === "X") {
      if (toks.at(0) === "L") {
        toks.shift();
        nodes.push("XL");
      } else if (toks.at(0) === "C") {
        toks.shift();
        nodes.push("XC");
      } else {
        nodes.push("X");
      }
    } else if (t === "L") {
      nodes.push("L");
    } else if (t === "C") {
      if (toks.at(0) === "D") {
        toks.shift();
        nodes.push("CD");
      } else if (toks.at(0) === "M") {
        toks.shift();
        nodes.push("CM");
      } else {
        nodes.push("C");
      }
    } else if (t === "D") {
      nodes.push("D");
    } else if (t === "M") {
      nodes.push("M");
    } else {
      console.error(`Error for ${t}`);
    }
  }

  return nodes;
}

// compilers are the solution to all the problems!
function romanToInt(s: string): number {
  const tokens = tokenize(s);
  const ast = parse(tokens);
  return ast.reduce((acc, curr) => {
    const d = digits.get(curr);
    if (!d) {
      throw new Error(`Could not find ${curr}`);
    }
    return acc + d;
  }, 0);
}

// romanToInt('IV');
// romanToInt('IX');
// romanToInt('V');
// romanToInt('LVIII');
// const i = 'MCMXCIV'
const i = "DCXXI";
console.log(i);
console.log(romanToInt(i)); //=> 1994
