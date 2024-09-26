/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = 1;
    } else {
      return nums[i];
    }
  }
};