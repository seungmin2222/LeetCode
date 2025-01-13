/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    const freq = {};
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    let totalOperations = 0;
    for (let char in freq) {
        const count = freq[char];
        if (count >= 3) {
            totalOperations += Math.floor((count - 1) / 2);
        }
    }

    const deletions = totalOperations * 2;
    return s.length - deletions;
};