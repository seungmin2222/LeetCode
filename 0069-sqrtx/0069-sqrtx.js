/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) return 0;
  if (x === 1) return 1;
  if (x === 2) return 1;
  
  for (let i = 2; i < x; i++) {
    if (x < i ** 2) {
        return i - 1;
    }
  }
};