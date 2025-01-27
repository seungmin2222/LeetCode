## [**Minimum Subsequence in Non-Increasing Order**](https://leetcode.com/classic/problems/minimum-subsequence-in-non-increasing-order/description/)

이 문제를 JavaScript로 해결하려면, 주어진 배열에서 조건을 만족하는 부분수열을 찾아야 한다.

## 주요 포인트

- **부분수열 (Subsequence)** : 배열에서 원소들의 순서를 유지한 채 일부 원소를 선택한 집합.
- **배열 정렬 (Sorting)** : 배열을 오름차순 또는 내림차순으로 재배열하는 방법.
- **배열 순회 (Iteration over Array)** : 배열을 한 번씩 순차적으로 처리하는 방법
- **배열 합 계산 (Summing Array Elements)** : 배열의 모든 원소를 더하는 방법
- **그리디 알고리즘 (Greedy Algorithm)** : 현재 상태에서 가장 최적인 선택을 하여 문제를 해결하는 방법.

## 나의 코드

```jsx
var minSubsequence = function(nums) {
  nums.sort((a, b) => b - a);
  
  let totalSum = nums.reduce((acc, num) => acc + num, 0);
  let subsequenceSum = 0;
  let subsequence = [];

  for (let i = 0; i < nums.length; i++) {
    subsequenceSum += nums[i];
    subsequence.push(nums[i]);
    totalSum -= nums[i];
    
    if (subsequenceSum > totalSum) {
      break;
    }
  }

  return subsequence;
};
```

## 나의 수도 코드

1. 배열을 내림차순으로 정렬
2. 부분수열을 차례대로 선택하면서 조건을 만족하는지 체크
3. 부분수열의 합이 나머지 합보다 커지면 종류
4. 조건을 만족하는 부분수열 반환

## 시간 복잡도

1. 배열 정렬 (`nums.sort`) → O(n log n)
2. nums.reduce() → O(n)
3. `for`문을 이용하여 배열을 한 번 순회하면서 부분수열을 구성 → O(n)

최종 시간 복잡도는 O(n log n)이다.

## 공간 복잡도

1. 입력 배열 → O(n)
2. 부분수열 배열 → `subsequence`는 최대 `n`개의 원소를 가질 수 있으므로 O(n)
3. 기타 변수들 → O(1)

## 회고

이번 문제를 풀면서, 조건을 만족하는 부분수열을 찾는 데 있어, 내림차순으로 배열을 정렬하고, 순차적으로 합을 비교하는 방법이 매우 효과적이었다.

처음에는 부분수열을 구하는 방식이 어려울 수 있다고 생각했지만, 문제를 차근차근 풀면서 생각보다 간단하게 접근할 수 있었다.

또한, 시간 복잡도와 공간 복잡도를 계산하는 과정에서 알고리즘의 효율성을 이해하는 좋은 기회가 되었다.
