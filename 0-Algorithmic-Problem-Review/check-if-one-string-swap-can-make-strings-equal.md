## [**Check if One String Swap Can Make Strings Equal**](https://leetcode.com/classic/problems/check-if-one-string-swap-can-make-strings-equal/description/)

이 문제는 길이가 같은 두 개의 문자열 `s1` 및 `s2`가 제공된다.

**문자열 스왑**은 문자열에서 두 개의 인덱스(반드시 다를 필요는 없음)를 선택하고 이러한 인덱스에서 문자를 바꾸는 작업이다.

## 주요 포인트

- "거의 동일"이란 두 문자열이 서로 **하나의 교환으로 같아질 수 있으면** true를 반환하는 조건이다.
- 두 문자열은 길이가 같고, 서로 다른 문자가 최대 두 개까지만 있어야 한다.
- 교환 가능한지 여부는 두 문자만 다른 위치에서 서로 교환이 가능한지 확인하면 된다.

## 나의 코드

```jsx
var areAlmostEqual = function(s1, s2) {
  if (s1 === s2) return true;
  
  const diff = [];
  
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diff.push([s1[i], s2[i]]);
    }
    if (diff.length > 2) return false;
  }
  
  return diff.length === 2 && diff[0][0] === diff[1][1] && diff[0][1] === diff[1][0];
};
```

## 나의 수도 코드

1. 만약 s1과 s2가 동일하면, true 반환.
2. 두 문자열에서 문자가 다른 위치를 기록하는 리스트(diff) 생성.
3. s1과 s2를 한 글자씩 비교하여 차이가 나는 문자를 diff 리스트에 저장.
4. diff의 길이가 2를 초과하면, false 반환.
5. diff 길이가 2이면, 교환 가능 여부를 확인.
    - diff[0][0] == diff[1][1] && diff[0][1] == diff[1][0] 이면 true, 아니면 false 반환.

## 시간 복잡도

1. **`s1 === s2` 비교**
    - `s1 === s2`가 **다르면** 실제로 차이를 계산해야 하므로, 이 비교에서 **O(n)** 시간 복잡도를 가질 수 있다.
2. **`for` 루프**
    - 문자열을 한 문자씩 비교하여 `diff` 리스트에 다른 문자를 저장한다.
    - 이 루프는 문자열 길이만큼 반복되므로, O(n)의 시간이 걸린다.
3. **`diff` 길이 확인 및 교환 가능성 확인**
    - `diff.length`가 2인 경우, 두 문자열이 교환 가능한지 확인하는 작업은 O(1)의 시간 복잡도를 가진다.

따라서 전체 시간 복잡도는 **O(n)** 이다.

## 공간 복잡도

1. **`diff` 배열**
    - 이 배열은 최대 2개의 다른 문자를 기록한다.
    - 차이가 두 개를 초과하면 더 이상 저장하지 않으므로, 공간 복잡도는 O(1)이다.
2. **기타 변수**
    - `s1 === s2` 비교나 `for` 루프에서 사용하는 변수들은 모두 상수 공간을 차지한다.

따라서 전체 공간 복잡도는 O(1)이다.

## 회고

이 문제를 풀면서 문자열의 비교와 차이점 추적에 대한 중요한 개념들을 다시 한 번 생각할 수 있었다.

처음에는 문자열을 정렬하여 비교하는 방법을 사용하려 했지만, 시간 복잡도를 고려하면서 더 효율적인 방법으로 접근하게 되었다.

`for` 루프를 이용해 차이점을 추적하고, 두 개의 문자가 교환 가능한지 확인하는 방식으로 문제를 해결할 수 있었다.

이를 통해 문제 해결의 최적화 과정에서 중요한 요소인 시간과 공간 복잡도를 효과적으로 고려할 수 있었고 결국, 시간 복잡도를 `O(n)`으로 줄이고, 공간 복잡도를 `O(1)`로 유지하는 방식으로 문제를 해결할 수 있어 만족스러웠다.
