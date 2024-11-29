/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s; 

  let arr = new Array(numRows).fill("").map(() => "");
  let line = 0;
  let isPlus = 1; 

  for (let i = 0; i < s.length; i++) {
    arr[line] += s[i];

    
    if (line === numRows - 1) {
      isPlus = -1; 
    } else if (line === 0) {
      isPlus = 1; 
    }

    line += isPlus;
  }

  return arr.join("");
};
