# [Soup Servings](https://leetcode.com/problems/soup-servings/)

## 주요 포인트

- 확률 DP 문제
    - 상태 (A,B)에서 4가지 동작이 확률 0.25로 발생.
- 기저 조건
    - A와 B 모두 0 이하 → **0.5**
    - A만 0 이하 → **1.0**
    - B만 0 이하 → **0.0**
- 스케일링
    - 25mL 단위로 변환하여 (ceil(n/25), ceil(n/25))부터 시작.
- 큰 n 최적화
    - n >= 5000이면 결과는 1에 매우 가까우므로 바로 1.0 반환.
- 메모이제이션으로 중복 연산 방지.

## 나의 코드

```tsx
var soupServings = function (n) {
  if (n >= 5000) return 1.0;

  const m = Math.ceil(n / 25);
  const memo = Array.from({ length: m + 1 }, () => Array(m + 1).fill(undefined));

  function dfs(i, j) {
    if (i <= 0 && j <= 0) return 0.5;
    if (i <= 0) return 1.0;
    if (j <= 0) return 0.0;
    if (memo[i][j] !== undefined) return memo[i][j];

    const res =
      0.25 *
      (dfs(i - 4, j) +
        dfs(i - 3, j - 1) +
        dfs(i - 2, j - 2) +
        dfs(i - 1, j - 3));

    memo[i][j] = res;
    
    return res;
  }

  return dfs(m, m);
};
```

## 나의 수도 코드

1. n >= 5000이면 1.0 반환
2. m = ceil(n/25) 계산, memo[m+1][m+1] 초기화
3. dfs(i, j) 정의:
    - i<=0 && j<=0 → 0.5
    - i<=0 → 1.0
    - j<=0 → 0.0
    - 메모 값 있으면 반환
    - 없으면 아래를 평균
        - dfs(i-4, j)
        - dfs(i-3, j-1)
        - dfs(i-2, j-2)
        - dfs(i-1, j-3)
    - 결과를 메모 후 반환
4. dfs(m, m) 반환

## 시간 복잡도

- O(m²)
    - 각 상태를 한 번만 계산, n=5000이면 m=200 → 약 40,000 연산.

## 공간 복잡도

- O(m²)
    - 메모 테이블 저장.

## 알아둬야 할 것!

- 25mL 단위로 변환하는 이유 : 상태 공간을 줄여서 연산 속도 향상.
- 큰 n에서 확률이 1에 수렴 → 커팅 임계값 설정으로 최적화.
- 기저 조건 설계가 확률 DP에서 가장 중요한 부분.

## 회고

전형적인 확률 DP 문제로, 작은 n에서는 재귀+메모이제이션으로 풀고, 큰 n에서는 수렴 특성을 활용해 속도를 개선해야 한다.

스케일링 트릭 덕분에 시간/공간 모두 효율적으로 관리 가능했다.
