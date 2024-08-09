/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const a = s.split("").sort((a, b) => (a > b ? -1 : 1)).join("");
  const b = t.split("").sort((a, b) => (a > b ? -1 : 1)).join("");
  
  return a === b;
};