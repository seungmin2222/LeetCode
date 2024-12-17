## [**Construct String With Repeat Limit**](https://leetcode.com/problems/construct-string-with-repeat-limit/)

이문제는 주어진 문자열 `s`와 반복 제한 `repeatLimit`을 이용해, 같은 문자가 최대 `repeatLimit`번까지만 연속으로 등장하도록 하면서 **사전순으로 가장 큰 문자열**을 만드는 것이다.

## 주요 포인트

1. **사전순(lexicographical order)**
    - 알파벳 순서로 문자열을 비교하는 방법이다.
    - 예: `z > y > ... > a`.
2. **문자열 빈도수 계산**
    - 문자열에서 각 문자가 몇 번 나왔는지 빈도수를 세는 방법.
    - 예: `"aab"` → `a: 2, b: 1`.
3. **우선순위 처리 (Priority)**
    - 사전순으로 큰 문자를 먼저 선택하여 구성하는 전략이 필요하다.
4. **반복 제한 조건 적용**
    - 특정 문자를 연속해서 `repeatLimit`번까지만 추가할 수 있도록 제어하는 방법.
5. **다음 가능한 문자 탐색**
    - 반복 제한에 걸렸을 때, 다음으로 큰 문자를 찾아서 추가하는 전략이 필요하다.

## 나의 코드

```jsx
var repeatLimitedString = function(s, repeatLimit) {
  const freq = Array(26).fill(0);
  for (const char of s) {
    freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  const result = [];
  let i = 25; 

  while (i >= 0) {
    if (freq[i] > 0) {
      let count = Math.min(freq[i], repeatLimit);  
      for (let j = 0; j < count; j++) {
        result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
      }
      freq[i] -= count;

      if (freq[i] > 0) {
        let nextChar = i - 1;
        
        while (nextChar >= 0 && freq[nextChar] === 0) {
          nextChar--;
        }

        if (nextChar < 0) break;

        result.push(String.fromCharCode(nextChar + 'a'.charCodeAt(0)));
        freq[nextChar]--;
      }
    } else {
      i--;  
    }
  }

  return result.join('');
};
```

## 나의 수도 코드

1. **문자 개수 세기**
    - `freq` 배열을 사용해 각 문자의 빈도수를 저장한다.
    - 인덱스 `0`은 `'a'`, 인덱스 `25`는 `'z'`를 나타낸다.
2. **결과 문자열 구성**
    - 알파벳 끝(`z`)부터 시작하여 문자를 가능한 한 많이 사용하되, `repeatLimit`을 넘지 않게 한다.
    - 특정 문자가 더 이상 추가될 수 없으면, 다음으로 큰 문자를 찾아 삽입한다.
3. **반복 제한 처리**
    - `freq` 값이 남아있는 경우 다른 문자를 한 번 삽입하고 다시 돌아가 해당 문자를 추가한다.
4. **종료 조건**
    - 더 이상 추가할 문자가 없으면 루프를 종료한다.

## 시간 복잡도

입력 문자열의 길이 `n`에 대해 한 번만 순회하고, 문자 빈도수를 조작하는 작업은 상수 시간이다.

최종 시간 복잡도는 O(n).

## 공간 복잡도

- **문자 빈도수 배열 (freq)**
    - 크기 `26`인 배열로 알파벳의 빈도수를 저장.
    - **공간 복잡도 = O(1)** (상수 크기, 알파벳 개수만큼).
- **결과 문자열 (result)**
    - 결과로 생성되는 문자열을 저장하는 공간.
    - 최악의 경우, 결과 문자열의 길이는 `O(n)` (입력 문자열 `s`의 길이).
- **임시 변수 및 반복문**
    - 인덱스 변수 `i`, `nextChar`와 같은 임시 변수를 사용.
    - 공간 복잡도에 영향 없음, 상수 공간 사용.

최종 공간 복잡도는 O(n).

## 알아둬야 할 것!

1. **문자 빈도수 계산**
    - 문자열에서 각 문자의 등장 횟수를 배열 또는 해시맵으로 저장.
    - 시간 복잡도: **O(n)**.
2. **우선순위 처리**
    - 사전순으로 큰 문자부터 사용하기 위해 정렬 또는 우선순위 큐 사용.
3. **조건 기반 제어 (Repeat Limit)**
    - 문자를 연속해서 삽입하되 `repeatLimit`을 넘지 않도록 제어.
    - 조건 위반 시 다음 큰 문자로 이동.
4. **탐욕적 최적화 (Greedy Strategy)**
    - 가능한 큰 문자부터 최대한 사용하면서 조건을 만족하는 결과를 구성.

## 회고

이 문제는 **문자열의 빈도수**를 계산하고, **사전순으로 가장 큰 문자부터** 삽입하되, **`repeatLimit`** 조건을 만족시켜야 했다.

반복 제한에 걸리면 **다음 큰 문자**를 찾아 삽입하는 탐욕적 전략을 사용했다.

주요 어려움은 조건 위반 시 예외 처리를 적절히 구현하는 것이었으며, 이를 통해 **조건 기반 탐색, 빈도수 활용, 탐욕적 최적화** 기법을 학습했다.

향후 개선점으로는 코드 최적화와 더 효율적인 자료구조 활용을 고민할 필요가 있다.
