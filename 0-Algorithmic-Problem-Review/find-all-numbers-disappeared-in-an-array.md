## [Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)

이 문제는 nums의 길이 중에서 빠져있는 숫자를 반환하는 문제이다.

## 주요 포인트

1. **문제 이해**
    - 배열에서 1부터 n까지의 숫자 중 누락된 숫자를 찾는 문제로, 입력 배열의 특성을 명확히 파악해야 함.
2. **알고리즘 선택**
    - 해시 세트, 배열 인덱싱 및 스왑과 같은 다양한 접근 방식을 고려하고, 공간과 시간 복잡도의 최적화를 목표로 해야 함.
3. **자료 구조 활용**
    - 배열이나 집합 등의 자료 구조의 특성을 잘 활용하여 문제를 효율적으로 해결할 수 있는 방법을 모색해야 함.

## 나의 코드

```jsx
var findDisappearedNumbers = function(nums) {
  const result = [];
  const fillteredNums = new Set();

  for (let i = 0; i < nums.length; i++) {
    fillteredNums.add(nums[i]);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!fillteredNums.has(i)) {
      result.push(i);
    }
  }
  
  return result;
};
```

## 나의 수도 코드

1. 결과를 저장할 빈 리스트 `result`와 중복을 허용하지 않는 집합 `fillteredNums`를 생성.
2. `nums`의 각 요소를 `fillteredNums` 집합에 추가.
3. 중복을 제거.
4. 1부터 `nums.length`까지 반복하여, 현재 숫자가 `fillteredNums`에 포함되지 않은 경우
    - 누락된 숫자일 경우 `result`에 추가.
5. 누락된 숫자들이 담긴 `result` 리스트를 반환.

## 다른 사람의 풀이

```jsx
var findDisappearedNumbers = function(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (nums[i] !== nums[nums[i] - 1]) {
      const temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }

  const result = [];
  
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      result.push(i + 1);
    }
  }

  return result;
};
```

## 다른 사람의 풀이 해석

1. **숫자를 올바른 위치에 배치**
    - 첫 번째 `for` 루프에서는 각 숫자를 자신의 인덱스 위치에 배치한다.
    - 즉, 숫자 `x`는 인덱스 `x-1`에 위치해야 한다.
    - 이 과정은 `while` 루프를 통해 수행되며, 스왑을 사용하여 올바른 위치에 숫자를 이동시킨다.
2. **누락된 숫자 찾기**
    - 두 번째 `for` 루프에서는 각 인덱스와 그 인덱스에 해당하는 숫자를 비교하여, 인덱스가 올바르지 않은 경우(즉, `nums[i] !== i + 1`) 해당 인덱스를 결과 리스트에 추가합니다.

## 알아둬야 할 것!

1. **배열 인덱싱**
    - 배열의 인덱스를 활용하여 숫자의 위치를 정리하는 방법.
    - 주어진 숫자와 그 숫자가 위치해야 할 인덱스를 매핑하여 배열을 정리하는 것이 중요하다.
- **스왑(Swap)**
    - 두 요소의 위치를 서로 교환하는 기술.
    - 이를 통해 올바른 위치에 숫자를 배치할 수 있다.
    - 반복적으로 스왑하여 각 숫자가 자신의 인덱스에 오도록 한다.
- **해시 세트(Set)**
    - 중복을 허용하지 않는 데이터 구조로, 특정 값의 존재 여부를 O(1) 시간에 확인할 수 있다.
- **시간 및 공간 복잡도**
    - 알고리즘의 효율성을 평가하는 기준.
    - 이 문제는 O(n)의 시간 복잡도와 O(1)의 공간 복잡도를 목표로 한다.
- **정렬의 개념**
    - 배열을 정렬하는 대신 인덱스를 통해 올바른 위치에 숫자를 배치하는 방법으로, 효율적인 정렬의 기본 아이디어를 적용한다.

## 회고

이번 문제를 해결하며 배열에서 누락된 숫자를 찾는 다양한 접근 방식을 배웠다.

초기에는 해시 세트를 사용했으나 공간 복잡도가 아쉬워 최적화된 배열 인덱싱 방법이 있다는걸배우고 이해를 했다..

이를 통해 스왑 기술을 활용해 숫자를 올바른 위치에 배치하는 중요성을 깨달았다.

앞으로도 이러한 경험을 바탕으로 문제 해결 능력을 더욱 발전시키고 해야겠다.
