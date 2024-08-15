/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const majorityNum = nums.length / 2;
  const obj = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
        obj[nums[i]] = 1;
    } else {
      obj[nums[i]] += 1;
    }
    if (obj[nums[i]] > majorityNum) {
      return nums[i];
    }
  }
};