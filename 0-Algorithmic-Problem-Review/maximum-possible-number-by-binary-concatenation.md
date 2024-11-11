## [**Maximum Possible Number by Binary Concatenation**](https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/)

이 문제는 주어진 숫자 배열에서 세 개의 숫자를 골라 이진수 문자열을 이어붙인 뒤, 그것을 십진수로 변환하여 가능한 최대값을 구하는 문제이다.

## 주요 포인트

1. **이진수 변환**
    - 각 숫자를 이진수 문자열로 변환해 배열에 저장.
2. **세 개의 숫자 선택**
    - 중복 없이 세 개의 서로 다른 숫자를 선택하여 이진수를 이어 붙이는 과정이 필요.
3. **최대값 갱신**
    - 세 개의 이진수를 이어 붙여 십진수로 변환한 후, 지금까지의 최대값과 비교하여 갱신.

## 나의 코드

```jsx
var maxGoodNumber = function(nums) {
  let maxNum = 0;
  
  const  binaryStrings = nums.map(num => num.toString(2));
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue; 
      for (let k = 0; k < nums.length; k++) {
        if (i === k || j === k) continue;
        const currentNumber = parseInt(binaryStrings[i] + binaryStrings[j] + binaryStrings[k], 2);
        maxNum = Math.max(maxNum, currentNumber);
      }
    }
  }
  
  return maxNum;
};
```

## 나의 수도 코드

1. **`nums`의 각 숫자를 이진수로 변환.**
    - `i`를 0부터 `nums.length - 1`까지 반복.
        - `j`를 0부터 `nums.length - 1`까지 반복.
            - `i`와 `j`가 같으면 이 조합을 건너뜀.
            - `k`를 0부터 `nums.length - 1`까지 반복.
                - `i`, `j`, `k`가 서로 다르지 않으면 이 조합을 건너뜀.
2. **선택한 세 개의 이진수 문자열을 이어 붙이기.**
3. `parseInt`를 사용하여 결합된 이진 문자열을 십진수로 변환.
4. `currentNumber`와 `maxNum`을 비교하여 더 큰 값을 `maxNum`에 저장.
5. 모든 조합을 탐색한 후, 가장 큰 값이 저장된 `maxNum`을 반환.

## 시간 복잡도

1. binaryStrings = nums.map(...)
    - nums의 각 원소를 2진수 문자열로 변환하는 작업이므로 이 단계는 O(n).
2. 삼중 for문
    - `i`, `j`, `k`를 각각 `nums` 배열의 길이만큼 순회하므로 삼중 루프의 시간 복잡도는 `O(n^3).`

## 공간 복잡도

`nums` 배열의 각 숫자에 대해 2진수 문자열을 저장하는 배열 `binaryStrings`를 만든다.

이 배열의 크기는 `n`이며, `O(n)`.

## 알아둬야 할 것!

1. **이진수 변환**
    - 숫자를 이진수 문자열로 변환하고, 이진수 문자열을 다시 십진수로 변환하는 방법을 익혀야 한다.
    - 이 문제에서는 `num.toString(2)`와 `parseInt(binaryString, 2)`을 사용했다.
2. **문자열 연결 및 조합**
    - 여러 개의 문자열을 연결하여 새로운 문자열을 만드는 방법과, 여러 인덱스의 조합을 활용하는 방법을 알아야 한다.
3. 경우의 수와 조합
    - i, j, k와 같은 세 개의 인덱스를 선택하는 조합을 만들고 조건에 맞게 조합을 구성하는 방법을 이해해야 한다.

## 회고

이 문제를 풀면서 삼중 루프를 통해 모든 조합을 고려하고, 각 조합에서 최대값을 찾는 방법을 사용했다.

해결 과정에서 이진수 변환과 문자열 연결을 통한 조합의 중요성을 다시 한 번 깨달았고, 시간 복잡도가 높아질 수 있는 삼중 루프의 비효율성을 실감했다.

또한, 공간 복잡도와 시간 복잡도를 최적화하는 것이 얼마나 중요한지 배웠다.

앞으로는 비슷한 문제에서 비트 연산 등을 활용한 최적화 방법을 더 깊이 연구해봐야겠다는 다짐을 하게 되었다.
