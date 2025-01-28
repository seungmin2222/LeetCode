/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
    let pairs = nums.map((num, idx) => [num, idx]);
    
    pairs.sort((a, b) => a[0] - b[0]);
    
    let result = new Array(nums.length);
    
    let groupNums = [];
    let groupIndices = [];
    
    for (let i = 0; i < pairs.length; i++) {
        groupNums.push(pairs[i][0]);
        groupIndices.push(pairs[i][1]);
        
        if (i === pairs.length - 1 || pairs[i + 1][0] - pairs[i][0] > limit) {
            groupIndices.sort((a, b) => a - b);
            
            for (let j = 0; j < groupNums.length; j++) {
                result[groupIndices[j]] = groupNums[j];
            }
            
            groupNums = [];
            groupIndices = [];
        }
    }
    
    return result;
};