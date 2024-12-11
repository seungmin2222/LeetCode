/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
  const n = nums.length;
  const patternChange = new Array(n - 1).fill(false);

  for (let i = 0; i < n - 1; i++) {
    if ((nums[i] % 2) !== (nums[i + 1] % 2)) {
      patternChange[i] = true;
    }
  }

  const prefixSum = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + (patternChange[i - 1] ? 0 : 1);
  }

  const result = [];
  for (const [start, end] of queries) {
    const isSpecial = (prefixSum[end] - prefixSum[start]) === 0;
    result.push(isSpecial);
  }

  return result;
};
