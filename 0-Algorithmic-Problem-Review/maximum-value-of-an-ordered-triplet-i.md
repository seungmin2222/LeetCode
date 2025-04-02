## [Maximum Value of an Ordered Triplet I](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/description/?envType=daily-question&envId=2025-04-02)

이 문제는 i < j < k인 세 인덱스에 대해 (nums[i] - nums[j]) * nums[k] 값을 계산할 때, 가능한 조합 중 가장 큰 값을 반환하되, 음수일 경우 0을 반환하는 문제이다.

## 주요 포인트

1. (i, j, k)는 i < j < k를 만족해야 함.
2. 수식 (nums[i] - nums[j]) * nums[k]에서, nums[i]와 nums[k]는 클수록, nums[j]는 작을수록 좋음.
3. j를 기준으로 왼쪽 최대값(i)과 오른쪽 최대값(k)을 미리 구해두면 효율적으로 계산 가능.
4. 전처리로 leftMax와 rightMax 배열을 만들어 모든 j에 대해 O(1) 계산이 가능하게 한다.

## 나의 코드

```jsx
var maximumTripletValue = function (nums) {
    let maxVal = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                const value = (nums[i] - nums[j]) * nums[k];
                maxVal = Math.max(maxVal, value);
            }
        }
    }

    return maxVal;
};
```

## 나의 수도 코드

1. 결과를 저장할 변수 maxVal을 0으로 초기화한다.
2. 배열 nums의 길이를 n에 저장한다.
3. 첫 번째 인덱스 i를 0부터 n - 1까지 순회한다.
4. 두 번째 인덱스 j를 i + 1부터 n - 1까지 순회한다.
5. 세 번째 인덱스 k를 j + 1부터 n - 1까지 순회한다.
6. 각 조합에 대해 (nums[i] - nums[j]) * nums[k] 값을 계산한다.
7. 그 값이 현재까지의 maxVal보다 크면 maxVal을 갱신한다.
8. 모든 조합을 다 확인한 후, maxVal을 반환한다.

## 시간 복잡도

- 바깥 루프 i: O(n)
- 중간 루프 j: O(n)
- 안쪽 루프 k: O(n)

최종 시간복잡도는 O(n³) 이다.

## 공간 복잡도

- 변수 몇 개 (maxVal, n, value)만 사용
- 추가 배열 없음

최종 공간복잡도는 O(1)이다.

## 다른 사람의 풀이

```jsx
var maximumTripletValue = function (nums) {
    const n = nums.length;
    const leftMax = Array(n).fill(0);
    let maxValue = 0;
    leftMax[0] = nums[0];

    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], nums[i]);
    }

    const rightMax = Array(n).fill(0);
    rightMax[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
    }

    for (let j = 1; j < n - 1; j++) {
        const left = leftMax[j - 1];
        const right = rightMax[j + 1];
        const value = (left - nums[j]) * right;

        maxValue = Math.max(maxValue, value);
    }

    return maxValue;
};
```

## 알아둬야 할 것!

- 세 인덱스 (i, j, k)는 항상 순서대로 i < j < k여야 한다.
- (nums[i] - nums[j]) * nums[k]는 양수가 되려면 nums[i] > nums[j]이고 nums[k] > 0이어야 한다.
- j를 기준으로 왼쪽 최대값과 오른쪽 최대값을 미리 구해두면 매 계산을 O(1)로 줄일 수 있다.
- 전처리 배열을 사용하면 전체 탐색을 O(n)으로 최적화할 수 있다

## 회고

처음엔 단순히 모든 조합을 다 확인하는 브루트포스 방식으로 접근했지만,
시간복잡도 O(n³)은 입력이 커질 경우 효율적이지 않다는 걸 느꼈다.
수식에서 j를 기준으로 좌우를 나누는 구조를 파악하고, 전처리를 통해 최댓값 배열을 준비하는 방식이 핵심이었다.
한 번 계산한 정보를 재사용하면 얼마나 많은 연산을 줄일 수 있는지 체감했다.
다음에도 비슷한 조건 탐색 문제가 나오면 중심 축을 먼저 세우는 습관을 가져야겠다.
