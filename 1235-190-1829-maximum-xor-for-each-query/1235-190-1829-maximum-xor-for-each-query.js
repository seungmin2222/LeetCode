/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    let xor = 0;
    let maxNum = (1 << maximumBit) - 1;
    let result = [];

    for (let num of nums) {
        xor ^= num;
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result.push(xor ^ maxNum);
        xor ^= nums[i];
    }

    return result;
};