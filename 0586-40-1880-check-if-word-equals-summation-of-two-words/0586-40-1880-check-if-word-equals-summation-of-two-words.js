/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    const getNumValue = (word) => {
        let numStr = '';
        for (let char of word) {
            numStr += char.charCodeAt(0) - 'a'.charCodeAt(0);
        }
        return parseInt(numStr) || 0;
    };
    
    const firstNum = getNumValue(firstWord);
    const secondNum = getNumValue(secondWord);
    const targetNum = getNumValue(targetWord);
    
    return firstNum + secondNum === targetNum;
};