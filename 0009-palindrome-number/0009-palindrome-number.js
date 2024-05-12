/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x.toString().length === 1) {
    return true;
  } else {
    if (x < 0) {
      return false;
    }
  }
  x = x.toString();
   for (let i = 0; i < x.length/2; i++) {
      if(x[i] !== x[x.length-1-i]){
          return false;
      } else {
          if(i === Math.floor(x.length/2)-1) {
             return true;
          }
      }
    }
};