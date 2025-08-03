# [Find Subsequence of Length K With the Largest Sum](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/)

## 주요 포인트

- subsequence는 원래 배열의 순서 유지
- 합이 가장 큰 k개 요소를 선택해야 함
- 단순 정렬 후 slice하면 순서가 깨지므로 인덱스 정보 유지 필요

## 나의 코드

```tsx
var maxSubsequence = function(nums, k) {
    const indexed = nums.map((num, idx) => [num, idx]);

    const topK = indexed.sort((a, b) => b[0] - a[0]).slice(0, k);

    topK.sort((a, b) => a[1] - b[1]);

    return topK.map(([num]) => num);
};
```

## 나의 수도 코드

1. [값, 인덱스]로 매핑
2. 값 기준으로 내림차순 정렬
3. 상위 k개 선택
4. 인덱스 기준으로 다시 오름차순 정렬 (원래 순서 복원)
5. 값만 추출하여 리턴

## 시간 복잡도

- O(n log n)
    
    (정렬 2번 → 값 정렬 + 인덱스 정렬)
    

## 공간 복잡도

- O(n)
    
    ([값, 인덱스]를 저장하는 배열 사용)
    

## 알아둬야 할 것!

- subsequence는 순서를 유지해야 함
- 값만 보고 잘라낸 후 정렬하면 ❌ 오답
- map((val, i) => [val, i]) 패턴은 순서 복원을 위해 자주 사용됨

## 회고

정렬을 두 번 해야 하는 이유가 핵심 포인트인 것 같다.

값 정렬은 최댓값을 찾기 위해, 인덱스 정렬은 원래 순서 복원용이고 실무에서도 데이터 필터링 후 순서 유지가 필요한 경우 자주 등장하는 패턴이라 잘 이용해야겠다.
