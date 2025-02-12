# [**Max Sum of a Pair With Equal Sum of Digits**](https://leetcode.com/classic/problems/max-sum-of-a-pair-with-equal-sum-of-digits/description/)

이 문제는 각 숫자의 자릿수 합이 같은 두 숫자를 찾아서, 그들의 합이 최대가 되도록 하는 문제이다.

## 주요 포인트

1. 먼저 각 숫자의 자릿수 합을 구한다.
2. 같은 자릿수 합을 가진 숫자들의 최대 합을 구한다.

## 나의 코드

```jsx
var maximumSum = function(nums) {
    function sumOfDigits(num) {
        let sum = 0;
        
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    }

    let map = new Map();
    let maxSum = -1;

    for (const num of nums) {
        let digitSum = sumOfDigits(num);
        
        if (map.has(digitSum)) {
            maxSum = Math.max(maxSum, map.get(digitSum) + num);
        }
        
        map.set(digitSum, Math.max(map.get(digitSum) || 0, num));
    }

    return maxSum;
};
```

## 나의 수도 코드

1. **`sumOfDigits` 함수**
    - 주어진 숫자의 자릿수 합을 계산힌다.
    - `num % 10`을 사용하여 마지막 자릿수를 구하고, `Math.floor(num / 10)`으로 숫자를 한 자릿수씩 축소한다.
2. **`map`**
    - 각 자릿수 합을 key로 하고 그 자릿수 합을 가진 숫자들 중 가장 큰 숫자를 value로 저장하는 `Map` 객체이다.
3. **`maxSum`**
    - 최대 합을 기록할 변수로, 초기값은 `1`로 설정하여 자릿수 합이 같은 숫자 쌍이 없을 경우를 처리한다.
4. 각 숫자에 대해 자릿수 합을 계산하고, 그 자릿수 합에 해당하는 최대 숫자를 `map`에 기록한다.
5. 동일한 자릿수 합을 가진 숫자가 나타날 때마다 그들의 합을 계산하고 `maxSum`을 갱신한다.

## 시간 복잡도

1. **`sumOfDigits` 함수**
    - 숫자 `num`의 자릿수는 대체로 `log(num)`에 비례합니다.
    - 따라서 `sumOfDigits` 함수의 시간 복잡도는 숫자의 자릿수에 비례하며, 이는 `O(log(num))`이다.
2. **메인 루프 (for 루프)**
    - 주어진 배열 `nums`에 대해 한 번 순회하는데, 배열의 크기를 `n`이라고 할 때, 루프는 `n`번 반복합니다.
    - 각 반복에서 `sumOfDigits`를 호출하므로, `O(log(num))`의 시간이 추가됩니다.

**전체 시간 복잡도는** `nums` 배열에 대해 한 번 순회하며, 각 숫자에 대해 자릿수 합을 구하므로 `O(n * log(num))` 이다.

## 공간 복잡도

1. **`map` 객체**
    - `map`은 자릿수 합을 key로 하고 그 합에 해당하는 최대 숫자를 저장하는 데 사용된다.
    - 최대 `n`개의 숫자에 대해 `map`에 값이 저장될 수 있다.
2. **그 외 변수**
    - `sumOfDigits` 함수는 상수 공간만 필요하다.
    - `maxSum` 변수도 상수 공간만 차지한다.

**전체 공간 복잡도는** `map` 객체의 공간이므로 전체 공간 복잡도는 `O(n)`이다.

## 알아둬야 할 것!

1. **자릿수 합 계산 (Digit Sum)**
    - `num % 10`으로 자릿수 하나씩 추출하고, `Math.floor(num / 10)`을 이용해 자릿수를 줄여나가는 방식아다.
2. **`Map` 자료구조**
    - 숫자들의 자릿수 합을 저장하고, 자릿수 합에 해당하는 최대값을 빠르게 조회할 수 있는 `Map` 객체의 사용법을 이해해야 한다.
    - `Map`은 키와 값을 효율적으로 저장하고 조회하는 데 유리하다.
3. **최대값 계산**
- 자릿수 합이 같은 숫자들의 합을 계산할 때, 그 중에서 가장 큰 값을 찾는 과정이 필요하다.
- 이를 위해 조건에 맞는 두 숫자의 합을 계속해서 비교하고 최대값을 갱신하는 방법을 알아야 한다.

## 회고

이번 문제를 풀면서 자릿수 합을 계산하는 방식과, 자릿수 합을 기준으로 숫자들을 그룹화하는 방법을 배웠다.

`Map`을 활용해 자릿수 합이 같은 숫자들을 효율적으로 처리할 수 있었고, 그들의 합 중 가장 큰 값을 찾는 방식이었다.

시간 복잡도와 공간 복잡도를 고려하면서 문제를 최적화하는 방법을 고민했는데, `O(n * log(num))`와 `O(n)`이라는 결과가 나와서 만족스럽다.

 이 문제를 통해 알고리즘 최적화의 중요성을 다시 한 번 느꼈다.
