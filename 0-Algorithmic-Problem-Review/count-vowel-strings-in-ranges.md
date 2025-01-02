## [Count Vowel Strings in Ranges](https://leetcode.com/problems/count-vowel-strings-in-ranges/description/)

이 문제는 주어진 문자열 배열 `words`와 2D 쿼리 배열 `queries`에서, 각 쿼리 `[li, ri]`는 `words` 배열의 인덱스 범위 `li`부터 `ri`까지의 문자열 중 첫 글자와 마지막 글자가 모두 모음('a', 'e', 'i', 'o', 'u')인 문자열의 개수를 구하는 문제이다.

## 주요 포인트

1. 이 문제는 단어의 첫 글자와 마지막 글자가 모음인지 판단하는 것이 중요하다.
2. 범위 내의 값을 효율적으로 계산하기 위해 사용하는 테크닉으로, 각 위치까지의 누적 값을 미리 계산해 저장해둔다.
3. 문자열 배열과 2D 쿼리를 처리해야 하므로, 배열을 탐색하거나 구간 내 요소를 확인하는 방법을 알아야 한다.

## 나의 코드

```jsx
var vowelStrings = function(words, queries) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    function isVowelString(word) {
        return vowels.has(word[0]) && vowels.has(word[word.length - 1]);
    }
    
    const prefixSum = Array(words.length + 1).fill(0);
    for (let i = 0; i < words.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + (isVowelString(words[i]) ? 1 : 0);
    }
    
    const result = [];
    for (const [li, ri] of queries) {
        result.push(prefixSum[ri + 1] - prefixSum[li]);
    }
    
    return result;
};
```

## 나의 수도 코드

1. 모음 정의 → `vowels = { 'a', 'e', 'i', 'o', 'u' }`.
2. `isVowelString(word)` ->단어의 첫 글자와 마지막 글자가 모음인지 확인.
3. Prefix Sum 배열 생성
    - `prefixSum = [0]`.
    - 단어가 모음 조건을 만족하면 `prefixSum[i+1] = prefixSum[i] + 1`그렇지 않으면 `prefixSum[i+1] = prefixSum[i]`.
4. 쿼리 `[li, ri]`에 대해 구간 합 계산 → `result[i] = prefixSum[ri+1] - prefixSum[li]`
5. 각 쿼리에 대해 결과를 배열에 저장.
6. `result` 배열 반환.

## 시간 복잡도

### 시간 복잡도

1. Prefix Sum 계산
    - 단어 배열 크기가 n일 때, O(n).
    - 각 단어에 대해 `isVowelString` 함수 실행 O(1).
2. 쿼리 처리
    - 쿼리 배열 크기가 q일 때, 각 쿼리의 답을 계산하는 데 O(1).
    - 총 O(q).
3. 총 시간 복잡도
    - O(n+q).

## 공간 복잡도

- Prefix Sum 배열
    - 크기 n+1, O(n).
- 기타 변수 및 상수 공간
    - 보조 함수 및 출력 배열 포함 O(q).
- 총 공간 복잡도
    - O(n+q).

## 알아둬야 할 것!

- 쿼리와 같이 구간 계산이 포함된 문제에서 누적 합을 활용하면 효율적인 풀이가 가능함을 기억한다.
- 특정 조건(예: 첫 글자와 마지막 글자가 모음인지 확인)에 따라 데이터를 처리하는 방법을 익힌다.
- 여러 쿼리가 주어질 때 O(1)로 결과를 계산할 수 있도록 미리 필요한 데이터를 계산/준비 해야한다.
- 모음과 같은 고정된 조건을 빠르게 확인하기 위해 `Set`을 사용하면 효율적인 검색이 가능함을 이해한다.

## 회고

이번 문제를 통해 Prefix Sum(누적 합)을 활용한 효율적인 범위 계산 방법을 다시 복습할 수 있었다.

특히, 조건에 따른 필터링과 이를 빠르게 확인하기 위해 Set 자료구조를 사용했다. 미리 계산하는 방식을 통해 시간 복잡도를 O(n+q)로 줄일 수 있었던 점이 핵심이었다.

문제 풀이 과정에서 효율성과 정확성을 동시에 고려해야 한다는 것을 다시 한번 느꼈고 앞으로도 쿼리 처리 문제를 접할 때 사전 계산 및 효율적인 자료구조 활용을 떠올릴 수 있을 것 같다.
