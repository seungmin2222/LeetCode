/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  let arr = [];
  let clone = [...code];
  let kk = k
  if (k < 0) {
    clone = [...code].reverse();
    kk = Math.abs(k);
  } 
  
  for (let i = 1; i <= clone.length; i++) {
    const start = i;
    const end = i + kk > clone.length ?  i + kk - clone.length : i + kk;
    
    if (start > end) {
      let sum1 = clone.slice(start, clone.length);
      let sum2 = clone.slice(0, end);
      
      arr.push([...sum1,...sum2]);
    } else {
      let sum = clone.slice(start, end);
      
      arr.push(sum);
    }
  }
  
  
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    
    arr[i] = sum;
  }
  if (k < 0) {
    return arr.reverse();
  } 
  return arr;
};