/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  function dps (x,y, i) {
    if (i === word.length) return true;
    
    if (x < 0 || y < 0 || x >= board.length || y >= board[0].length || board[x][y] !== word[i]) {
      return false;
    }
    
    const temp = board[x][y];
    board[x][y] = '#';
    
    const found = dps(x + 1, y, i + 1) ||
                  dps(x - 1, y, i + 1) ||
                  dps(x, y + 1, i + 1) ||
                  dps(x, y - 1, i + 1);
    
    board[x][y] = temp;
    
    return found;
  }  
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && dps(i, j, 0)) {
        return true;
      }
    }
  }
  
   return false;
  
};