/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentNum = nums[0];
  let maxNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentNum = Math.max(nums[i], nums[i] + currentNum);
    maxNum = Math.max(maxNum, currentNum);
  }

  return maxNum;
};
