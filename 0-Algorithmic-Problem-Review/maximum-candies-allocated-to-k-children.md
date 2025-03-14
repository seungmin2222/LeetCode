## [Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/description/?envType=daily-question&envId=2025-03-14)

이 문제는 주어진 "candies" 배열에서 각 아이에게 최대한 같은 수의 사탕을 분배할 수 있는 방법을 찾는 문제이다.

## 주요 포인트

1. 이진 탐색을 사용하여 각 아이가 받을 수 있는 최대 사탕 수를 찾아낸다.
    - `candies[i]`에서 분배할 수 있는 최대 사탕의 수는 `candies[i] // x` 이다. `x`는 각 아이가 받을 수 있는 사탕 수
    - 우리는 `x`의 값을 이진 탐색으로 찾는다. `x`의 범위는 `0`에서 `max(candies)`까지이다.
2. 이진 탐색의 로직
    - `mid`값을 계산하고, `candies[i] // mid` 값을 모두 더해서 총 `k`명의 아이들에게 분배할 수 있는지 확인한다.
    - 만약 가능한 아이들이 `k`명 이상이라면 `mid`를 증가시키고, 그렇지 않으면 감소시킨다.

## 나의 코드

```jsx
var maximumCandies = function(candies, k) {
    let left = 0;
    let right = Math.max(...candies);
    
    while (left < right) {
        let mid = Math.floor((left + right + 1) / 2);
        let count = 0;
        
        for (let candy of candies) {
            count += Math.floor(candy / mid);
        }
        
        if (count >= k) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
};
```

## 나의 수도 코드

1. `left`는 0으로 시작하고, `right`는 `candies` 배열에서 가장 큰 값으로 시작한다.
2. `while` 루프에서 `left`와 `right`가 교차할 때까지 이진 탐색을 진행한다.
3. `mid`는 현재 가능한 사탕 수를 나타내며, `candies[i] // mid`로 계산하여 각 사탕 무더기에서 나눠줄 수 있는 아이들의 수를 합산한다.
4. 만약 `count`가 `k`보다 크거나 같다면, 현재 `mid`값은 유효하므로 `left`를 `mid`로 설정하고, 그렇지 않으면 `right`를 `mid - 1`로 설정하여 범위를 좁혀간다.
5. 최종적으로 `left` 값이 각 아이가 받을 수 있는 최대 사탕 수가 된다.

## 시간 복잡도

1. 이진 탐색 부분
    - left와 right의 범위는 0부터 max(candies)까지이므로, 이진 탐색은 최대 log(max(candies))번의 반복을 수행한다.
2. 각 이진 탐색에서의 작업
    - 각 이진 탐색에서 우리는 candies 배열을 한 번 순회하여 각 무더기에서 나눠줄 수 있는 사탕의 수를 계산한다.
    - 이 순회의 시간 복잡도는 O(n)입니다. 여기서 n은 candies 배열의 길이이다.

따라서 전체 시간 복잡도는 O(n * log(max(candies)))입니다.

## 공간 복잡도

1. 변수 사용
    - left, right, mid, count는 모두 상수 공간을 사용하므로 공간 복잡도에 큰 영향을 미치지 않는다.

따라서 전체 공간 복잡도는 O(1)입니다.

## 알아둬야 할 것!

1. 이진 탐색 (Binary Search) 
    - 이진 탐색은 정렬된 범위에서 값을 효율적으로 찾는 알고리즘으로, 문제에서 최적의 값을 찾을 때 유용하다.
    - 이 문제에서는 최대한 많은 사탕을 아이들에게 분배할 수 있는 수를 찾는 데 이진 탐색을 사용한다.
2. 나누기 연산을 이용한 분배
    - `candies[i] // mid` 방식으로 각 무더기에서 아이들에게 나눠줄 수 있는 사탕의 수를 계산한다.
    - 이 연산을 반복적으로 수행하면서 최적의 값을 찾는다.
3. 이진 탐색의 범위 설정
    - 이진 탐색의 범위 설정은 문제의 조건에 따라 매우 중요하다.
    - 여기서는 `0`부터 `max(candies)`까지의 범위를 설정하고 이를 이진 탐색으로 좁혀간다.

## 회고

이 문제를 풀면서 이진 탐색을 사용하여 최적값을 찾는 방법에 대해 더 깊이 이해할 수 있었다.

이진 탐색을 이용해 문제를 점차적으로 단순화하면서 해결할 수 있었다.

앞으로 이와 같은 유형의 문제를 접할 때 이진 탐색을 적극적으로 활용해야겠다는 생각이 들었다.
