/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  if (s1 === s2) return true;
  
  const diff = [];
  
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diff.push([s1[i], s2[i]]);
    }
    if (diff.length > 2) return false;
  }
  
  return diff.length === 2 && diff[0][0] === diff[1][1] && diff[0][1] === diff[1][0];
};
