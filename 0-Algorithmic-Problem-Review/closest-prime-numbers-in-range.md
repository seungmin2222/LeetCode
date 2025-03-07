## [Closest Prime Numbers in Range](https://leetcode.com/classic/problems/closest-prime-numbers-in-range/description/)

이 문제는 주어진 `left`와 `right` 범위 내에서 두 개의 소수 `num1`과 `num2`를 찾아야 한다.

## 주요 포인트

- `left <= num1 < num2 <= right`
- 두 숫자는 소수여야 한다.
- 두 소수 사이의 차이 `num2 - num1`이 최소여야 한다.
- 여러 쌍이 있을 경우 `num1`이 가장 작은 쌍을 반환한다.
- 만약 소수 쌍이 존재하지 않으면 `[-1, -1]`을 반환한다.

## 나의 코드

```jsx
var closestPrimes = function(left, right) {
    const isPrime = Array(right + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= right; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= right; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = left; i <= right; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    let minDiff = Infinity;
    let result = [-1, -1];

    for (let i = 0; i < primes.length - 1; i++) {
        const diff = primes[i + 1] - primes[i];
        if (diff < minDiff) {
            minDiff = diff;
            result = [primes[i], primes[i + 1]];
        }
    }

    return result;
};
```

## 나의 수도 코드

1. `isPrime` 배열을 생성하여 크기 `right + 1`로 설정하고, 처음에 모든 값을 `true`로 채운다.
2. `isPrime[0]`과 `isPrime[1]`을 `false`로 설정하여 0과 1은 소수가 아님을 표시한다.
3. 소수 판별 과정 (에라토스테네스의 체)
    - 2부터 시작하여 `i * i <= right`까지 반복한다.
        - 만약 `isPrime[i]`가 `true`라면, `i`는 소수이므로 `i * i`부터 `right`까지 `i`의 배수들을 `false`로 설정한다. 이 과정으로 `isPrime` 배열에서 소수가 아닌 숫자들을 모두 제거한다.
4. `left`부터 `right`까지의 범위에서 `isPrime[i]`가 `true`인 값들을 `primes` 배열에 추가한다.
5. `primes` 배열에서 두 소수 간의 차이를 계산하고, 최소 차이를 가지는 두 소수 쌍을 찾는다.
6. `minDiff`를 `Infinity`로 초기화하여 최소 차이를 추적하고, 각 차이를 비교하여 `minDiff`보다 작은 차이가 있을 경우 `result` 배열에 해당 쌍을 저장한다.
7. 최종적으로 `result` 배열을 반환한다. 만약 소수 쌍이 없다면 `[-1, -1]`을 반환한다.

## 시간 복잡도

1. 소수 판별
    - 에라토스테네스의 체 알고리즘의 시간 복잡도는 `O(n log log n)`이다.
2. 소수 배열 생성
    - `left`에서 `right`까지의 숫자들 중에서 소수를 찾는 작업은 최대 `O(n - m + 1)`이다.
    - 이 값은 `O(n)`으로 표현할 수 있다.
3. 소수들을 담은 `primes` 배열에서 차이를 계산하는 부분은 `primes.length - 1` 만큼 반복하며, 이 부분의 시간 복잡도는 `O(k)`로, `k`는 `primes` 배열의 크기다.

전체 시간 복잡도는  `O(n log log n)`이다.

## 공간 복잡도

1. `isPrime` 배열
    - `isPrime` 배열은 크기 `n + 1`로, 공간 복잡도는 `O(n)`이다.
2. `primes` 배열
    - `primes` 배열은 `left`부터 `right` 사이의 소수들을 저장하므로, 최악의 경우 `primes` 배열의 크기는 `O(n)`이 될 수 있다.

전체 공간 복잡도는 `O(n)`로 간주할 수 있다.

## 알아둬야 할 것!

1. 에라토스테네스의 체
    - 이 알고리즘은 소수 판별에서 효율적으로 사용된다.
    - 주어진 범위 내에서 소수를 찾는 데 최적화된 방법 중 하나다.
2. 소수 간 차이
    - 소수들 간의 차이를 계산하여 최소 차이를 찾는 문제는 다양한 응용 문제에서 사용된다.
    - 소수의 특성을 활용한 문제 풀이 방법을 익히는 것이 중요하다.
3. 배수 처리
    - `i * i`부터 배수를 처리하는 방식은 소수를 효율적으로 찾는 핵심 부분이다.
    - 이 점을 이해하면 더 큰 범위에서도 쉽게 적용할 수 있다.

## 회고

이 문제를 풀면서 에라토스테네스의 체를 잘 활용한 방법이 인상 깊었다.

큰 범위에서도 소수를 효율적으로 판별할 수 있음을 알게 되었고, 이를 통해 소수 관련 문제에 접근할 때 좋은 아이디어를 얻었다.

문제 해결 과정에서 최소값을 추적하는 방법을 더욱 명확하게 이해할 수 있었지만, 소수 판별을 직접 구현하면서 배열의 크기와 메모리 사용량을 고려하는 것이 중요하다는 점을 다시 한번 깨달았다.

알고리즘의 효율성을 높이는 방법을 고민하며, 다양한 경우에 대한 테스트도 중요한 경험이었다.
