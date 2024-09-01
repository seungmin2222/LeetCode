/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
  const binary = n.toString(2);
  let count = 0;
  
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
        count++
    }
  }
  
  return count;
};
