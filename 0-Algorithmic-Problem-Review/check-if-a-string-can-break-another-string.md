## [Check If a String Can Break Another String](https://leetcode.com/problems/check-if-a-string-can-break-another-string/)

이 문제는 두 문자열 `s1`, `s1`가 주어졌을 때, 한 문자열의 모든 문자가 다른 문자열의 대응하는 문자보다 크거나 같은 상태로 정렬될 수 있는지(또는 그 반대) 확인하는 문제이다.

## 주요 포인트

1. **문자열 정렬**
    - 두 문자열 `s1`과 `s2`를 사전순으로 정렬하여 비교를 쉽게 한다.
    - 정렬을 통해 각 위치의 문자를 직접 비교할 수 있다.
2. **`break` 조건 확인**
    - 정렬된 문자열 `s1`이 `s2`의 모든 문자보다 크거나 같아야 하거나, `s2`가 `s1`의 모든 문자보다 크거나 같아야 한다.
    - 이를 만족할 경우 "`break`" 조건이 성립된다.

## 나의 코드

```jsx
var checkIfCanBreak = function(s1, s2) {
  const s1Sorted = s1.split('').sort();
  const s2Sorted = s2.split('').sort();

  let s1BreaksS2 = true;
  let s2BreaksS1 = true;

  for (let i = 0; i < s1Sorted.length; i++) {
      if (s1Sorted[i] < s2Sorted[i]) {
          s1BreaksS2 = false;
      }
      if (s1Sorted[i] > s2Sorted[i]) {
          s2BreaksS1 = false;
      }
  }

  return s1BreaksS2 || s2BreaksS1;
};
```

## 나의 수도 코드

1. 두 문자열 s1과 s2를 각각 알파벳 순으로 정렬된 s1Sorted와 s2Sorted 생성.
2. `s1BreaksS2` 변수를 `true`로 초기화하여 s1이 s2를 "break"할 가능성을 예상.
3. `s2BreaksS1` 변수를 `true`로 초기화하여 s2가 s1을 "break"할 가능성을 예상.
4. 각 위치 i에 대해 `s1Sorted[i]`와 `s2Sorted[i]`를 비교.
    - 만약 `s1Sorted[i] < s2Sorted[i]`이면, `s1BreaksS2`를 `false`로 설정.
        - s1이 s2를 break할 수 없음을 표시.
    - 만약 `s1Sorted[i] > s2Sorted[i]`이면, `s2BreaksS1`를 `false`로 설정.
        - s2가 s1을 break할 수 없음을 표시.
5. `s1BreaksS2`와 `s2BreaksS1` 중 하나라도 `true`이면 `true`를 반환.

## 시간 복잡도

- `s1`과 `s2`의 길이가 `n`과 `m`이라면
    1. `split('')`: O(n) + O(m)
    2. `sort()`: O(n log n) + O(m log m)

따라서 시간 복잡도는 시간 복잡도는 `O(n log n + m log m)`이다.

## 공간 복잡도

1. 두 문자열을 배열로 변환할 때, 각 문자열에 대해 O(n)과 O(m) 만큼의 공간을 차지한다.
2. 배열 `s1Sorted`와 `s2Sorted`는 각각 `O(n)`과 `O(m)`의 공간을 사용한다.

따라서 공간 복잡도는 O(n+m) 이다.

## 알아둬야 할 것!

1. `if (s1Sorted[i] < s2Sorted[i])`와 같은 비교 연산자를 사용하여 두 값을 비교하는 방식이다.
2. 두 개의 정렬된 배열을 비교하여 각 문자가 다른 배열을 "깨뜨릴 수 있는지" 확인하는 방식이다.
3. **시간 복잡도**
    - 이 문제의 주요 시간 복잡도는 `O(n log n + m log m)`이다.
4. **공간 복잡도**
    - 두 문자열을 배열로 변환하기 위해 `O(n + m)`의 공간이 필요하다.

## 회고

이번 문제를 풀면서 문자열을 배열로 변환하고 정렬한 후, 각 문자를 비교하는 방식으로 문제를 해결했다.

 배열을 직접 비교하는 방식은 직관적이지만, 최적화 여지가 있는 문제임을 느꼈다.

문자열을 정렬하는 대신 더 효율적인 방식으로 해결할 수 있는 방법을 고민해보는 것도 중요하다는 생각이 들었다. 

전체적으로 문제의 핵심인 "문자열이 다른 문자열을 깨뜨릴 수 있는지"를 효율적으로 판단하는 방법을 익힐 수 있었다.
