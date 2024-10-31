/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const len = s.length;
  if (len < 2) return false;

  for (let i = 1; i <= len / 2; i++) {
    if (len % i === 0) {
      const substring = s.slice(0, i);
      const repeatCount = len / i;
      if (substring.repeat(repeatCount) === s) {
        return true;
      }
    }
  }
  
  return false;
};