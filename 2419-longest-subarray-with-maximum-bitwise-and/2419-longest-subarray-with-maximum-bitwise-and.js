/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const maxVal = Math.max(...nums);
    let longest = 0;
    let current = 0;

    for (let num of nums) {
        if (num === maxVal) {
            current++;
            longest = Math.max(longest, current);
        } else {
            current = 0;
        }
    }

    return longest;
};