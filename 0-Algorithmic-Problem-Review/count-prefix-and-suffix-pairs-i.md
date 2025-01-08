## [Count Prefix and Suffix Pairs I](https://leetcode.com/classic/problems/count-prefix-and-suffix-pairs-i/description/)

주어진 문자열 배열에서, 하나의 문자열이 다른 문자열의 **접두사이자 접미사**인 경우를 찾아 `(i, j)` 쌍의 개수를 구하는 문제이다.

## 주요 포인트

- **접두사(Prefix)와 접미사(Suffix)**: 문자열의 시작과 끝 부분을 의미하며, 각각 `startsWith`와 `endsWith`로 확인할 수 있음.
- **이중 반복문 활용**: 두 개의 요소 간 관계를 확인하기 위해 모든 가능한 쌍을 탐색.
- **문자열 비교**: 문자열 조작과 조건 확인의 기본 메서드 이해 (`startsWith`, `endsWith` 등).

## 나의 코드

```jsx
var countPrefixSuffixPairs = function(words) {
    const isPrefixAndSuffix = (str1, str2) => {
        return str2.startsWith(str1) && str2.endsWith(str1);
    };

    let count = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i < j) {
                if (isPrefixAndSuffix(words[i], words[j])) {
                    count++;
                }
            }
        }
    }

    return count;
};
```

## 나의 수도 코드

1. 함수 `countPrefixSuffixPairs(words)`를 정의한다.
2. 카운터 변수 `count`를 0으로 초기화한다.
3. 문자열 배열 `words`에서 두 개의 인덱스 `i`와 `j`를 이중 반복문으로 순회한다.
    - 조건: `i < j`.
4. `isPrefixAndSuffix(str1, str2)` 함수를 호출하여 `words[i]`가 `words[j]`의 접두사이자 접미사인지 확인한다.
5. 조건이 참이면 `count`를 1 증가시킨다.
6. 반복문이 종료되면 `count`를 반환한다.

## 시간 복잡도

- **이중 for문**: O(n2), n은 배열의 길이.
    
    O(n^2)
    
- **`isPrefixAndSuffix`**: O(k), k는 문자열의 최대 길이.
    
    O(k)
    
- 총 시간 복잡도: O(n2⋅k).
    
    O(n^2⋅k)
    

## 공간 복잡도

추가 데이터 구조를 사용하지 않으므로 O(1)

## 알아둬야 할 것!

1. **조건 기반 탐색**: 특정 조건을 만족하는 쌍을 찾기 위해 효율적으로 반복문 설계.
2. **함수 분리의 중요성**: `isPrefixAndSuffix`처럼 반복적인 조건을 함수로 캡슐화해 코드 가독성과 재사용성 향상.
3. **시간 복잡도 분석**: 이중 반복문과 문자열 비교를 포함한 알고리즘의 성능 계산.

## 회고

이번 문제를 통해 문자열 조작 함수인 `startsWith`와 `endsWith`의 활용법을 익히고, 조건을 만족하는 쌍을 효율적으로 탐색하는 방법을 학습했다.

이중 반복문을 사용해 모든 가능한 조합을 확인하는 과정에서 시간 복잡도를 계산하며 성능을 분석하는 연습도 되었다. 또한, `isPrefixAndSuffix`와 같은 헬퍼 함수를 분리해 코드의 가독성과 재사용성을 높혔다.

문제를 해결하며 알고리즘 설계와 효율성의 균형에 대해 고민할 수 있었고, 제약 조건 내에서는 최적의 해결책을 찾았다고 생각한다.

앞으로 더 큰 입력에 대해 확장 가능한 방식도 고민해볼 필요가 있다.
