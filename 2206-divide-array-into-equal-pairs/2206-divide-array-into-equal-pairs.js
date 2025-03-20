/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const obj = {};

    for (const i of nums) {
        obj[i] ? obj[i]++ : obj[i] = 1;
    }

    for (const i in obj) {
        if(obj[i] % 2 !== 0) return false;
    }

    return true;
};