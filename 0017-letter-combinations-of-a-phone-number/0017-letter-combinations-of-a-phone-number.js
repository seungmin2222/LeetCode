/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits.length) return [];
  const digitList = digits.split('');
  const obj = {
    "2" : ["a", "b", "c"],
    "3" : ["d", "e", "f"],
    "4" : ["g", "h", "i"],
    "5" : ["j", "k", "l"],
    "6" : ["m", "n", "o"],
    "7" : ["p", "q", "r", "s"],
    "8" : ["t", "u", "v"],
    "9" : ["w", "x", "y", "z"]
  }
  
  let totalSize = 1;
  for (let i = 0; i < digits.length; i++) {
    totalSize *= obj[digits[i]].length; 
  }
  let result = new Array(totalSize).fill('');
  let size = 1
  
  while (digitList.length) {
    let str = obj[digitList.pop()];
    
    for (let i = 0; i < totalSize; i++) {
      let idx = parseInt(i / size) % str.length;
      result[i] = str[idx] + result[i];
    }
    size *= str.length
    
  }
  return result;
};
