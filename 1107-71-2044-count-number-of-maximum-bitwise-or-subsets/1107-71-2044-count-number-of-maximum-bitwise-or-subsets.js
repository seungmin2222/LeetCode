/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let maxOr = 0; 
    let count = 0; 

    const n = nums.length;
    const totalSubsets = 1 << n;

    for (let mask = 0; mask < totalSubsets; mask++) {
        let currentOr = 0;
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                currentOr |= nums[i];
            }
        }

        if (currentOr > maxOr) {
            maxOr = currentOr;
            count = 1;
        } else if (currentOr === maxOr) {
            count++;
        }
    }

    return count;
};