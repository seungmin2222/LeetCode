## [**Find the K-th Character in String Game I**](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/description/?envType=daily-question&envId=2025-07-03)

## 주요 포인트

- 문자열이 특정 규칙에 따라 반복적으로 확장됨
- 확장 규칙 : 문자열의 각 문자를 알파벳 다음 문자로 바꾸고 그것을 원래 문자열 뒤에 붙임

## 나의 코드

```jsx
function findKthCharacter(k: number): string {
  let word = "a";

  while (word.length < k) {
    let next = "";
    for (let c of word) {
      next += String.fromCharCode(c.charCodeAt(0) + 1);
    }
    word += next;
  }

  return word[k - 1];
}
```

## 나의 수도 코드

1. 초기 문자열 word = "a"
2. word.length가 k보다 작을 동안:
    - word의 각 문자 c를 c+1로 바꿔서 새로운 문자열 next를 생성
    - word = word + next
3. word[k - 1] 리턴

## 시간 복잡도

O(n log n)

- 이유 : word의 길이는 매번 약 2배가 되며, 총 길이가 k를 넘을 때까지 반복 → word 길이가 k 이하일 때까지 계속 반복 생성

## 공간 복잡도

O(k)

- 문자열이 메모리 상에 쌓이기 때문

## 알아둬야 할 것!

- 문제에서 “충분히 반복한 뒤 k번째” → 전체 문자열이 아닌 **패턴 추론** 필요

## 회고

- 단순 구현은 직관적이지만 확장 시 메모리/시간 터짐
- 수열/트리처럼 규칙을 파악하고 수학적으로 접근하는 연습이 필요
- 이런 문제를 보면 항상 “전체 구성할 필요 있나?“를 먼저 떠올리자
