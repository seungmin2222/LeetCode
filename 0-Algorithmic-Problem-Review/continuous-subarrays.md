## [**Continuous Subarrays**](https://leetcode.com/problems/continuous-subarrays/)

문제는 0부터 시작하는 정수 배열 `nums`가 주어졌을 때, 연속적인 서브어레이(continuous subarray)의 개수를 구하는 것이다.

## 주요 포인트

1. **서브어레이(Subarray)의 정의**
    - 배열에서 **연속된 원소들**로 이루어진 부분 배열.
2. **절대값의 정의 및 계산 방법**
    - 두 숫자 a, b의 차이의 절대값
3. **모든 인덱스 쌍 검사**
    - 서브어레이 내의 두 원소를 비교하려면 모든 인덱스 쌍 i1, i2 (i1 ≤ i2)에 대해 조건을 확인해야 함.
    - 단순한 경우의 수: 서브어레이 길이가 n일 때 가능한 쌍의 개수는 2n(n + 1).

## 나의 코드

```tsx
var continuousSubarrays = function(nums) {
    let count = 0; 
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        let maxVal = nums[i], minVal = nums[i];
        for (let j = i; j < n; j++) {
            maxVal = Math.max(maxVal, nums[j]);
            minVal = Math.min(minVal, nums[j]);

            if (maxVal - minVal <= 2) {
                count++;
            } else {
                break;
            }
        }
    }
    return count;
};
```

## 나의 수도 코드

1. **시작점 설정**
    - `count = 0`
    - 반복: i = 0부터 i = n − 1까지
        - `maxVal = nums[i]`, `minVal = nums[i]`
2. **끝점 확장 및 조건 확인**
    - 반복: j=i부터 j=n−1까지
        - `maxVal = max(maxVal, nums[j])`
        - `minVal = min(minVal, nums[j])`
        - 조건 확인
            - 0 ≤ maxVal − minVal ≤ 20 이면 `count++`
            - 조건 위반 시 반복 종료
3. 최종 `count` 반환.

## 시간 복잡도

- **외부 반복문 (i)**
    - n번 반복 (i = 0부터 i = n − 1).
- **내부 반복문 (j)**
    - 최악의 경우 n − i번 반복.
    - 각 반복에서 `Math.max`와 `Math.min`은 하나의 원소를 비교해 갱신하기 때문에 O(1).
        
        O(1)
        

시간복잡도는 O(n^2)

## 공간 복잡도

1. **고정 메모리 사용**
    - 변수 `count`, `maxVal`, `minVal` 등 → O(1).
        
        O(1)O(1)
        
2. **추가 배열 사용 제거**
    - 서브어레이 복사(`slice`) 제거 → 메모리 절약.

최적화 후 공간복잡도는 O(1).

## 알아둬야 할 것!

- **최댓값과 최솟값 계산**
    - 서브어레이의 최댓값(`maxVal`)과 최솟값(`minVal`)을 업데이트하며 조건 maxVal − minVal ≤ 2 확인.
        
        maxVal − minVal ≤ 2
        
    - 현재 코드에서는 `Math.max`와 `Math.min`으로 반복적으로 계산.
- **중단 조건(Break Condition)**
    - 조건 maxVal − minVal > 2를 만족하지 않을 경우 내부 반복문을 중단.
        
        maxVal − minVal > 2
        
    - 이를 통해 불필요한 반복을 방지.

## 회고

문제를 풀지 못한 이유는 **효율성에 대한 최적화 접근 부족**과 **슬라이딩 윈도우나 덱과 같은 고급 기법의 활용 미흡**

때문이었다.

조건을 만족하는 서브어레이를 계산했지만, O(n^2)이상의 시간복잡도를 가진 코드로는 입력이 커질수록 비효율적이라는 점을 간과했다.

또한, 문제를 풀기 전에 최댓값/최솟값을 효율적으로 관리하는 자료구조에 대한 사전 지식이 부족했다.

이번 경험을 통해 최적화 알고리즘 설계와 자료구조 활용의 중요성을 배웠으며, 다음에는 효율성 개선에 초점을 맞춰서 다시 도전해봐야 겠다.
