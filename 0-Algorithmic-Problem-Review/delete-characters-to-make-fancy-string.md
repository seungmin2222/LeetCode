# [Delete Characters to Make Fancy String](https://leetcode.com/problems/delete-characters-to-make-fancy-string/)

## 주요 포인트

- 같은 문자가 3번 연속 등장하지 않도록 문자를 최소한으로 제거

## 나의 코드

```tsx
var makeFancyString = function(s) {
    let word = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i + 1] || s[i] !== s[i + 2]) {
            word += s[i];
        }
    }

    return word;
};
```

## 나의 수도 코드

1. 빈 문자열 word 선언
2. 문자열을 처음부터 끝까지 반복
3. 현재 문자가 다음 문자, 다다음 문자와 모두 같으면 추가하지 않음
4. 그렇지 않으면 word에 추가
5. 최종 문자열 반환

## 시간 복잡도

- O(n)
    
    문자열을 한 번만 순회
    

## 공간 복잡도

- O(n)
    
    출력 문자열에 비례
    

## 다른 사람의 풀이

```tsx
var makeFancyString = function(s) {
    let result = s.slice(0, 2); // 최소 2개는 무조건 허용

    for (let i = 2; i < s.length; i++) {
        if (!(s[i] === s[i - 1] && s[i] === s[i - 2])) {
            result += s[i];
        }
    }

    return result;
};
```

## 알아둬야 할 것!

- 같은 문자의 반복 조건 문제는 카운팅 또는 직전 문자 상태 저장 방식이 효과적
- 제한 조건이 3개 이상 연속 → 최근 2개의 상태만 알면 충분
- 문자열을 누적할 때는 배열 + join 방식이 성능상 더 나을 수 있음 (많은 문자 처리 시)

## 회고

나는 비교 기준이 너무 “앞으로”만 향해 있어 s[i+1], s[i+2] 비교는 끝에서 잘못 작동할 수 있다는 결론이 났다.

앞으로는 문제 조건이 이전 상태를 기준으로 판단 가능한지 먼저 생각해봐야겠다.

문자열 연속성 조건은 앞문자 기반 누적 방식이 일반적으로 안전하고 깔끔하다.
