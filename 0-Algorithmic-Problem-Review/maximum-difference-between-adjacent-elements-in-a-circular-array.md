## [**Maximum Difference Between Adjacent Elements in a Circular Array**](https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/description/?envType=daily-question&envId=2025-08-01)

## 주요 포인트

- **원형 배열**이므로 nums[0]과 nums[nums.length - 1]도 인접한 것으로 간주
- 인접한 두 수의 **절댓값 차이** 중 **최댓값**을 찾아야 함
- 한 번의 순회로 해결 가능

## 나의 코드

```tsx
var maxAdjacentDistance = function(nums) {
    let maxDiff = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let next = (i + 1) % n;
        let diff = Math.abs(nums[i] - nums[next]);
        maxDiff = Math.max(maxDiff, diff);
    }

    return maxDiff;
};
```

## 나의 수도 코드

1. maxDiff = 0으로 초기화
2. 배열을 한 바퀴 돌면서
    - 현재 원소 nums[i]와 다음 원소 nums[(i+1) % n]의 차이 계산
    - 그 차이의 절댓값과 maxDiff 중 큰 값을 저장
3. 마지막까지 비교한 후 maxDiff 반환

## 시간 복잡도

- **O(n)**
    
    → 배열을 한 번 순회하며 차이 계산
    

## 공간 복잡도

- **O(1)**
    
    → 추가 배열이나 자료구조 없이 상수 공간만 사용
    

## 알아둬야 할 것!

- % n 연산으로 원형 배열 처리 가능 ((i+1)%n = 다음 원소)
- 절댓값은 Math.abs(), 최댓값 갱신은 Math.max()
- 원형 배열의 기본 개념은 다양한 문제에서 자주 등장함

## 회고

배열의 양끝이 연결된다는 원형 배열 조건을 실수 없이 반영했는지가 핵심이였다.

평범한 인접 비교 문제처럼 보이지만 i와 (i+1)%n 인덱스 처리를 통해 깔끔하게 해결 가능했고

배열의 최소 길이는 2 이상이라 생각하며 해결했다.
