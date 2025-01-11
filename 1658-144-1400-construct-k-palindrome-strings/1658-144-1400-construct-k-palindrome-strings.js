/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (k > s.length) return false;
    let charCount = {};
    
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let oddCount = 0;
    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) oddCount++;
    }

    return oddCount <= k;
};