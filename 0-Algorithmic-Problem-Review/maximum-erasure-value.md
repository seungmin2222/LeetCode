## [Maximum Erasure Value](https://leetcode.com/problems/maximum-erasure-value/?envType=daily-question&envId=2025-07-22)

## 주요 포인트

- 슬라이딩 윈도우 + Set을 사용해 중복 없는 subarray를 유지한다.
- currentSum으로 현재 윈도우 합을 관리하고, 중복 발생 시 왼쪽 포인터를 이동하며 합에서 값을 제거.
- 매번 최대 합을 maxSum으로 갱신한다.

## 나의 코드

```jsx
var maximumUniqueSubarray = function(nums) {
    const set = new Set();
    let left = 0;
    let currentSum = 0;
    let maxSum = 0;

    for (let right = 0; right < nums.length; right++) {
        while (set.has(nums[right])) {
            set.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }
        set.add(nums[right]);
        currentSum += nums[right];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
```

## 나의 수도 코드

1. set, left, currentSum, maxSum 초기화
2. 배열의 각 원소 nums[right] 순회
3. 중복 원소가 있으면 left를 이동시키며 set에서 제거하고 currentSum 감소
4. 새 원소를 set에 추가하고 currentSum에 더함
5. maxSum을 currentSum과 비교해 갱신
6. maxSum 반환

## 시간 복잡도

- O(n): 각 요소가 최대 한 번 add 및 delete 된다.

## 공간 복잡도

- O(n): Set이 최대 n개의 고유 원소를 가질 수 있다.

## 알아둬야 할 것!

- Set을 이용한 슬라이딩 윈도우 패턴은 중복 없는 subarray 문제에 자주 쓰임.
- 합(currentSum)을 실시간으로 관리해 재계산을 피하는 것이 핵심.

## 회고

- 슬라이딩 윈도우를 활용해 중복 처리와 합 계산을 동시에 한 것이 효율적이었다.
- Map을 쓰면 while문 없이 점프가 가능해 더 빠를 수도 있으니 다음엔 Map 접근도 고려.
