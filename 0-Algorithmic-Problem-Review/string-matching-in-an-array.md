## [**String Matching in an Array**](https://leetcode.com/problems/string-matching-in-an-array/)

이 문제는 입력된 `words` 배열에서 다른 단어의 부분 문자열인 단어들을 찾아 반환하는 것이다.

## 나의 코드

```jsx
var stringMatching = function(words) {
    const result = [];
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[j].includes(words[i])) {
                result.push(words[i]);
                break;
            }
        }
    }
    
    return result;
};
```

## 나의 수도 코드

1. 함수 stringMatching(words)를 정의
2. 결과를 저장할 빈 배열 result 생성
3. words 배열에서 두 단어를 이중 루프로 비교
a. 외부 루프에서 단어 words[i] 선택
b. 내부 루프에서 다른 단어 words[j]와 비교 (i ≠ j)
    - 만약 words[j]가 words[i]를 포함한다면:
    i. result에 words[i] 추가
    ii. 중복을 방지하기 위해 내부 루프 중단
4. result 배열 반환

## 시간 복잡도

- 이중 루프를 사용하여 모든 단어 쌍을 비교.

최종 시간 복잡도는 O(n²)

## 공간 복잡도

- 결과 배열의 크기 만큼만 필요함.

최종 공간 복잡도는 O(n)

## 회고

이번 문제에서는 배열 내의 단어들이 다른 단어의 부분 문자열인지 확인하는 작업을 수행했다.

이중 루프를 사용해 각 단어를 비교하고, 특정 단어가 다른 단어 안에 포함되어 있다면 결과 배열에 추가하는 방식으로 접근했다.

전반적으로 문제를 해결하는 데는 무리가 없었지만, 더 효율적이고 깔끔한 코드를 작성하는 연습이 필요하다고 생각했다.
