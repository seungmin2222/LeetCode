/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let maxDiff = 0;
    let n = nums.length;
    
    for (let i = 0; i < n; i++) {
        let next = (i + 1) % n;
        let diff = Math.abs(nums[i] - nums[next]);
        
        maxDiff = Math.max(maxDiff, diff);
    }
    
    return maxDiff;
};