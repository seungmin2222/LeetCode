/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const arr = [];
  
  function backtracking (braket, openNum, closeNum) {
    if (braket.length === n * 2) {
      arr.push(braket);
      return;
    }
    
    if (openNum < n) {
      backtracking(braket + '(', openNum + 1, closeNum);
    }
    
    if (closeNum < openNum) {
      backtracking(braket + ')', openNum, closeNum + 1);     
    }
  }
  
  backtracking('', 0, 0);
  
  return arr;
};