## [Make Lexicographically Smallest Array by Swapping Elements](https://leetcode.com/classic/problems/make-lexicographically-smallest-array-by-swapping-elements/description/)

이 문제는 각 위치에 대해, 그 위치에 올 수 있는 가장 작은 수를 찾아 배치하는 문제이다.

## 주요 포인트

1. 인접한 두 수의 차이가 limit 이하인 경우 swap이 가능하다.
2. lexicographically smallest array를 만들어야 하므로, 가능한 한 작은 수를 앞으로 보내야 한다.
3. 각 위치에 대해, 그 위치에 올 수 있는 가장 작은 수를 찾아 배치한다.

## 나의 코드

```jsx
var lexicographicallySmallestArray = function(nums, limit) {
    let pairs = nums.map((num, idx) => [num, idx]);
    
    pairs.sort((a, b) => a[0] - b[0]);
    
    let result = new Array(nums.length);
    
    let groupNums = [];
    let groupIndices = [];
    
    for (let i = 0; i < pairs.length; i++) {
        groupNums.push(pairs[i][0]);
        groupIndices.push(pairs[i][1]);
        
        if (i === pairs.length - 1 || pairs[i + 1][0] - pairs[i][0] > limit) {
            groupIndices.sort((a, b) => a - b);
            
            for (let j = 0; j < groupNums.length; j++) {
                result[groupIndices[j]] = groupNums[j];
            }
            
            groupNums = [];
            groupIndices = [];
        }
    }
    
    return result;
};
```

## 나의 수도 코드

1. 우선 각 숫자와 원래 인덱스를 쌍으로 저장.
2. 숫자를 기준으로 오름차순 정렬.
3. 정렬된 배열을 순회
    - 인접한 숫자들의 차이가 limit 이하인 것들을 하나의 그룹으로 묶음.
    - 각 그룹 내에서
        - 원래 인덱스들을 정렬.
        - 정렬된 인덱스 순서대로 숫자들을 배치.
4. 최종 결과를 반환.

## 시간 복잡도

1. 정렬 단계: O(n log n)
- pairs.sort() 수행
- JavaScript의 기본 정렬 알고리즘 사용
1. 그룹화 단계: O(n)
- 배열 순회
- 그룹별 내부 정렬: O(k log k), k는 그룹 크기

최종 시간 복잡도는 배열 변환 단계: O(n log n)

## 공간 복잡도

1. 주요 배열들
    - pairs 배열: O(n)
    - result 배열: O(n)
2. 임시 저장소
    - groupNums: 최대 O(n)
    - groupIndices: 최대 O(n)

최종 공간 복잡도는 배열 변환 단계: O(n)

## 알아둬야 할 것!

1. 배열 변환 관련
    - map 메소드를 활용한 인덱스-값 쌍 생성 방법
    - 다차원 배열 생성 및 처리 방법
2. 정렬 관련
    - JavaScript의 sort 메소드 사용법
    - 사용자 정의 비교 함수 작성 방법
    - lexicographically smallest(사전식 정렬) 개념
3. 그룹화 처리
    - 조건에 따른 배열 요소 그룹화 방법
    - 그룹 내 요소 재정렬 기법

## 회고

배열 정렬과 그룹화를 같이 다루는 로직을 만들면서 많이 배웠다. lexicographically smallest 조건을 처리하려고 정렬이랑 그룹화를 어떻게 섞을지 고민하는게 재밌었다.
시간/공간 복잡도 생각하면서 코드 짜니까 그냥 돌아가는 코드가 아니라 효율적인 코드를 만드는게 중요하단걸 다시 한번 느꼈다. map이랑 sort 같은 JS 기본 메서드 쓸 때도 시간 복잡도 생각하면서 써야 된다는 걸 배웠고 문제 풀고 개념 정리하고 회고하는게 도움 많이 되는 것 같다.
