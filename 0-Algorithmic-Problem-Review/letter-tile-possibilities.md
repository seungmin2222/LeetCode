# [Letter Tile Possibilities](https://leetcode.com/classic/problems/letter-tile-possibilities/description/)

주어진 타일들로 만들 수 있는 모든 가능한 문자열의 수를 찾는 문제이다.

## 주요 포인트

- 같은 문자가 여러 번 나올 수 있다.
- 빈 문자열은 제외한다.

## 나의 코드

```jsx
var numTilePossibilities = function(tiles) {
    const freqMap = new Map();
    
    for (const char of tiles) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    
    function backtrack(map) {
        let sum = 0;
        
        for (const [char, count] of map) {
            if (count === 0) continue;
            
            sum++;
            
            map.set(char, count - 1);
            sum += backtrack(map);
            map.set(char, count);
        }
        
        return sum;
    }
    
    return backtrack(freqMap);
};
```

## 나의 수도 코드

1. 빈도수 맵 생성
    - 입력된 문자열에서 각 문자가 몇 번 나오는지 계산한다.
2. 백트래킹 함수 구현
    - 매 단계에서 사용 가능한 문자를 하나씩 선택한다.
    - 선택한 문자는 빈도수를 1 감소시킨다.
    - 재귀적으로 다음 문자를 선택한다.
    - 백트래킹으로 원래 상태로 돌린다.
3. 경우의 수 계산
    - 각 단계에서 문자를 선택할 때마다 sum을 1 증가
    - 재귀 호출의 결과를 더함

## 시간 복잡도

1. 초기 빈도수 맵 생성: O(N)
2. 백트래킹 과정
    - 각 위치에서 최대 K개 문자 선택 가능
    - 깊이 N까지 재귀 호출

따라서 최종 시간복잡도는 O(K^N)이다.

## 공간 복잡도

1. 빈도수 맵
    - 최대 26개의 알파벳 저장
    - O(K), K는 고유 문자 수 (최대 26)
2. 재귀 호출 스택
    - 최대 재귀 깊이: N (문자열 길이)
    - 각 재귀 호출에서 맵의 상태는 공유됨
    - O(N)

따라서 최종 공간 복잡도는 O(K + N)이다.

## 알아둬야 할 것!

1. 백트래킹(Backtracking)의 기본 개념
    - 현재 상태에서 가능한 모든 선택을 시도하고, 각 선택 후에는 원래 상태로 되돌리는 과정을 이해해야 한다.
2. Map 자료구조 활용
    - Map을 사용하여 문자의 빈도수를 효율적으로 관리하는 방법을 알아야 한다. (get, set 메서드 활용)
3. 재귀 함수의 동작 원리
    - 재귀 호출이 어떻게 스택에 쌓이고, 백트래킹과 함께 어떻게 동작하는지 이해해야 한다.
4. 순열과 조합의 차이
    - 이 문제는 순열(순서가 중요)의 개념을 다루며, 중복을 허용하는 특수한 경우다.

## 회고

이 문제에서 백트래킹과 재귀를 함께 사용하면서 상태 관리가 매우 중요하다는 것을 배웠고, Map을 활용한 빈도수 관리의 중요성을 깨달았다.

특히 각 단계에서의 상태 복원 타이밍이 핵심이었다.

앞으로 비슷한 문제를 만나면 빈도수 체크와 백트래킹 접근 방식을 먼저 떠올리게 될 것 같다.
