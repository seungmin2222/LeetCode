/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
  let words = '';
  
  while (a > 0 || b > 0) {
    if (a > b) {
      if (a > 1) {
        words += 'aa';
        a -= 2;
      } else {
        words += 'a';
        a -= 1;
      }
      if (b > 0) {
        words += 'b';
        b -= 1;
      }
    } else if (b > a) {
      if (b > 1) {
        words += 'bb';
        b -= 2;
      } else {
        words += 'b';
        b -= 1;
      }
      if (a > 0) {
        words += 'a';
        a -= 1;
      }
    } else {
      words += 'ab';
      a -= 1;
      b -= 1;
    }
  }
  
  return words;
};
