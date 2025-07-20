# [**Valid Word**](https://leetcode.com/problems/valid-word/)

## 주요 포인트

- **유효한 단어 조건**
    1. 길이가 최소 3 이상이어야 한다.
    2. 문자들은 0-9, A-Z, a-z로만 구성되어야 한다.
    3. 최소 한 개의 모음(a, e, i, o, u 및 대문자 포함)이 있어야 한다.
    4. 최소 한 개의 자음(영어 알파벳 중 모음이 아닌 문자)이 있어야 한다.
    5. @, #, $ 등의 특수문자가 포함되면 안 된다.
- **자음과 모음을 정확히 구분해야 함**
    - 숫자는 자음으로 취급하면 안 되며, 영어 알파벳만 자음과 모음 판별 대상이다.

## 나의 코드

```jsx
var isValid = function(word) {
    if (word.length < 3) return false;

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let hasVowel = false;
    let hasConsonant = false;

    for (let ch of word) {
        const lower = ch.toLowerCase();
        const code = ch.charCodeAt(0);

        const isLetter = (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
        const isDigit = code >= 48 && code <= 57;

        if (!isLetter && !isDigit) return false;

        if (isLetter) {
            if (vowels.includes(lower)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        }
    }

    return hasVowel && hasConsonant;
};
```

## 나의 수도 코드

1. 단어 길이가 3 미만이면 false 반환
2. 모음 배열 ['a', 'e', 'i', 'o', 'u'] 준비
3. hasVowel, hasConsonant 플래그를 false로 초기화
4. 각 문자에 대해:
    - 영어 또는 숫자가 아니면 false 반환
    - 영어 알파벳이면:
        - 모음이면 hasVowel = true
        - 모음이 아니면 hasConsonant = true
5. 최종적으로 hasVowel && hasConsonant가 true면 true 반환

## 시간 복잡도

- **O(n)**: 문자열 길이 n만큼 한 번 순회한다.

## 공간 복잡도

- **O(1)**: 모음 배열과 플래그 변수 외에 추가 메모리 사용 없음.

## 알아둬야 할 것!

- 알파벳 판별 시 charCodeAt 범위를 사용하면 정규식 없이도 간단히 구현 가능하다.
- Set을 사용하면 모음 체크가 O(1)로 빠르다.
- 입력 문자열 검증(허용되지 않는 문자 제거)을 우선적으로 하는 것이 효율적이다.

## 회고

- 처음 코드에서는 **문자 길이**, **허용 문자 필터링**, **자음 정의** 부분이 빠져서 틀렸다.
- 영어와 숫자만 통과시키는 조건을 추가하고, 모음과 자음을 정확히 구분한 후 해결할 수 있었다.
- 다음에는 문제의 모든 제약 조건을 빠짐없이 체크하는 습관을 들여야 한다.
