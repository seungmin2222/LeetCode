/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const operators = ['+', '-', '*','/'];
  const numbers = [];
  
  for (let i = 0; i < tokens.length; i++) {
    if (operators.includes(tokens[i])) {
      const secondNum = Number(numbers.pop());
      const firstNum = Number(numbers.pop());
      
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
      numbers.push(tokens[i]);
    }
  }
  
  return Number(numbers.pop());
};
