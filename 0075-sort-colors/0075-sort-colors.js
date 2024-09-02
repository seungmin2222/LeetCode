/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let zero = '';
  let one = '';
  let two = '';
  
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] === 0) {
      zero++;
    } else if (nums[i] === 1) {
      one++;
    } else if (nums[i] === 2) {
      two++;
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (i < zero) {
      nums[i] = 0;
    } else if (i < zero + one) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }
};
