## [**Longest Palindromic Substring**](https://leetcode.com/problems/longest-palindromic-substring/)

이 문제는 주어진 문자열에서 가장 긴 팰린드롬 부분 문자열을 찾는 문제로, 팰린드롬은 앞에서 읽으나 뒤에서 읽으나 같은 문자열이다.

## 주요 포인트

1. **팰린드롬(Palindrome)**
    - 문자열이 거꾸로 읽어도 같은 경우를 의미한다. 예를 들어, "racecar"와 "level"은 팰린드롬이다.
2. **부분 문자열(Substring)**
    - 주어진 문자열에서 연속된 문자들로 이루어진 문자열로, 문자열의 일부분을 의미한다. 예를 들어, "abc"는 "a", "ab", "abc", "b", "bc", "c" 등 다양한 부분 문자열을 가질 수 있다.
3. **인덱스(Index)**
    - 문자열 내 각 문자의 위치를 나타내며, 0부터 시작하는 정수로 표현된다. 예를 들어, 문자열 "hello"에서 'h'는 인덱스 0, 'e'는 인덱스 1이다.
4. **확장 기법(Expansion Technique)**
    - 주어진 문자열의 특정 문자나 문자 쌍을 중심으로 양쪽으로 문자가 같은지 확인하며 팰린드롬을 확장하는 방법이다.

## 나의 코드

```jsx

var longestPalindrome = function(s) {
  let num = '';
  
  for (let i = 0; i < s.length; i++) {
    checkPalindrome(s, i, i);
    checkPalindrome(s, i, i + 1);
  }
  
  function checkPalindrome(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    if (num.length < right - left - 1) {
      num = str.slice(left + 1, right);
    }
  }
  
  return num;
};
```

## 나의 수도 코드

1. **초기화**
    - 가장 긴 팰린드롬을 저장할 빈 문자열 `num`을 초기화한다.
2. **문자열 순회**
    - 문자열 `s`의 각 문자 인덱스 `i`에 대해 반복한다.
3. **홀수 길이 팰린드롬 검사**
    - 인덱스 `i`를 중심으로 하는 홀수 길이의 팰린드롬을 검사한다.
4. **짝수 길이 팰린드롬 검사**
    - 인덱스 `i`와 `i+1`을 중심으로 하는 짝수 길이의 팰린드롬을 검사한다.
5. **결과 반환**
    - 모든 인덱스에 대해 검사가 완료되면, 가장 긴 팰린드롬 `num`을 반환한다.

## 회고

이 문제를 해결하면서 팰린드롬의 개념과 문자열 조작에 대한 이해가 깊어졌다.

중심 확장법을 통해 효율적으로 팰린드롬을 찾는 방법을 배웠고, 앞으로 더 복잡한 문자열 문제를 해결하는 데 이 개념을 활용할 수 있을 것이다.

추가적으로, 이러한 문제를 해결하기 위해 알고리즘의 시간 복잡도를 고려하는 것이 얼마나 중요한지 다시 한 번 깨달았다.
