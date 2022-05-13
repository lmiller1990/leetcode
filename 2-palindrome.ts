function isPalindrome(x: number): boolean {
  const s = x.toString();
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome(101));
console.log(isPalindrome(100));
console.log(isPalindrome(2222));
