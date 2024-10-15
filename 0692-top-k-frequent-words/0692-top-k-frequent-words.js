/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const obj = {};
  const arr = [];
  
  for (const word of words) {
    if (!obj[word]) {
        obj[word] = 1;
    } else {
      obj[word]++
    }
  }
  
  const changeArr = Object.entries(obj).sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    } else {
      return a[0].localeCompare(b[0]);
    }
  });
  
  for (let i = 0; i < k; i++) {
    arr.push(changeArr[i][0]);
  }
  
  return arr;
};