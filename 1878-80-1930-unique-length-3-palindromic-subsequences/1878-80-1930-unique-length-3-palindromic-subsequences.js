/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    let result = 0;
    let seen = new Set();

    for (let charCode = 97; charCode <= 122; charCode++) {
        const char = String.fromCharCode(charCode);
        const first = s.indexOf(char);
        const last = s.lastIndexOf(char);

        if (first !== -1 && last !== -1 && first < last) {
            let middleChars = new Set();
            for (let i = first + 1; i < last; i++) {
                middleChars.add(s[i]);
            }
            result += middleChars.size;
        }
    }

    return result;
};