## [Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/)

이 문제는 주어진 문자열에서 'a', 'b', 'c'라는 세 문자를 모두 포함하는 부분 문자열의 개수를 구하는 문제이다.

## 주요 포인트

슬라이딩 윈도우 (Sliding Window) 기법 사용

- 문자열에서 'a', 'b', 'c'를 모두 포함하는 부분 문자열을 찾기 위해서는 슬라이딩 윈도우 기법을 사용할 수 있다.
- 한 개의 창을 두고, 창을 오른쪽으로 확장하면서 'a', 'b', 'c'를 모두 포함하는 최소 창을 찾는다. 그 후, 창을 이동시키면서 해당 조건을 만족하는 부분 문자열의 개수를 세면 된다.

## 나의 코드

```jsx
var numberOfSubstrings = function(s) {
    let n = s.length;
    let count = 0;
    let charCount = {'a': 0, 'b': 0, 'c': 0};
    
    let left = 0;

    for (let right = 0; right < n; right++) {
        charCount[s[right]]++;
        
        while (charCount['a'] > 0 && charCount['b'] > 0 && charCount['c'] > 0) {
            count += n - right;
            
            charCount[s[left]]--;
            left++;
        }
    }
    
    return count;
};
```

## 나의 수도 코드

1. `charCount` 객체는 각 문자('a', 'b', 'c')의 개수를 셉니다.
2. `left`와 `right` 포인터로 슬라이딩 윈도우를 구현합니다. `right` 포인터는 문자열의 끝까지 이동하며, 각 문자를 포함하는 부분 문자열을 확인합니다.
3. `while` 루프는 현재 윈도우 안에서 'a', 'b', 'c'가 모두 포함된 경우를 찾아내고, 가능한 모든 부분 문자열을 세어 `count`에 더합니다.
4. 윈도우를 이동할 때 `left` 포인터를 증가시켜서 부분 문자열을 좁혀갑니다.

## 시간 복잡도

두 개의 포인터인 `left`와 `right`를 사용하여, `right` 포인터는 문자열의 끝까지 한 번만 순회하고, `left` 포인터는 `right` 포인터가 이동하면서 조건을 만족하는 부분 문자열을 찾을 때마다 오른쪽으로 이동한다.

따라서 시간 복잡도는 O(n)이다.

## 공간 복잡도

`charCount` 객체는 'a', 'b', 'c' 세 문자만을 추적하므로 상수 크기의 공간을 사용합니다. 즉, 공간 복잡도는 O(1)이다.

두 개의 포인터(`left`, `right`)와 `count` 변수가 사용되며, 이들도 모두 상수 크기의 공간을 사용한다.

따라서 공간 복잡도는 O(1) 이다.

## 회고

슬라이딩 윈도우 기법을 사용하여 문제를 풀었을 때, 전체 문자열을 한 번만 탐색하면 된다는 점에서 매우 효율적이었다.

`left`와 `right` 포인터의 움직임을 잘 관리하면서 조건을 만족하는 부분 문자열을 찾는 것이 핵심이었다.

처음에는 이 방식이 잘 이해되지 않았지만, 예시를 통해 점차적으로 더 명확해졌고 문제를 풀고 나니 슬라이딩 윈도우 기법을 실감할 수 있었다.
