/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
  const arr = s.split("");
  const obj = {};
  let count = 1;
  const result = [];
  let maxLength = -1;
  
  function isArrayConsistOfChar(arr, char) {
    return arr.every(element => element === char);
}
  
  for (let i = 0; i < s.length; i++) {
    for (let j = i + count; j < s.length + 1; j++) {
      if (isArrayConsistOfChar(arr.slice(i,j), arr[i])) {
        if (obj[arr.slice(i,j).join("")] === undefined) {
            obj[arr.slice(i,j).join("")] = 1;
        } else {
          obj[arr.slice(i,j).join("")]++
        }
      }
      
    }
  }
  
  for (let i in obj) {
    if (obj[i] >= 3) {
        result.push(i);
    }
  }
  
  for (let i = 0; i < result.length; i++) {
    if(result[i].length > maxLength) maxLength = result[i].length;
  }
  
  return maxLength;
};