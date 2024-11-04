/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [];
  let num = 0;
  let sign = '+';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!isNaN(parseInt(char)) && char !== ' ') {
      num = num * 10 + parseInt(char);
    }

    if (['+', '-', '*', '/'].includes(char) || i === s.length - 1) {
     switch (sign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        case '/':
          stack.push(Math.trunc(stack.pop() / num));
          break;
      }
      sign = char;
      num = 0;
    }
  }

  num = 0;
  
  while (stack.length > 0) {
    num += stack.pop();
  }
  
  return num;
};