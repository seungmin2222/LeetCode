/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    let j = 0;
    
    for (let i = 0; i < str1.length && j < str2.length; i++) {
        if (str1[i] === str2[j] || (str1.charCodeAt(i) + 1 - 97) % 26 + 97 === str2.charCodeAt(j)) {
            j++; 
        }
    }
    
    return j === str2.length;
};
