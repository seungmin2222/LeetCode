## [**Letter Combinations of a Phone Number**](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

이 문제는 주어진 숫자 문자열(2~9)을 입력받아, 해당 숫자들이 전화기의 키패드에 대응하는 문자들로 조합될 수 있는 모든 가능한 문자열을 반환하는 문제이다

## 주요 포인트

1. **문자열 조합 방식**
    - 각 숫자가 매핑된 문자를 선택한 후, 그 다음 숫자에 매핑된 문자들과 조합을 생성해야 한다. 이때 **재귀**나 **백트래킹** 방식을 사용할 수 있다.
2. **기저 조건**
    - 입력값이 비어 있을 경우, 반환해야 할 결과는 빈 리스트가 되어야 한다.
3. **문제 풀이 전략**
    - 문제에서 요구하는 모든 조합을 찾으려면 각 숫자에 매핑된 문자들을 **순차적으로 결합**해야 한다.
    - **재귀 호출** 또는 **반복문**을 사용하여 각 자리의 문자를 하나씩 선택하고, 그 다음 자리와 조합하는 방식으로 문제를 풀 수 있다.

## 나의 코드

```jsx
var letterCombinations = function(digits) {
  if (!digits.length) return [];
  const digitList = digits.split('');
  const obj = {
    "2" : ["a", "b", "c"],
    "3" : ["d", "e", "f"],
    "4" : ["g", "h", "i"],
    "5" : ["j", "k", "l"],
    "6" : ["m", "n", "o"],
    "7" : ["p", "q", "r", "s"],
    "8" : ["t", "u", "v"],
    "9" : ["w", "x", "y", "z"]
  }
  
  let totalSize = 1;
  for (let i = 0; i < digits.length; i++) {
    totalSize *= obj[digits[i]].length; 
  }
  let result = new Array(totalSize).fill('');
  let size = 1
  
  while (digitList.length) {
    let str = obj[digitList.pop()];
    
    for (let i = 0; i < totalSize; i++) {
      let idx = parseInt(i / size) % str.length;
      result[i] = str[idx] + result[i];
    }
    size *= str.length
    
  }
  return result;
};
```

## 나의 수도 코드

1. 함수 `letterCombinations(digits)`를 정의한
    - 입력: 숫자 문자열 `digits`
    - 출력: 숫자에 대응하는 가능한 문자 조합들의 리스트
2. `digits`가 빈 문자열이면, 빈 리스트를 반환
3. 각 숫자에 대응하는 문자들의 매핑을 담은 객체 `obj`를 정의한
4. `digits` 문자열을 각 숫자로 분리하여 `digitList`라는 배열로 만듬
5. 총 가능한 조합의 개수를 계산
    - 변수 `totalSize`를 1로 초기화
    - `digits`의 각 숫자에 대해 해당 숫자가 대응하는 문자의 개수를 `totalSize`에 곱함
6. 결과를 저장할 배열 `result`를 `totalSize` 크기로 생성하고, 각 요소를 빈 문자열로 초기화
7. `size`라는 변수를 1로 초기화하여 각 숫자에 대해 처리할 그룹의 크기를 추적함
8. `digitList`의 각 숫자에 대해 반복문을 시작
    - 숫자의 마지막 요소부터 하나씩 꺼내서 그에 대응하는 문자 리스트를 `str`에 저장
    - `result` 배열의 각 요소에 대해
        - 현재 숫자에 대응하는 문자를 추가하는데, 인덱스는 `(i / size)`를 계산하여 `str.length`로 나눈 나머지를 사용
        - `result[i]`에 해당 문자를 추가
    - 각 숫자의 문자 처리가 끝날 때마다, `size`에 `str.length`를 곱해줘서 다음 숫자의 처리를 준비
9. 모든 숫자에 대해 처리가 완료되면, 결과 배열 `result`를 반환

## 다른 사람의 풀이

```jsx
var letterCombinations = function(digits) {
  if (!digits.length) return [];
  
  const obj = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };

  let result = [];

  const backtrack = (index, currentCombination) => {
    if (index === digits.length) {
      result.push(currentCombination);
      return;
    }

    let letters = obj[digits[index]];
    
    for (let letter of letters) {
      backtrack(index + 1, currentCombination + letter);
    }
  };

  backtrack(0, '');

  return result;
};
```

## 다른 사람의 수도 코드

1. 함수 `letterCombinations(digits)`를 정의
    - 입력: 숫자 문자열 `digits`.
    - 출력: 숫자에 대응하는 가능한 문자 조합들의 리스트.
