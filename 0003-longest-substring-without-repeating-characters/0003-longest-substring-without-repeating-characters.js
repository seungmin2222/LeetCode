/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charIndex = {};
    let maxLength = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char in charIndex && charIndex[char] >= start) {
            start = charIndex[char] + 1;
        } else {
            maxLength = Math.max(maxLength, i - start + 1);
        }

        charIndex[char] = i;
    }

    return maxLength;

};