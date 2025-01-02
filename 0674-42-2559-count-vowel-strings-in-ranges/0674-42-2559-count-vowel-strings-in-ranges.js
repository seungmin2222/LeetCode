/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    function isVowelString(word) {
        return vowels.has(word[0]) && vowels.has(word[word.length - 1]);
    }
    
    const prefixSum = Array(words.length + 1).fill(0);
    for (let i = 0; i < words.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + (isVowelString(words[i]) ? 1 : 0);
    }
    
    const result = [];
    for (const [li, ri] of queries) {
        result.push(prefixSum[ri + 1] - prefixSum[li]);
    }
    
    return result;
};