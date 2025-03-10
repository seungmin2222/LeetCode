## [apply-operations-to-an-array](https://leetcode.com/classic/problems/apply-operations-to-an-array/description/)

이 문제는 연속된 같은 숫자는 첫 번째 숫자를 두 배로 만들고 두 번째 숫자를 0으로 바꾼 후, 모든 0을 배열의 끝으로 이동시키는 연산을 구현하는 것이다.

## 주요 포인트

- **제자리(In-place) 알고리즘** : 추가 배열을 생성하지 않고 원본 배열을 직접 수정한다.
- **투 포인터 기법** : `nonZeroIndex`와 `i` 두 개의 포인터를 사용하여 효율적으로 요소를 이동시킨다.
- **최적화된 스왑** : 필요한 경우에만 값을 교환하여 불필요한 연산을 방지한다.

## 나의 코드

```jsx
var applyOperations = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    
    let nonZeroIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== nonZeroIndex) {
                nums[nonZeroIndex] = nums[i];
                nums[i] = 0;
            }
            nonZeroIndex++;
        }
    }
    
    return nums;
};
```

## 나의 수도 코드

1. 먼저 배열을 처음부터 끝까지 순회하면서 연속된 같은 숫자를 찾는다.
    - 만약 현재 숫자와 바로 다음 숫자가 같다면, 현재 숫자를 두 배로 만들고 다음 숫자를 0으로 바꾼다.
2. 그 다음 모든 0을 배열의 끝으로 옮기는 작업을 수행합니다.
    - 이를 위해 '0이 아닌 요소가 들어갈 위치'를 추적하는 포인터를 사용한다.
    - 배열을 다시 처음부터 순회하면서 0이 아닌 요소를 만나면
        - 해당 요소를 '0이 아닌 요소가 들어갈 위치'로 옮긴다.
        - 원래 위치에는 0을 넣는다.
        - '0이 아닌 요소가 들어갈 위치' 포인터를 한 칸 앞으로 이동한다.
3. 이렇게 처리된 배열을 반환한다.

## 시간 복잡도

배열을 두 번 순회하지만, 각 순회는 O(n)이므로 전체 시간 복잡도는 O(n)이다.

## 공간 복잡도

추가 배열을 사용하지 않고 상수 개수의 변수만 사용한다.

고로 최종 공간 복잡도는 O(1)이다.

## 알아둬야 할 것!

`nonZeroIndex = 0`으로 시작한다.

이 변수는 "다음으로 0이 아닌 값이 들어갈 위치"를 추적한다.

1. `i = 0`: nums[0] = 1 (0이 아님)
    - i = nonZeroIndex이므로 swap 불필요
    - nonZeroIndex++ → 1
    - 배열: [1, 4, 0, 1, 0, 0, 6, 0]
2. `i = 1`: nums[1] = 4 (0이 아님)
    - i = nonZeroIndex이므로 swap 불필요
    - nonZeroIndex++ → 2
    - 배열: [1, 4, 0, 1, 0, 0, 6, 0]
3. `i = 2`: nums[2] = 0
    - 0이므로 아무것도 안함
    - 배열: [1, 4, 0, 1, 0, 0, 6, 0]
4. `i = 3`: nums[3] = 1 (0이 아님)
    - i ≠ nonZeroIndex이므로 swap 필요:
        - nums[nonZeroIndex] = nums[i] → nums[2] = 1
        - nums[i] = 0 → nums[3] = 0
    - nonZeroIndex++ → 3
    - 배열: [1, 4, 1, 0, 0, 0, 6, 0]
5. `i = 4`: nums[4] = 0
    - 0이므로 아무것도 안함
    - 배열: [1, 4, 1, 0, 0, 0, 6, 0]
6. `i = 5`: nums[5] = 0
    - 0이므로 아무것도 안함
    - 배열: [1, 4, 1, 0, 0, 0, 6, 0]
7. `i = 6`: nums[6] = 6 (0이 아님)
    - i ≠ nonZeroIndex이므로 swap 필요:
        - nums[nonZeroIndex] = nums[i] → nums[3] = 6
        - nums[i] = 0 → nums[6] = 0
    - nonZeroIndex++ → 4
    - 배열: [1, 4, 1, 6, 0, 0, 0, 0]
8. `i = 7`: nums[7] = 0
    - 0이므로 아무것도 안함
    - 배열: [1, 4, 1, 6, 0, 0, 0, 0]

최종 결과: [1, 4, 1, 6, 0, 0, 0, 0]

## 회고

연속된 같은 숫자 처리와 0 이동 문제를 해결하기 위해 두 단계 접근법을 사용했다.

처음에는 추가 배열을 사용하는 방식으로 시작했으나, 제자리(in-place) 알고리즘으로 최적화하여 공간 복잡도를 O(1)로 개선했다. 

핵심은 투 포인터 기법을 활용하여 0이 아닌 요소들을 앞으로 모으는 것이었고 결과적으로 시간 복잡도 O(n)을 유지했다.
