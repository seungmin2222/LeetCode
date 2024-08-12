/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const a = [1];
  let sum = 0;
  
  for (let i = 0; i < n; i++) {
    const b = a[i-1];
    const c = a[i];
    if (b) {
      sum = b + c;
      a.push(sum)
    } else {
      sum = c;
      a.push(c);
    }
  }
  
  return sum;
};