/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const unitObj = {};
  let maxNum = 0;
  let isOddNum = false;
  
  for (let i = 0; i < s.length; i++) {
    if (unitObj[s[i]]) {
        unitObj[s[i]] += 1;
    } else {
      unitObj[s[i]] = 1;
    }
  }
  
  for (const i in unitObj) {
    if (unitObj[i] % 2 === 0) {
        maxNum += unitObj[i];
    } else {
      isOddNum = true;
      maxNum += unitObj[i] - 1;
    }
  }
  
  return isOddNum ? maxNum + 1 : maxNum;
};