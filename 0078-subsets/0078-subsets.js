/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [[]];
  
  while (nums.length) {
    const num = nums.shift();
    const leg = result.length;
    
    for (let i = 0; i < leg; i++) {
      result.push([...result[i], num]);
    }
  }
  
  return result;
};