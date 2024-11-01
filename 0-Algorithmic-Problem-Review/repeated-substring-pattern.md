## [**Repeated Substring Pattern**](https://leetcode.com/problems/repeated-substring-pattern/)

이 문제는 주어진 문제는 문자열 `s`가 동일한 부분 문자열로 반복되어 구성될 수 있는지를 판단하는 것이다.

즉, `s`를 여러 번 이어 붙여서 원래의 문자열이 만들어질 수 있는지를 확인하는 문제이다.

## 주요 포인트

1. **약수 체크**
    - 반복 가능한 부분 문자열의 길이는 문자열의 길이의 약수여야 하므로, 문자열 길이를 기준으로 약수만 검사한다.
2. **성능**
    - 반복적인 문자열 조작을 최소화하여 효율적으로 문제를 해결하는 방법을 모색한다.
3. **예외 처리**
    - 입력 문자열이 비어있거나 단일 문자일 경우를 고려해야 한다.

## 나의 코드

```jsx
var repeatedSubstringPattern = function(s) {
  const len = s.length;
  if (len < 2) return false;

  for (let i = 1; i <= len / 2; i++) {
    if (len % i === 0) {
      const substring = s.slice(0, i);
      const repeatCount = len / i;
      if (substring.repeat(repeatCount) === s) {
        return true;
      }
    }
  }
  
  return false;
};
```

## 나의 수도 코드

1. 입력 문자열 `s`의 길이를 `len`으로 저장.
2. 만약 `len`이 1보다 작다면 `false`를 반환.
3. **약수 체크 및 반복 문자열 검사**
    - `i`를 1부터 `len / 2`까지 반복.
        - 만약 `len`이 `i`로 나누어 떨어진다면
            - 부분 문자열 `substring`을 `s`의 처음 `i` 문자로 설정.
            - `repeatCount`를 `len / i`로 계산.
4. `substring`을 `repeatCount` 만큼 반복하여 새 문자열을 만듬.
5. 이 새 문자열이 원래 문자열 `s`와 같은지 비교.
    - 같다면 `true`를 반환.
6. **모든 경우 검사 후 `false` 반환**
    - 반복이 끝난 후 조건을 만족하는 경우가 없으면 `false`를 반환.

## 회고

이번 문제는 문자열이 동일한 부분 문자열로 반복되는지를 판단하는 것이었다.

길이 체크와 약수 개념을 활용해 반복 가능한 길이를 제한하고, 슬라이스 및 반복 메서드를 통해 효율적으로 부분 문자열을 생성하여 비교했다.

이 과정에서 문자열 처리와 알고리즘 최적화의 중요성을 다시 깨달았고, 약수 활용법은 앞으로의 문제 해결에도 유용할 것이다.

향후에는 다양한 문자열 문제를 통해 실력을 더욱 향상시킬 계획이다.
