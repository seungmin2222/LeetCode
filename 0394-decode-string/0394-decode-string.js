/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const arr = s.split('');
  
  while (s.includes('[')) {
    const a = s.lastIndexOf('[');
    const b = s.indexOf(']', a); 

    let repeatCount = '';
    let k = a - 1;

    while (!isNaN(s[k]) && k >= 0) {
      repeatCount = s[k] + repeatCount;
      k--;
    }
    repeatCount = parseInt(repeatCount);

    const repeatedSegment = s.slice(a + 1, b).repeat(repeatCount);

    s = s.slice(0, k + 1) + repeatedSegment + s.slice(b + 1);
  }

  return s;
};


