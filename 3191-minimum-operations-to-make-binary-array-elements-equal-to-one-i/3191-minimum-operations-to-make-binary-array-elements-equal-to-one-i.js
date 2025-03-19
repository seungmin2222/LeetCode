/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;
    
    if (n < 3) {
        return nums.every(num => num === 1) ? 0 : -1;
    }
    
    let operations = 0;
    
    for (let i = 0; i < n - 2; i++) {
        if (nums[i] === 0) {
            nums[i] ^= 1;
            nums[i+1] ^= 1;
            nums[i+2] ^= 1;
            operations++;
        }
    }
    
    if (nums[n-2] === 1 && nums[n-1] === 1) {
        return operations;
    }
    
    return -1;
};