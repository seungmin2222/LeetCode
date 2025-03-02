## [Shortest Subarray to be Removed to Make Array Sorted](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/)

1. 주어진 정수 배열에서 연속된 하위 배열(서브어레이)을 제거하여 남은 배열이 오름차순 포함이 되도록 만든다.
2. 제거해야 하는 서브어레이의 **최소 길이**를 반환한다.

## 주요 포인트

1. **정렬된 부분 확인**
    - 배열 왼쪽에서 오름차순으로 이어지는 가장 긴 구간(`left`)을 찾는다.
    - 배열 오른쪽에서 오름차순으로 이어지는 가장 긴 구간(`right`)을 찾는다.
2. **경우의 수 비교**
    - 왼쪽 또는 오른쪽 구간을 통째로 제거한 경우의 길이를 계산한다.
    - 왼쪽과 오른쪽 구간을 **병합 가능한지** 확인하며 중간 부분 제거 길이를 최소화한다.
3. **투 포인터 활용**
    - 두 정렬된 부분을 병합할 때 투 포인터를 사용해 최적의 제거 길이를 계산한다.
4. **특별 케이스**
    - 배열이 이미 정렬된 경우, 제거 길이는 `0`.
    - 배열이 완전히 역정렬된 경우, 모든 요소를 제외하고 하나만 남겨야 한다.

## 나의 코드

```tsx
var findLengthOfShortestSubarray = function(arr) {
  const n = arr.length;
  let left = 0, right = n - 1;

  while (left + 1 < n && arr[left] <= arr[left + 1]) {
    left++;
  }

  if (left === n - 1) return 0;

  while (right > 0 && arr[right - 1] <= arr[right]) {
    right--;
  }

  let result = Math.min(n - left - 1, right);
  let i = 0, j = right;
  
  while (i <= left && j < n) {
    if (arr[i] <= arr[j]) {
      result = Math.min(result, j - i - 1);
      i++;
    } else {
      j++;
    }
  }

  return result;
};
```

## 나의 수도 코드

1. **왼쪽 증가 구간 탐색**
2. **이미 정렬된 경우 체크**
3. **오른쪽 증가 구간 탐색**
4. **한쪽 제거 길이 초기화**
5. **왼쪽과 오른쪽 병합 탐색 (투 포인터)**
    - `i = 0, j = right`
    - `while i <= left and j < n:`
        - `if arr[i] <= arr[j]:`
            - `result = min(result, j - i - 1)`
            - `i++`
        - `else:`
            - `j++`
6. **결과 반환**

## 시간 복잡도

1. **왼쪽 증가 구간 탐색**
    - `O(n)`
2. **오른쪽 증가 구간 탐색**
    - `O(n)`
3. **투 포인터 탐색**
    - `i`는 `0`부터 `left`까지 탐색.
    - `j`는 `right`부터 `n`까지 탐색.
    - 합산 시간복잡도는 `O(n)`.

따라서 시간 복잡도는 `O(n)` + `O(n)` + `O(n)` = `O(n)`

## 공간 복잡도

- **투 포인터와 변수 사용**
    - `O(1)`
- 입력 배열 외에 별도의 추가 공간을 사용하지 않음.

따라서 공간 복잡도는 `O(1)`

## 알아둬야 할 것!

1. **비내림차순 조건**
    - 정렬된 배열의 정의와 이를 만족시키기 위한 배열 처리 방법.
2. **투 포인터 기법**
    - 두 정렬된 구간을 효율적으로 병합하거나 탐색하는 방법.
3. **정렬된 구간 탐색**
    - 왼쪽 및 오른쪽에서 오름차순 구간을 찾는 반복문 패턴.
4. **경우의 수 고려**
    - 한쪽 제거, 병합, 특별 케이스(이미 정렬됨, 완전히 역정렬됨) 처리.
5. **시간 및 공간 복잡도 분석**
    - 효율적인 알고리즘 설계와 최적화 이해.

## 회고

이번 문제를 통해 배열의 부분 제거와 오름차순 정렬 조건을 효율적으로 만족시키는 방법을 배울 수 있었다.

투 포인터를 활용해 두 구간을 병합하며 중간 제거 길이를 최소화하여 접근하였다.

문제를 풀기 전에 다양한 경우의 수를 사전에 정의하는 것이 매우 유용하다는 점을 다시 깨달았다.

앞으로 이와 비슷한 정렬된 구간 병합 문제에서도 응용할 수 있을 것 같다.
