## [**Find K Closest Elements**](https://leetcode.com/problems/find-k-closest-elements/)

정렬된 배열에서 주어진 숫자 x와 가장 가까운 k개의 숫자들을 찾아 오름차순으로 반환하는 문제이다.

두 숫자의 거리가 같다면 더 작은 숫자를 선택한다.

## 주요 포인트

1. 고려사항
    - 이미 정렬된 배열이므로 다시 정렬할 필요 없음
    - 거리가 같을 경우 더 작은 숫자 선택
    - 결과는 연속된 k개의 숫자
    - 결과는 반드시 오름차순 정렬

## 나의 코드

```jsx
var findClosestElements = function(arr, k, x) {
    if (arr.length <= k) return arr;
    
    let left = 0;
    let right = arr.length - k;
    
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return arr.slice(left, left + k);
};
```

## 나의 수도 코드

1. 배열 길이가 k보다 작거나 같으면 전체 배열을 바로 반환
2. left: k개 원소의 시작점이 될 수 있는 가장 왼쪽 위치
3. right: k개 원소를 선택할 수 있는 마지막 시작 위치
4. 현재 탐색 범위의 중간 위치를 찾음
5. 이 위치부터 k개의 연속된 숫자를 고려
6. arr[mid]: 현재 윈도우의 시작 숫자
7. arr[mid + k]: 현재 윈도우의 마지막 숫자
8. x와의 거리를 비교
9. 조건이 true일 때 (오른쪽이 더 가까울 때)
    - 윈도우를 오른쪽으로 이동
    - 현재 위치는 답이 될 수 없음
10. 조건이 false일 때 (왼쪽이 더 가깝거나 같을 때)
    - 윈도우를 왼쪽으로 이동하거나 현재 위치 유지
    - 현재 위치가 답일 수 있음
11. 찾은 시작 위치(left)부터 k개의 원소를 반환
12. 이미 정렬되어 있으므로 추가 정렬 불필요

## 알아둬야 할 것!

1. **이진 탐색의 핵심 개념**

```jsx
const mid = Math.floor(left + (right - left) / 2);
```

- 중간값을 구할 때 overflow 방지하는 안전한 계산법
- (left + right) / 2 대신 위 방식을 사용하는 것이 좋음

1. **슬라이딩 윈도우 개념**

```jsx

let right = arr.length - k;// 윈도우의 시작점이 될 수 있는 마지막 위치
```

- k개의 연속된 요소를 선택할 때 윈도우의 시작점 계산법
- 배열 길이와 선택해야 할 개수(k)의 관계 이해
- 윈도우의 크기가 고정된 경우의 처리 방법

1. **거리 계산 최적화**

```jsx
if (x - arr[mid] > arr[mid + k] - x)
```

- 절대값(Math.abs) 사용하지 않고도 거리 비교 가능
- 수식을 단순화하여 성능 개선

## 회고

이번 K Closest Elements 문제를 풀면서 가장 기억에 남는 건 이진 탐색과 슬라이딩 윈도우를 같이 사용했다는 점이다.

처음에는 단순히 x와의 거리를 계산해서 정렬하면 되겠다고 생각했는데, 연속된 k개의 숫자를 찾아야 한다는 제약 조건을 보고 접근 방법을 바꿔야 했다.
특히 윈도우의 시작점을 찾는 과정에서 arr.length - k라는 계산이 왜 필요한지 이해하는데 시간이 좀 걸렸는데, 실제 예시를 그려보면서 이해할 수 있었다.

이 문제를 통해 이진 탐색이 단순 검색뿐만 아니라 최적화 문제에서도 유용하게 쓰일 수 있다는 걸 배웠다.
