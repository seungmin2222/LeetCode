## [**Maximum Score After Splitting a String**](https://leetcode.com/classic/problems/maximum-score-after-splitting-a-string/description/)

이 문제는 문자열 `s`를 비어 있지 않은 두 부분으로 분할하고, 최대 점수를 계산하는 것이다.

## 주요 포인트

1. **문자열 분할의 조건**
    - 문자열을 **비어 있지 않은 두 부분**으로 나누는 분할 지점을 탐색해야 한다.
    - 분할 후 왼쪽과 오른쪽 부분 문자열의 특징을 이해해야 한다.
2. **점수 계산 방법**
    - 왼쪽 문자열에서 '0'의 개수를 세고, 오른쪽 문자열에서 '1'의 개수를 센다.
    - 이를 통해 각 분할 지점에서의 점수를 계산할 수 있다.
3. **최대 점수 찾기**
    - 분할 가능한 모든 지점을 탐색하며 점수를 계산하고, **최대값을 갱신**하는 방식으로 문제를 해결한다.

## 나의 코드

```jsx
var maxScore = function(s) {
    let maxScore = 0;

    for (let i = 1; i < s.length; i++) {
        const left = s.slice(0, i);
        const right = s.slice(i);

        const leftZeros = left.split('0').length - 1;
        const rightOnes = right.split('1').length - 1;

        const currentScore = leftZeros + rightOnes;
        maxScore = Math.max(maxScore, currentScore);
    }

    return maxScore;
};
```

## 나의 수도 코드

1. 함수 maxScore(s)를 정의.
2. 변수 maxScore를 0으로 초기화.
3. 문자열 s를 순회하기 위해 반복문을 1부터 s의 길이 - 1까지 실행.
4. 왼쪽 부분 문자열에서 '0'의 개수를 세어 leftZeros에 저장.
5. 오른쪽 부분 문자열에서 '1'의 개수를 세어 rightOnes에 저장.
6. 현재 점수를 leftZeros + rightOnes로 계산.
7. maxScore를 현재 점수와 비교하여 더 큰 값으로 업데이트.
8. 반복문 종료 후 maxScore를 반환.

## 시간 복잡도

1. **외부 반복**
    - `i`를 기준으로 문자열을 순회. 총 **n-1번** 반복 → **O(n)**.
2. **0과 1 카운트**
    - `split` 사용 시 각 반복마다 부분 문자열의 길이만큼 실행됨 → **O(n)**.

**전체 시간 복잡도는 O(n) × O(n) = O(n²)**.

## 공간 복잡도

1. **부분 문자열**
    - `left`와 `right` 두 개의 부분 문자열 → **O(n)**.
2. **상수 공간**
    - 변수들 (`maxScore`, `leftZeros`, `rightOnes`) → **O(1)**.

**전체 공간 복잡도는 O(n)**.

## 알아둬야 할 것!

1. **부분 문자열 처리**
    - 문자열을 특정 지점에서 분할하거나 슬라이싱하는 방법 (`slice`, `split`)을 이해해야 한다.
    - 각 부분에서 특정 문자의 개수를 효율적으로 계산하는 방법을 배운다.
2. **탐욕 알고리즘의 활용**
    - 가능한 모든 분할 지점에서 탐색하며 최적의 값을 찾는 탐욕 알고리즘의 기본 원리를 이해한다.
3. **시간 복잡도 분석**
    - 반복문과 문자열 조작이 중첩될 경우 시간 복잡도를 계산하고, 성능 최적화의 중요성을 인지해야 한다.

## 회고

이번 문제를 통해 문자열을 분할하고 각 부분의 특징을 활용해 최대 값을 찾는 과정을 연습할 수 있었다. 시간 복잡도 O(n²)가 나와서 최적화를 고민하며 효율성을 높이는 방법을 더 배울 필요성을 느꼈다.

좀 더 시간복잡도 효율성에 대해 고민해봐야겠다.
