/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const indexed = nums.map((num, idx) => [num, idx]);

    const topK = indexed.sort((a, b) => b[0] - a[0]).slice(0, k);

    topK.sort((a, b) => a[1] - b[1]);

    return topK.map(([num]) => num);
};