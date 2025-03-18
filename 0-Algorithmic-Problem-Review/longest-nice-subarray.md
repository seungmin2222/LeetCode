## [Longest Nice Subarray](https://leetcode.com/problems/longest-nice-subarray/?envType=daily-question&envId=2025-03-18)

이 문제는 주어진 배열에서 "nice subarray"의 가장 긴 길이를 구하는 문제이다.

## 주요 포인트

1. **"Nice" Subarray 조건**
    - "Nice" subarray의 조건은 배열 내의 모든 서로 다른 원소들 간에 비트wise AND 결과가 0이어야 한다.
    - 이 조건을 만족하는 부분 배열을 찾는 것이 핵심이며, 이를 위해 비트wise AND 연산을 잘 활용해야 한다.
2. **부분 배열 탐색의 효율성**
    - 모든 부분 배열을 탐색하려면 **이중 반복문**을 사용하게 된다. 하지만, 문제를 풀 때 모든 가능한 부분 배열을 탐색하는 방식은 비효율적일 수 있으므로, 조건을 만족하는 구간을 효율적으로 찾아내는 방식이 필요하다.
    - 슬라이딩 윈도우 기법을 활용해, 중복된 계산을 피하고 최적의 "nice" subarray를 찾는 방법을 고려해야 한다.

## 나의 코드

```jsx
var longestNiceSubarray = function(nums) {
    let maxCount = 1;
    
    for (let i = 0; i < nums.length - 1; i++) {
        let count = 1;
        let currentAND = nums[i];
        
        for (let j = i + 1; j < nums.length; j++) {
            if ((currentAND & nums[j]) === 0) {
                currentAND |= nums[j];
                count++;
            } else {
                maxCount = Math.max(maxCount, count);
                break;
            }
        }
        
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};
```

## 나의 수도 코드

1. `currentAND` 추적
    - `currentAND`는 현재 "nice" subarray에 포함된 원소들의 비트wise AND 결과를 추적.
    - 처음 `i`를 시작할 때, `currentAND`는 `nums[i]`로 초기화.
2. `count` 초기화
    - `count`는 각 부분 배열의 길이를 추적하며, `nums[i]`부터 시작하므로 `count = 1`로 초기화.
3. 비트wise AND 조건 체크
    - `if ((currentAND & nums[j]) === 0)`는 `nums[i] & nums[j] == 0`이 아니라, 그동안 `currentAND`와 `nums[j]`의 AND 결과가 0인지 확인.
4. `maxCount` 갱신
    - 각 `i`에 대해 "nice" subarray의 길이를 계산한 후, `maxCount`를 갱신. `maxCount = Math.max(maxCount, count)`는 내외부 반복문에서 최종적으로 갱신.
5. 반복문 종료 시점
    - 만약 AND 결과가 0이 아닌 경우, 해당 부분 배열은 더 이상 "nice" subarray가 될 수 없으므로 `break`로 반복문을 종료.

## 시간 복잡도

1. 바깥쪽 반복문
    - 바깥쪽 반복문은 `i`가 배열의 길이만큼 순차적으로 증가하며 실행.
    - 따라서, 바깥쪽 반복문은 `nums.length` (n) 만큼 반복.
2. 안쪽 반복문
    - 안쪽 반복문은 `i`에서 시작하여 배열의 끝까지 순차적으로 `j`를 증가.
    - 만약 `i = 0`일 때, 안쪽 반복문은 `n-1`번 반복.
    - `i = 1`일 때는 `n-2`번, `i = 2`일 때는 `n-3`번, ..., `i = n-2`일 때는 1번 반복.
    
    따라서 안쪽 반복문은 최악의 경우에서 **전체적으로 n * (n-1) / 2 번** 반복.
    

최종 시간 복잡도는  O(n^2)이다.

## 공간 복잡도

- `maxCount`, `count`, `currentAND`, `i`, `j` 등의 변수들은 모두 상수 공간을 사용.
- 배열 `nums`만큼의 추가 공간을 사용하지 않으며, 입력 배열을 직접 수정하거나 복사하지 않음.

최종 공간 복잡도는 O(1)이다.

## 알아둬야 할 것!

1. **비트wise AND 연산 (Bitwise AND)**
    - 문제에서 요구하는 핵심 개념은 "nice" subarray를 정의하는 비트wise AND 연산이다.
    - 두 숫자의 비트wise AND 결과가 0이면 두 숫자의 비트가 겹치지 않는다는 의미이다. 이 점을 이해하고, 각 원소가 비트wise AND 연산으로 어떻게 상호작용하는지 알아야 한다.
2. **슬라이딩 윈도우(Sliding Window) 기법**
    - 문제의 해결에서 중요한 것은 "nice" subarray를 찾는 방법이다. 배열을 처음부터 끝까지 탐색할 때, 연속된 부분 배열을 고려하면서 조건을 만족하는 최대 길이를 찾는 기법이 슬라이딩 윈도우이다.
    - 슬라이딩 윈도우는 배열을 하나씩 확장하면서, 조건을 만족하지 않으면 `start`를 이동시켜 조건을 맞추는 방식이다.
3. **이중 반복문 (Nested Loops)**
    - 문제를 풀기 위해 이중 반복문을 사용하여 부분 배열을 탐색한다.
    - 이 때 첫 번째 반복문은 시작 인덱스를, 두 번째 반복문은 끝 인덱스를 다룬다.
    - 비트wise AND 연산을 통해 조건을 만족하는지 체크하면서 최대 길이를 찾는다.

## 회고

이 문제는 비트wise AND 연산을 활용하여 "nice" subarray를 찾는 문제였다.

처음에는 조건을 만족하는 부분 배열을 효율적으로 탐색하는 데 어려움이 있었지만, 슬라이딩 윈도우 기법을 통해 중복 계산을 피하고 성능을 개선할 수 있었다.

비트 연산의 특성을 잘 이해하고, 배열을 연속적으로 탐색하는 방식에 대한 중요성을 깨달고 이 문제를 풀면서 효율적인 알고리즘 설계와 슬라이딩 윈도우 기법에 대한 이해를 깊이 있게 다질 수 있었다.
