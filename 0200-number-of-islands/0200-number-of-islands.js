/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || grid.length === 0) return 0;

  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j);
        count++;
      }
    }
  }

  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
      return;
    }

    grid[i][j] = '0';

    dfs(i-1, j);
    dfs(i+1, j);
    dfs(i, j-1);
    dfs(i, j+1);
  }

  return count;
};