## [**Minimum Absolute Difference Between Elements With Constraint**](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/)

주어진 정수 배열 `nums`에서, 최소한 `x`만큼 떨어져 있는 두 원소의 차이의 절댓값 중 최소값을 구하는 문제이다.

## 주요 포인트

1. 두 원소 `nums[i]`와 `nums[j]`가 최소한 `x`만큼 떨어져 있어야 함 (`|i - j| >= x`).
2. 두 원소 간의 차이의 절댓값을 최소화하는 값을 찾아야 함 (`|nums[i] - nums[j]|` 최소화).
3. 가능한 모든 쌍을 고려하여 최소값을 계산해야 함.

## 나의 코드

```jsx
var minAbsoluteDifference = function(nums, x) {
  let dif = Infinity;
  
  for (let i = 0; i < nums.length - x; i++) {
    for (let j = i + x; j < nums.length; j++) {
      if (dif > Math.abs(nums[i]- nums[j])) {
          dif = Math.abs(nums[i]- nums[j]);
      }
      
      if (dif === 0) {
          return dif;
      }
    }
  }
  
  return dif;
};
```

## 나의 수도 코드

1. `dif` 변수를 무한대로 초기화하여 최소 절댓값 차이를 저장.
2. 두 개의 중첩된 루프를 사용하여 모든 가능한 인덱스 쌍 `(i, j)`를 탐색합니다. 여기서 `|i - j| >= x`를 만족해야 하므로, `j`는 `i + x`부터 시작.
3. 각 쌍에 대해 `nums[i]`와 `nums[j]`의 차이의 절댓값을 계산.
4. 현재의 최소값 `dif`와 비교하여 더 작은 값을 `dif`에 저장.
5. 만약 `dif`가 0이 되면 더 작은 절댓값 차이는 존재하지 않으므로 즉시 반환.
6. 모든 쌍을 검사한 후 최소 절댓값 차이 `dif`를 반환.

## 시간 복잡도

이중 포문은 각 루프가 배열의 크기만큼 반복되므로, 전체 반복 횟수는 `n * n`으로 계산되어 **`O(n^2)`** 시간이 걸린다.

## 공간 복잡도

`dif` 변수는 단 하나의 값만을 저장하며, 추가적인 배열이나 데이터를 저장하는 데 사용되는 공간이 없다.

고로 공간 복잡도는 `O(1)`이다.

## 알아둬야 할 것!

1. **이중 포문**
    - 두 개의 반복문이 중첩되어 있을 때, 반복문 내부의 반복 횟수는 외부 반복문과 곱해지므로 시간 복잡도가 `O(n^2)`와 같이 증가한다.
2. **절댓값**
    - 두 값의 차이를 비교할 때 음수나 양수를 구분하지 않기 위해 절댓값을 사용하여 차이의 크기를 계산한다.
3. **시간 복잡도**
    - 알고리즘이 실행되는 데 걸리는 시간의 양을 입력 크기(`n`)에 따라 표현하는 방식.
    - 이 문제에서는 두 개의 중첩된 반복문으로 인해 `O(n^2)`의 시간 복잡도를 가진다.
4. **공간 복잡도**
    - 알고리즘이 실행될 때 사용하는 메모리 공간의 양을 입력 크기(`n`)에 따라 표현.
    - 이 문제는 추가적인 배열 없이 상수 공간만 사용하므로 `O(1)`이다.

## 회고

이번 문제는 배열에서 최소한 `x`만큼 떨어진 두 원소의 차이의 절댓값을 최소화하는 문제였다.

이중 포문을 사용하여 가능한 모든 쌍을 비교하고, 각 쌍의 차이를 계산하여 최소값을 찾았다.

시간 복잡도는 `O(n^2)`로, 두 포문이 중첩되기 때문에 계산량이 많았다.

공간 복잡도는 `O(1)`로 추가적인 공간을 사용하지 않았다.

최적화 측면에서 더 효율적인 방법을 고려할 필요가 있는 것 같다.
