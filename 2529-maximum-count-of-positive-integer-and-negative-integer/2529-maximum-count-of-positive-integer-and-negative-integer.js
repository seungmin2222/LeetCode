/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let plus = 0;
    let minus = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            plus++;
        } else if (nums[i] < 0) {
            minus++;
        }
    }

    return Math.max(plus, minus);
};