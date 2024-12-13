/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
  let score = 0;
  const n = nums.length;
  const indexedNums = nums.map((val, idx) => [val, idx]);

  indexedNums.sort((a, b) => a[0] - b[0]);

  const marked = new Array(n).fill(false);

  for (const [val, idx] of indexedNums) {
      if (!marked[idx]) {
          score += val;
          marked[idx] = true;
          if (idx > 0) marked[idx - 1] = true;
          if (idx < n - 1) marked[idx + 1] = true;
      }
  }

  return score;
};