/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let memo = {};

  function walk(x, y) {
    if (x === m - 1 && y === n - 1) {
      return 1;
    }
    
    if (x >= m || y >= n) {
      return 0;
    }
    
    if (`${x},${y}` in memo) {
      return memo[`${x},${y}`];
    }
    
    memo[`${x},${y}`] = walk(x + 1, y) + walk(x, y + 1);
    return memo[`${x},${y}`];
  }

  return walk(0, 0);
};
