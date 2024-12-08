/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  let n = nums.length;
  let stack = [];
  let maxWidth = 0;


  for (let i = 0; i < n; i++) {
    if (stack.length === 0 || nums[i] < nums[stack[stack.length - 1]]) {
      stack.push(i);
    }
  }

  for (let j = n - 1; j >= 0; j--) {
    while (stack.length && nums[j] >= nums[stack[stack.length - 1]]) {
      let i = stack.pop();
      maxWidth = Math.max(maxWidth, j - i);
    }
  }

  return maxWidth;
};