/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const arr = [];
  let x = 0;
  let y = 0;
  
  let dir = 'right';
  
  for (let i = 0; i < matrix.length * matrix[0].length; i++) {
    if (matrix[x][y] !== undefined) {
      arr.push(matrix[x][y]);
      matrix[x][y] = undefined;
    }
    
    if (dir === 'right') {
      if (matrix[x][y + 1] === undefined || y + 1 >= matrix[0].length) {
        dir = 'down';
        x++;
      } else {
        y++;
      }
    } else if (dir === 'down') {
      if (matrix[x + 1] === undefined || matrix[x + 1][y] === undefined) {
        dir = 'left';
        y--;
      } else {
        x++;
      }
    } else if (dir === 'left') { 
      if (matrix[x][y - 1] === undefined || y - 1 < 0) {
        dir = 'up';
        x--;
      } else {
        y--;
      }
    } else if (dir === 'up') {
      if (matrix[x - 1] === undefined || matrix[x - 1][y] === undefined || x - 1 < 0) {
        dir = 'right';
        y++;
      } else {
        x--;
      }
    }
  } 
  
  return arr;
};
