## [Minimum Operations to Exceed Threshold Value II](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/)

이 문제는 주어진 배열에서 가장 작은 두 수를 선택하여 특별한 연산을 수행하는 문제이다.

## 주요 포인트

1. 연산 효율성
    - 가장 작은 두 수를 찾아야하므로 배열을 정렬된 상태로 유지하는 것이 중요
    - 배열의 끝에서 pop()으로 접근하면 O(1) 시간에 처리 가능
2. 정렬 방향
    - 내림차순 정렬(`sort((a,b) => b-a)`)을 사용하면 가장 작은 수가 배열 끝에 위치
    - pop()으로 쉽게 접근 가능
3. 종료 조건
    - 배열의 길이가 2 미만이거나
    - 가장 작은 수가 k 이상이면 종료

## 나의 코드

```jsx
var minOperations = function(nums, k) {
    nums.sort((a, b) => b - a);
    let operations = 0;
    
    while (nums.length >= 2 && nums[nums.length - 1] < k) {
        const x = nums.pop();
        const y = nums.pop();
        const newVal = x * 2 + y;
        
        let left = 0;
        let right = nums.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] > newVal) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        nums.splice(left, 0, newVal);
        operations++;
    }
    
    return operations;
};
```

## 나의 수도 코드

1. nums를 내림차순 정렬
2. operations = 0
3. while (nums.length >= 2 && nums[마지막] < k)
    - x = nums.pop()
    - y = nums.pop()
    - newVal = min(x,y) * 2 + max(x,y)
    - nums에 newVal 삽입하고 정렬 유지
    - operations++
4. return operations

## 시간 복잡도

1. Line 1: 정렬 - O(n log n)
2. Line 3-16: While 루프
    - 최대 n/2번 반복 가능 (매번 2개 원소 제거)
    - Line 4,5: pop 연산 - O(1)
    - Line 9-14: 이진 탐색 - O(log n)
    - Line 15: splice 삽입 - O(n)
    - 각 반복당 총 시간: O(n)

따라서 최종 시간 복잡도는 O(n²) 이다.

## 공간 복잡도

1. 기본 공간
    - nums 배열: O(n)
    - 변수 (operations, x, y, newVal 등): O(1)
    - 정렬은 추가 공간 O(log n) ~ O(n)
    (JavaScript의 sort는 구현에 따라 다름)
2. 추가 공간
    - 이진 탐색: O(1)
    - splice 연산: O(1)

따라서 전체 공간 복잡도는 O(n) 이다.

## 알아둬야 할 것!

- 배열 정렬 방향(오름차순/내림차순)에 따른 장단점과 활용 방법
- 배열 조작 메서드(pop, splice)의 시간복잡도 차이와 효율적인 사용법
- 이진 탐색(Binary Search)을 통한 삽입 위치 찾기 최적화
- 정렬된 배열 상태를 유지하면서 요소를 추가/제거하는 방법

## 회고

처음에는 복잡한 자료구조(힙)를 사용하려 했으나, 문제의 본질을 파악하고 단순화할 수 있었다.

정렬 방향을 내림차순으로 바꾸어 pop() 연산을 효율적으로 활용한 점이 좋았다.

매 반복마다 정렬하는 방식에서 이진 탐색으로 개선하며 최적화를 시도한 과정이 의미있었다.

문제 해결 과정에서 다양한 접근 방법을 시도하고 비교한 것이 좋은 학습 경험이었다.
