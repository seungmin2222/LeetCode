/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  nums.sort((a, b) => b - a);
  
  let totalSum = nums.reduce((acc, num) => acc + num, 0);
  let subsequenceSum = 0;
  let subsequence = [];

  for (let i = 0; i < nums.length; i++) {
    subsequenceSum += nums[i];
    subsequence.push(nums[i]);
    totalSum -= nums[i];
    
    if (subsequenceSum > totalSum) {
      break;
    }
  }

  return subsequence;
};