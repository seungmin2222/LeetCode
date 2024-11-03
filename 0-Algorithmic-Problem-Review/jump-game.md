## [**Jump Game**](https://leetcode.com/problems/jump-game/)

주어진 배열에서 각 요소는 현재 위치에서 점프할 수 있는 최대 거리이다.

배열의 첫 번째 인덱스에서 시작해 마지막 인덱스에 도달할 수 있는지 여부를 반환하는 문제이다.

## 주요 포인트

- 각 배열 요소는 해당 인덱스에서 점프할 수 있는 최대 거리임.
- 배열의 끝에 도달할 수 있는지 여부를 판단해야 함.
- 가능한 최대 도달 거리를 계속 업데이트하며 진행하는 방법이 효율적임.

## 나의 코드

```jsx
var canJump = function(nums) {
  let maxNum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (i > maxNum) return false; 
    
    maxNum = Math.max(maxNum, i + nums[i]);
    
    if (maxNum >= nums.length - 1) return true;
  }
};
```

## 나의 수도 코드

- `maxReach`를 0으로 설정.
- 인덱스 `i`를 0부터 `nums.length - 1`까지 반복.
- 만약 `i`가 `maxReach`보다 크면 `false`를 반환.
- `maxReach`를 `max(maxReach, i + nums[i])`로 업데이트.
- 만약 `maxReach`가 `nums.length - 1` 이상이면 `true`를 반환.

## 알아둬야 할 것!

`false`를 판단하는 조건

- **현재 인덱스 초과**
    - 반복문 내에서 `if (i > maxNum)` 조건이 참인 경우
        - 이 경우, 현재 인덱스 `i`가 현재까지 도달할 수 있는 최대 거리 `maxNum`를 초과한 것.
        - 즉, 현재 인덱스에 도달할 수 없다는 뜻이므로 `false`를 반환.

## 회고

이번 문제를 통해 점프 게임의 기본 원리를 이해하고,

배열의 각 요소가 점프 거리라는 점을 활용하여 최대 도달 가능한 인덱스를 업데이트하는 방식이였다.

코드를 작성하면서 논리적 사고와 문제 해결 능력을 향상시킬 수 있었다.
