/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const n = nums.length;

    if (n < 3) {
        return nums.every(num => num === 1) ? 0 : -1;
    }

    let operations = 0;
    let copy = [...nums];

    for (let i = 0; i < n - 2; i++) {
        if (copy[i] === 0) {
            copy[i] = 1;
            copy[i + 1] ^= 1;
            copy[i + 2] ^= 1;
            operations++;
        }
    }

    if (copy[n - 2] === 1 && copy[n - 1] === 1) {
        return operations;
    }

    return -1;
};