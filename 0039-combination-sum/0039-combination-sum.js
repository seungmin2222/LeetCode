/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];
  
  function backtrack (sum, combo, start) {
    if (sum === target) {
      result.push([...combo]);
      return;
    }
    
    if (sum > target) {
      return;
    }
    
    for (let i = start; i < candidates.length; i++) {
      combo.push(candidates[i]);
      backtrack(sum + candidates[i], combo, i);
      combo.pop();
    }
  }
  
  backtrack (0, [], 0)
  return result;
};