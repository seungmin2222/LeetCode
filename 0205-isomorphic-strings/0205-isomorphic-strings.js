/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const check = {};
  const check2 = {};
  
  for (let i = 0; i < s.length; i++) {
    if (!check[s[i]]) {
      check[s[i]] = t[i];
    } else {
      if (check[s[i]] !== t[i]) {
        return false;
      }
    }
    
    if (!check2[t[i]]) {
      check2[t[i]] = s[i];
    } else {
      if (check2[t[i]] !== s[i]) {
        return false;
      }
    }
  }
  
  return true;
};