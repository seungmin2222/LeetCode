/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let n = s.length;
    let count = 0;
    let charCount = {'a': 0, 'b': 0, 'c': 0};
    
    let left = 0;

    for (let right = 0; right < n; right++) {
        charCount[s[right]]++;
        
        while (charCount['a'] > 0 && charCount['b'] > 0 && charCount['c'] > 0) {
            count += n - right;
            
            charCount[s[left]]--;
            left++;
        }
    }
    
    return count;
};