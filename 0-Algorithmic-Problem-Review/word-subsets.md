## [Word Subsets](https://leetcode.com/problems/word-subsets/)

이 문제는 주어진 두 배열 `words1`과 `words2`에서, `words1`의 각 단어가 `words2`의 모든 단어들의 문자들을 요구된 횟수만큼 포함하는지를 확인하는 문제이다. 

## 주요 포인트

- **`requiredFreq` 배열 계산**
    - `words2`의 각 단어에 대해 각 문자의 빈도를 계산하고, 각 문자의 최대 빈도수를 `requiredFreq` 배열에 기록한다.
- **`filter`와 `every`를 활용한 필터링**
    - `words1`에서 각 단어의 문자의 빈도를 계산한 후, `requiredFreq`에서 요구하는 빈도 수를 모두 충족하는지 체크한다.
    - `every`를 사용하여 모든 문자에 대해 조건을 확인한다.

## 나의 코드

```jsx
var wordSubsets = function(words1, words2) {
  const requiredFreq = new Array(26).fill(0);
  for (const word of words2) {
    const wordFreq = new Array(26).fill(0);
    for (const char of word) {
      wordFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < 26; i++) {
      requiredFreq[i] = Math.max(requiredFreq[i], wordFreq[i]);
    }
  }

  return words1.filter(word => {
    const wordFreq = new Array(26).fill(0);
    for (const char of word) {
      wordFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    return requiredFreq.every((freq, idx) => wordFreq[idx] >= freq);
  });
};
```

## 나의 수도 코드

1. 크기 26의 배열 `requiredFreq`를 초기화하여 `words2`에서 각 문자의 최대 빈도를 저장할 준비를 한다.
2. `words2`의 각 단어에 대해
    1. 크기 26의 배열 `wordFreq`를 초기화하여 현재 단어의 문자 빈도를 기록한다.
    2. 현재 단어의 각 문자에 대해 해당 문자의 빈도를 `wordFreq`에 증가시킨다.
    3. `requiredFreq`를 `wordFreq`와 비교하여 각 문자의 최대 빈도를 갱신한다.
3. 빈 배열 `result`를 초기화하여 조건을 만족하는 단어들을 저장할 준비를 한다.
4. `words1`의 각 단어에 대해
    1. 크기 26의 배열 `wordFreq`를 초기화하여 현재 단어의 문자 빈도를 기록한다.
    2. 현재 단어의 각 문자에 대해 해당 문자의 빈도를 `wordFreq`에 증가시킨다.
        1. `wordFreq`가 `requiredFreq`의 요구 조건을 충족하는지 확인한다.
    3. `wordFreq`의 각 문자가 `requiredFreq` 이상으로 등장하면 조건을 만족하는 것이다.
    4. 조건을 만족하는 단어는 `result`에 추가한다.
5. `result` 배열을 반환한다.

## 시간 복잡도

- `words2`에 있는 모든 단어들에 대해 각 단어의 빈도를 계산하는 데 걸리는 시간
    - 각 단어의 길이를 `m`이라고 할 때, `words2`의 크기가 `n2`이면 `O(n2 * m)` 시간이 걸린다.
- `words1`의 각 단어에 대해, `requiredFreq`와 비교하는 데 걸리는 시간
    - 각 단어의 길이를 `m`이라고 할 때, `words1`의 크기가 `n1`이면 `O(n1 * m)` 시간이 걸린다.

전체 시간 복잡도는 **O(n2 * m + n1 * m)**

## 공간 복잡도

- 각 단어의 빈도를 저장하는 배열 `requiredFreq`와 `wordFreq`는 각각 크기가 26인 배열이다.
    
    따라서 공간 복잡도는 `O(1)`이다.
    

## 알아둬야 할 것!

엣지 케이스 처리

- `"oo"`와 같은 문자가 있을 경우, 해당 문자가 최소 두 번 이상 등장해야 한다는 조건을 `requiredFreq`에서 처리한다.
- 예를 들어 `"facebook"`은 `'o'`가 2번 등장하기 때문에 `"oo"` 조건을 만족한다.

## 회고

이 문제를 풀면서, 주어진 조건에 맞는 문자의 빈도를 계산하고 이를 비교하는 방식이 핵심이라는 점을 깨달았다.

 처음에는 `requiredFreq` 배열을 갱신하는 과정에서 복잡하게 느껴졌지만, 중복을 제거하고 최대 빈도를 추적하는 방법을 적용하면서 코드가 간결해졌다.

또한, 엣지 케이스인 `"oo"`와 같은 경우를 처리하는 데 주의를 기울였고, 필터링 및 배열 비교를 통해 효율적인 방법으로 문제를 해결할 수 있었다.

이번 경험을 통해 코드의 효율성과 가독성을 동시에 고려하는 중요성을 다시 한 번 느꼈다.
