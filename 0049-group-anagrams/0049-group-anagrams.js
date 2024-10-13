/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const wordObj = {};
  const arr = [];
  
   for (let i = 0; i < strs.length; i++) {
    const sortWord = strs[i].split("").sort().join("");
    
    if (!wordObj[sortWord]) {
      wordObj[sortWord] = [strs[i]];
    } else {
      wordObj[sortWord].push(strs[i]);
    }
  }
  
  return Object.values(wordObj);
};