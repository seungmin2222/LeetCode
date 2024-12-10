## [**Find Longest Special Substring That Occurs Thrice I**](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/)

주어진 문자열 `s`에서 하나의 문자로만 구성된 "특수한 문자열" 중 적어도 3번 이상 등장하는 가장 긴 substring의 길이를 반환하는 문제이다.

만약 조건을 만족하는 substring이 없다면 -1을 반환한다.

## 주요 포인트

1. **특수 문자열 정의**
    - 문자열이 하나의 문자로만 이루어져 있어야 특수 문자열로 간주됨.
    - 예: "aaa", "bbbb" → 특수 문자열 / "abc" → 특수 문자열 아님.
2. **Substring의 개념**
    - 주어진 문자열의 연속된 부분 문자열을 의미.
    - 예: "abc"의 substring → "a", "ab", "abc", "b", "bc", "c".
3. **조건 검증**
    - substring이 **특수 문자열인지 확인**해야 하며, **최소 3번 이상 등장**해야 유효.
4. **최장 길이 확인**
    - 조건을 만족하는 substring 중 가장 긴 길이를 추출하는 로직 필요.

## 나의 코드

```tsx
var maximumLength = function(s) {
  const arr = s.split("");
  const obj = {};
  let count = 1;
  const result = [];
  let maxLength = -1;
  
  function isArrayConsistOfChar(arr, char) {
    return arr.every(element => element === char);
  }
  
  for (let i = 0; i < s.length; i++) {
    for (let j = i + count; j < s.length + 1; j++) {
      if (isArrayConsistOfChar(arr.slice(i,j), arr[i])) {
        if (obj[arr.slice(i,j).join("")] === undefined) {
            obj[arr.slice(i,j).join("")] = 1;
        } else {
          obj[arr.slice(i,j).join("")]++
        }
      }
      
    }
  }
  
  for (let i in obj) {
    if (obj[i] >= 3) {
        result.push(i);
    }
  }
  
  for (let i = 0; i < result.length; i++) {
    if(result[i].length > maxLength) maxLength = result[i].length;
  }
  
  return maxLength;
};
```

## 나의 수도 코드

1. 문자열을 배열로 변환.
2. 필요한 변수 초기화.
3. 특수 문자열인지 확인하는 헬퍼 함수 정의.
4. 이중 반복문으로 모든 substring 생성 및 검증.
5. 조건을 만족하는 substring 추출.
6. 가장 긴 substring 길이 계산.
7. 최종 결과 반환.

## 시간 복잡도

1. 이중 반복문의 시간 복잡도는 O(n²).
2. **`isArrayConsistOfChar` 호출**
    - 매번 substring을 잘라내고 해당 substring이 특수 문자열인지 확인.
    - substring의 길이에 비례하는 작업이므로 최악의 경우 O(n).
    - 최악의 경우, 이중 반복문 내에서 O(n) 작업이 발생 → O(n³).

**총 시간 복잡도는** O(n³).

## 공간 복잡도

1. **객체(`obj`)**
    - 저장 가능한 substring의 개수는 O(n²) (최대 모든 substring 저장 가능).
2. **결과 배열(`result`)**
    - 최대 O(k).

**총 공간 복잡도는** O(n²).

## 다른 사람의 풀이

```tsx
var maximumLength = function(s) {
  const freqMap = new Map();
  let maxLength = -1;

  for (let length = 1; length <= s.length; length++) {
    for (let start = 0; start <= s.length - length; start++) {
      const substring = s.substring(start, start + length);
      
    
      if (new Set(substring).size === 1) {
        freqMap.set(substring, (freqMap.get(substring) || 0) + 1);
        
        if (freqMap.get(substring) >= 3) {
          maxLength = Math.max(maxLength, substring.length);
        }
      }
    }
  }

  return maxLength;
};
```

## 다른 사람의 수도 코드

1. **`Set`을 사용한 특수 문자열 검증**
    - 각 substring이 하나의 문자로만 구성되어 있는지 확인할 때, `Set`을 활용해 고유 문자의 개수가 1인지 검증.
    - 기존 코드의 `isArrayConsistOfChar` 함수 대체.
2. **출현 횟수 저장 구조 최적화**
    - `Map`을 사용하여 substring의 출현 횟수를 관리.
3. **중복 검증 최소화**
    - substring의 길이를 고정하고, 시작점을 변경하며 탐색.
    - substring이 이미 특수 문자열인지 빠르게 확인 후 조건에 맞지 않으면 불필요한 연산을 중단.
4. **최대 길이 계산 조건 단순화**
    - substring의 출현 횟수가 3 이상일 때만 `maxLength`를 업데이트하여 불필요한 조건문 최소화.

## 다른 사람의 시간 복잡도

1. 이중 반복문의 시간 복잡도는 O(n²).
2. **특수 문자열 확인**
    - `new Set(substring).size`를 사용하여 고유 문자 개수를 확인.
    - substring 길이에 비례하므로 최악의 경우 O(n).
    
    최악의 경우, 이중 반복문 내에서 O(n) 작업이 발생 → O(n³).
    

**총 시간 복잡도는** O(n³).

## 다른 사람의 공간 복잡도

1. **`Map`**
    - 저장 가능한 substring의 개수는 O(n²) (최대 모든 substring 저장 가능).
2. **기타 변수**
    - 상수 공간 사용 (maxLength 등).

**총 공간 복잡도는** O(n²).

## 알아둬야 할 것!

1. **중복 연산 최소화**
    - 동일한 substring에 대해 중복 검사를 방지하기 위한 캐싱이나 해시맵 사용.
2. **조건에 따른 조기 종료**
    - 최소 조건(특수 문자열 여부, 최소 출현 횟수 등)을 빠르게 검증하여 불필요한 탐색을 줄임.
3. **효율적인 데이터 구조 활용**
    - 문자열 탐색 및 빈도 계산에 적합한 자료구조(`Map`, `Set`) 선택.
4. **결과를 점진적으로 업데이트**
    - 조건이 만족되는 순간 결과를 갱신하여 이후의 불필요한 연산을 피함.
5. **에지 케이스 처리**
    - 입력 문자열이 비어있거나, 조건을 만족하는 substring이 없는 경우 기본값 반환을 올바르게 설계.

## 회고

이번 문제를 통해 특수 문자열의 정의와 이를 효율적으로 탐색하는 방법을 배웠다.

Substring 탐색에서 발생하는 중복 연산을 줄이는 것이 핵심이었으며, 이를 위해 `Map`과 `Set` 같은 적절한 데이터 구조를 활용했었어야 했다.

또한, 조건부 결과 갱신과 에지 케이스 처리의 중요성을 깨달았고, 조기 종료 로직을 통해 효율성을 높이는 방법을 익혔다.

앞으로 더 큰 입력 크기에도 대응할 수 있도록 효율적이고 좋은 코드를 만들도록 노력해봐야겠다.
