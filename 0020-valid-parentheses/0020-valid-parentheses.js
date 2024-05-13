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
    let small = clonedValue.lastIndexOf(arr[0]);
    let middle = clonedValue.lastIndexOf(arr[2]);
    let big = clonedValue.lastIndexOf(arr[4]);
    let lastIndexNum = Math.max(small,middle,big);
    let pair = arr[arr.indexOf(clonedValue[lastIndexNum])+1];
    if (clonedValue[lastIndexNum+1] === pair) {
        clonedValue.splice(lastIndexNum,2);
    } else {
      return false;
    }
  }
};