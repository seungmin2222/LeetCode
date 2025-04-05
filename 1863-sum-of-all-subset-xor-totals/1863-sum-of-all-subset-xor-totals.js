/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    const totalSubsets = 1 << nums.length;
    let total = 0;

    for (let i = 0; i < totalSubsets; i++) {
        let xor = 0;
        
        for (let j = 0; j < nums.length; j++) {
            if (i & (1 << j)) {
                xor ^= nums[j];
            }
        }

        total += xor;
    }

    return total;
};