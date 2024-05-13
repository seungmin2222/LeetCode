var isValid = function(s) {
  if ((s.length)%2 === 1) {
      return false;
  }
  
  const arr = ['(', ')', '{', '}', '[', ']'];
  
  let clonedValue = [...s];
  
  while (true) {
    if (clonedValue.length === 0) {
      return true;  
    }
    const small = clonedValue.lastIndexOf(arr[0]);
    const middle = clonedValue.lastIndexOf(arr[2]);
    const big = clonedValue.lastIndexOf(arr[4]);
    const lastIndexNum = Math.max(small,middle,big);
    const pair = arr[arr.indexOf(clonedValue[lastIndexNum])+1];
    if (clonedValue[lastIndexNum+1] === pair) {
        clonedValue.splice(lastIndexNum,2);
    } else {
      return false;
    }
  }
};