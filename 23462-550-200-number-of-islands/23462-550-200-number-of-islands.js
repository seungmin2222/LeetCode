/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let area = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                checkArea(i, j);
                area++;
            }
        }
    }

  function checkArea (x, y) {
    if (grid[x] && grid[x][y] === '1') {
        grid[x][y] = '0';

        checkArea(x - 1, y);
        checkArea(x + 1, y);
        checkArea(x, y - 1);
        checkArea(x, y + 1);
    }
  }

  return area;
};