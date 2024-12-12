## [**Minimum Limit of Balls in a Bag**](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/)

각 가방에 있는 공의 개수를 나누어, 한 가방에 있는 공의 최대 개수를 최소화하는 것이다.

이 과정에서 나눌 수 있는 최대 횟수는 `maxOperations`이다.

## 주요 포인트

1. **이진 탐색 활용**
    - 최소 패널티를 구하기 위해 `[1, max(nums)]` 범위에서 이진 탐색을 사용한다.
2. **보조 함수 구현**
    - `canDivide` 함수를 사용하여 주어진 패널티로 제한이 가능한지 확인한다.
3. **작업 계산**
    - 각 가방의 공 개수를 주어진 패널티로 나누기 위해 필요한 작업 횟수는 `Math.ceil(balls / penalty) - 1`로 계산한다.
4. **결과 추적**
    - `canDivide`가 `true`를 반환하는 가장 작은 패널티를 기록하여 반환한다.

## 나의 코드

```tsx
var minimumSize = function(nums, maxOperations) {
  const canDivide = (penalty) => {
    let operations = 0;
    
    for (const balls of nums) {
        operations += Math.ceil(balls / penalty) - 1;
        if (operations > maxOperations) return false;
    }
    
    return true;
  };

  let left = 1;
  let right = Math.max(...nums);
  let result = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (canDivide(mid)) {
        result = mid;
        right = mid - 1;
    } else {
        left = mid + 1;
    }
  }

  return result;
};
```

## 나의 수도 코드

1. `canDivide(penalty)` 함수는 현재 패널티 값으로 모든 가방을 나눌 수 있는지 확인.
2. 각 가방에 대해 나누기 작업 횟수를 계산하고, 총 작업 횟수가 `maxOperations`를 초과하면 `false` 반환.
3. `left`가 `right`보다 작거나 같을 때까지 반복
    1. 중간값 `mid` 계산.
    2. `canDivide(mid)`가 `true`면, 현재 `mid`를 결과값으로 업데이트하고, `right`를 줄여 더 작은 패널티 탐색.
    3. `false`면, `left`를 증가시켜 더 큰 패널티 탐색.
4. `canDivide` 조건을 만족하는 최소 패널티 값을 반환.

## 시간 복잡도

1. **이진 탐색 단계**
    - 이진 탐색의 탐색 범위는 `[1, M]`.
    여기서 M은 `nums` 배열의 최대값을 나타낸다.
    - 이진 탐색의 시간 복잡도는  O(log(M)).
2. **`canDivide` 함수 실행**
    - 각 이진 탐색 단계에서 `canDivide` 함수는 `nums` 배열의 길이 N에 비례하여 실행.
    - 고로`canDivide`의 시간 복잡도는 O(N).

이진 탐색과 `canDivide` 호출을 결합하면, 전체 시간 복잡도는 O(N⋅log(M)).

## 공간 복잡도

1. **추가 공간 사용**
    - 입력 배열 `nums` 외에는 상수 공간만 사용한다.

**총 공간 복잡도**

- 공간 복잡도는 O(1).

## 알아둬야 할 것!

- **이진 탐색의 활용**
    - 특정 조건을 만족하는 최적값(최소값 또는 최대값)을 찾는 데 이진 탐색을 사용할 수 있다는 점.
    - 탐색 범위를 설정하고, 중간값(`mid`)을 기준으로 조건을 확인하는 방식.
- **보조 함수의 역할**
    - `canDivide`와 같은 보조 함수로 문제의 조건을 만족하는지 검증하는 방법.
    - 문제를 작은 단위로 나눠서 해결할 수 있는지 판단.
- **문제의 일반화**
    - 최대값(또는 최소값)을 최적화하는 문제를 해결할 때, 이진 탐색을 활용하는 패턴을 다른 문제에도 적용 가능.

## 회고

처음 문제를 접했을 때, 가방을 나눠야 하는 조건과 그로 인해 발생하는 패널티를 최소화해야 한다는 점에서 이진 탐색 접근법이 떠올랐다.

이진 탐색은 단순히 정렬된 데이터에서 값을 찾는 데만 사용하는 것이 아니라, 최적값을 탐색하는 데도 유용하다는 점을 깨달았다.

탐색 범위를 `left`와 `right`로 좁혀가며 조건을 만족하는 최소값을 찾아내는 패턴은 자주 나오는 패턴이라 잘 익혀둬야겠다고 생각했다.

앞으로 비슷한 최적화 문제를 만난다면 이번 경험을 적극 활용할 수 있을 것 같다.
