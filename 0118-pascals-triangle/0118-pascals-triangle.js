/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const tri = [[1]];
  if (numRows === 1) {
    return tri;
  }

  for (let i = 1; i < numRows; i++) {
    const row = [];
    row[0] = 1;
    const prevRow = tri[i - 1];
    for (let j = 1; j < i; j++) {
      row[j] = prevRow[j - 1] + prevRow[j];
    }
    row[i] = 1;
    tri.push(row);
  }

  return tri;
};
