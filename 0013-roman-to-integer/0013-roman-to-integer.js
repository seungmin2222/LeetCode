/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  
  let sum = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (romanInt[s[i]] < romanInt[s[i + 1]]) {
      sum -= romanInt[s[i]];
    } else {
      sum += romanInt[s[i]];
    }
  }

  return sum;
};