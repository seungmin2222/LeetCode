# [The k-th Lexicographical String of All Happy Strings of Length n](https://leetcode.com/classic/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/description/)

이 문제는 "행복 문자열(happy string)"이라는 개념을 정의하고, 특정 길이의 모든 행복 문자열 중에서 k번째 문자열을 찾는 것이다.

## 주요 포인트

- 'a', 'b', 'c' 세 글자로만 이루어져 있음
- 인접한.두 글자가 같지 않음 (연속된 같은 글자가 없음)
1. 가능한 행복 문자열의 총 개수 계산
    - 첫 글자는 a, b, c 중 하나 선택 가능 (3가지)
    - 그 이후 각 위치에서는 이전 글자와 다른 2가지 글자 중 선택 가능
    - 따라서 총 개수는 3 × 2^(n-1)개
2. k가 가능한 개수보다 크면 빈 문자열 반환
3. 사전순으로 k번째 문자열 구성
    - 첫 글자 결정: k를 이용해 a, b, c 중 하나 선택
    - 나머지 글자 결정: 각 위치마다 이전 글자와 다른 두 글자 중 사전순으로 선택

## 나의 코드

```jsx
var getHappyString = function(n, k) {
    const totalCount = 3 * Math.pow(2, n - 1);
    
    if (k > totalCount) {
        return "";
    }
    
    const letters = ['a', 'b', 'c'];
    let result = "";
    
    k = k - 1;
    
    const firstCharIndex = Math.floor(k / Math.pow(2, n - 1));
    result += letters[firstCharIndex];
    
    k %= Math.pow(2, n - 1);
    
    for (let i = 1; i < n; i++) {
        const remainingChoices = Math.pow(2, n - i - 1);
        const lastChar = result[result.length - 1];
        const availableChars = letters.filter(char => char !== lastChar);
        const nextCharIndex = Math.floor(k / remainingChoices);
        
        result += availableChars[nextCharIndex];
        
        k %= remainingChoices;
    }
    
    return result;
};
```

## 나의 수도 코드

1. 총 가능한 행복 문자열의 수를 계산
2. k가 이 수보다 크면 빈 문자열을 반환
3. k를 0-인덱스로 변환
4. 첫 글자를 결정
    - k를 그룹 크기로 나누어 첫 글자의 인덱스(0, 1, 2)를 계산
5. k를 업데이트하여 선택된 그룹 내에서의 위치 나타냄
6. 각 위치(i=1부터 n-1까지)에 대해
    - 현재 위치에서 가능한 선택으로 만들 수 있는 경우의 수를 계산
    - 이전 글자를 확인하고, 그와 다른 두 글자를 찾음
    - k를 기반으로 어떤 글자를 선택할지 결정
    - 선택한 후 남은 k값을 업데이트
7. 최종 결과 문자열을 반환

## 시간 복잡도

1. 총 가능한 문자열 수 계산: O(1)
2. 첫 글자 결정: O(1)
3. 나머지 글자 결정: 반복문이 n-1번 실행되고, 각 반복에서
    - 가능한 선택 계산 : O(1)
    - 이전 글자 확인 : O(1)
    - 이전 글자와 다른 문자 찾기 : O(1) (letters 배열은 항상 3개의 요소만 가짐)
    - 다음 글자 선택 및 k 업데이트 : O(1)

따라서 최종 시간 복잡도는 O(n)이다.

## 공간 복잡도

- letters 배열: O(1) (항상 크기가 3인 배열)
- result 문자열: O(n) (길이가 n인 문자열을 저장)
- 기타 변수 (totalCount, k, groupSize 등): O(1)

따라서 최종 공간 복잡도는 O(n)이다.

## 알아둬야 할 것!

1. 사전순 나열의 패턴 파악 : 가능한 모든 경우를 나열하지 않고도 k번째 항목을 직접 계산하는 방법
2. 트리 구조를 활용한 접근 : 행복 문자열은 트리 형태로 표현 가능하며, 각 노드에서 가능한 선택 수를 계산 가능
3. 그룹화 전략 : 첫 글자에 따라 전체를 3개 그룹으로 나누고, 각 위치마다 선택에 따라 다시 하위 그룹화
4. 인덱스 변환 : 1-인덱스를 0-인덱스로 변환하여 계산 편의성 확보
5. 나머지 연산의 활용 : 현재 위치에서의 선택을 결정하기 위해 나머지 연산 활용
6. 조합론적 접근 : 가능한 문자열 수를 공식화하여 효율적으로 계산

## 회고

처음에는 모든 행복 문자열을 생성하고 정렬한 후 k번째를 찾으려 했으나, 직접 계산하는 방법이 훨씬 효율적임을 깨달았다.

k값을 활용하여 각 위치의 문자를 결정하는 방식은 순열/조합 문제에서 자주 사용되는 패턴임을 배웠고 이 문제는 트리 구조에서 특정 위치의 노드를 직접 찾아가는 문제로 재해석할 수 있다는 점이 흥미로웠다.

전체 경우의 수를 먼저 계산하여 불가능한 경우를 빠르게 걸러내는 최적화가 중요했고 이런 유형의 문제는 실제로 문자열을 생성하지 않고 수학적으로 접근하는 능력을 기르는 데 도움이 될 것 같다.
