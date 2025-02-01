## [**Find First and Last Position of Element in Sorted Array**](https://leetcode.com/classic/problems/find-first-and-last-position-of-element-in-sorted-array/description/)

주어진 정렬된 배열에서 특정 타겟 값의 첫 번째와 마지막 위치를 찾아 반환하는 문제이다.

## 주요 포인트

1. 주어진 배열은 오름차순으로 정렬되어 있으며, 목표는 특정 타겟 값의 첫 번째와 마지막 위치를 찾는 것이다.
2. 타겟 값이 배열에 없으면 [-1, -1]을 반환한다.
3. 배열에서 첫 번째 위치와 마지막 위치를 찾기 위해 이진 탐색을 두 번 사용한다.
4. 첫 번째 위치를 찾을 때는 타겟 값을 찾으면 왼쪽으로 계속 검색하여 가장 처음 위치를 찾는다.
5. 마지막 위치를 찾을 때는 타겟 값을 찾으면 오른쪽으로 계속 검색하여 가장 마지막 위치를 찾는다.

## 나의 코드

```jsx
var searchRange = function(nums, target) {
    function findLeft(nums, target) {
        let left = 0, right = nums.length - 1;
        let result = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    function findRight(nums, target) {
        let left = 0, right = nums.length - 1;
        let result = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    const left = findLeft(nums, target);
    if (left === -1) {
        return [-1, -1];
    }

    const right = findRight(nums, target);
    return [left, right];
};
```

## 나의 수도 코드

1. 함수 searchRange(nums, target)
    - left = 이진 탐색으로 target의 첫 번째 위치 찾기
    - 만약 left == -1이면 [-1, -1] 반환
    - right = 이진 탐색으로 target의 마지막 위치 찾기
    - [left, right] 반환
2. **이진 탐색으로 첫 번째 위치 찾기**:
    - 타겟이 `mid`와 일치하면 왼쪽으로 더 검색.
    - 타겟보다 작으면 오른쪽으로 검색.
    - 타겟보다 크면 왼쪽으로 검색.
3. **이진 탐색으로 마지막 위치 찾기**
    - 타겟이 `mid`와 일치하면 오른쪽으로 더 검색.
    - 타겟보다 작으면 왼쪽으로 검색.
    - 타겟보다 크면 오른쪽으로 검색.

## 시간 복잡도

- `findLeft`와 `findRight` 모두 이진 탐색을 사용하므로 시간 복잡도는 **O(log n)이**다.
- `searchRange` 함수는 두 번의 이진 탐색을 수행하므로 전체 시간 복잡도는 **O(log n)**이다.

최종 시간 복잡도는 **O(log n)이다.**

## 공간 복잡도

- 이 알고리즘은 추가적인 배열이나 데이터 구조를 사용하지 않으며, 단지 몇 개의 변수만 사용합니다.

최종 공간 복잡도는 **O(1)이**다.

## 회고

이 문제는 이진 탐색을 활용해 정렬된 배열에서 타겟 값의 첫 번째와 마지막 위치를 효율적으로 찾는 문제였다.

처음엔 단순히 배열을 순차적으로 탐색해야 할 것 같았지만, 이진 탐색을 두 번 사용하여 O(log n)으로 해결할 수 있다는 점이 흥미로웠다.

각 탐색에서 타겟을 발견한 후 추가적인 범위 검색을 통해 정확한 위치를 찾는 과정이 유익했다.

알고리즘 최적화의 중요성을 다시 한 번 느낀 문제였다.
