## [Maximum Absolute Sum of Any Subarray](https://leetcode.com/classic/problems/maximum-absolute-sum-of-any-subarray/description/)

이 문제는 최대 절대합 하위 배열을 찾는 것이다.

주어진 배열 `nums`의 모든 가능한 하위 배열 중에서 그 배열 요소들의 합의 절대값이 가장 큰 값을 찾아야 한다.

## 주요 포인트

이 문제를 해결하기 위해 카데인(Kadane) 알고리즘의 변형을 사용했다.

일반적인 카데인 알고리즘은 최대 부분합을 찾는 알고리즘인데, 이 문제에서는 절대값이 가장 큰 합을 찾아야 하므로 다음과 같은 접근법을 사용했다.

## 나의 코드

```jsx
function maxAbsoluteSum(nums) {
    if (!nums || nums.length === 0) return 0;
    
    let maxSum = 0; 
    let minSum = 0;
    let currentMax = 0;
    let currentMin = 0;
    
    for (let num of nums) {
       currentMax = Math.max(currentMax + num, num);
       maxSum = Math.max(maxSum, currentMax);

       currentMin = Math.min(currentMin + num, num);
       minSum = Math.min(minSum, currentMin);
    }
    
    return Math.max(maxSum, Math.abs(minSum));
}
```

## 나의 수도 코드

1. 먼저 빈 배열이나 `null` 입력의 경우 0을 반환.
2. 네 가지 변수를 초기화
    - `maxSum` : 지금까지 발견된 최대 부분합
    - `minSum` : 지금까지 발견된 최소 부분합
    - `currentMax` : 현재 위치까지의 최대 부분합
    - `currentMin` : 현재 위치까지의 최소 부분합
3. 배열의 각 요소에 대해
    - 현재 최대 부분합 `currentMax`를 갱신
        - 이전까지의 최대 부분합에 현재 요소를 더한 값과 현재 요소 자체 중 큰 값을 선택
    - 전체 최대 부분합 `maxSum`을 갱신
    - 현재 최소 부분합 `currentMin`을 갱신
        - 이전까지의 최소 부분합에 현재 요소를 더한 값과 현재 요소 자체 중 작은 값을 선택
    - 전체 최소 부분합 `minSum`을 갱신
4. 마지막으로 `maxSum`과 `minSum`의 절대값 중 큰 값을 반환.

## 시간 복잡도

시간 복잡도 : O(n) - 배열을 한 번만 순회한다.

## 공간 복잡도

공간 복잡도 : O(1) - 고정된 숫자의 변수만 사용한다.

## 알아둬야 할 것!

1. 카데인(Kadane) 알고리즘의 이해
    - 최대 부분합을 구하는 동적 프로그래밍 기법
    - O(n) 시간 복잡도로 효율적인 해결책 제공
    - 현재까지의 최대합과 현재 요소부터 시작하는 새로운 부분배열 중 선택하는 방식
2. 절대값 개념의 확장
    - 최대 부분합(양수 방향)과 최소 부분합(음수 방향) 모두 추적해야 함
    - 절대값이 최대가 되는 경우는 가장 큰 양수합 또는 가장 작은 음수합의 절대값
3. 동적 프로그래밍 접근법
    - 현재 상태를 이전 상태에 기반하여 결정
    - 불필요한 계산 반복을 피하는 효율적인 방법

## 회고

이 문제를 풀면서 카데인 알고리즘을 절대값 맥락으로 확장하는 과정이 핵심이였다.

처음에는 모든 부분 배열을 확인하는 O(n²) 접근법을 생각했지만, 최대 부분합과 최소 부분합을 동시에 추적하는 O(n) 솔루션으로 최적화할 수 있었다.

가장 중요한 통찰은 절대값이 최대가 되는 경우가 가장 큰 양수합 또는 가장 작은 음수합의 절대값 중 하나라는 점이었고 이 경험을 통해 기존 알고리즘을 새로운 조건에 맞게 변형하는 능력이 알고리즘 문제 해결에 중요성을 배웠다.
