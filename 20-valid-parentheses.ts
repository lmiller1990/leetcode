const o = new Set([..."({[".split("")]);
const c = new Set([...")}]".split("")]);

const pairs = new Map([
  [")", "("],
  ["}", "{"],
  ["]", "["],
]);

function isValid(_s: string): boolean {
  const s = _s.split("");
  let open: string[] = [];

  while (s.length) {
    const curr = s.shift();
    if (!curr) {
      break;
    }

    if (o.has(curr)) {
      open.push(curr);
    }

    if (c.has(curr)) {
      if (open.at(-1) !== pairs.get(curr)!) {
        return false;
      }
      open.pop();
    }
  }

  if (open.length) {
    return false;
  }

  return true;
}

console.log(isValid("()[]"));
console.log(isValid("({})"));
console.log(isValid("["));
