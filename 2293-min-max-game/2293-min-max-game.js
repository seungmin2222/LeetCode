/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
  while (nums.length > 1) {
    const newNums = [];
    
    for (let i = 0; i < nums.length / 2; i++) {
      if (i % 2 === 0) {
        newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
      } else {
        newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
      }
    }
    
    nums = newNums;
  }
  
  return nums[0];
};