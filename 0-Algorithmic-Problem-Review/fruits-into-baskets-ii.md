# [Fruits Into Baskets II](https://leetcode.com/problems/fruits-into-baskets-ii/)

## 주요 포인트

- 각 과일은 왼쪽부터 순서대로, 자신보다 크거나 같은 용량을 가진 가장 왼쪽 바구니에만 배정할 수 있음
- 각 바구니에는 한 종류의 과일만 담을 수 있음
- 바구니에 배정되지 못한 과일의 개수를 반환하는 문제
- 순서를 유지하며 가능한 바구니를 찾는 것이 핵심

## 나의 코드

```tsx
var numOfUnplacedFruits = function(fruits, baskets) {
    const n = fruits.length;
    const used = Array(n).fill(false); 
    let unplaced = 0;

    for (let i = 0; i < n; i++) {
        let placed = false;
        
        for (let j = 0; j < n; j++) {
            if (!used[j] && baskets[j] >= fruits[i]) {
                used[j] = true;
                placed = true;
                break;
            }
        }
        
        if (!placed) {
            unplaced++;
        }
    }

    return unplaced;
};
```

## 나의 수도 코드

1. 바구니 사용 여부를 추적할 배열 used를 만든다
2. 과일 배열을 순회하면서:
a. 바구니 배열을 왼쪽부터 순회
b. 사용되지 않았고, 용량이 충분하면 배정하고 break
3. 끝까지 배정되지 못한 과일은 unplaced 증가
4. unplaced를 반환

## 시간 복잡도

- O(n²)
    
    각 과일마다 모든 바구니를 순회 → 최악의 경우 n * n
    
    (n은 최대 100이므로 성능 문제 없음)
    

## 공간 복잡도

- O(n)
    
    바구니 사용 여부를 저장하는 배열 사용
    

## 알아둬야 할 것!

- “왼쪽부터 가능한 바구니”를 찾는다는 점에서 탐색 우선 순서가 중요
- 최적화된 탐색이 필요할 경우, 정렬 + 이진 탐색 방식도 고려 가능 (조건이 바뀔 경우)

## 회고

문제 자체는 단순하지만, ‘왼쪽에서부터 가능하면 배정’ 이라는 조건을 코드로 명확하게 구현하는 게 핵심이었다.

최적화보단 조건 구현의 정확성이 중요한 문제였다.
