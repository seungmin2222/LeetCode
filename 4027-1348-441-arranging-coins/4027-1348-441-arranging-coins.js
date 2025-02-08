/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let row = 0;

  for (let i = 1; i <= n; i++) { 
    n -= i;
    row++;
  }

  return row;
};