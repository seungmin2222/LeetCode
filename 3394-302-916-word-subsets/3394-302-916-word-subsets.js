/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
  const requiredFreq = new Array(26).fill(0);
  for (const word of words2) {
    const wordFreq = new Array(26).fill(0);
    for (const char of word) {
      wordFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < 26; i++) {
      requiredFreq[i] = Math.max(requiredFreq[i], wordFreq[i]);
    }
  }

  return words1.filter(word => {
    const wordFreq = new Array(26).fill(0);
    for (const char of word) {
      wordFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    return requiredFreq.every((freq, idx) => wordFreq[idx] >= freq);
  });
};
