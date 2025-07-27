## [**Count Hills and Valleys in an Array**](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/?envType=daily-question&envId=2025-07-27)

## 주요 포인트

- nums[i]가 hill이 되려면 양 옆 가장 가까운 다른 값들이 nums[i]보다 작아야 한다.
- nums[i]가 valley가 되려면 양 옆 가장 가까운 다른 값들이 nums[i]보다 커야 한다.
- 연속된 같은 값들은 같은 hill/valley로 간주되므로, 우선 중복값을 압축해야 한다.
- arr[i-1], arr[i], arr[i+1] 3개를 비교해 arr[i]가 양 옆보다 크거나 작으면 count++.

## 나의 코드

```tsx
var countHillValley = function(nums) {
    const arr = [nums[0]];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) arr.push(nums[i]);
    }

    let count = 0;
    
    for (let i = 1; i < arr.length - 1; i++) {
        if ((arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) || 
            (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])) {
            count++;
        }
    }
    
    return count;
};
```

## 나의 수도 코드

1. nums 배열에서 연속된 중복 값 제거 후 arr에 저장
2. count = 0
3. i = 1 ~ arr.length-2까지 순회
    - arr[i] > arr[i-1] && arr[i] > arr[i+1] → hill → count++
    - arr[i] < arr[i-1] && arr[i] < arr[i+1] → valley → count++
4. count 반환

## 시간 복잡도

- O(n) (한 번의 배열 순회로 중복 제거 + 한 번의 배열 순회로 계산)

## 공간 복잡도

- O(n) (압축된 배열 arr를 위한 추가 공간)

## 알아둬야 할 것!

- 중복값 처리가 이 문제의 핵심 포인트.
- hill/valley는 i 위치만 고려하면 안 되고, 연속 구간이 하나의 hill/valley로 합쳐진다.

## 회고

단순 비교가 아니라 중복 제거 후 양 옆 비교라는 아이디어를 빠르게 떠올릴 수 있는지 여부가 중요하다. 비슷한 문제에서도 중복값 처리 전략이 자주 등장한다.
