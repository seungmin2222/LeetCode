/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const obj = {};
    let maxNum = -1;

    for (let i of arr) {
        if (!obj[i]) {
            obj[i] = 1;
        } else {
            obj[i]++
        }
    }

    for (let i in obj) {
        if (i == obj[i]) {
            if (maxNum < Number(i)) {
                maxNum = Number(i);
            }
        }
    }

    return maxNum;
};