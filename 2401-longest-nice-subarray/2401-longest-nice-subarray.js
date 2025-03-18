/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let maxCount = 1;
    
    for (let i = 0; i < nums.length - 1; i++) {
        let count = 1;
        let currentAND = nums[i];
        
        for (let j = i + 1; j < nums.length; j++) {
            if ((currentAND & nums[j]) === 0) {
                currentAND |= nums[j];
                count++;
            } else {
                maxCount = Math.max(maxCount, count);
                break;
            }
        }
        
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};
