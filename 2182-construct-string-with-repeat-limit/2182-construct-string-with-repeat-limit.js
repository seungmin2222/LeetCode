/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
  const freq = Array(26).fill(0);
  for (const char of s) {
    freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  const result = [];
  let i = 25; 

  while (i >= 0) {
    if (freq[i] > 0) {
      let count = Math.min(freq[i], repeatLimit);  
      for (let j = 0; j < count; j++) {
        result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
      }
      freq[i] -= count;

      if (freq[i] > 0) {
        let nextChar = i - 1;
        while (nextChar >= 0 && freq[nextChar] === 0) {
          nextChar--;
        }

        if (nextChar < 0) break;

        result.push(String.fromCharCode(nextChar + 'a'.charCodeAt(0)));
        freq[nextChar]--;
      }
    } else {
      i--;  
    }
  }

  return result.join('');
};