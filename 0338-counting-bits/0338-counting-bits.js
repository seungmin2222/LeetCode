/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const arr = [];
  
  for (let i = 0; i <= n; i++) {
    let count = 0;
    let num = i.toString(2).split('');
    
    for (let j = 0; j < num.length; j++) {
      if (num[j] === '1') {
          count++;
      }
    }    
    
    arr.push(count);
  }
  
  return arr
};