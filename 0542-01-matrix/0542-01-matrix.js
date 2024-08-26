/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  let distanceMat = [...mat];
  const zeroArr = [];
  const nonZeroArr = [];
  
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        zeroArr.push([i, j]);
        distanceMat[i][j] = 0;
      } else {
        nonZeroArr.push([i, j]);
        distanceMat[i][j] = Infinity;
      }
    }
  }
  
  for (let i = 0; i < nonZeroArr.length; i++) {
    let minDistance = Infinity;
    for (let j = 0; j < zeroArr.length; j++) {
      const rowDistance = Math.abs(nonZeroArr[i][0] - zeroArr[j][0]);
      const colDistance = Math.abs(nonZeroArr[i][1] - zeroArr[j][1]);
      
      if (minDistance === 1) {
        break;
      }
      
      if (minDistance > rowDistance + colDistance) {
        minDistance = rowDistance + colDistance;
      }
    }
    distanceMat[nonZeroArr[i][0]][nonZeroArr[i][1]] = minDistance;
  }
  
  return distanceMat;
};