/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    const allK = nums.every(num => num === k);
    if (allK) return 0;

    const maxNum = Math.max(...nums);
    if (k > maxNum) return -1;

    let operations = 0;
    let currentNums = [...nums];

    while (true) {
        if (currentNums.every(num => num === k)) break;

        const greaterThanK = currentNums.filter(num => num > k);
        if (greaterThanK.length === 0) return -1;

        const sorted = [...new Set(greaterThanK)].sort((a, b) => a - b);

        const maxVal = sorted[sorted.length - 1];

        let h = -1;
        for (let i = sorted.length - 2; i >= 0; i--) {
            if (greaterThanK.every(v => v === maxVal || v <= sorted[i])) {
                h = sorted[i];
                break;
            }
        }

        if (h === -1 && greaterThanK.every(v => v === maxVal || v <= k)) {
            h = k;
        }

        if (h === -1) return -1;

        currentNums = currentNums.map(num => (num > h ? h : num));
        operations++;
    }

    return operations;
};