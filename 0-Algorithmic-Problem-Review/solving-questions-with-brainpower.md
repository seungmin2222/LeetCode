# [Solving Questions With Brainpower](https://leetcode.com/problems/solving-questions-with-brainpower/)

이 문제는 각 질문마다 점수를 얻거나 건너뛰는 선택을 하며, 다음 질문 몇 개를 건너뛰게 되는 제약 조건 속에서 얻을 수 있는 최대 점수를 구하는 문제이다.

## 주요 포인트

- 각 질문은 [points, brainpower]로 주어진다.
- 질문을 푸는 경우 points 점수를 얻지만, 이후 brainpower개 질문은 건너뛰어야 한다.
- 질문은 순차적으로만 진행 가능.
- 동적 프로그래밍(DP)으로 각 위치에서 얻을 수 있는 최대 점수를 계산해야 한다.

## 나의 코드

```jsx
var mostPoints = function (questions) {
    const n = questions.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        const [point, brainpower] = questions[i];
        const nextIndex = i + brainpower + 1;

        const solve = point + (nextIndex < n ? dp[nextIndex] : 0);
        const skip = dp[i + 1];

        dp[i] = Math.max(solve, skip);
    }

    return dp[0];
};
```

## 나의 수도 코드

1. dp 배열을 만들고, dp[n] = 0 으로 초기화
2. 뒤에서부터 i번째 질문을 순회
    1. 질문 i를 푼다면: point + dp[i + brainpower + 1]
    2. 질문 i를 안 푼다면: dp[i + 1]
    3. dp[i]에는 위 두 값 중 큰 값을 저장
3. dp[0]에 최종 결과가 저장되어 있음

## 시간 복잡도

질문 배열을 뒤에서부터 한 번 순회함.

최종 시간복잡도는 O(n)이다.

## 공간 복잡도

dp 배열을 따로 선언했기 때문에 O(n).

최종 공간복잡도는 O(n)이다.

## 알아둬야 할 것!

- 동적 프로그래밍 문제에서 “이걸 선택하면 다음엔 어디로 이동?”을 고려하면 좋은 방식이다.
- Top-down과 Bottom-up 모두 적용 가능.

## 회고

DP 배열을 뒤에서부터 채우는 방식이 익숙하지 않았지만, 연습할수록 익숙해지는 것 같다. 점수와 건너뛰는 범위를 잘 고려한 설계가 핵심이였다.
