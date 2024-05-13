var isValid = function(s) {
  
  if ((s.length)%2 === 1) {
      return false;
  }
  
  const arr = ['(', ')', '{', '}', '[', ']'];
  let clonedValue = [...s];
 
  
 
  // console.log('clonedValue :',clonedValue,'pair :',pair, 'lastIndexNum :',lastIndexNum)
  while (true) {
    if (clonedValue.length === 0) {
      return true;  
    }
    let small = clonedValue.lastIndexOf(arr[0]);
    let middle = clonedValue.lastIndexOf(arr[2]);
    let big = clonedValue.lastIndexOf(arr[4]);
    let lastIndexNum = Math.max(small,middle,big);
    let pair = arr[arr.indexOf(clonedValue[lastIndexNum])+1];
    console.log(pair);
    
    if (clonedValue[lastIndexNum+1] === pair) {
        clonedValue.splice(lastIndexNum,2);
    } else {
      return false
    }
    
  }
  function analyzeArr (cloneValue, pair) {
    
  }
  
};