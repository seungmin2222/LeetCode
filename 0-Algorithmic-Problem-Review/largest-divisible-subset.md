## [Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/description/?envType=daily-question&envId=2025-04-06)

이 문제는 정수 배열 nums에서 모든 원소 쌍이 서로 나누어떨어지는(subset 내에서 a % b == 0 또는 b % a == 0) 가장 큰 부분 집합을 찾는 문제이다.

## 주요 포인트

- 입력: 중복되지 않은 양의 정수 리스트 nums
- 출력: 가장 큰 부분 집합 answer 반환
- 조건: 부분 집합의 어떤 두 원소 a, b에 대해 a % b == 0 또는 b % a == 0 이 성립해야 함
- 여러 개의 해가 존재할 수 있으니, 그 중 아무거나 반환하면 됨

## 나의 코드

```jsx
var largestDivisibleSubset = function (nums) {
    nums.sort((a, b) => a - b);
    
    const n = nums.length;
    const dp = Array(n).fill(1);
    const prev = Array(n).fill(-1);

    let maxIndex = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if (dp[i] > dp[maxIndex]) {
            maxIndex = i;
        }
    }

    const result = [];
    let k = maxIndex;

    while (k !== -1) {
        result.push(nums[k]);
        k = prev[k];
    }

    return result.reverse();
};
```

## 나의 수도 코드

1. 정렬 : 작은 수부터 큰 수까지 비교해야 하므로 nums를 오름차순으로 정렬
2. DP 배열 dp[i] : nums[i]로 끝나는 가장 큰 divisible subset의 크기
3. prev 배열 : 부분집합을 역추적할 수 있게 이전 인덱스를 저장
4. 최댓값을 저장하면서 마지막 인덱스를 기록해 나중에 결과 복원

## 시간 복잡도

- 정렬 : O(n log n)
- DP : 이중 for문 O(n^2)

최종 시간 복잡도는 O(n^2) 이다.

## 공간 복잡도

- dp 배열: 길이 n → O(n)
- prev 배열: 길이 n → O(n)

최종 공간 복잡도는 O(n) 이다.

## 알아둬야 할 것!

1. 동적 프로그래밍 (DP)
    - dp[i]: nums[i]로 끝나는 가장 긴 divisible subset 길이
    - 최적 부분 구조, 중복 하위 문제의 전형적인 사례
2. Backtracking
    - 최댓값의 인덱스를 찾아 prev 배열을 따라가며 실제 subset을 복원
3. 정렬의 중요성
    - 작은 수부터 나누어떨어짐을 판단하기 위해 오름차순 정렬 필요
4. 문제 조건 해석의 중요성
    - 조건이 a % b === 0 || b % a === 0 → 즉, 두 수 중 하나가 다른 하나의 배수면 됨
    - 이 조건은 **트리처럼 상위 수에 여러 하위 수가 붙을 수 있는 구조**를 의미

## 회고

이 문제는 나누어떨어짐 조건을 만족하는 가장 큰 부분집합을 찾기 위해 DP가 필요하다는 걸 알게 되었다.
정렬 후 DP와 역추적을 활용해 문제를 해결했고, 부분집합 복원 과정에서 prev 배열의 중요성을 다시 느꼈다.
이번 문제를 통해 나누기 조건이 있는 부분집합 문제도 DP로 해결할 수 있다는 점을 배웠다.
또한 조건 해석과 복원 과정까지 고려한 문제 풀이 연습이 되었다.
