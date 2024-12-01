/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let open = 0; 
  let moves = 0;

  for (let char of s) {
    if (char === '(') {
      open++;
    } else if (char === ')') {
      if (open > 0) {
        open--;
      } else {
        moves++;
      }
    }
  }

  return moves + open;
};