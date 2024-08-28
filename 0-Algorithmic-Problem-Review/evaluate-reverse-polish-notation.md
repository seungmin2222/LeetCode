# [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

이 문제는 "Reverse Polish Notation(RPN)" 또는 "후위 표기법"으로 표현된 수식을 평가하는 알고리즘을 구현하는 것이다.

### 주요 포인트

1. 입력: 문자열 배열 `tokens`가 주어집니다. 이 배열은 RPN으로 표현된 수식을 나타낸다.
2. RPN 특징:
    - 연산자가 피연산자 뒤에 온다.
    - 괄호가 필요 없다.
3. 유효한 연산자: '+', '-', '*', '/'
4. 피연산자: 정수 또는 다른 표현식일 수 있다.
5. 나눗셈 특징:
    - 항상 0을 향해 내림(truncate)한다.
    - 0으로 나누는 경우는 없다.
6. 결과: 수식의 최종 계산 결과를 정수로 반환해야 한다.
7. 제약 조건:
    - 입력은 항상 유효한 RPN 수식이다.
    - 모든 중간 계산과 최종 결과는 32비트 정수 범위 내에 있다.

### 나의 풀이

```jsx
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
        numbers.push(Math.trunc(firstNum / secondNum));
      }
    } else {
      numbers.push(Number(tokens[i]));
    }
  }
  
  return numbers[0];
};
```

1. `operators` 배열에 사용할 연산자들을 넣어둔다.
2. `numbers`라는 숫자만 담을 빈 배열을 만든다.
3. `tokens` 배열을 처음부터 끝까지 돌면서
    - 현재 토큰이 연산자인지 확인
    - 연산자라면
        - `numbers` 배열에서 숫자 두 개를 꺼낸다. (나중에 넣은 게 `secondNum`, 먼저 넣은 게 `firstNum`)
        - 연산자에 따라 계산을 수행한다.
        - 나눗셈의 경우 `Math.trunc()`를 써서 0쪽으로 내린다.
        - 계산 결과를 다시 `numbers` 배열에 넣어둔다.
    - 연산자가 아니라면
        - 문자열을 숫자로 바꿔서 `numbers` 배열에 넣는다.
4. 모든 계산이 끝나면 스택에 남은 하나의 숫자가 최종 결과, 이를 반환한다.

### 다른 사람의 풀이

```jsx
var evalRPN = function(tokens) {
    let stack = [];

    for (let c of tokens) {
        if (c === "+") {
            stack.push(stack.pop() + stack.pop());
        } else if (c === "-") {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(first - second);
        } else if (c === "*") {
            stack.push(stack.pop() * stack.pop());
        } else if (c === "/") {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(parseInt(first / second));
        } else {
            stack.push(parseInt(c));
        }
    }

    return stack[0];    
};
```

나의 코드와 다른사람의 코드 모두 RPN을 계산하는 로직은 비슷하다.

하지만 다른사람의 코드가 조금 더 간결하고, 각 연산자에 대한 처리가 명확하게 구분되어 있다.

### 회고

1. const operators = ['+', '-', '*','/']; 를 따로 선언하지 않아도 좋았을 것 같다. (for문을 돌며 한번에 처리가 가능)
2. `Math.trunc()`와 `parseInt()`의 차이점
음수가 나온다는 가정 하에 `Math.trunc()`가 더 정확한 방법일 수 있을 것 같다.
