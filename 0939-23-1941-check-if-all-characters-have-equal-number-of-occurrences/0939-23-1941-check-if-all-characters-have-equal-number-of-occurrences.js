/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const obj = {};

    for (const i of s) {
        obj[i] = (obj[i] || 0) + 1;
    }

    const values = Object.values(obj);
    return values.every(val => val === values[0]);
};