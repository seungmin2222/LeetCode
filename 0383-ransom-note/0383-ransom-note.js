/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const words = {};
  
  for (let i = 0; i < magazine.length; i++) {
    if(words[magazine[i]] === undefined) {
      words[magazine[i]] = 1;
    } else {
      words[magazine[i]] += 1;
    }
  }
  
  for (let i = 0; i < ransomNote.length; i++) {
    if(words[ransomNote[i]] === undefined || words[ransomNote[i]] <= 0) {
      return false;
    } else {
      words[ransomNote[i]] -= 1;
    }
  }
  
  return true;
};