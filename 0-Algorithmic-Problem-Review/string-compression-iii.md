## [String Compression III](https://leetcode.com/problems/string-compression-iii/)

문자열을 압축하여 같은 문자가 최대 9번 반복되는 블록으로 변환하고, 각 블록을 "반복 수 + 문자" 형식으로 출력하는 문제이다.

## 주요 포인트

1. **최대 9회 제한**
    - 반복 횟수가 9에 도달하면 압축 결과 추가 및 초기화.
2. **결과 문자열 생성**
    - "횟수 + 문자" 형식으로 결과 연결.
3. **마지막 문자 처리**
    - 루프 종료 후 남은 문자도 결과에 추가.

## 나의 코드

```jsx
var compressedString = function(word) {
  let words = ''
  let count = 0;
  let nowWord = '';
  
  for (let i = 0; i < word.length; i++) {
      if (nowWord === word[i]) {
      count++;
    } else {
      if (nowWord !== '') {
        words += count + nowWord;
      }
      nowWord = word[i];
      count = 1;
    }

    if (count === 9) { 
      words += count + nowWord;
      nowWord = '';
      count = 0;
    }
  }

  if (count > 0) {
    words += count + nowWord;
  }
  
  return words;
}; 
```

## 나의 수도 코드

1. `words` (결과 문자열), `count` (반복 횟수), `nowWord` (현재 문자)를 초기화.
2. 문자열을 한 문자씩 순회
    - 현재 문자가 `nowWord`와 같으면 `count` 증가.
    - `nowWord` 와 같지 않다면
        - `words`에 `count`와 `nowWord`를 추가.
        - `nowWord`를 새 문자로 갱신하고 `count`를 1로 초기화.
    - `count`가 9라면
        - `words`에 `count`와 `nowWord`를 추가.
        - `count`와 `nowWord`를 초기화.
3. 루프 종료 후 남아 있는 문자(`count`와 `nowWord`)를 `words`에 추가.
4. `words` 반환.

## 시간 복잡도

- **문자열 순회**: 입력 문자열의 각 문자를 한 번씩 확인 → O(n).
- **문자 처리**: 각 문자는 최대 한 번 처리 → O(n).
- **결과 추가**: "횟수 + 문자" 연결 작업 → O(1) * n = O(n).
- **최종 시간 복잡도**: **O(n)**.

## 공간 복잡도

- **입력 문자열**: 입력 문자열 자체의 크기 → O(n).
- **결과 문자열(`words`)**: 최악의 경우, 출력 문자열의 길이는 입력 문자열의 길이에 비례 → O(n).
- **추가 변수**: `count`, `nowWord`, 루프 변수 → O(1).
- **최종 공간 복잡도**: **O(n)**.

## 알아둬야 할 것!

1. **최적화된 문자열 처리**
    - 반복된 문자를 효율적으로 압축하는 알고리즘 설계.
2. **경계 조건 처리**
    - 최대 반복 횟수(9)나 문자열 끝에서 남은 문자 처리의 중요성.
3. **시간 및 공간 복잡도 분석**
    - 알고리즘의 성능을 평가하고 최적화 포인트를 이해.

## 회고

이 문제를 통해 문자열을 효율적으로 처리하는 방법과 반복 횟수 제한(최대 9회)을 다루는 알고리즘 설계의 중요성을 배웠다.

특히, 루프 종료 후 남은 데이터를 처리하는 경계 조건과 문자열 연결의 정확성을 고민하며 문제를 해결할 수 있었다.

또한, 시간 복잡도 O(n)과 공간 복잡도 O(n)을 유지하면서 최적의 성능을 구현했다는 점에서 만족스러웠다.

이 과정은 문자열 처리 문제를 다루는 기본기를 더욱 탄탄히 다지는 기회가 되었다.
