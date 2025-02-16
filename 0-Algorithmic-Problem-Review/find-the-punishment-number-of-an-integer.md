## [Find the Punishment Number of an Integer](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/description/?envType=daily-question&envId=2025-02-15)

1~n까지의 숫자 중에서 특정 조건(제곱수를 연속된 부분 문자열로 나눴을 때 그 합이 원래 숫자와 같은 경우)을 만족하는 수들의 제곱의 합을 구하는 문제이다다.

## 주요 포인트

1. i * i (제곱수)를 문자열로 변환하여 연속된 부분 문자열들로 나누는 모든 경우의 수를 고려해야 함
2. 부분 문자열들의 합이 원래 숫자 i와 같은지 확인해야 함 (예: 81 -> 8+1 = 9)
3. 조건을 만족하는 수들의 제곱값을 모두 더해야 함
4. 문자열 파티셔닝(분할)을 위한 재귀 또는 백트래킹 접근이 필요할 것으로 보임

## 나의 코드

```jsx
var punishmentNumber = function(n) {
  const canPartition = (str, target, start, sum) => {
        if (start === str.length) {
            return sum === target;
        }
        
        for (let i = 1; i <= str.length - start; i++) {
            const num = Number(str.slice(start, start + i));
            if (canPartition(str, target, start + i, sum + num)) {
                return true;
            }
        }
        return false;
    };

    let result = 0;
    
    for (let i = 1; i <= n; i++) {
        const square = i * i;
        if (canPartition(square.toString(), i, 0, 0)) {
            result += square;
        }
    }
    
    return result;
};
```

## 나의 수도 코드

1. `punishmentNumber` 함수 (메인)
    1. 1부터 n까지 순회
    2. 각 숫자의 제곱값을 구함
    3. 조건 만족시 결과값에 제곱값 더함
2. `canPartition` 함수 (재귀)
    1. 문자열 끝까지 도달하면 target과 sum 비교
    2. 현재 위치에서 가능한 모든 길이의 부분문자열 시도
    3. 각 부분문자열에 대해 재귀 호출
    4. 하나라도 조건 만족하면 true 반환

## 시간 복잡도

- n: 입력값 크기
- m: 제곱수의 자릿수 최대 길이
- 각 숫자마다 가능한 모든 파티션을 시도 (2^m)

최종 시간 복잡도는 O(n * 2^m)이다.

## 공간 복잡도

- 재귀 호출 스택의 최대 깊이
- 문자열의 길이(n)만큼의 재귀 호출이 발생

최종 공간 복잡도는 O(n)이다.

## 알아둬야 할 것!

1. 문자열 파티셔닝 (String Partitioning)
    - 문자열을 연속된 부분으로 나누는 다양한 방법을 이해
    - slice, substring 등의 문자열 메서드 활용법
2. 재귀적 사고방식 (Recursive Thinking)
    - 문제를 작은 단위로 나누어 해결하는 접근법
    - 기저 조건(base case)의 중요성
    - start 위치를 이동시키며 문제를 해결하는 방식
3. 파라미터 관리
    - 재귀 함수에서 필요한 파라미터들(문자열, 목표값, 시작위치, 현재합)을 관리
    - 각 파라미터의 역할과 상태 변화 이해
4. 숫자-문자열 변환
    - toString()으로 숫자를 문자열로 변환
    - parseInt()로 문자열을 다시 숫자로 변환하는 과정
5. 누적 합 계산 (Running Sum)
    - 부분 문자열들의 합을 누적해가며 목표값과 비교
    - 최종 결과값에 제곱수를 더해가는 과정

## 회고

처음에는 단순한 문자열 분할 문제로 접근했으나, 모든 가능한 분할 케이스를 고려해야 하는 재귀적 문제임을 파악하는데 시간이 걸렸다.

문제의 핵심은 시작 위치를 이동시키며 가능한 모든 파티션을 시도하고, 각 단계에서 현재까지의 합을 추적하면서 목표값과 비교하는 것이었다.

재귀 함수에서의 파라미터 관리와 문자열 처리의 중요성을 배웠고, 기본적인 재귀와 문자열 파티셔닝 개념을 복습할 수 있는 좋은 기회였다.

특히 문자열을 분할할 때 길이를 1부터 증가시키며 체크하는 방식이 효과적이었고, 이를 통해 문제 해결의 완성도를 높일 수 있었다.
