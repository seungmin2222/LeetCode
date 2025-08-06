# [Type of Triangle](https://leetcode.com/problems/type-of-triangle/)

## 주요 포인트

- 삼각형이 되려면 두 변의 합 > 나머지 한 변이 항상 성립해야 함
- 삼각형이 될 수 있다면 세 변의 길이 관계로 타입 판별
    - **equilateral (정삼각형)**: 세 변 모두 같음
    - **isosceles (이등변삼각형)**: 두 변만 같음
    - **scalene (부등변삼각형)**: 세 변 다 다름
- 삼각형이 될 수 없다면 "none" 반환

## 나의 코드

```tsx
var triangleType = function(nums) {
    const [a, b, c] = nums;

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "none";
    }

    if (a === b && b === c) return "equilateral";
    if (a === b || b === c || a === c) return "isosceles";
    
    return "scalene";
};
```

## 나의 수도 코드

1. nums에서 a, b, c를 추출
2. 삼각형 조건 (두 변의 합 > 나머지 한 변) 확인
    - 하나라도 성립 안 되면 return "none"
3. 세 변이 모두 같으면 return "equilateral"
4. 두 변만 같으면 return "isosceles"
5. 세 변 모두 다르면 return "scalene"

## 시간 복잡도

- O(1)
    - 고정된 3개의 값만 비교 → 상수 시간

## 공간 복잡도

- O(1)
    - 추가 메모리 사용 없음

## 알아둬야 할 것!

- 삼각형 조건은 문제에서 가장 중요한 검증 포인트
- 세 값의 크기에 관계없이 항상 조건부터 먼저 확인해야 함
- a + b > c 외에도 나머지 두 쌍 모두 검사해야 함

## 회고

자주 나오는 간단한 조건 분기 문제지만, 삼각형 조건을 먼저 체크하지 않으면 잘못된 판단을 하게 된다.

조건문 순서가 중요하며, 정확한 정의에 기반한 판단이 필요할 것 같다.
