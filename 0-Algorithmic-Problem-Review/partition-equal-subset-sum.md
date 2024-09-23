## [**Partition Equal Subset Sum**](https://leetcode.com/problems/partition-equal-subset-sum/)

주어진 정수 배열을 두 개의 부분 집합으로 나누어 두 집합의 합이 같은지 확인하는 문제다.

배열의 요소를 적절히 조합하여 이러한 파티션이 가능한지를 판단해야 한다.

## 주요 포인트

1. **배열의 합**
    - 배열의 모든 요소를 합산하여 총합을 구하는 방법.
2. **부분 집합의 합**
    - 주어진 배열에서 선택한 요소들의 합이 특정 값(여기서는 총합의 절반)과 같은지 확인하는 문제.
3. **백트래킹**
    - 가능한 모든 조합을 탐색하는 알고리즘 기법으로, 특정 조건을 만족할 때까지 재귀적으로 탐색하는 방법.
4. **메모이제이션**
    - 재귀 호출을 통해 계산한 값을 저장하여 중복 계산을 방지하는 기법, 이를 통해 성능을 향상시킬 수 있음.

## 나의 코드

```jsx
var canPartition = function(nums) {
   const totalSum = nums.reduce((acc, num) => acc + num, 0);

  if (totalSum % 2 !== 0) return false;

  const target = totalSum / 2;
  const n = nums.length;
  
  const memo = Array.from({ length: n }, () => Array(target + 1).fill(-1));

  const backtrack = (index, currentSum) => {
    if (currentSum === target) return true;
    if (currentSum > target || index >= n) return false;
    
    if (memo[index][currentSum] !== -1) {
      return memo[index][currentSum];
    }

    const includeCurrent = backtrack(index + 1, currentSum + nums[index]);
    const excludeCurrent = backtrack(index + 1, currentSum);

    memo[index][currentSum] = includeCurrent || excludeCurrent;
    return memo[index][currentSum];
  };

  return backtrack(0, 0);
};
```

## 나의 수도 코드

1. 함수 `canPartition(nums)` 정의
2. 배열 `nums`의 모든 요소의 합을 계산하여 `totalSum`에 저장
3. 만약 `totalSum`이 홀수라면 `false` 반환 (두 부분으로 나눌 수 없음)
4. `target`을 `totalSum`의 반으로 설정
5. `n`을 `nums`의 길이로 설정
6. `memo`를 크기가 `n x (target + 1)`인 2차원 배열로 초기화 (-1로 채움)
7. `backtrack(index, currentSum)` 함수 정의
    - 만약 `currentSum`이 `target`과 같다면 `true` 반환
    - 만약 `currentSum`이 `target`을 초과하거나 `index`가 `n`을 초과하면 `false` 반환
    - 만약 `memo[index][currentSum]`이 -1이 아니라면 저장된 값을 반환
    - 현재 요소를 포함하는 경우와 포함하지 않는 경우에 대해 재귀 호출
    - `memo[index][currentSum]`에 두 경우의 논리합을 저장
    - `memo[index][currentSum]` 반환
8. `backtrack(0, 0)` 호출하여 결과 반환

## 다른 사람의 풀이

```jsx
var canPartition = function(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    
    if (totalSum % 2 !== 0) return false;

    const target = totalSum / 2;
    const n = nums.length;
    
    const dp = Array(target + 1).fill(false);
    dp[0] = true;
    
    for (let num of nums) {
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }

    return dp[target];
};
```

## 다른 사람의 수도 코드

1. **전체 합 계산**
    - `totalSum`을 0으로 초기화
    - 각 `num`에 대해 `totalSum = totalSum + num`을 수행
2. **홀수 확인**
    - 만약 `totalSum % 2 != 0`이면 `false`를 반환
3. **목표 값 설정**
    - `target = totalSum / 2`
    - `n = 길이(nums)`
4. **동적 프로그래밍 배열 초기화**
    - `dp`를 `target + 1` 크기의 배열로 초기화하고, 모든 값을 `false`로 설정
    - `dp[0] = true` (0은 항상 만들 수 있음)
