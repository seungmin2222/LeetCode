/**
 * @param {number[]} nums
 * @return {number}
 */
var maxGoodNumber = function(nums) {
  let maxNum = 0;
  
  const  binaryStrings = nums.map(num => num.toString(2));
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue; 
      for (let k = 0; k < nums.length; k++) {
        if (i === k || j === k) continue;
        const currentNumber = parseInt(binaryStrings[i] + binaryStrings[j] + binaryStrings[k], 2);
        maxNum = Math.max(maxNum, currentNumber);
      }
    }
  }
  
  return maxNum;
};