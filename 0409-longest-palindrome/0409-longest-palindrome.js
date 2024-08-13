/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
 const unitObj = {};
  let maxNum = 0;
  let hasOddFrequency = false;
  
  for (let i = 0; i < s.length; i++) {
    unitObj[s[i]] = (unitObj[s[i]] || 0) + 1;
  }
  
  for (const count of Object.values(unitObj)) {
    if (count % 2 === 0) {
        maxNum += count;
    } else {
      maxNum += count - 1;
      hasOddFrequency = true;
    }
  }
  
  return maxNum + (hasOddFrequency ? 1 : 0);
};