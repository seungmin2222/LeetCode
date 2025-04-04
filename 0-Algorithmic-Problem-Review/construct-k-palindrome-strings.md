## [**Construct K Palindrome Strings**](https://leetcode.com/problems/construct-k-palindrome-strings/)

이 문제는 주어진 문자열 `s`의 모든 문자를 사용하여 `k`개의 회문 문자열을 구성할 수 있는지 여부를 확인하는 문제이다. 

## 주요 포인트

- **제약 조건 확인**
    - 만약 `k`가 문자열 길이보다 크면, 문자 부족으로 `k`개의 회문을 만들 수 없으므로 `false` 반환.
- **문자 등장 횟수 계산**
    - 각 문자의 등장 횟수를 세기 위해 객체(`charCount`)를 사용.
- **홀수 개 문자 확인**
    - 회문은 최대 한 개의 홀수 개 문자를 포함할 수 있다. 따라서 `k`개 회문을 만들기 위해 홀수 개 문자의 수는 `k` 이하

## 나의 코드

```jsx
var canConstruct = function(s, k) {
  if (k > s.length) return false;
  let charCount = {};

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let oddCount = 0;
  for (let count of Object.values(charCount)) {
    if (count % 2 !== 0) oddCount++;
  }

  return oddCount <= k;
};
```

## 나의 수도 코드

1. 문자열 길이와 k를 비교해서, 문자 수 부족으로 불가능한 경우를 초기에 제거.
2. 각 문자의 등장 횟수를 세어, 문자열의 문자 빈도 정보를 얻음.
3. 회문 구성에 필요한 **홀수 개 문자**의 수를 계산.
4. 홀수 개 문자의 수가 k보다 많으면 회문 구성이 불가능하므로 `false`를 반환.
5. 위 조건을 모두 만족하면 `true` 반환.

## 시간 복잡도

- 문자열 길이 `n`에 대해 각 문자를 순회하며 등장 횟수를 계산.
- 문자 종류 수(최대 `c=26`(소문자 알파벳))에 대해 등장 횟수를 확인. 이 부분은 상수 시간으로 간주 가능.

**총 시간 복잡도는** `O(n)` (문자열 길이에 비례)

## 공간 복잡도

- **해시맵(charCount)** : 최악의 경우, 최대 26개의 문자 종류 저장.
- **공간 복잡도** : `O(1)` (문자 종류에 비례, 일반적으로 상수)

**총 공간 복잡도는**  `O(1)` (상수로 간주 가능)

## 알아둬야 할 것!

- **회문(Palindrome)** : 앞뒤가 같은 문자열이며, 홀수 개 문자는 최대 하나만 포함될 수 있음.
- **문자 등장 횟수 계산** : 문자열에서 각 문자의 빈도를 확인해 홀수 개 문자의 수를 파악하는 방법.
- **k와 문자열 길이 비교** : 문자열 길이가 k보다 짧으면 회문 구성이 불가능하다는 조건.
- **홀수 개 문자의 역할** : 홀수 개 문자가 많아질수록 회문을 만들기 어렵다는 원리를 이해.

## 회고

이번 문제를 통해 문자열 문제에서 **문자 등장 횟수 계산**과 **빈도 분석**의 중요성을 배웠다.

특히, 회문의 특성과 홀수 개 문자의 조건을 고려해 효율적으로 풀이할 수 있었다.

앞으로도 문자열 조작과 빈도 기반 문제를 더 연습해야겠다는 생각이 들었다.
