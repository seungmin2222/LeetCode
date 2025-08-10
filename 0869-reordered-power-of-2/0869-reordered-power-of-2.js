/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
  const sig = (x) => x.toString().split('').sort().join('');
  const sigSet = new Set();

  for (let p = 1; p <= 1000000000; p <<= 1) {
    sigSet.add(sig(p));
  }

  return sigSet.has(sig(n));
};