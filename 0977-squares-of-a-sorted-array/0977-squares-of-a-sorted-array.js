/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const squares = [];
  
  for (let i = 0; i < nums.length; i++) {
    squares.push(nums[i] ** 2);
  }
  
  squares.sort((a, b) => a - b);
  
  return squares
};