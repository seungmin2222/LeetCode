/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
  let word = '';
  
  while (a > 0 || b > 0) {
    if (a > b) {
      if (a > 1) {
        word += 'aa';
        a -= 2;
      } else {
        word += 'a';
        a -= 1;
      }
      if (b > 0) {
        word += 'b';
        b -= 1;
      }
    } else if (b > a) {
      if (b > 1) {
        word += 'bb';
        b -= 2;
      } else {
        word += 'b';
        b -= 1;
      }
      if (a > 0) {
        word += 'a';
        a -= 1;
      }
    } else {
      word += 'ab';
      a -= 1;
      b -= 1;
    }
  }
  
  return word;
};
