## [**Make String a Subsequence Using Cyclic Increments**](https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/)

이 문제는 `str2`의 문자열이 `str1`에서 알파벳 순서대로 부분 문자열로 나타날 수 있는지 확인하는 문제이다. 즉, `str2`의 각 문자가 `str1`에서 연속적으로 나타나거나, 알파벳 순서대로 이어져야 한다.

## 주요 포인트

1. **부분 수열(Subsequence) 개념 이해**

- **부분 수열**은 원래 문자열에서 일부 문자를 삭제하여 새로운 문자열을 만드는 것이다.
- 여기서 중요한 점은 문자를 삭제할 수는 있지만, 그 순서는 **변경할 수 없다**.

2. **문자 순환(Cyclic Increment) 이해**

- **순환적 문자 변경**이란, 알파벳이 'a'에서 'b', 'b'에서 'c'처럼 변하며, 'z'에서 다시 'a'로 돌아가는 특성을 가진다.
- 예를 들어, 'a'를 한 번 증가시키면 'b'가 되고, 두 번 증가시키면 'c'가 되며, 'z'는 다시 'a'로 돌아간다.

3. **두 문자열의 문자 비교**

- 각 문자에 대해 **직접 일치**하거나 **순환적으로 일치**할 수 있는지를 판단해야 한다.
- 예를 들어, 'a'가 'b'로 변할 수 있도록 한 번 순환시키거나, 'b'가 'd'로 변할 수 있도록 두 번 순환시킬 수 있다.
- 이 비교를 위해서는 각 문자의 **아스키 코드 값**을 이용해 비교하는 방법을 사용한다.

## 나의 코드

```jsx
var canMakeSubsequence = function(str1, str2) {
    let j = 0;
    
    for (let i = 0; i < str1.length && j < str2.length; i++) {
        if (str1[i] === str2[j] || (str1.charCodeAt(i) + 1 - 97) % 26 + 97 === str2.charCodeAt(j)) {
            j++; 
        }
    }
    
    return j === str2.length;
};
```

## 나의 수도 코드

1. `j`는 `str2`에서 현재 확인 중인 문자의 인덱스를 추적.
2. `i`는 `str1`을 순차적으로 탐색하면서, `str2[j]`가 `str1[i]`와 일치하거나, 알파벳 순서로 한 문자 차이인지를 확인.
3. 일치하는 문자가 발견되면 `j`를 증가시켜 `str2`의 다음 문자로 이동
4. 모든 문자를 찾았다면 `true`를 반환.
5. `str2`의 모든 문자를 찾지 못하면 `false`를 반환.

## 시간 복잡도

- `str1`을 한 번 순회하면서 `str2`의 문자를 비교한다.
- `str1`의 길이가 `n`이고, `str2`의 길이가 `m`일 때, 최악의 경우 `str1`을 한 번만 순회하므로 시간 복잡도는 `O(n)`이다.

## 공간 복잡도

입력 문자열 외에 추가적인 데이터 구조를 사용하지 않으므로 공간 복잡도는 `O(1)`이다.

## 알아둬야 할 것!

1. **부분 수열 (Subsequence)**
    - 문자열에서 일부 문자를 삭제하여 새로운 문자열을 만들되, 순서는 변경되지 않음.
2. **순환적 문자 증가 (Cyclic Increment)**
    - 알파벳이 'a'에서 'b', 'b'에서 'c'처럼 변하고, 'z'는 다시 'a'로 돌아가는 특성.
3. **아스키 코드 (ASCII Code)**
    - 문자를 숫자로 변환한 값으로, 문자 간의 순차적인 변환을 계산하는 데 사용.
4. **시간 복잡도 최적화 (Time Complexity Optimization)**
    - 중복 작업을 피하고, 문자열이나 배열을 반복 순회하는 방식으로 알고리즘의 효율성을 높이는 방법.

## 회고

이 문제를 풀면서 **부분 수열**과 **순환적 문자 증가**를 잘 이해하고 적용하는 것이 중요하다는 점을 알게 되었다.

문제에서 요구하는 방식대로 한 번의 연산으로 문자들을 변경하며, `str1`을 순차적으로 비교하는 방식으로 풀 수 있다는 점에서 그리디 알고리즘의 유용성을 깨달았다.

특히, **아스키 코드**를 활용해 문자의 순환 변환을 계산하는 방법을 사용하여, 불필요한 중복 작업 없이 효율적으로 문제를 해결할 수 있었다.
