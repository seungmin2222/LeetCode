## [**Find the Maximum Length of Valid Subsequence I**](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/?envType=daily-question&envId=2025-07-16)

- 배열의 subsequence는 순서를 유지하며 일부 원소를 제거해 얻는다.
- 가장 긴 유효 subsequence의 길이를 구하라.

## 주요 포인트

1. **짝수만 선택한 subsequence**는 (짝+짝)%2 = 0이므로 항상 유효.
2. **홀수만 선택한 subsequence**도 (홀+홀)%2 = 0이므로 유효.
3. **짝-홀-짝-홀…** 또는 **홀-짝-홀-짝…** 패턴도 (짝+홀)%2 = 1로 유효하다.
4. 따라서, **최대 길이는**
    - 짝수 개수
    - 홀수 개수
    - 짝수로 시작하는 번갈이 subsequence
    - 홀수로 시작하는 번갈이 subsequence
        
        중 최댓값.
        

## 나의 코드

```tsx
var maximumLength = function(nums) {
   let maxLength = 0;
    
    let evenCount = 0;
    for (let num of nums) {
        if (num % 2 === 0) {
            evenCount++;
        }
    }
    maxLength = Math.max(maxLength, evenCount);
    
    let oddCount = 0;
    for (let num of nums) {
        if (num % 2 === 1) {
            oddCount++;
        }
    }
    maxLength = Math.max(maxLength, oddCount);
    
    let alternatingEvenFirst = 0;
    let expectEven = true;
    for (let num of nums) {
        if ((num % 2 === 0) === expectEven) {
            alternatingEvenFirst++;
            expectEven = !expectEven;
        }
    }
    maxLength = Math.max(maxLength, alternatingEvenFirst);
    
    let alternatingOddFirst = 0;
    let expectOdd = true;
    for (let num of nums) {
        if ((num % 2 === 1) === expectOdd) {
            alternatingOddFirst++;
            expectOdd = !expectOdd;
        }
    }
    maxLength = Math.max(maxLength, alternatingOddFirst);
    
    return maxLength;
};
```

## 나의 수도 코드

1. 짝수 개수를 센다 -> evenCount
2. 홀수 개수를 센다 -> oddCount
3. 짝수 먼저 시작하는 번갈이 subsequence 길이를 구한다
4. 홀수 먼저 시작하는 번갈이 subsequence 길이를 구한다
5. 위 4개 중 최댓값을 반환

## **시간 복잡도**

- **O(n)** : 배열을 4번 순회 → n ≤ 2 * 10^5이므로 충분히 빠름.

## **공간 복잡도**

- **O(1)** : 추가 배열 사용 없음.

## 알아둬야 할 것!

- **유효 subsequence 조건**을 parity(짝/홀) 패턴으로 단순화할 수 있다.
- alternating subsequence를 구할 때는 **그리디 방식**이 최적이다.

## 회고

단순한 수식 계산보다 **실제 패턴을 따라가며 카운트하는 방식**이 정확하다. 
4번의 루프를 돌지만 여전히 O(n)이라서 최적화가 크게 필요하지 않다.
단일 루프로 통합 가능하지만 가독성이 약간 떨어질 수 있다.
