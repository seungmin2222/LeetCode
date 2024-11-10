/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
  const s1Sorted = s1.split('').sort();
  const s2Sorted = s2.split('').sort();

  let s1BreaksS2 = true;
  let s2BreaksS1 = true;

  for (let i = 0; i < s1Sorted.length; i++) {
      if (s1Sorted[i] < s2Sorted[i]) {
          s1BreaksS2 = false;
      }
      if (s1Sorted[i] > s2Sorted[i]) {
          s2BreaksS1 = false;
      }
  }

  return s1BreaksS2 || s2BreaksS1;
};