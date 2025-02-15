/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums.sort((a, b) => b - a);
    let operations = 0;
    
    while (nums.length >= 2 && nums[nums.length - 1] < k) {
        const x = nums.pop();
        const y = nums.pop();
        const newVal = x * 2 + y;
        
        let left = 0;
        let right = nums.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] > newVal) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        nums.splice(left, 0, newVal);
        operations++;
    }
    
    return operations;
};