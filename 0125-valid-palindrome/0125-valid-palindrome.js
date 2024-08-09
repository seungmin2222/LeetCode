/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const engAndNum = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
  const lowerCaseAndNum = s.toLowerCase();
  let str = "";
  
  for (let i = 0; i < lowerCaseAndNum.length; i++) {
    if (engAndNum.indexOf(lowerCaseAndNum[i]) !== -1) {
      str += lowerCaseAndNum[i];
    }
  }
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  
  return true;
};