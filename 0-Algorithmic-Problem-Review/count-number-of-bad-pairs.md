## [Count Number of Bad Pairs](https://leetcode.com/problems/count-number-of-bad-pairs/?envType=daily-question&envId=2025-02-09)

이 문제는 주어진 배열에서 조건을 만족하지 않는 "나쁜" 쌍을 찾는 문제이다.

주어진 조건은 `i < j`이고 `nums[j] - nums[i] != j - i`이다.

## 주요 포인트

1. 주어진 식 `j - i != nums[j] - nums[i]`를 변형해보면, `nums[j] - j != nums[i] - i`가 된다.
2. 즉, `nums[k] - k` 값이 같은 경우에는 해당 쌍이 나쁜 쌍이 아니게 된다.
3. 배열을 한 번 순회하면서 `nums[k] - k` 값을 기록하고, 이 값들이 중복되었는지 확인하여 나쁜 쌍의 수를 세면 된다.

## 나의 코드

```jsx
function countBadPairs(nums) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const diff = i - nums[i];
        map.set(diff, (map.get(diff) || 0) + 1);
    }
    
    const totalPairs = (nums.length * (nums.length - 1)) / 2;
    
    let goodPairs = 0;
    for (let count of map.values()) {
        goodPairs += (count * (count - 1)) / 2;
    }
    
    return totalPairs - goodPairs;
}
```

## 나의 수도 코드

1. `nums[i] - i` 값을 키로 사용하여 각 값의 출현 횟수를 `map`에 저장한다.
2. 이 값을 이용해서 나쁜 쌍을 계산하는 방식으로 진행하며, 최종적으로 나쁜 쌍의 개수를 구한다.
3. `totalPairs`는 전체 가능한 쌍의 수로, 이 값에서 나쁜 쌍의 개수를 빼면 답을 얻을 수 있다.

## 시간 복잡도

- `map.has(key)`와 `map.set(key, value)`는 해시맵의 연산이므로 평균적으로 O(1) 시간이 걸린다.
- 배열을 한 번 순회하면서 수행하는 연산은 각 연산이 O(1)이고, 배열의 길이는 `n`이다.

따라서 전체 시간 복잡도는 `O(n)` 이다.

## 공간 복잡도

- `map`의 크기는 최대 `n`에 도달할 수 있다. (모든 `nums[i] - i` 값이 다를 경우)

`map`의 크기는 최대 `n`이므로 공간 복잡도는 `O(n)` 이다.

## 알아둬야 할 것!

1. 문제의 핵심
    - 주어진 조건에 맞지 않는 나쁜 쌍을 찾아야 한다.
    - `i < j`이고 `nums[j] - nums[i] != j - i`를 만족하는 쌍을 찾음.
2. 수식 변형
    - `nums[j] - j == nums[i] - i` 조건을 만족하는 경우는 나쁜 쌍이 아니므로, 이를 이용해 비교한다.
3. 해시맵 사용
    - `nums[i] - i` 값을 해시맵에 기록하여 중복된 값이 나타날 때마다 나쁜 쌍의 수를 증가시킨다.
4. 효율성
    - 전체 가능한 쌍에서 나쁜 쌍을 뺀 방식으로 최적화된 접근을 사용.

## 회고

이번 문제를 해결하면서 해시맵을 활용하여 효율적인 방법으로 나쁜 쌍을 계산하는 방식을 배웠다. `nums[i] - i` 값이 동일한 경우 나쁜 쌍이 아니므로 이를 키로 사용해 중복되는 값을 추적하는 방식이 매우 효과적이었다.

문제를 풀면서 배열을 한 번만 순회하면 되는 O(n) 시간 복잡도로 해결할 수 있다는 점이 인상적이었고, 공간 복잡도 역시 O(n)으로 최적화된 점이 유용했다.

이 방법을 통해 나쁜 쌍을 효율적으로 세는 방식을 이해하게 되었고, 실생활에서도 이와 같은 문제를 풀 때 활용할 수 있을 것 같다.
