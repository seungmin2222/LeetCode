/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  let newMat = [...mat];
  const zeroPoint = [];
  const notZeroPoint = [];
  
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        zeroPoint.push([i,j]);
        newMat[i][j] = 0;
      } else {
        notZeroPoint.push([i,j]);
        newMat[i][j] = Infinity;
      }
    }
  }
  
  for (let i = 0; i < notZeroPoint.length; i++) {
    let minNum = Infinity;
    for (let j = 0; j < zeroPoint.length; j++) {
      const distanceNum1 = Math.abs(notZeroPoint[i][0] - zeroPoint[j][0]);
      const distanceNum2 = Math.abs(notZeroPoint[i][1] - zeroPoint[j][1]);
      
      if (minNum === 1) {
        break;
      }
      
      if (minNum > distanceNum1 + distanceNum2) {
        minNum = distanceNum1 + distanceNum2;
      }
    }

    newMat[notZeroPoint[i][0]][notZeroPoint[i][1]] = minNum;
  }
  
  return newMat;
};