/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
  let sum = 0;
  let count = 0;
  
  
  for (let i = 1; i <= n; i++) {
    if (!banned.includes(i)) {
      if(sum + i <= maxSum) {
        count++;
        sum += i;
      } else {
        break;
      }
    }
  }
  
  return count;
};