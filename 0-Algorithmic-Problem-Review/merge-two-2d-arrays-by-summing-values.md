## [Merge Two 2D Arrays by Summing Values](https://leetcode.com/classic/problems/merge-two-2d-arrays-by-summing-values/description/)

이 문제는 두 개의 정렬된 2D 배열을 ID 기준으로 병합하여 같은 ID는 값을 합산한 결과를 ID 오름차순으로 반환하는 문제이다.

## 주요 포인트

- 두 배열은 이미 ID 기준으로 정렬되어 있음
- 각 배열의 원소는 [ID, 값] 형태의 쌍
- 결과 배열은 ID 기준 오름차순 정렬되어야 함
- 두 배열 중 하나에만 존재하는 ID도 결과에 포함해야 함
- 같은 ID는 값을 합산해야 함

## 나의 코드

```jsx
var mergeArrays = function(nums1, nums2) {
    const maxLength = Math.max(nums1.length, nums2.length);
    const obj = {}
    const arr = [];

    for (let i = 0; i < maxLength; i++) {
        if (nums1[i]) {
            if (obj[nums1[i][0]]) {
                obj[nums1[i][0]] += nums1[i][1];
            } else {
                obj[nums1[i][0]] = nums1[i][1];
            }
        }
        if (nums2[i]) {
            if (obj[nums2[i][0]]) {
                obj[nums2[i][0]] += nums2[i][1];
            } else {
                obj[nums2[i][0]] = nums2[i][1];
            }
        }
    }

    for (const i in obj) {
        arr.push([Number(i), obj[i]]);
    }

    return arr;
};
```

## 나의 수도 코드

1. 초기화
    - 두 배열 중 더 긴 배열의 길이를 구하고, 결과를 저장할 빈 객체와 최종 결과 배열을 생성합.
2. 반복 순회
    - 긴 배열의 길이만큼 반복하면서 두 배열의 원소를 동시에 처리합.
3. nums1 처리
    - 만약 nums1의 현재 인덱스에 원소가 있다면,
    - 해당 원소의 ID를 추출,
    - 객체에 이 ID가 있는지 확인.
    - ID가 이미 존재하면 값을 더하고, 없으면 새로 생성.
4. nums2 처리
    - 반복
5. 객체를 배열로 변환
    - 모든 ID와 합산된 값을 저장한 객체를 순회.
    - 각 ID(문자열)를 숫자로 변환하고, 해당 ID와 값의 쌍을 배열 형태로 만들어 결과 배열에 추가.
6. 결과 반환 최종 생성된 배열을 반환.

## 시간 복잡도

- 두 배열을 한 번씩만 순회하며 (최대 길이만큼), 각 접근과 갱신은 O(1)의 시간이 걸린다.
- 여기서 n은 nums1의 길이, m은 nums2의 길이

최종 시간 복잡도는 O(n + m)이다.

## 공간 복잡도

1. 객체(obj) 저장
    - 최악의 경우, 두 배열에 모든 ID가 서로 다르다면 n+m개의 키-값 쌍을 저장.
    - 따라서 O(n + m)의 공간이 필요.
2. 결과 배열(arr)
    - 객체의 모든 키-값 쌍을 저장하므로, 최대 n+m개의 원소를 가질 수 있음.
    - 따라서 O(n + m)의 공간이 필요.

최종 공간 복잡도는 O(n + m)이다.

## 다른 사람의 풀이

```jsx
var mergeArrays = function(nums1, nums2) {
    const merged = {};
    
    // nums1 처리
    for (const [id, val] of nums1) {
        merged[id] = (merged[id] || 0) + val;
    }
    
    // nums2 처리
    for (const [id, val] of nums2) {
        merged[id] = (merged[id] || 0) + val;
    }
    
    // 배열로 변환하고 id 기준으로 정렬
    const result = Object.entries(merged).map(([id, val]) => [Number(id), val]);
    result.sort((a, b) => a[0] - b[0]);
    
    return result;
};
```

## 알아둬야 할 것!

1. 데이터 변환
    - 객체 형태에서 요구사항에 맞는 배열 형태로 변환하는 과정
2. 루프 최적화
    - 두 배열을 동시에 처리하는 단일 루프 접근법
3. 조건부 처리
    - 배열 길이가 다를 때 인덱스 범위를 벗어나지 않도록 확인하는 방법

## 회고

이 문제는 두 정렬된 2D 배열을 ID 기준으로 병합하는 문제였다.

해시맵(객체)을 활용해 각 ID별 값을 효율적으로 합산하는 접근법을 선택했고, O(n + m)의 시간 복잡도로 구현했다.
다만 정렬 단계를 누락한 점이 아쉬웠다. 문제의 요구사항을 완전히 충족하려면 최종 결과를 ID 기준으로 정렬해야 했다.
또한 두 배열을 동시에 처리하는 단일 루프 접근법은 코드 중복을 발생시켰다. 각 배열을 별도로 처리하는 방식으로 리팩토링하면 코드가 더 깔끔해질 것이다.
