/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let count = 0;
  let hasFresh = true;

  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
  ];

  while (hasFresh) {
    hasFresh = false;
    let newGrid = JSON.parse(JSON.stringify(grid));
    
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 2) {
          for (let [dx, dy] of directions) {
            let newX = i + dx;
            let newY = j + dy;

            if (
              newX >= 0 && newX < grid.length &&
              newY >= 0 && newY < grid[0].length &&
              grid[newX][newY] === 1
            ) {
              newGrid[newX][newY] = 2;
              hasFresh = true; 
            }
          }
        }
      }
    }

    if (hasFresh) {
      count++; 
      grid = newGrid;  
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        return -1;  
      }
    }
  }

  return count;  
};