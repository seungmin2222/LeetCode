/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const n = nums.length;
  const counts = new Array(n + 1).fill(0);
  let duplicate, missing;

  for (const num of nums) {
      counts[num]++;
  }

  for (let i = 1; i <= n; i++) {
      if (counts[i] === 2) {
          duplicate = i;
      } else if (counts[i] === 0) {
          missing = i;
      }
  }

  return [duplicate, missing];
};