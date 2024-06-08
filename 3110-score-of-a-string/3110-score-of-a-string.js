/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  let asc = 0;
    for (let i = 1; i < s.length; i++) {
      if (s[i - 1].charCodeAt() - s[i].charCodeAt() > 0) {
        asc += s[i - 1].charCodeAt() - s[i].charCodeAt();
      } else {
        asc += s[i].charCodeAt() - s[i - 1].charCodeAt();
      }
    }
  
  return asc;
};