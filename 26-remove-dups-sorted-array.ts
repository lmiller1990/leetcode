function removeDuplicates(nums: number[]): number {
  let c = 0;
  let seen: number | undefined = undefined;

  for (let i = 0; i < nums.length; i++) {
    if (seen === undefined || (seen !== nums[i] && nums[i] > seen)) {
      seen = nums[i];
      nums[c] = nums[i];
      c++;
    }
  }

  nums.length = c;
  return nums.length;
}

// const input = [1, 1, 2];
const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(input));
