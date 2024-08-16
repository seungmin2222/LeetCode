/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  const a = [...s];
  const b = [...t];
  
  const c = [];
  const d = [];
  
  for (let i = 0; i < s.length; i++) {
    if (a[i] === '#') {
      c.pop();
    } else {
      c.push(a[i]);
    }
  }
  
  for (let i = 0; i < t.length; i++) {
    if (b[i] === '#') {
      d.pop();
    } else {
      d.push(b[i]);
    }
  }
  
  return c.toString() === d.toString();
};