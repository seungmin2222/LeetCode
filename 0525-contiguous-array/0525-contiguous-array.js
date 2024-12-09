/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  let prefix_sum_map = {0: -1}; 
  let maxLen = 0;
  let prefix_sum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefix_sum += (nums[i] === 1 ? 1 : -1);

    if (prefix_sum in prefix_sum_map) {
      maxLen = Math.max(maxLen, i - prefix_sum_map[prefix_sum]);
    } else {
      prefix_sum_map[prefix_sum] = i;
    }
  }
  return maxLen;
}