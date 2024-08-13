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
  
  for (const key in unitObj) {
    if (unitObj[key] % 2 === 0) {
      maxNum += unitObj[key];
    } else {
      isOddNum = true;
      maxNum += unitObj[key] - 1;
    }
  }
  
  return isOddNum ? maxNum + 1 : maxNum;
};