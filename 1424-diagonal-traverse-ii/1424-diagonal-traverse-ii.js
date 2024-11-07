/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
  const diagonalMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (!diagonalMap.has(i + j)) {
        diagonalMap.set(i + j, []);
      }
      diagonalMap.get(i + j).unshift(nums[i][j]);
    }
  }

  const arr = [];
  for (let key of diagonalMap.keys()) {
    arr.push(...diagonalMap.get(key));
  }

  return arr;
};
