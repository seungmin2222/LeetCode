## [Find Lucky Integer in an Array](https://leetcode.com/problems/find-lucky-integer-in-an-array/description/?envType=daily-question&envId=2025-07-01)

## 주요 포인트

- 배열에서 자신의 등장 횟수와 값이 같은 정수를 “lucky integer”라고 한다.
- 여러 개의 lucky integer가 있을 경우 가장 큰 값을 반환한다.
- 없으면 -1을 반환한다.

## 나의 코드

```jsx
var findLucky = function(arr) {
    const obj = {};
    let maxNum = -1;

    for (let num of arr) {
        obj[num] = (obj[num] || 0) + 1;
    }

    for (let key in obj) {
        const numKey = Number(key);
        if (numKey === obj[key] && maxNum < numKey) {
            maxNum = numKey;
        }
    }

    return maxNum;
};
```

## 나의 수도 코드

1. obj를 빈 객체로 초기화.
2. arr의 각 숫자에 대해 obj[숫자] 카운트 증가.
3. obj의 key(문자열)를 숫자로 변환해, key === 등장 횟수이면 maxNum 갱신.
4. maxNum 반환.

## 시간 복잡도

- O(n)
    
    배열을 한 번 순회(n)하고, 카운트 객체를 한 번 순회(<=n).
    

## 공간 복잡도

- O(n)
    
    최대 n개의 서로 다른 숫자를 저장할 수 있는 obj.
    

## 다른 사람의 풀이

```jsx
var findLucky = function(arr) {
    arr.sort((a, b) => b - a); // 큰 수부터
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        if (arr[i] === count) return arr[i];
    }
    return -1;
};
```

- 장점 : 추가 객체 없이 O(1) 공간 사용.
- 단점 : 정렬 때문에 시간복잡도 O(n log n).

## 알아둬야 할 것!

- for...in은 key를 문자열로 반환한다는 점 주의.
- 값-빈도 매핑 시 obj[num] = (obj[num] || 0) + 1 패턴을 자주 활용한다.
- 정렬 접근법은 공간 절약에 유리하지만 n이 큰 경우엔 해시맵 방식이 더 효율적.

## 회고

- 처음엔 for...in에서 key 타입 변환 때문에 의도치 않은 결과가 나올 수 있었다.
- 해시맵 기반 풀이가 직관적이고 효율적이며, 코드가 짧은 정렬 기반 풀이도 나름 장점이 있다.
- 앞으로 비슷한 문제를 만나면 해시맵 + 조건 체크 패턴을 기본으로 쓰는 게 좋겠다.
