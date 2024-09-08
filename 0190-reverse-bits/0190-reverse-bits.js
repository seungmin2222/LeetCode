/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        let bit = (n & 1);
        result = result * 2 + bit;
        n = Math.floor(n / 2);
    }
  
    return Math.abs(result) % (2 ** 32);
};