## [**Unique Length-3 Palindromic Subsequences**](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/)

이 문제는 문자열 `s`에서 길이가 3인 **고유한 회문 부분수열**을 찾아 그 개수를 반환하는것이다.

## 주요 포인트

- 각 알파벳(`a-z`)에 대해 첫 등장 위치와 마지막 위치를 찾음.
- 두 위치 사이의 모든 문자를 **중복 없이** 확인하여 길이 3의 회문을 생성.
- 가능한 회문의 수를 누적하여 반환.

## 나의 코드

```jsx
var countPalindromicSubsequence = function(s) {
    let result = 0;
    let seen = new Set();

    for (let charCode = 97; charCode <= 122; charCode++) {
        const char = String.fromCharCode(charCode);
        const first = s.indexOf(char);
        const last = s.lastIndexOf(char);

        if (first !== -1 && last !== -1 && first < last) {
            let middleChars = new Set();
            for (let i = first + 1; i < last; i++) {
                middleChars.add(s[i]);
            }
            result += middleChars.size;
        }
    }

    return result;
};
```

## 나의 수도 코드

1. 결과 변수 `result`를 0으로 초기화.
2. 고유 회문을 추적하기 위해 `Set`을 사용하여 필요한 문자 집합을 추적.
3. 알파벳 `'a'`부터 `'z'`까지 반복.
4. **첫 번째와 마지막 위치 찾기**
    - `first = s.indexOf(char)`로 알파벳의 첫 번째 위치 찾기.
    - `last = s.lastIndexOf(char)`로 알파벳의 마지막 위치 찾기.
5. 만약 `first !== -1 && last !== -1 && first < last`이면, 유효한 위치가 존재하므로 아래 실행
    - `first`와 `last` 사이에 존재하는 문자들을 모두 확인.
    - 중복을 없애기 위해 `Set`을 사용하여 고유 중간 문자를 저장.
6. `result += 중간 문자 개수`를 통해 가능한 고유 회문의 수를 누적.
7. 최종적으로 누적된 `result` 값을 반환.

## 시간 복잡도

1. 고정된 26번 반복으로 각 알파벳에 대해 연산 수행.
2. 문자열 `s`를 탐색하여 첫 등장과 마지막 위치를 찾는 데 각각 **O(n)**.
3. `first`와 `last` 사이를 탐색하며 문자 중복 제거. 최악의 경우 **O(n)**.

**총 시간 복잡도**: **O(26 * n) = O(n)** (n은 문자열 길이)

## 공간 복잡도

1. 각 알파벳의 중간 문자를 저장하는 `Set` 사용. 최악의 경우 모든 문자가 고유하다고 가정하면 O(n).
2. 결과 변수와 기타 상수 공간 사용.

**총 공간 복잡도**: **O(n)**

## 알아둬야 할 것!

1. **부분수열(Subsequence)**
    - 문자열에서 일부 문자를 제거하여 상대적 순서를 유지한 새로운 문자열.
    - 예: `"abcde"`의 부분수열 -> `"ace"`, `"bd"` 등.
2. **회문(Palindrome)**
    - 앞뒤가 똑같이 읽히는 문자열.
    - 예: `"aba"`, `"racecar"`.
3. **Set 자료구조**
    - 고유한 값을 저장하며 중복을 자동 제거.
    - 중복된 값 없이 특정 요소의 존재를 빠르게 확인 가능.
4. **indexOf / lastIndexOf**
    - 문자열에서 특정 문자의 첫 등장 위치와 마지막 위치를 찾는 메서드.
    - **시간복잡도**: O(n).

## 회고

이 문제를 통해 문자열 탐색과 중복 제거 방법에 대해 깊이 이해할 수 있었다.

특히, 회문을 찾을 때 중간 문자를 효율적으로 관리하기 위해 **Set 자료구조**를 사용했다.

처음엔 문자열 전체를 이중 루프로 탐색하는 방법도 있다고 생각했으나, 시간 복잡도가 높아 비효율적이라고 생각했다.

대신 각 문자의 처음과 마지막 위치를 기준으로 중간 문자를 탐색하는 방법으로 최적화했다.

문제를 풀며 부분수열과 회문 관련 개념을 복습했고, 앞으로도 **효율적인 알고리즘 설계**의 중요성을 염두에 두어야겠다.
