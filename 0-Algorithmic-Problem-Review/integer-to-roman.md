## [**Integer to Roman**](https://leetcode.com/problems/integer-to-roman/)

주어진 숫자를 로마 숫자로 변환하는 문제이다.

숫자를 큰 값에서 작은 값으로 차례로 나누며 해당 로마 숫자를 문자열에 더해가는 방식으로 풀이한다.

## 주요 포인트

1. 로마 숫자 변환 규칙(큰 값에서 작은 값 순서대로 변환).
2. 각 숫자 범위에 맞는 로마 숫자 기호와 값의 대응을 배열로 정의.
3. 주어진 숫자가 해당 값 이상일 때 반복적으로 기호를 추가하고 숫자를 차감.

## 나의 코드

```jsx
function solution(number){
  const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];

  let result = "";

  for (const { value, symbol } of romanMap) {
    while (number >= value) {
      result += symbol;
      number -= value;
    }
  }

  return result;
}
```

## 나의 수도 코드

1. 각 로마 숫자의 기호(symbol)와 해당하는 값(value)을 객체로 구성한 배열을 정의.
2. 변환된 로마 숫자를 저장할 빈 문자열 변수를 `result`로 정의.
3. **반복문을 통한 변환**
    - `romanMap` 배열을 순회하면서 각 로마 숫자의 값과 기호에 접근.
    - 주어진 `number`가 현재 로마 숫자의 값보다 크거나 같으면, 해당 기호를 `result`에 추가하고, 그 값을 `number`에서 차감.
    - 이 과정을 `number`가 변환될 때까지 반복.
4. `result`에 저장된 로마 숫자 문자열을 반환.

## 알아둬야 할 것!

1. **로마 숫자의 변환 규칙**
    - 큰 값부터 작은 값 순서로 변환하며, 특정 조합(예: 900 = CM, 40 = XL 등)을 이해해야 함.
2. **숫자와 로마 숫자의 대응 관계**
    - 각 숫자 범위에 맞는 로마 숫자 기호(M, D, C, L, X, V, I 등)와 해당 값을 알고 있어야 함.
3. **반복적으로 숫자 처리하는 방식**
    - 주어진 숫자가 로마 숫자 값보다 클 때 그 기호를 결과 문자열에 추가하고 숫자를 차감하는 과정.
4. **예외 처리 가능성**
    - 잘못된 입력에 대한 처리(예: 0 이하의 숫자)를 고려할 필요성.

## 회고

이 문제는 로마 숫자의 변환 규칙을 정확히 이해하고 구현하는 것이 중요했다.

큰 값부터 작은 값으로 차례대로 대응하는 방식이 직관적이고 효율적이었으며, 특별한 예외 규칙을 쉽게 처리할 수 있었다.

개선점으로는 매우 큰 숫자 처리 시 성능 최적화와 예외 처리 추가가 있었다.

반복 구조를 활용하여 규칙을 충실히 구현하는 방법에 대해 다시 배울 수 있었던 문제였습니다.
