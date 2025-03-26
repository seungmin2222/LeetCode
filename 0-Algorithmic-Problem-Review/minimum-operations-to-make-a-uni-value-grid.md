## [Minimum Operations to Make a Uni-Value Grid](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/description/?envType=daily-question&envId=2025-03-26)

주어진 2D 정수 그리드에서 각 요소에 대해 `x`를 더하거나 빼는 연산을 통해 모든 요소가 같은 값이 되도록 만드는 최소 연산 횟수를 구하는 문제이다.

## 주요 포인트

- 2D 배열을 1D 배열로 변환하여 처리할 수 있도록 한다.
- 각 값이 `x`의 배수 차이를 가질 수 있는지 확인한다.
- 중앙값은 값들의 차이를 최소화하기 때문에 모든 값을 중앙값으로 맞추면 최소 연산으로 해결될 가능성이 높다.
- 각 값이 중앙값으로 변환될 때 필요한 연산 횟수를 더한다.

## 나의 코드

```tsx
var minOperations = function (grid, x) {
    const m = grid.length;
    const n = grid[0].length;
    let allValues = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            allValues.push(grid[i][j]);
        }
    }

    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);

    for (let value of allValues) {
        if ((value - minValue) % x !== 0) {
            return -1;
        }
    }

    allValues.sort((a, b) => a - b);
    const median = allValues[Math.floor(allValues.length / 2)];

    let operations = 0;
    for (let value of allValues) {
        operations += Math.abs(value - median) / x;
    }

    return operations;
};
```

## 나의 수도 코드

1. 그리드의 모든 요소들에 대해 가능한 값들을 찾는다.
2. 그리드의 모든 값들을 최빈값으로 변환하는 데 드는 최소 연산 횟수를 계산한다.
3. 각 값이 `x`의 배수 차이를 만족해야 하므로, 차이가 `x`의 배수가 아니라면 `-1`을 반환한다

## 시간 복잡도

- 그리드의 값을 배열로 수집: `O(m * n)`
- x의 배수 차이 확인: `O(m * n)`
- 배열 정렬: `O(m * n * log(m * n))`
- 중간값으로 변환: `O(m * n)`

최종적으로 전체 시간 복잡도는 `O(m * n * log(m * n))`이다.

## 공간 복잡도

- 배열 수집 부분
    - `allValues` 배열을 수집하기 위해 `O(m * n)` 공간이 필요.
- 정렬을 위한 추가 공간
    - 정렬은 `O(m * n)` 공간을 추가로 사용.

따라서 전체 공간 복잡도는 `O(m * n)`이다.

## 알아둬야 할 것!

- 중앙값(Median)이 최소 이동 연산을 보장한다는 성질 – 거리의 합이 최소가 됨.
- 모든 값이 x의 배수 차이로 조정 가능해야 함 – 아니라면 변환 불가능.
- 2D 배열을 1D 배열로 flatten해서 다루는 전처리 방식.
- 시간 복잡도 분석에서 정렬이 핵심 단계라는 점 – `O(m * n * log(m * n))`.

## 회고

이번 문제를 통해 연산의 기준점을 중앙값으로 설정하면 효율적인 연산이 가능하다는 걸 알게 되었다.

또한, 단순히 바꾸는 것보다 연산 가능 조건(나머지 연산)을 먼저 체크하는 게 중요하다는점도 배웠다.

처음엔 정렬이 왜 필요한지 헷갈렸지만, 결국 최소 연산 경로를 찾기 위한 핵심이었음을 깨달았다.

비슷한 유형의 그리드 조작 문제에 대해 더 자신감이 생긴 것 같다.
