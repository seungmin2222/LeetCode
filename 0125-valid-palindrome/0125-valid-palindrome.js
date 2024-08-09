/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const engAndNum = "abcdefghijklmnopqrstuvwxyz1234567890".split("")
  const a = s.toLowerCase().split(" ").join("");
  let b = "";
  
  for (let i = 0; i < a.length; i++) {
    if (engAndNum.indexOf(a[i]) !== -1) {
        b += a[i];
    };
  };
  
  for (let i = 0; i < b.length; i++) {
    if (b[i] !== b[b.length - 1 - i]) {
        return false;
    }
  }
  
  return true;
};