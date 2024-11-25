/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
  const m = box.length; 
  const n = box[0].length;

  for (let i = 0; i < m; i++) {
    let empty = n - 1; 
    
    for (let j = n - 1; j >= 0; j--) {
      if (box[i][j] === '#') {
        box[i][empty] = '#';
        
        if (empty !== j) box[i][j] = '.';
        empty--;
        
      } else if (box[i][j] === '*') {
        empty = j - 1;
      }
    }
  }

  const result = Array.from({ length: n }, () => Array(m).fill('.'));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
     result[j][m - 1 - i] = box[i][j];
    }
  }

  return result;
}
