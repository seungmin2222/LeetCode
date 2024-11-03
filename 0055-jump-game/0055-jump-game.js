/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxNum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (i > maxNum) return false; 
    
    maxNum = Math.max(maxNum, i + nums[i]);
    
    if (maxNum >= nums.length - 1) return true;
  }
  
  return false;
};