2. 입력 문자열이 비어 있으면, 빈 배열을 반환.
3. 숫자에 대응하는 문자들을 매핑하는 객체 `obj`를 생성.
4. 결과를 저장할 빈 배열 `result`를 선언.
5. 재귀 함수 `backtrack(index, currentCombination)`을 정의
    - `index`: 현재 탐색 중인 `digits` 문자열의 인덱스.
    - `currentCombination`: 현재까지 만들어진 문자 조합을 나타내는 문자열.
6. 재귀 함수 실행
    - **기저 조건**: `index`가 `digits` 문자열의 길이와 같으면, 현재 조합된 문자열 `currentCombination`을 `result`에 추가하고 재귀를 종료.
    - 현재 숫자 `digits[index]`에 대응하는 문자 리스트를 가져옴.
    - 현재 문자 `letter`를 `currentCombination`에 추가한 후, `index + 1`을 인덱스로 재귀 호출.
    - 즉, 다음 숫자의 문자 조합으로 넘어감.
7. 처음 호출 시, `backtrack(0, "")`을 호출하여 탐색을 시작함.
    - `index`는 0부터 시작하고, `currentCombination`은 빈 문자열로 초기화함.
8. 모든 재귀 호출이 완료되면, `result`에 모든 가능한 문자 조합들이 저장되어 있음.
9. 결과 배열 `result`를 반환.

## 알아둬야 할 것!

### 1. 나의 코드

### 특징

- **구조**: 반복문을 사용하여 각 숫자에 대응하는 문자 조합을 순차적으로 생성.
- **작동 방식**
    1. 먼저 가능한 총 조합 수 (`totalSize`)를 계산.
    2. 주어진 숫자 리스트를 거꾸로 탐색하면서, 각 숫자에 해당하는 문자를 조합해 나감.
    3. `size` 변수를 이용해 현재 처리 중인 문자 그룹의 크기를 추적.
    4. 각 숫자에 대응하는 문자를 순차적으로 `result` 배열에 업데이트.
- **장점**
    - 직접적으로 반복을 통해 조합을 생성하므로, 전체적으로 이해하기 직관적일 수 있음.
    - 결과 배열의 크기가 미리 결정되고, 그 안에서 문자 조합이 생성되므로 추가적인 공간 복잡도가 비교적 낮음.
- **단점**
    - 코드의 복잡성 증가: 숫자 문자열을 거꾸로 탐색하고, 매번 인덱스를 계산하여 문자 조합을 업데이트해야 함.
    - 확장성 문제: 만약 더 복잡한 조합이나 추가적인 조건이 필요한 경우, 반복문 기반 방식은 관리가 어렵고 코드가 더 복잡해질 수 있음.

### 2. 다른 사람의 백트래킹 코드

- **구조**: 재귀 함수를 사용하여 각 숫자에 대응하는 문자를 순차적으로 탐색하며, 가능한 모든 조합을 생성.
- **작동 방식**
    1. 숫자 문자열을 처음부터 끝까지 순차적으로 처리.
    2. 재귀 호출을 통해 현재 문자를 선택하고, 다음 숫자에 대응하는 문자들을 조합.
    3. 모든 조합이 완성되면, 결과 배열에 추가.
    4. 재귀 종료 후, 결과 배열 반환.
- **장점**
    - **유연성**: 백트래킹은 다양한 조건이나 제약이 있는 문제에서 효율적이며, 조건에 따라 조합 생성을 중단할 수 있어 확장성이 좋음.
    - **간결함**: 반복적인 구조를 재귀로 풀어내어 코드가 간결하고 이해하기 쉬움.
    - **탐색 최적화**: 불필요한 경로를 일찍 차단할 수 있는 상황에서 백트래킹 방식이 더 빠르게 동작할 수 있음.
- **단점**
    - 재귀 깊이가 깊어질 경우, 스택 오버플로우 위험이 있을 수 있음.
    - 코드 흐름이 재귀 호출로 분산되기 때문에, 반복문 기반 방식보다 초기에 이해하기 어려울 수 있음.

## 회고

이번 문제 풀이를 통해 반복문과 재귀를 각각 활용한 두 가지 방식을 비교하며, 각 방법의 특징을 잘 알 수 있었다. 특히, 재귀 기반 백트래킹은 코드의 간결성과 유연성에서 큰 장점을 보였지만, 반복문 기반 방식은 계산이 복잡한 반면 메모리 사용 측면에서 더 효율적일 수 있음을 깨달았다.
