## [Sum of All Subset XOR Totals](https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/)

이 문제는 정수 배열이 주어졌을 때, 모든 부분집합의 XOR 총합을 구하는 문제이다.

비어있는 부분집합도 포함되며, XOR 총합이란 각 부분집합의 XOR 결과를 모두 더한 값을 의미한다.

## 주요 포인트

- 모든 부분집합을 구해서 그에 대한 XOR 결과를 계산해야 한다.
- 재귀(DFS) 또는 비트마스크를 통해 부분집합을 생성할 수 있다.
- 핵심은 부분집합 생성 + XOR 누적이다.
- 비트마스크 방법을 쓰면 for 반복문만으로도 해결 가능하다.

## 나의 코드

```jsx
var subsetXORSum = function(nums) {
    let total = 0;
    const n = nums.length;

    for (let mask = 0; mask < (1 << n); mask++) {
        let xor = 0;
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                xor ^= nums[i];
            }
        }
        total += xor;
    }

    return total;
};
```

## 나의 수도 코드

1. 모든 부분집합을 순회한다.
2. 각 부분집합마다 포함된 원소들의 XOR 값을 계산한다.
3. 해당 XOR 값을 전체 결과에 누적하여 더한다.
4. 전체 부분집합에 대해 위 작업을 반복한다.
5. 최종 누적값을 리턴한다.

## 시간 복잡도

- 부분집합의 수는 2^n개
- 각 부분집합마다 최대 n개의 원소에 대해 XOR 연산

최종 시간 복잡도는 O(n * 2^n) 이다.

## 공간 복잡도

- DFS 사용 시 재귀 깊이만큼 콜 스택 사용

최종 공간 복잡도는 O(n) 이다.

## 다른 사람의 코드

```jsx
var subsetXORSum = function(nums) {
    let total = 0;

    function dfs(index, currentXOR) {
        if (index === nums.length) {
            total += currentXOR;
            return;
        }

        dfs(index + 1, currentXOR);
        dfs(index + 1, currentXOR ^ nums[index]);
    }

    dfs(0, 0);
    return total;
};
```

## 알아둬야 할 것!

1. 부분집합 생성 방식
    - DFS(재귀) 방식 또는 비트마스크를 이용해 구현 가능하다.
2. 비트마스크 테크닉
    - 0 ~ 2^n - 1까지 이진수로 생각하면 각 부분집합을 표현할 수 있다.
3. XOR 연산의 성질
    - 비트 단위의 연산으로, a ^ a = 0, a ^ 0 = a임을 활용한다.
4. 모든 부분집합의 XOR 총합은 재귀나 반복문으로 누적 가능

## 회고

이 문제는 부분집합을 탐색하는 대표적인 패턴을 다시 한번 연습할 수 있는 좋은 문제였다.

XOR의 수학적 성질을 이용해 더 빠르게 풀 수도 있지만, 이번엔 기본적인 방법에 집중해 문제 해결력을 높였다.

다음엔 수학 공식을 활용한 최적화 풀이도 적용해보고 싶다.
