/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];

  const dfs = (i, arr) => {
    if (i === arr.length) {
      return result.push([...arr]);
    }
    
    for (let j = i; j < arr.length; j++) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      dfs(i + 1, arr);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  dfs(0, nums);

  return result;
};
  