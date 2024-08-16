/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const bigA = BigInt(`0b${a}`);
  const bigB = BigInt(`0b${b}`);
  const sum = bigA + bigB;
  return sum.toString(2);
};