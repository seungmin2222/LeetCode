/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  let newMat = [...mat];
  const a = [];
  const b = [];
  
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        a.push([i,j]);
        newMat[i][j] = 0;
      } else {
        b.push([i,j]);
        newMat[i][j] = Infinity;
      }
    }
  }
  
  for (let i = 0; i < b.length; i++) {
    let minNum = Infinity;
    for (let j = 0; j < a.length; j++) {
      const c = Math.abs(b[i][0] - a[j][0]);
      const d = Math.abs(b[i][1] - a[j][1]);
      if (minNum === 1) {
        break;
      }
      if (minNum > c + d) {
        minNum = c + d;
      }
    }

    newMat[b[i][0]][b[i][1]] = minNum;
  }
  
  return newMat;
};