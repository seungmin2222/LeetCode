## [**Combination Sum**](https://leetcode.com/problems/combination-sum/)

주어진 숫자 후보들(candidates) 중에서 합이 특정 값(target)이 되는 모든 조합을 찾는 문제다.

각 숫자는 여러 번 사용할 수 있다.

## 주요 포인트

1. **중복 선택 가능**
    - 후보 숫자(candidates)를 여러 번 선택할 수 있습니다. 즉, 한 숫자를 여러 번 사용할 수 있다는 점을 고려해야 한다.
2. **백트래킹 (Backtracking)**
    - 모든 가능한 조합을 시도해보고 조건에 맞는 조합만 결과에 추가하는 방식이다.
    - 백트래킹은 중간에 조건을 충족하지 못할 경우 탐색을 중단하고 되돌아가는 방식이다.
3. **순서 고려하지 않음**
    - 숫자의 순서는 중요하지 않으며, 같은 조합은 하나의 결과로 처리된다.

## 나의 코드

```tsx
var combinationSum = function(candidates, target) {
  const result = [];
  
  function backtrack (sum, combo, start) {
    if (sum === target) {
      result.push([...combo]);
      return;
    }
    
    if (sum > target) {
      return;
    }
    
    for (let i = start; i < candidates.length; i++) {
      combo.push(candidates[i]);
      backtrack(sum + candidates[i], combo, i);
      combo.pop();
    }
  }
  
  backtrack (0, [], 0)
  return result;
};
```

## 나의 수도 코드

1. 함수 combinationSum(후보 숫자 리스트 candidates, 목표 값 target)를 정의
    - 결과를 저장할 리스트 result를 초기화
2. 내부 함수 backtrack(현재 합 sum, 현재 조합 combo, 시작 인덱스 start)를 정의
    - 만약 sum이 target과 같다면
        - 현재 조합 combo를 복사하여 result에 추가
        - 종료
    - 만약 sum이 target보다 크다면
        - 더 이상 탐색할 필요가 없으므로 종료
    - 시작 인덱스 start부터 후보 숫자 리스트 candidates의 끝까지 반복
        - 현재 숫자를 combo에 추가
        - 현재 숫자를 합산한 새로운 sum 값으로 backtrack 함수를 호출
        - 탐색이 끝난 후 combo에서 마지막 숫자를 제거(백트래킹).
3. 초기 값으로 sum = 0, combo = 빈 리스트, start = 0을 전달하여 backtrack 함수를 호출
4. 결과 리스트 result를 반환

## 알아둬야 할 것!

1. **백트래킹(Backtracking)의 개념**
    - 백트래킹은 모든 가능한 조합을 탐색하면서 중간에 조건을 만족하지 못하는 경우 되돌아가는 방식이다.
2. **중복된 선택 허용**
    - 같은 숫자를 여러 번 선택할 수 있다는 조건을 잘 이해해야 한다.
    - 재귀 호출 시 `start` 인덱스를 고정해서 다음 탐색에서도 같은 숫자를 선택할 수 있도록 했다.
3. **종료 조건**
    - 합이 `target`과 일치하는 경우에는 해당 조합을 결과에 추가하고 종료, 합이 `target`을 초과하는 경우는 탐색을 중단하는 것이 핵심이다.
    - 이를 통해 불필요한 추가 계산을 막을 수 있다.
4. **조합 저장과 복사**
    - 조합이 완성되었을 때 그 조합을 복사해서 저장하는 방식(`result.push([...combo])`)이 중요하다.
    - 그렇지 않으면, 나중에 값이 변경되면서 저장된 값도 바뀔 수 있다.

## 회고

이번 문제를 풀면서 백트래킹의 원리를 다시 한 번 깊이 이해할 수 있었다.

처음에는 숫자를 중복으로 선택할 수 있는지, 언제 탐색을 종료해야 하는지 헷갈렸지만, 조건을 명확히 파악하니 문제의 풀이 과정이 한결 수월해졌다.

특히 백트래킹은 탐색 공간을 줄이는 데 효과적임을 실감했고, 불필요한 연산을 줄이는 것이 효율적인 알고리즘을 구성하는 핵심이라는 점을 다시 한 번 깨달았다.

또한, 재귀 호출을 통해 조합을 완성한 후 다시 원래 상태로 되돌아가는 과정(백트래킹의 핵심)도 중요한 학습 포인트였다.

이 문제는 중복 선택이 가능하다는 특수 조건이 있어 일반적인 조합 문제와는 차별점이 있었고,
이런 세부 조건을 정확히 반영하는 것이 중요한 문제 해결 방법임을 알게 되었다.
