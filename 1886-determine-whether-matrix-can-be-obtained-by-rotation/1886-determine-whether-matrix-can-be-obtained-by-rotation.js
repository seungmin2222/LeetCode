/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
  function rotate(mat) {
    const n = mat.length;
    const rotated = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[j][n - i - 1] = mat[i][j];
      }
    }
    return rotated;
  }

  for (let i = 0; i < 4; i++) {
    if (mat.toString() === target.toString()) {
      return true;
    }
    mat = rotate(mat);
  }
  
  return false;
};