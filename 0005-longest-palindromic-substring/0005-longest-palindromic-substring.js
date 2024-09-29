/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let num = '';
  
  for (let i = 0; i < s.length; i++) {
    checkPalindrome(s, i, i);
    checkPalindrome(s, i, i + 1);
  }
  
  function checkPalindrome(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    if (num.length < right - left - 1) {
      num = str.slice(left + 1, right);
    }
  }
  
  return num;
};
