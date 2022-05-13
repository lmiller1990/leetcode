function longestCommonPrefix(strs: string[]): string {
  let acc = "";
  const [head, ...rest] = strs;

  if (rest.length === 0) {
    return head;
  }

  for (let i = 0; i < head.length; i++) {
    for (let j = 0; j < rest.length; j++) {
      if (rest[j][i] !== head[i]) {
        return acc;
      }
    }
    acc += head[i];
  }

  return acc;
}

// const strs = ["flower", "flow", "flight"];
// const strs = ["a"];
const strs = ["flower", "flower", "flower", "flower"];
console.log(longestCommonPrefix(strs));
