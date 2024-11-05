/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
  let remainderCount = new Array(k).fill(0);

  for (let num of arr) {
    let remainder = ((num % k) + k) % k;
    remainderCount[remainder]++;
  }

  if (remainderCount[0] % 2 !== 0) return false;

  for (let i = 1; i <= k / 2; i++) {
    if (remainderCount[i] !== remainderCount[k - i]) {
      return false;
    }
  }

  return true;
};