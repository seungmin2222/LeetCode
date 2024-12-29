## [**Best Sightseeing Pair**](https://leetcode.com/classic/problems/best-sightseeing-pair/description/)

이 문제는 두 관광지의 최대 점수를 반환하는 문제이다.

두 관광지 `i`와 `j` (i < j)의 점수는 `values[i] + values[j] + i - j`로 계산된다. 

## 주요 포인트

1. 점수 공식: `(values[i] + i) + (values[j] - j)`로 변환 가능.
2. `values[i] + i`를 최대화하는 값을 `maxI`로 관리.
3. 각 `j`에서 `maxI + values[j] - j`로 최대 점수 갱신.
4. `maxI`는 매번 `values[j] + j`로 업데이트.

## 나의 코드

```jsx
var maxScoreSightseeingPair = function(values) {
    let maxScore = 0;
    let maxI = values[0];

    for (let j = 1; j < values.length; j++) {
        maxScore = Math.max(maxScore, maxI + values[j] - j);

        maxI = Math.max(maxI, values[j] + j);
    }

    return maxScore;
};
```

## 나의 수도 코드

1. `maxScore`를 0으로 초기화.
2. `maxI`를 `values[0]`으로 초기화 (`values[i] + i`를 저장할 변수).
3. 배열의 1번 인덱스부터 끝까지 반복
    - 현재 점수 `maxI + values[j] - j`로 계산.
    - `maxScore`를 현재 점수와 비교해 더 큰 값으로 갱신.
    - `maxI`를 `values[j] + j`와 비교해 더 큰 값으로 갱신.
4. 최종적으로 `maxScore` 반환.

## 시간 복잡도

배열을 한 번 순회하며 점수와 최대값을 계산한다.

최종 시간 복잡도는 O(n)이다.

## 공간 복잡도

추가적인 저장 공간을 사용하지 않는다.

최종 공간복잡도는 O(1)이다.

## 회고

이번 문제는 두 관광지의 점수를 최대화하는 문제였다. 점수 계산 공식을 분리해 한 번의 반복으로 해결할 수 있었다. 시간도 공간도 효율적인 풀이를 만든 점이 좋았다. 처음엔 공식을 바로 떠올리지 못한 점이 아쉬웠지만, 문제를 더 간단히 바라보는 연습이 필요하다고 느꼈다.
