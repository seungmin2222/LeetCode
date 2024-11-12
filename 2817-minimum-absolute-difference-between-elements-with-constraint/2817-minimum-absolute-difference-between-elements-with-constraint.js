/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minAbsoluteDifference = function(nums, x) {
  let dif = Infinity;
  
  for (let i = 0; i < nums.length - x; i++) {
    for (let j = i + x; j < nums.length; j++) {
      if (dif > Math.abs(nums[i]- nums[j])) {
          dif = Math.abs(nums[i]- nums[j]);
      }
      if (dif === 0) {
          return dif;
      }
    }
  }
  
  return dif;
};