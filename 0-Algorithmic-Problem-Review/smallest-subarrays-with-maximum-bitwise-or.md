# [**Smallest Subarrays With Maximum Bitwise OR**](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/)

## 주요 포인트

- **비트 OR 연산 특성**: OR 연산은 비트를 점점 1로만 만드는 누적 성질이 있어, 뒤에서부터 순회하면서 필요한 비트가 언제 마지막으로 나타났는지 추적할 수 있다.
- **목표**: 각 인덱스 i에서 시작하는 서브배열 중 **최대 OR 값을 얻기 위해 필요한 최소 길이**를 찾는다.
- **핵심 아이디어**
    - 32개의 비트 각각에 대해 해당 비트가 마지막으로 등장한 인덱스를 기록.
    - i번째 위치에서 필요한 최대 범위 = i 이후에 해당 비트를 포함하기 위해 마지막으로 등장한 인덱스의 최댓값.
    - answer[i] = (maxReach - i + 1) 로 계산.

## 나의 코드

```tsx
var smallestSubarrays = function(nums) {
    const n = nums.length;
    const answer = Array(n).fill(1);
    const lastSeen = Array(32).fill(-1);
    
    for (let i = n - 1; i >= 0; i--) {
        for (let bit = 0; bit < 32; bit++) {
            if ((nums[i] >> bit) & 1) {
                lastSeen[bit] = i;
            }
        }

        let maxReach = i;
        for (let bit = 0; bit < 32; bit++) {
            if (lastSeen[bit] !== -1) {
                maxReach = Math.max(maxReach, lastSeen[bit]);
            }
        }
        answer[i] = maxReach - i + 1;
    }
    
    return answer;
};
```

## 나의 수도 코드

1. 배열 길이를 저장한다 → n = nums.length
2. 결과 배열을 초기화한다 → answer = n 길이 배열(1로 초기화)
3. 각 비트의 마지막 등장 인덱스를 기록할 배열을 만든다 → lastSeen = 32 길이 배열(-1로 초기화)
4. 배열을 뒤에서 앞으로 순회하며
    1. 현재 숫자의 각 비트를 확인하고, 1인 비트의 lastSeen[bit]을 현재 인덱스로 갱신
    2. maxReach = i로 설정
    3. 모든 비트를 확인해 maxReach = max(maxReach, lastSeen[bit])
    4. answer[i] = maxReach - i + 1로 갱신
5. answer 배열을 반환

## **시간 복잡도**

- **O(32 * n)** = **O(n)**
    
    각 인덱스에서 최대 32번 비트 체크.
    

## **공간 복잡도**

- **O(32) = O(1)**
    
    lastSeen 배열만 추가 사용.
    

## 알아둬야 할 것!

- **비트마스크 활용 문제**에서는 각 비트가 마지막으로 등장한 위치, 누적 OR/AND 특성을 역으로 추적하는 방법이 자주 쓰인다.
- OR 연산은 누적하면서 **1인 비트가 더 이상 사라지지 않는다**는 점을 활용할 수 있다.

## 회고

- 처음 접근 시 서브배열의 OR를 매번 계산하면 비효율적이라는 점을 깨닫고, **뒤에서부터 비트별 마지막 인덱스를 갱신하는 방식**으로 최적화 가능함을 알게 됐다.
- 비트마스크 기반 문제는 **비트별 독립성**을 인덱스 추적으로 활용하는 것이 핵심이다.
