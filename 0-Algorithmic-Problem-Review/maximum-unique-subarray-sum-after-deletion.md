# [Maximum Unique Subarray Sum After Deletion](https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/)

## 주요 포인트

- 삭제가 자유로움 → 연속된 subarray를 유지할 필요 없음.
- 모든 원소가 **유일(unique)**해야 하므로, 중복은 제거해야 한다.
- 합을 최대로 만들려면 양수만 선택하는 것이 유리하다.
- 모든 값이 음수거나 0 이하라면 가장 큰 값 하나만 선택한다.

## 나의 코드

```tsx
var maxSum = function(nums) {
    let unique = new Set(nums);
    let positives = [...unique].filter(n => n > 0);

    if (positives.length > 0) {
        return positives.reduce((a, b) => a + b, 0);
    }

    return Math.max(...unique);
};
```

## 나의 수도 코드

1. nums에서 중복 제거 → unique
2. unique에서 양수만 추출 → positives
3. positives가 비어 있지 않다면 합계를 반환
4. 아니면 unique의 최댓값 반환 (음수 중 가장 큰 값)

## 시간 복잡도

- O(n): 한 번의 순회로 Set 생성 및 양수 필터링.

## 공간 복잡도

- O(n): Set 및 positives 배열 저장.

## 알아둬야 할 것!

- 삭제 가능 여부에 따라 문제 성격이 완전히 달라짐.
    - **삭제 불가 & 연속 subarray** → 슬라이딩 윈도우 (1695 Maximum Erasure Value)
    - **삭제 가능** → 단순한 집합 최적화 문제.

## 회고

처음에 1695번 문제처럼 접근하여 연속성 조건을 잘못 적용했었다.

문제의 조건(삭제 자유)을 정확히 읽는 것이 중요하다.

Set + 양수 합산이라는 간단한 전략으로 해결햇다.
