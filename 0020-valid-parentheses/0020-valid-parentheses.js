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
    const pair = arr[arr.indexOf(clonedValue[Math.max(small,middle,big)])+1];
    if (clonedValue[Math.max(small,middle,big)+1] === pair) {
        clonedValue.splice(Math.max(small,middle,big),2);
    } else {
      return false;
    }
  }
};