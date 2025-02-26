/**
 * @param {number[]} nums 
 * @return {number}
 */
function maxAbsoluteSum(nums) {
    if (!nums || nums.length === 0) return 0;
    
    let maxSum = 0; 
    let minSum = 0;
    let currentMax = 0;
    let currentMin = 0;
    
    for (let num of nums) {
       currentMax = Math.max(currentMax + num, num);
       maxSum = Math.max(maxSum, currentMax);

       currentMin = Math.min(currentMin + num, num);
       minSum = Math.min(minSum, currentMin);
    }
    
    return Math.max(maxSum, Math.abs(minSum));
}
