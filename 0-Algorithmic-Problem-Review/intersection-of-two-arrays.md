## [**Intersection of Two Arrays**](https://leetcode.com/problems/intersection-of-two-arrays/)

이 문제는 num1과 num2의 중복된 숫자의 갯수를 반환하는 문제이다.

## 나의 코드

```jsx
var intersection = function(nums1, nums2) {
    const uniqueArr1 = [];
    const uniqueArr2 = [];
    const unique = [];
  
    nums1.forEach((element) => {
        if (!uniqueArr1.includes(element)) {
            uniqueArr1.push(element);
        }
    });
  
    nums2.forEach((element) => {
        if (!uniqueArr2.includes(element)) {
            uniqueArr2.push(element);
        }
    });
  
    
    uniqueArr2.forEach((element) => {
        if (uniqueArr1.includes(element)) {
            unique.push(element);
        }
    });
  
    return unique;  
};
```

## 나의 수도 코드

1. `uniqueArr1`와 `uniqueArr2`를 빈 배열로 초기화
2. `unique` 배열을 빈 배열로 초기화
3. **`nums1` 배열 순회**
    - 각 요소에 대해
        - `uniqueArr1`에 해당 요소가 없으면
            - 요소를 `uniqueArr1`에 추가
4. **`nums2` 배열 순회**
    - 각 요소에 대해
        - `uniqueArr2`에 해당 요소가 없으면
            - 요소를 `uniqueArr2`에 추가
5. **`uniqueArr2` 배열 순회**
    - 각 요소에 대해
        - `uniqueArr1`에 해당 요소가 있으면
            - 요소를 `unique` 배열에 추가
6. `unique` 배열을 반환

## 다른 사람의 풀이

```jsx
var intersection = function(nums1, nums2) {
   
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    

    return [...set1].filter(element => set2.has(element));
};
```

## 다른 사람의 수도 코드

1.  `nums1`과 `nums2`의 중복을 제거하여 Set으로 저장
2. `set1`에 있는 요소 중 `set2`에도 있는 것만 반환

## 알아둬야 할 것!

### 다른 사람의 코드

- `filter`와 `Set`의 `has` 메서드를 사용하여 `set1`에서 `set2`에 존재하는 요소만 필터링합니다.
- `set2.has()`는 `O(1)`의 시간복잡도를 가지므로, 전체 시간복잡도가 `O(n + m)`으로 감소합니다.
- 즉, 최적화된 코드는 교집합을 더 효율적으로 찾습니다.

## 회고

이번 문제는 두 배열의 교집합을 구하는 작업으로, 초기 코드에서는 배열의 중복 요소를 제거하고 교집합을 찾아 반환하는 방식을 구현했다. 코드를 작성하면서 효율성과 가독성을 높이기 위해 여러 가지 최적화 방안을 고민할 수 있었다.
