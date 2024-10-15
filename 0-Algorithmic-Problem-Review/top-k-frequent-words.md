## [**Top K Frequent Words**](https://leetcode.com/problems/top-k-frequent-words/)

이 문제는 단어 빈도 분석 및 정렬 문제로, 빈도를 기준으로 정렬하고,

같은 빈도를 가진 단어를 사전 순으로 정렬하여 상위 `k`개의 단어를 반환하는 것이다.

## 주요 포인트

## 나의 코드

```jsx
var topKFrequent = function(words, k) {
  const obj = {};
  const arr = [];
  
  for (const word of words) {
    if (!obj[word]) {
        obj[word] = 1;
    } else {
      obj[word]++
    }
  }
  
  const changeArr = Object.entries(obj).sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    } else {
      return a[0].localeCompare(b[0]);
    }
  });
  
  for (let i = 0; i < k; i++) {
    arr.push(changeArr[i][0]);
  }
  
  return arr;
};
```

## 나의 수도 코드

1. 각 단어의 빈도를 계산하기 위해 빈 객체 `obj`를 사용.
2. `Object.entries(obj)`를 사용하여 객체를 `[[word, frequency], ...]` 형태의 배열로 변환한 후, 이 배열을 빈도수는 내림차순, 동일 빈도일 경우 단어는 오름차순으로 정렬.
3. 정렬된 배열에서 상위 `k`개의 단어를 선택하여 결과 배열 `arr`에 추가.
4. k개의 단어가 담긴 배열을 반환.

## 다른 사람의 풀이

```jsx
var topKFrequent = function(words, k) {
    const freqMap = {};
    for (const word of words) {
        freqMap[word] = (freqMap[word] || 0) + 1;
    }

    let maxFreq = 0;
    for (const freq of Object.values(freqMap)) {
        if (freq > maxFreq) {
            maxFreq = freq;
        }
    }

    const buckets = Array(maxFreq + 1).fill(0).map(() => []);
    for (const [word, freq] of Object.entries(freqMap)) {
        buckets[freq].push(word);
    }

    const result = [];
    for (let i = maxFreq; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            const sortedWords = buckets[i].sort();
            for (const word of sortedWords) {
                result.push(word);
                if (result.length === k) break;
            }
        }
    }

    return result;
};
```

## 다른 사람의 수도 코드

1. 각 단어의 빈도수를 `freqMap` 딕셔너리에 저장.
2. `freqMap`에서 최대 빈도수를 찾아 `maxFreq`에 저장.
3. 최대 빈도수를 기반으로 단어들을 빈도수에 따라 `buckets` 배열에 분류.
4. 높은 빈도수부터 낮은 빈도수 순으로 `buckets`을 순회.
5. 상위 `k`개의 단어를 추출합니다. 각 버킷 내의 단어는 알파벳 순으로 정렬.
6. `result`를 반환.

## 알아둬야 할 것!

### 1. **데이터 처리 및 정렬 기술**

- 문자열 배열을 분석하여 각 단어의 빈도를 계산하는 과정에서 **해시맵**(혹은 딕셔너리)을 사용하여 데이터 처리 효율성을 높일 수 있다.
- 빈도를 기준으로 우선순위 큐, 정렬 알고리즘 등을 이용해 데이터를 정렬하는 방법을 익힐 수 있다.
- 이는 실제 데이터 처리 및 분석, 로그 분석, 자연어 처리에서 빈번히 사용되는 기술이다.

### 2. **사전 순 정렬**

- 빈도가 같은 경우 사전 순서대로 단어를 정렬하는 것이 중요하므로, **문자열 비교 및 정렬**에 대한 이해를 깊게 할 수 있다.
- 이는 데이터베이스나 텍스트 처리, 검색 엔진 구현과 같은 응용 프로그램에서 유용한 기술이다.

### 3. localeCompare()

`localeCompare()` 함수는 JavaScript에서 문자열을 비교할 때 사용하는 메서드이다.

이 메서드는 두 문자열을 유니코드 기준으로 비교하여 **사전적 순서(lexicographical order)** 를 반환한다.

즉, 두 문자열을 알파벳 순서대로 비교할 때 사용됩니다.

### `localeCompare()`의 반환 값:

- **`1`**: 첫 번째 문자열이 두 번째 문자열보다 앞에 오는 경우 (사전 순으로 먼저 오는 경우)
- **`0`**: 두 문자열이 같은 경우
- **`1`**: 첫 번째 문자열이 두 번째 문자열보다 뒤에 오는 경우 (사전 순으로 나중에 오는 경우)

## 회고

이 문제를 풀면서 문자열 빈도를 계산하고 정렬하는 방법에 대한 이해를 깊게 할 수 있었다.

특히, `localeCompare()`를 통해 빈도가 같은 단어들을 사전 순으로 정렬하는 방법을 배운 점이 인상적이었다.

이문제를 통해 효율적인 데이터 처리와 정렬 방식을 익힐 수 있었고, 실생활에서 빈도 분석을 할 때 유용하게 활용할 수 있을 것 같다.
