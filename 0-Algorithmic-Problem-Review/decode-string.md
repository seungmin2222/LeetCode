## [Decode String](https://leetcode.com/problems/decode-string/)

이 문제는 `"3[a2[c]]"`와 같은 형식의 문자열이 주어졌을 때, 이를 압축 해제하는 코드를 작성하는 것이다.

## 주요 포인트

1. **재귀적 구조 처리**

- 중첩된 괄호는 안쪽부터 해제해야 하기 때문에, 재귀적으로 가장 안쪽에 있는 괄호부터 처리하는 방식이 유용함.

2. **여는 괄호와 닫는 괄호 찾기**

- 문자열 내에서 여는 괄호 `[`와 닫는 괄호 `]`의 위치를 정확히 찾아야 함.
- 각 여는 괄호에 대응하는 닫는 괄호가 어디에 위치하는지를 정확히 파악하는 것이 중요함.

3. **반복 횟수 처리**

- 여는 괄호 앞에 오는 숫자는 괄호 안의 문자열을 몇 번 반복할 것인지 결정하는데 사용됨.

4. **문자열 조작**

- 괄호 내에 있는 문자열을 추출하고, 이를 반복해서 새로운 문자열을 만들어내는 과정이 필요함.
- 각 단계에서 문자열의 특정 부분을 대체해야 하므로, 문자열 조작을 효율적으로 처리해야 함.

## 나의 코드

```jsx
var decodeString = function(s) {
  const arr = s.split('');
  
  while (s.includes('[')) {
    const a = s.lastIndexOf('[');
    const b = s.indexOf(']', a); 

    let repeatCount = '';
    let k = a - 1;

    while (!isNaN(s[k]) && k >= 0) {
      repeatCount = s[k] + repeatCount;
      k--;
    }
    repeatCount = parseInt(repeatCount);

    const repeatedSegment = s.slice(a + 1, b).repeat(repeatCount);

    s = s.slice(0, k + 1) + repeatedSegment + s.slice(b + 1);
  }

  return s;
};
```

## 나의 수도 코드

1. 문자열을 배열로 변환하여 처리할 준비를 함.
2. 문자열에서 가장 안쪽에 위치한 **여는 괄호 '['** 의 위치를 찾음.
3. **'['** 이후에 있는 **닫는 괄호 ']'** 를 찾음.
4. 여는 괄호 바로 앞에 있는 숫자를 찾아서 반복 횟수로 저장.
5. 여는 괄호 앞에 있는 숫자를 확인하기 위해, 괄호 앞의 문자를 탐색하며 숫자를 추출.
6. 여는 괄호와 닫는 괄호 사이에 있는 문자열을 추출.
7. 추출한 문자열을 숫자만큼 반복.
8. 반복된 문자열을 원래 문자열에서 괄호와 함께 있던 부분을 대체하여 새로운 문자열을 만듦.
9. 괄호가 더 이상 없을 때까지 이 과정을 반복.
10. **최종 문자열 반환.**

## 다른 사람의 풀이

```jsx
var decodeString = function(s) {
    let stack = [];
    let currentString = '';
    let currentNum = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!isNaN(char)) {
            currentNum = currentNum * 10 + parseInt(char, 10);
        } else if (char === '[') {
            stack.push(currentString);
            stack.push(currentNum);
            currentString = '';
            currentNum = 0;
        } else if (char === ']') {
            let num = stack.pop();
            let prevString = stack.pop();
            currentString = prevString + currentString.repeat(num);
        } else {
            currentString += char;
        }
    }

    return currentString;
};
```

## 다른 사람의 수도 코드

1. 문자열 `s`를 처음부터 끝까지 하나씩 순회 (`for` 루프 사용).
2. **숫자 처리**
    - 현재 문자가 숫자인 경우
        - 현재 문자가 숫자인지 확인.
        - 여러 자리 숫자일 수 있으므로, `currentNum`을 업데이트 (`currentNum = currentNum * 10 + 현재 숫자`).
3. 현재 문자가 여는 괄호 `[`인 경우
    - 현재의 `currentString`과 `currentNum`을 스택에 저장.
    - `currentString`을 빈 문자열로 초기화 (새로운 문자를 담기 위해).
    - `currentNum`을 0으로 초기화.
4. 현재 문자가 알파벳 문자일 경우
    - `currentString`에 해당 문자를 추가.
5. 현재 문자가 닫는 괄호 `]`인 경우
    - 스택에서 가장 최근에 저장된 `currentNum`을 꺼내옴 (반복할 횟수).
    - 스택에서 가장 최근에 저장된 `prevString`을 꺼내옴 (이전 상태의 문자열).
    - `currentString`을 `currentNum`만큼 반복하여 `currentString = prevString + (currentString * currentNum)`으로 업데이트.
6. 루프가 끝난 후, 최종적으로 완성된 `currentString`을 반환.

## 나의 코드와 차이

| 비교 항목 | 나의 코드 | 스택 기반 코드 |
| --- | --- | --- |
| **문자열 처리** | 배열로 변환 후 처리, `while`과 `slice`로 반복 | 직접 문자열을 순회하며 문자마다 처리 |
| **중첩 패턴 처리** | `while`로 반복해서 중첩 괄호를 풀어야 함 | 스택을 사용해 즉시 중첩 구조를 처리 |
| **숫자 처리** | 여러 자릿수 숫자에 취약할 수 있음 | 여러 자릿수 숫자 처리 가능 (`*10 + 숫자`) |
| **복잡성** | 중첩된 구조가 많을 경우 성능 저하 | 시간 복잡도 `O(n)`으로 더 효율적 |
| **유연성** | 중첩된 패턴이 복잡해질수록 비효율적 | 복잡한 중첩 구조도 스택으로 쉽게 처리 가능 |

## 알아둬야 할 것!

1. **스택의 유용성**

스택은 중첩된 데이터를 처리할 때 강력한 도구라는 점을 배웠다.

특히 괄호가 중첩된 문자열 패턴에서, 상태를 기록하고 복원하는 방식으로 문제를 풀 수 있는 것을 알게 되었다.

스택을 사용하면 복잡한 문제도 차분하게 단계별로 처리할 수 있다.

1. **재귀적 사고**

문제를 해결할 때, **중첩된 패턴**을 해결하는 방법으로 **재귀적 사고**가 중요하다는 점을 느꼈다.

중첩된 구조를 먼저 풀고, 그 후에 전체를 처리하는 방식은 여러 문제에서 유용하게 사용할 수 있다.

## 회고

이 문제는 **문자열 조작과 스택 자료구조**의 사용을 통해 성능 최적화 및 문제 해결에 큰 도움이 되었다.

또한, 중첩된 패턴을 처리할 때 어떻게 접근해야 할지에 대해 명확한 이해를 할 수 있는 좋은 학습 기회였다.
