/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
  const canDivide = (penalty) => {
    let operations = 0;
    
    for (const balls of nums) {
        operations += Math.ceil(balls / penalty) - 1;
        if (operations > maxOperations) return false;
    }
    
    return true;
  };

  let left = 1;
  let right = Math.max(...nums);
  let result = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (canDivide(mid)) {
        result = mid;
        right = mid - 1;
    } else {
        left = mid + 1;
    }
  }

  return result;
};