5. **dp 배열 업데이트**
    - 각 `num`에 대해 `j`를 `target`부터 `num`까지 역순으로 반복하면서
        - `dp[j] = dp[j] 또는 dp[j - num]`
6. **목표 값의 도달 가능성 반환**
    - `dp[target]`를 반환

## 두 코드의 차이

### 1. 알고리즘 접근 방식

- **나의 코드 (Backtracking + Memoization)**
    - 이 코드는 **백트래킹** 기법을 사용하여 가능한 모든 조합을 탐색한다.
    - 각 숫자를 포함하거나 포함하지 않는 두 가지 선택을 하고, 재귀적으로 다음 인덱스로 넘어간다.
    - `memo` 배열을 사용하여 중복 계산을 방지하고, 이미 계산된 상태를 기억하여 성능을 향상시킨다.
- **다른 사람의 코드 (Dynamic Programming)**
    - 이 코드는 **동적 프로그래밍**을 사용하여 문제를 해결한다.
    - 1차원 배열 `dp`를 사용하여 각 합을 만들 수 있는지 여부를 저장한다.
    - 각 숫자에 대해, 가능한 합을 역순으로 업데이트하여 부분 문제의 결과를 점진적으로 축적한다.

### 2. 시간 복잡도

- **나의 코드**
    - 최악의 경우 모든 조합을 탐색해야 하므로 지수 시간 복잡도(`O(2^n)`)를 가진다.
    - 메모이제이션 덕분에 효율성이 조금 향상될 수 있지만 여전히 비효율적이다.
- **다른 사람의 코드**
    - 동적 프로그래밍 접근법은 시간 복잡도가 `O(n * target)`으로, 비교적 더 효율적이다.
    - 이는 문제를 더 작은 부분으로 나누어 해결하기 때문에 가능하다.

### 3.  구현의 직관성

- **나이 코드**
    - 더 직관적일 수 있지만, 재귀 및 메모이제이션을 사용하기 때문에 이해하기 어려울 수 있다.
- **다른 사람의 코드**
    - 동적 프로그래밍의 접근은 비교적 간단하고, 코드 흐름이 명확하여 이해하기 쉬울 수 있다.

### 결론

- **나의 코드**는 문제를 직관적으로 접근할 수 있게 해주지만 성능이 낮다.
- **다른 사람의 코드**는 더 효율적이고, 대규모 데이터셋에 대해 더 나은 성능을 제공한다.

## 알아둬야 할 것!

- **문제 이해**
    - 주어진 배열을 두 부분으로 나누어 각 부분의 합이 같은지 확인하는 문제로, 합이 홀수인 경우 즉시 `false`를 반환해야 함.
- **알고리즘 선택**
    - **동적 프로그래밍**과 **백트래킹**의 차이를 이해하고, 문제의 성격에 따라 적절한 방법을 선택하는 것이 중요함.
    - 동적 프로그래밍은 효율적이며, 메모리 사용이 적은 경우에 유리함.
- **시간 및 공간 복잡도 분석**:
    - 각 접근 방식의 시간 및 공간 복잡도를 분석하여, 대규모 데이터셋에 적합한 알고리즘을 선택하는 것이 중요함.
    - 효율적인 알고리즘이 문제 해결에 미치는 영향을 이해해야 함.
- **유사 문제 탐색**:
    - 이 문제와 유사한 다른 문제들(예: 배낭 문제, 부분 집합 합 문제 등)에 대한 이해를 높이고, 다양한 해결 방법을 연습하여 알고리즘적 사고를 확장하는 것이 필요함.

## 회고

문제를 처음 접했을 때, 주어진 배열을 두 부분으로 나누는 것의 중요성을 깨달았다.

합이 홀수일 경우 즉시 `false`를 반환해야 한다는 점이 핵심이었다.

초기에 백트래킹으로 접근해야겠다는 생각이 들었고, 다른 사람의 코드를 보면서 동적 프로그래밍으로 푼 것을 확인했다.

그 접근 방식이 더 효율적이라는 판단이 들었지만, 결국에는 백트래킹으로 풀었다.

다음에는 동적 프로그래밍으로 해결해야겠다는 다짐을 하게 되었다.
