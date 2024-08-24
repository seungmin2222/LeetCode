/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const operators = ['+', '-', '*','/'];
  const numbers = [];
  
  for (let i = 0; i < tokens.length; i++) {
    if (operators.includes(tokens[i])) {
      const secondNum = numbers.pop();
      const firstNum = numbers.pop();
      
      if (tokens[i] === '+') {
        numbers.push(firstNum + secondNum); 
      } else if (tokens[i] === '-'){
        numbers.push(firstNum - secondNum); 
      } else if (tokens[i] === '*'){
        numbers.push(firstNum * secondNum); 
      } else {
        numbers.push(parseInt(firstNum / secondNum));
      }
    } else {
      numbers.push(Number(tokens[i]));
    }
  }
  
  return Number(numbers.pop());
};
