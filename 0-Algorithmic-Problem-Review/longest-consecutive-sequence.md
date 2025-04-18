## [**Longest Consecutive Sequence**](https://leetcode.com/problems/longest-consecutive-sequence/)

이 문제는 주어진 배열에서 **연속된 숫자들이 가장 긴 시퀀스**의 길이를 찾는 것이다.

배열은 정렬되지 않았지만, **O(n) 시간 안에** 연속된 숫자를 찾아야 한다.

## 주요 포인트

1. **시간 복잡도 요구사항**
    - O(n) 시간 복잡도 내에 문제를 해결해야 하므로, 정렬을 사용할 수 없으며 해시셋과 같은 빠른 탐색 구조가 필요하다.
2. **시퀀스의 시작점**
    - 각 숫자가 연속된 시퀀스의 시작점인지 확인하기 위해, **그 숫자보다 1 작은 숫자가 존재하지 않는지**를 검사한다.
3. **연속된 숫자 찾기**
    - 시작점을 기준으로 **연속된 숫자들**을 탐색하면서 시퀀스의 길이를 계산해야 한다.
4. **최대 시퀀스 길이 갱신**
    - 각 시퀀스의 길이를 추적하며, **가장 긴 시퀀스를 기억**하고 최종적으로 그 값을 반환해야 한다.

## 나의 코드

```jsx
var longestConsecutive = function(nums) {
  const numSet = new Set(nums)
  let longestStreak = 0;
  
  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
      console.log(currentNum)
        
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  
  return longestStreak;  
};
```

## 나의 수도 코드

1. Set에 배열의 모든 숫자를 저장.
2. 가장 긴 시퀀스를 저장할 변수 초기화
    - longestStreak = 0;
3. 각 숫자가 시퀀스의 시작점인지 확인하고, 시작점일 경우 연속된 숫자들을 탐색.
4. 가장 긴 시퀀스 길이를 반환.

## 알아둬야 할 것!

1. **연속된 시퀀스의 시작점 찾기**
    - 연속된 시퀀스를 효율적으로 찾으려면, 각 숫자가 **시작점인지 확인하는 방법**이 중요하다.
    - 숫자 `num`에 대해 `num - 1`이 없을 때만 시퀀스의 시작점으로 간주한다는 것을 숙지해야 힌다.
2. **O(n) 해결 방법**
    - 정렬 없이 **해시셋(Set)** 을 사용해 배열의 숫자들을 빠르게 검색하는 방법을 익혀야 한다.
    - `Set`을 통해 숫자의 존재 여부를 O(1) 시간에 확인할 수 있다는 점이 핵심이다.
3. **자료 구조 선택의 중요성**
    - 시간 복잡도가 O(n)이어야 하기 때문에, **배열의 정렬 없이** 문제를 해결해야 한다는 점에서 **적절한 자료 구조 선택**이 문제 해결의 핵심이다.
    - Set과 같은 자료 구조가 O(n)의 시간 복잡도를 달성하는데 매우 유용하다는 것을 이해해야 한다.

## 회고

이 문제를 풀면서 O(n) 시간 복잡도 요구사항을 해결하기 위해 해시셋(Set)을 사용해 숫자의 존재 여부를 빠르게 확인하는 방법을 배웠다.

정렬 없이도 각 숫자가 시퀀스의 시작점인지를 판단하고, 연속된 숫자를 직접 찾아가며 최장 시퀀스를 구할 수 있었다.

자료 구조 선택이 문제 해결에 매우 중요함을 깨달았고, 이를 통해 **효율적인 알고리즘 설계**에 대한 이해가 깊어졌다.

앞으로 비슷한 연속성 문제나 데이터 처리에 해시셋을 활용할 수 있을 것이다.
