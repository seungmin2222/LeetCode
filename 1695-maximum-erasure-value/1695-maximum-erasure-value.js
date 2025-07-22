/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    const set = new Set();
    let left = 0;
    let currentSum = 0;
    let maxSum = 0;

    for (let right = 0; right < nums.length; right++) {
        while (set.has(nums[right])) {
            set.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }
        set.add(nums[right]);
        currentSum += nums[right];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};