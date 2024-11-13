## [**Most Beautiful Item for Each Query**](https://leetcode.com/problems/most-beautiful-item-for-each-query/)

이 문제는 **각 아이템의 가격과 아름다움을 나타내는 beauty 값이 주어질 때, 특정 가격 이하에서 구매 가능한 아이템 중에서 가장 높은 beauty 값을 찾는 것이다.**

주어진 쿼리의 가격 이하로 구매 가능한 아이템이 없다면 해당 쿼리에 대한 결과는 `0`이 되고, 가능한 아이템이 있을 경우 가장 높은 beauty 값을 해당 쿼리의 결과로 반환하는 문제이다.

## 주요 포인트

1. **데이터 구조 이해**
    - 각 아이템은 `[가격, 아름다움(beauty)]` 형태로 주어진다.
    - 가격은 `price`, 아름다움은 `beauty`로 표현된다.
2. 쿼리 배열에는 특정 가격들이 주어지며, 각 쿼리마다 해당 가격 이하에서 구매할 수 있는 아이템 중 가장 높은 beauty 값을 찾아야 한다.
3. **제한 조건**: 쿼리 가격 이하의 아이템이 없을 경우 해당 쿼리에 대한 결과는 `0`으로 반환해야 한다.
4. **최대 beauty 값 찾기**: 각 쿼리마다 조건에 맞는 아이템 중 beauty 값이 가장 높은 아이템을 찾아야 한다.

## 나의 코드

```jsx
var maximumBeauty = function(items, queries) {
  items.sort((a, b) => a[0] - b[0]);

  let maxBeauty = 0;
  
  for (let i = 0; i < items.length; i++) {
    maxBeauty = Math.max(maxBeauty, items[i][1]);
    items[i][1] = maxBeauty;
  }

  const result = new Array(queries.length);

  for (let i = 0; i < queries.length; i++) {
    let left = 0, right = items.length - 1;
    let maxNum = 0;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (items[mid][0] <= queries[i]) {
        maxNum = items[mid][1]; 
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    result[i] = maxNum;
  }

  return result;
};
```

## 나의 수도 코드

1. **아이템 정렬**
    - `items` 배열을 가격 기준으로 오름차순 정렬.
2. **beauty 값 누적 업데이트**
    - 순회하며 각 아이템의 beauty 값을 현재까지의 최대 beauty 값으로 갱신.
3. **결과 배열 초기화**
    - 쿼리 배열과 같은 길이의 `result` 배열 생성.
4. **이진 탐색으로 최대 beauty 찾기**
    - 각 쿼리 가격 이하에서 살 수 있는 최대 beauty 값을 이진 탐색으로 찾음.
5. **결과 저장 및 반환**
    - 이진 탐색 결과를 `result` 배열에 저장하고 반환.

## 시간 복잡도

1. **아이템 정렬**
    - `items.sort((a, b) => a[0] - b[0]);`는 가격을 기준으로 아이템을 정렬한다.
    - 정렬 알고리즘의 시간복잡도는 일반적으로 `O(n log n)`이다.
2. **각 쿼리에 대한 이진 탐색**
    - 쿼리마다 이진 탐색을 통해 가격 이하의 최대 beauty 값을 찾는다.
        - 이진 탐색의 시간복잡도는 `O(log n)`이다.
    - 쿼리 배열의 길이를 `m`이라고 하면, 각 쿼리에 대해 이진 탐색을 수행하므로 이 과정의 시간복잡도는 `O(m log n)`이다.

## 공간 복잡도

- **추가 배열 사용**
    - `result` 배열이 `n`개의 쿼리 결과를 저장하기 위해 사용된다.

따라서 추가 공간복잡도는 `O(n)`이다.

## 알아둬야 할 것!

### 이진 탐색 방식

1. **초기 설정**
    - `left`와 `right`를 배열의 시작과 끝으로 설정합니다. `mid`는 탐색 중간 위치를 가리킨다.
2. **이진 탐색 진행**
    - `items[mid][0] <= queries[i]`인 경우
        - 현재 `mid` 위치의 아이템 가격이 쿼리 가격 이하라는 뜻.
        - 이 경우 해당 아이템의 beauty 값을 `maxNum`에 저장.
        - 더 큰 beauty 값을 찾기 위해 `left`를 `mid + 1`로 옮겨 오른쪽 절반에서 탐색 한다.
    - `items[mid][0] > queries[i]`인 경우
        - 현재 아이템의 가격이 쿼리 가격보다 크므로, `right`를 `mid - 1`로 옮겨 왼쪽 절반에서 탐색을 이어간다.
3. **종료 조건**
    - `left`가 `right`보다 커질 때까지 반복하며, 조건을 만족하는 범위에서 최대 beauty 값을 찾는다.

## 회고

이번 문제는 주어진 가격 이하에서 beauty가 최대인 아이템을 찾는 과정을 효율적으로 구현하는 데 중점을 두었다.

핵심은 가격 기준으로 정렬 후 누적된 최대 beauty 값을 미리 계산해 두고, 각 쿼리에서 이진 탐색을 활용해 필요한 값을 빠르게 찾는 방식이었다. 

이진 탐색과 누적 값 계산을 통해 시간복잡도를 줄일 수 있었지만, 또 다른 최적화 방법들을 알아봐야겠다.
