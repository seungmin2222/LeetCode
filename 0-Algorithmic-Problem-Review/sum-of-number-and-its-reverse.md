## [**Sum of Number and Its Reverse**](https://leetcode.com/problems/sum-of-number-and-its-reverse/)

이 문제는 주어진 비음수 정수 `num`이 어떤 비음수 정수와 그 수의 반전된 값의 합으로 표현될 수 있는지 확인하는 문제이다.

## 주요 포인트

1. **숫자 반전**
    - 주어진 정수 `x`의 반전된 값을 어떻게 구할지 생각해야 한다.
    - 이를 위해 `toString`, `split`, `reverse`, `join` 같은 문자열 메서드를 활용할 수 있다.
2. **반복문 설정**
    - `x`를 0부터 `num`까지 탐색하며, 각 `x`에 대해 `x + reverse(x)`가 `num`과 같은지 확인한다.

## 나의 코드

```jsx
var sumOfNumberAndReverse = function(num) {
  for (let x = 0; x <= num; x++) {
    const reversedX = parseInt(x.toString().split('').reverse().join(''), 10);

    if (x + reversedX === num) {
      return true;
    }
  }

  return false;
};
```

## 나의 수도 코드

1. `x`를 0부터 `num`까지 반복힌다.
    - `x`를 문자열로 변환하고, 이를 반전시킨 후 다시 숫자로 변환하여 `reversedX`를 계산.
    - `x + reversedX`가 `num`과 같은지 확인.
        - 같다면 `true`를 반환.
2. 모든 반복이 끝나면 `false`를 반환.

## 시간 복잡도

함수가 0부터 `num`까지의 모든 숫자를 반복문에서 반복한다.

`parseInt(x.toString().split('').reverse().join(''), 10)` 부분의 시간 복잡도는 O(log x)이다.

`for` 반복문은 O(n)이고, `parseInt(x.toString().split('').reverse().join(''), 10)` 부분은 O(log x)이므로, 총 시간 복잡도는 O(n * log n)이다.

## 공간 복잡도

역순 숫자를 저장하고 계산하는데 있어 상수 크기의 추가 공간만 사용한다.

고로  `O(1)`이다.

## 알아둬야 할 것!

1. **숫자 반전**: 문자열 메서드 (`toString`, `split`, `reverse`, `join`)을 사용하여 숫자를 반전하는 방법.
2. **완전 탐색의 사용**: 가능한 모든 숫자를 탐색하는 완전 탐색 방식의 이해.

## 회고

이번 문제를 풀면서 숫자의 반전을 구현하고 완전 탐색을 통해 조건을 확인하는 방법을 복습했다.

처음에는 반전해야 할 값을 잘못 설정하는 오류가 있었지만, 올바른 변수(`x`)를 반전시켜 해결할 수 있었다.

이 과정에서 시간 복잡도와 공간 복잡도를 계산하며, 효율성을 챙기기를 더 노력해봐야 할 것 같다.
