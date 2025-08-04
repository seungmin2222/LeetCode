# [**Fruit Into Baskets**](https://leetcode.com/problems/fruit-into-baskets/)

## 주요 포인트

- **슬라이딩 윈도우**를 이용하여 **연속된 구간 중 과일 종류가 2개 이하인 가장 긴 구간**을 찾는 문제.
- 바구니는 2개만 있고, 각각 하나의 과일 종류만 담을 수 있음.
- 윈도우 내에 **2종류 초과 과일이 들어오면** 왼쪽 포인터를 옮기며 축소.

## 나의 코드

```jsx
var totalFruit = function(fruits) {
    let maxLen = 0;
    let left = 0;
    const basket = new Map();

    for (let right = 0; right < fruits.length; right++) {
        const fruit = fruits[right];
        basket.set(fruit, (basket.get(fruit) || 0) + 1);

        while (basket.size > 2) {
            const leftFruit = fruits[left];
            basket.set(leftFruit, basket.get(leftFruit) - 1);
            if (basket.get(leftFruit) === 0) {
                basket.delete(leftFruit);
            }
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
```

## 나의 수도 코드

1. left = 0, basket = 빈 맵
2. right를 0부터 끝까지 순회하면서:
    1. 현재 과일을 basket에 추가
    2. basket 크기가 2 초과라면:
        - left 과일부터 줄이면서 basket 크기 2 이하로 유지
    3. maxLen을 right - left + 1로 갱신
3. maxLen 반환

## 시간 복잡도

- O(n)
    
    전체 배열을 한 번 순회함 (right는 증가만 하고, left도 최대 n만큼 증가)
    

## 공간 복잡도

- O(1)
    
    basket에 담기는 과일 종류는 최대 2개로 제한되므로, 상수 공간
    

## 알아둬야 할 것!

- **슬라이딩 윈도우의 확장/축소 조건을 잘 정의**하는 것이 핵심.
- Map을 이용하여 과일의 개수를 관리하면 깔끔하게 구현 가능.

## 회고

Map을 써서 과일 종류 개수 관리하는 방식이 깔끔했고, 코드의 가독성도 좋았다.

문제 조건 중 항상 오른쪽으로만 이동을 놓치지 않아야 풀 수 있다.
