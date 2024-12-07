## [**Maximum Number of Integers to Choose From a Range I**](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/)

주어진 범위 [1, n]에서 배열 banned에 포함되지 않고, 합이 maxSum을 초과하지 않도록 최대 개수의 정수를 선택하는 문제이다.

## 주요 포인트

1. **범위 제한** : 선택할 수 있는 정수는 [1, n] 범위에 있어야 함.
2. **배제 조건** : banned 배열에 포함된 숫자는 선택할 수 없음.
3. **합 제한** : 선택된 정수들의 합은 maxSum을 초과할 수 없음.
4. **최대 개수** : 가능한 최대 개수의 정수를 선택해야 함.
5. **중복 없음** : 각 정수는 한 번만 선택 가능.

## 나의 코드

```tsx
var maxCount = function(banned, n, maxSum) {
  let sum = 0;
  let count = 0;
  
  for (let i = 1; i <= n; i++) {
    if (!banned.includes(i)) {
      if(sum + i <= maxSum) {
        count++;
        sum += i;
      } else {
        break;
      }
    }
  }
  
  return count;
};
```

## 나의 수도 코드

1. `sum = 0`, `count = 0`으로 합과 개수 변수 초기화.
2. 1부터 n까지 반복.
3. `i`가 `banned` 배열에 포함되지 않으면 다음 조건으로 이동.
4. `sum + i`가 `maxSum` 이하이면 `count` 증가하고, `sum`에 `i` 더하기.
5. `sum + i`가 `maxSum`을 초과하면 반복 종료.
6. `count` 반환.

## 시간 복잡도

1. `for`문은 1부터 n까지 반복하므로, 최악의 경우에는 `O(n)`이 된다.
2. `banned.includes(i)`는 배열 `banned`에서 `i`가 포함되어 있는지 확인하는 과정이다.
배열에서 특정 값이 포함되어 있는지 확인하는 시간 복잡도는 `O(m)`이다.
여기서 `m`은 `banned` 배열의 길이이다.
3. **최종 시간 복잡도는** `O(n * m)`

## 공간 복잡도

1. `sum`과 `count`는 각각 하나의 정수로, 이들의 공간 복잡도는 `O(1)`입니다.
2. `banned` 배열은 크기 `m`의 배열로, 공간 복잡도는 `O(m)`입니다.

**최종 공간 복잡도는** `O(m)`

## 다른 사람의 풀이

```tsx
var maxCount = function(banned, n, maxSum) {
  let sum = 0;
  let count = 0;
  
  let bannedSet = new Set(banned);
  
  for (let i = 1; i <= n; i++) {
    if (!bannedSet.has(i)) {
      if (sum + i <= maxSum) {
        count++;
        sum += i;
      } else {
        break;
      }
    }
  }
  
  return count;
};
```

### 다른 사람의 시간 복잡도

- **반복문**: `1`부터 `n`까지 반복하므로 `O(n)`.
- **Set의 포함 여부 검사**: `Set`의 `has()` 메소드는 `O(1)`이므로 각 반복에서 `O(1)`의 시간 복잡도로 검사할 수 있다.

최종 시간 복잡도 : `O(n)`

### 다른 사람의 공간 복잡도

- **변수** : `sum`, `count`는 각각 `O(1)`.
- **Set** : `bannedSet`은 `O(m)` 공간을 차지한다.
`banned` 배열의 길이가 `m`.

최종 공간 복잡도: `O(m)`

## 알아둬야 할 것!

1. **배열을 Set으로 변환**
    - `banned` 배열을 `Set`으로 변환하여, **빠른 포함 여부 확인**을 할 수 있었음.
    - 배열에서 `includes()`를 사용하는 것보다 효율적이었다.
2. **합의 제한을 잘 관리**
    - 합이 `maxSum`을 초과하지 않도록 체크하면서, **조건을 초과하면 즉시 종료**하도록 구현했음.
    - 이는 불필요한 계산을 줄이는 데 도움이 됐다.
3. **시간 복잡도 관리**
    - 문제에서 요구하는 효율성에 맞춰 시간 복잡도 `O(n)`로 푸는 방법을 터특했다.
    - `banned` 배열을 `Set`으로 바꾸어 포함 여부를 `O(1)`로 확인한 점이 핵심.
4. **공간 복잡도**
    - `Set`을 사용하여 **`banned` 배열을 효율적으로 저장**했으며, 공간 복잡도는 예상대로 `O(m)`로 잘 관리됨.

## 회고

이번 문제를 풀 때, 최소값부터 차례대로 숫자를 선택하는 접근이 매우 효과적이었다.

`banned` 배열을 `Set`으로 변환하여 포함 여부를 빠르게 확인함으로써 효율성을 높일 수 있었다.

합이 `maxSum`을 초과할 경우 즉시 반복을 종료하는 방식으로 불필요한 계산을 줄였다.

시간 복잡도를 `O(n)`으로 잘 관리하는 법을 배웠으며, 공간 복잡도 역시 예상대로 `O(m)`으로 처리했다

 경계 조건을 잘 설정하여 문제를 정확하게 해결할 수 있었다.
