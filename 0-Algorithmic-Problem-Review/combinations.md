## [**Combinations**](https://leetcode.com/problems/combinations/)

**1부터 n까지의 숫자 중에서 k개의 숫자를 선택하여 만들 수 있는 모든 조합을 구하는 문제이다.**

## 주요 포인트

1. **조합(Combination)**
    - 순서에 상관없이 특정 개수의 원소를 선택하는 방법.
2. **백트래킹(Backtracking)**
    - 가능한 모든 경우를 탐색하면서 조건을 만족하지 않으면 탐색을 중단하는 알고리즘 기법.
3. **재귀 함수(Recursion)**
    - 함수가 자기 자신을 호출하여 문제를 해결하는 방법.

## 나의 코드

```tsx
var combine = function(n, k) {
  const result = [];
  const combination = [];

  function backtrack(start) {
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i <= n; i++) {
      combination.push(i);
      backtrack(i + 1); 
      combination.pop();
    }
  }

  backtrack(1);
  
  return result;
}
```

## 나의 수도 코드

1. **`backtrack` 함수 정의**
    - `start`는 반복문의 시작점.
        - 이를 통해 숫자를 중복해서 선택하지 않도록 보장.
    - 조합의 길이가 `k`가 되면 `combination`의 복사본을 `result`에 추가.
2. **백트래킹 수행**
    - `for` 루프에서 현재 숫자 `i`를 `combination`에 추가하고, 재귀 호출로 다음 숫자를 추가.
    - 재귀 호출이 끝난 뒤에는 마지막으로 추가된 숫자를 제거(`combination.pop()`)하여 이전 상태로 돌아아감.
3. **최종 결과 반환**
    - `backtrack` 함수 호출이 끝난 뒤 모든 조합이 `result`에 저장되고, 이를 반환함.

## 알아둬야 할 것!

1. **재귀를 이용한 조합 생성 알고리즘**
    - `backtrack` 함수를 사용하여 모든 가능한 조합을 재귀적으로 생성하는 법을 익힘.
    - 시작점부터 `n`까지의 숫자를 순차적으로 선택하고 조합의 길이가 `k`가 될 때까지 탐색.
2. **큰 입력 값 처리 시 주의사항**
    - `n`과 `k`의 값이 크면 조합의 수가 기하급수적으로 증가하여 시간과 메모리 사용량이 급증함.
    - 이러한 경우 효율적인 알고리즘이나 메모리 관리 기법이 필요함.
3. **이항 계수의 성질과 계산 방법 이해**
    - 이항 계수의 성질을 활용하면 조합 수를 효율적으로 계산할 수 있음.

## 회고

이번 문제를 통해 조합 생성 알고리즘의 핵심 원리와 그에 따른 시간 및 공간 복잡도를 깊이 있게 이해하게 되었다.

또한 재귀 함수를 사용할 때는 호출 스택의 깊이와 메모리 사용량을 고려해야 한다는 점도 중요하게 느꼈다.

앞으로 알고리즘을 설계하거나 코드를 작성할 때 입력 값의 규모에 따른 성능 변화를 사전에 예측하고, 효율성을 높이기 위한 방법들을 찾아봐야겠다.
