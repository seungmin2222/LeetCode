## [**Special Array II**](https://leetcode.com/problems/special-array-ii/)

주어진 배열에서 특정 범위(쿼리) 내 요소들이 홀짝 패턴이 번갈아가며 나타나는지(`special array`)를 확인하는 문제이다.

## 주요 포인트

1. **Special Array 정의** : 인접한 숫자들의 홀짝이 서로 달라야 함.
2. **쿼리 처리 목표** : 주어진 구간 `[fromi, toi]`가 special인지 판단.
3. **핵심 로직** : 인접한 원소의 홀짝만 빠르게 비교.
4. **효율성 고려** : 반복 계산 최소화.

## 나의 코드

```tsx
 const result = [];
  
  function isSpecial(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if ((arr[i] % 2) === (arr[i + 1] % 2)) {
        return false;
      }
    }
    
    return true;
  }
  
  for (let i = 0; i < queries.length; i++) {
    const subArray = nums.slice(queries[i][0], queries[i][1] + 1);
    result.push(isSpecial(subArray));
  }
  
  return result;
```

## 나의 수도 코드

1. 빈 배열 `result`를 초기화.
2. `arr`의 인접한 두 원소를 순회하면서 만약 두 원소의 홀짝이 같으면 `false`를 반환.
3. 모든 인접 원소의 홀짝이 다르면 `true`를 반환.
4. `nums` 배열에서 `[fromi, toi]` 구간의 서브배열을 추출.
5. 이 서브배열을 `isSpecial`로 검사하여 결과를 `result` 배열에 추가.
6. 최종적으로 `result` 배열을 반환.

## 시간 복잡도

1. **`isSpecial` 호출 (서브배열 검사)**
    - 각 서브배열의 길이를 `m`이라고 하면, 시간복잡도는 `O(m)`.
2. **전체 쿼리 반복**
    - `queries` 배열에 대해 루프를 돌며 각 쿼리에 대해 서브배열을 검사.
    - 서브배열 추출 `O(toi - fromi)` + `isSpecial` 호출 `O(toi - fromi)` = `O(2 * (toi - fromi)) = O(toi - fromi)`.
    - 모든 쿼리를 반복하면 최악의 경우 `O(k * m)`, 여기서 `k`는 쿼리 수, `m`은 평균 서브배열 길이.

**최악의 시간복잡도는** `O(k * m)` = `O(k * n)`.

## 공간 복잡도

1. **추가 공간 사용**
    - `result` 배열: 크기 `O(k)`.
    - `subArray` 임시 배열: 크기 최대 `O(n)` (서브배열 크기).
2. **함수 호출 스택**
    - `isSpecial` 함수의 스택 공간 사용 `O(1)`.

**최악의 공간복잡도는** `O(k + n)`.

## 다른 사람의 풀이

```tsx
var isArraySpecial = function(nums, queries) {
  const n = nums.length;
  const patternChange = new Array(n - 1).fill(false);

  for (let i = 0; i < n - 1; i++) {
    if ((nums[i] % 2) !== (nums[i + 1] % 2)) {
      patternChange[i] = true;
    }
  }

  const prefixSum = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + (patternChange[i - 1] ? 0 : 1);
  }

  const result = [];
  for (const [start, end] of queries) {
    const isSpecial = (prefixSum[end] - prefixSum[start]) === 0;
    result.push(isSpecial);
  }

  return result;
};
```

## 다른 사람의 수도 코드

1. `nums` 배열의 길이를 `n`으로 설정한다.
2. 길이가 `n-1`인 배열 `patternChange`를 `false`로 초기화.
3. 인접한 두 원소의 홀짝이 다르면 해당 인덱스를 `true`로 설정.
4. `prefixSum` 배열을 길이 `n`으로 초기화하고 첫 번째 원소를 0으로 설정.
5. `nums`의 각 인덱스를 순회하며 `patternChange` 값을 기반으로 누적 합을 계산.
6. 인접한 두 원소가 같은 홀짝이면 `prefixSum` 값을 증가.
7. 결과를 저장할 빈 배열 `result`를 초기화.
8. 각 쿼리 `[start, end]`에 대해
    - `prefixSum[end] - prefixSum[start]` 값이 0이면 `true`
    - 아니면 `false`를 `result` 배열에 추가.
9. 최종적으로 `result` 배열을 반환.

## 다른 사람의 시간 복잡도

- Preprocessing (`patternChange` 및 `prefixSum` 계산): `O(n)`.
- 각 쿼리 처리 : `O(1)`.
- 모든 쿼리 처리 : `O(k)`.

**최종 시간복잡도** : `O(n + k)` (훨씬 개선됨).

## 다른 사람의 공간 복잡도

- `patternChange` 및 `prefixSum` 배열 : `O(n)`.
- `result` 배열: `O(k)`.

**최종 공간복잡도**: `O(n + k)` (비슷하지만 더 효율적).

## 알아둬야 할 것!

1. **Prefix Sum 활용**
    - 누적 합 배열은 구간 합이나 특정 패턴 확인 등 다양한 문제에서 반복 계산을 줄이는 데 유용함.
2. **쿼리 최적화**
    - 매번 서브배열을 생성하지 않고, 사전 계산된 데이터를 활용하여 쿼리를 O(1)로 처리 가능.
3. 문제를 풀 때 각 요소의 상태 변화(여기서는 홀짝 변화)를 기록하는 배열로 문제를 단순화할 수 있음.

## 회고

이 문제를 풀면서 효율적인 쿼리 처리를 위해 프리컴퓨팅과 누적 합(prefix sum)을 활용하는 방법을 배울 수 있었다. 초기 풀이법은 간단하고 직관적이었으나, 시간복잡도가 비효율적이어서 개선이 필요했고, 최적화 과정을 통해 문제를 구간 검사에서 상태 변화 확인으로 단순화하고, 이를 일반화된 방식으로 알게 되었다. 그리고 경계 조건 처리와 테스트 케이스 설계의 중요성을 다시 한번 깨달았다.

앞으로도 효율성과 코드의 확장성을 고려한 접근을 연습해야겠다.
