/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let maxNum = nums[0];
    let sum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            sum += nums[i];
        } else {
            if (maxNum < sum) {
                maxNum = sum;    
            }
            sum = nums[i];
        }
    }

    return maxNum > sum ? maxNum : sum;
};