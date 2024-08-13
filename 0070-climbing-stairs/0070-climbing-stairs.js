/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
 if (n === 1) return 1;
  if (n === 2) return 2;

  let prev1 = 1;
  let prev2 = 2;
  let current;

  for (let i = 3; i <= n; i++) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
};
