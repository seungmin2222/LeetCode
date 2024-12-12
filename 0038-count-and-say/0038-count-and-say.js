/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let seq = "1";

  function next(seq) {
    let result = "";
    let count = 1;

    for (let i = 1; i < seq.length; i++) {
      if (seq[i - 1] === seq[i]) {
        count++;
      } else {
        result += count + seq[i - 1];
        count = 1;
      }
    }

    result += count + seq[seq.length - 1];

    return result;
  }

  for (let i = 1; i < n; i++) {
    seq = next(seq);
  }

  return seq;
};
