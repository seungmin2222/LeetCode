/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const lowArr = [];
    const highArr = [];
    const sameArr = [];

    for (const num of nums) {
        if (num < pivot) {
            lowArr.push(num);
        } else if (num > pivot) {
            highArr.push(num);
        } else {
            sameArr.push(num);
        }
    }

    return [...lowArr, ...sameArr, ...highArr];
};