/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    const totalCount = 3 * Math.pow(2, n - 1);
    
    if (k > totalCount) {
        return "";
    }
    
    const letters = ['a', 'b', 'c'];
    let result = "";
    
    k = k - 1;
    
    const firstCharIndex = Math.floor(k / Math.pow(2, n - 1));
    result += letters[firstCharIndex];
    
    k %= Math.pow(2, n - 1);
    
    for (let i = 1; i < n; i++) {
        const remainingChoices = Math.pow(2, n - i - 1);
        const lastChar = result[result.length - 1];
        const availableChars = letters.filter(char => char !== lastChar);
        const nextCharIndex = Math.floor(k / remainingChoices);
        
        result += availableChars[nextCharIndex];
        
        k %= remainingChoices;
    }
    
    return result;
};