/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const result = [];
   
  const fillteredNums = new Set();

  for (let i = 0; i < nums.length; i++) {
    fillteredNums.add(nums[i]);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!fillteredNums.has(i)) {
      result.push(i);
    }
  }
  
  return result;
};