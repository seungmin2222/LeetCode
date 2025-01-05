## [Maximum XOR for Each Query](https://leetcode.com/classic/problems/maximum-xor-for-each-query/description/)

주어진 nums 배열에서 모든 요소의 XOR 값과, 주어진 maximumBit로 결정된 값(0부터 2^maximumBit - 1 사이의 값) 중에서 XOR 결과를 최대화하는 k를 반복적으로 찾는 문제이다. 

## 주요 포인트

1. `a XOR a = 0`, `a XOR 0 = a`, 그리고 XOR 연산은 교환 법칙과 결합 법칙이 성립한다.
2. `2^maximumBit - 1`은 해당 비트로 표현할 수 있는 가장 큰 값이다.
3. 배열의 모든 요소를 XOR하면 중간 계산 없이 전체 XOR 값을 얻을 수 있다.

## 나의 코드

```jsx
var getMaximumXor = function(nums, maximumBit) {
    let xor = 0;
    let maxNum = (1 << maximumBit) - 1;
    let result = [];

    for (let num of nums) {
        xor ^= num;
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result.push(xor ^ maxNum);
        xor ^= nums[i];
    }

    return result;
};
```

## 나의 수도 코드

1. `maxNum = (1 << maximumBit) - 1`를 사용해 가능한 최대값을 계산.
2. `xor` 변수에 배열의 모든 요소를 XOR 연산.
3. 각 쿼리에서 `k = xor ^ maxNum`를 계산해 최대 `k`를 찾고, `xor`에서 마지막 요소를 제거해 다음 쿼리를 처리.
4. 결과는 배열로 반환.

## 시간 복잡도

- `nums` 배열의 요소를 한 번 순회하여 누적 XOR을 계산 O(n).
- 이후 각 쿼리에서 XOR 연산과 배열 갱신을 진행하며, 배열의 길이만큼 반복 O(n).

따라서 전체 시간 복잡도는 O(n).

## 공간 복잡도

- 결과를 저장하기 위한 배열 `result`의 크기가 O(n).
- 추가적으로 `xor`과 `maxNum` 같은 상수 공간만 사용

따라서 최종 공간 복잡도는 O(n).

## 알아둬야 할 것!

1. `k = currentXOR ^ maxNum`은 XOR 연산의 역특성을 활용해 결과를 최대화한다.
2. 매 쿼리마다 마지막 값을 XOR해서 배열 크기를 줄이는 대신 누적 XOR만 업데이트한다.
3. XOR 연산이 O(1)이며, 한 번의 루프에서 계산하므로 O(n)으로 문제를 해결한다.

## 회고

이번 문제를 통해 XOR 연산의 특성과 누적 XOR을 활용한 최적화 기법을 배울 수 있었다.

특히, 배열을 직접 수정하지 않고 누적 XOR 값을 업데이트하며 쿼리를 효율적으로 처리하는 방법이 중요한 포인트라고 생각한다. 최대값을 계산하기 위해 `2^maximumBit - 1`을 사용하는 방식은 비트 연산의 유용성을 잘 생각하고 잊지말아야겠다.

앞으로도 XOR이나 비트 연산을 활용한 문제에서 이를 적용해볼 기회가 있었으면 좋겠다.
