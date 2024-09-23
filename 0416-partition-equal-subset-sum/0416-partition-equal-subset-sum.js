/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
   const totalSum = nums.reduce((acc, num) => acc + num, 0);

  if (totalSum % 2 !== 0) return false;

  const target = totalSum / 2;
  const n = nums.length;
  
  const memo = Array.from({ length: n }, () => Array(target + 1).fill(-1));

  const backtrack = (index, currentSum) => {
    if (currentSum === target) return true;
    if (currentSum > target || index >= n) return false;
    
    if (memo[index][currentSum] !== -1) {
      return memo[index][currentSum];
    }

    const includeCurrent = backtrack(index + 1, currentSum + nums[index]);
    const excludeCurrent = backtrack(index + 1, currentSum);

    memo[index][currentSum] = includeCurrent || excludeCurrent;
    return memo[index][currentSum];
  };

  return backtrack(0, 0);
};

