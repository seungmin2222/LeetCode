## [**Find Score of an Array After Marking All Elements**](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/)

이 문제는 주어진 배열에서 가장 작은 값을 선택하며, 해당 값과 인접 값을 마킹하여 점수를 계산하는 것이다.

## 주요 포인트

1. `marked` **리스트**
    - 각 요소가 마킹되었는지 확인하는 리스트이다.
2. **최소값 찾기**
    - 마킹되지 않은 요소 중에서 최소값을 찾아서 그 인덱스를 기록한다.
3. **마킹 처리**
    - 최소값의 요소와 그 왼쪽, 오른쪽 인접 요소를 마킹한다.
4. **루프 종료 조건**
    - `marked` 리스트의 모든 요소가 `true`일 때 종료된다.

## 나의 코드

```tsx
var findScore = function(nums) {
  let score = 0;
  let marked = new Array(nums.length).fill(false);  

  while (!marked.every(Boolean)) {  
    let smallest = Infinity;
    let smallestIndex = -1;

    for (let i = 0; i < nums.length; i++) {
      if (!marked[i] && nums[i] < smallest) {
        smallest = nums[i];
        smallestIndex = i;
      }
    }

    score += smallest;

    marked[smallestIndex] = true;
    if (smallestIndex > 0) {
      marked[smallestIndex - 1] = true;
    }
    if (smallestIndex < nums.length - 1) {
      marked[smallestIndex + 1] = true;
    }
  }

  return score;
};
```

## 나의 수도 코드

1. 점수(score)를 0으로 초기화.
2. nums 배열의 길이만큼의 크기를 가진 boolean 배열 marked를 생성하고, 모든 요소를 false로 설정.
3. WHILE 루프: marked 배열의 모든 요소가 true가 될 때까지 반복.
    1. smallest를 무한대(Infinity)로 초기화하고, smallestIndex를 -1로 초기화.
    2. i를 0부터 nums.length - 1까지 반복.
    3. 만약 marked[i]가 false이고 nums[i]가 smallest보다 작다면 smallest에 nums[i]를 저장.
    4. smallestIndex에 i를 저장.
    5. smallest 값을 score에 더함.
    6. marked[smallestIndex]를 true로 설정.
    7. 만약 smallestIndex > 0이라면 marked[smallestIndex - 1]을 true로 설정.
    8. 만약 smallestIndex < nums.length - 1이라면 marked[smallestIndex + 1]을 true로 설정.
4. 최종적으로 score를 반환.

## 시간 복잡도

- **While 루프**
    - 루프는 배열의 모든 요소가 `marked` 배열에서 `true`로 변할 때까지 실행된다.
    - 따라서 루프는 최대 `O(n)`번 반복된다.
- **내부 for 루프**
    - 매번 최소값을 찾기 위해 배열 전체를 순회한다.
    - 최소값을 찾는 데는 `O(n)`의 시간이 걸린다.

**총 시간복잡도는** While 루프가 `O(n)`번 반복되고, 내부에서 `O(n)`만큼의 작업이 수행되므로 전체 시간복잡도는 `O(n^2)`이다.

## 공간 복잡도

- **`marked` 배열**
    - 입력 배열 `nums`와 같은 크기의 `marked` 배열이 필요하다. 이는 **`O(n)`** 공간을 차지한다.
- **기타 변수**
    - `score`, `smallest`, `smallestIndex`와 같은 변수들은 상수 공간만 사용하므로 `O(1)`이다.

**총 공간복잡도는** 주요한 공간 사용은 `marked` 배열로부터 발생하므로 `O(n)`이다.

## 다른 사람의 풀이

```tsx
var findScore = function(nums) {
  let score = 0;
  const n = nums.length;
  const indexedNums = nums.map((val, idx) => [val, idx]);

  indexedNums.sort((a, b) => a[0] - b[0]);

  const marked = new Array(n).fill(false);

  for (const [val, idx] of indexedNums) {
      if (!marked[idx]) {
          score += val;
          marked[idx] = true;
          if (idx > 0) marked[idx - 1] = true;
          if (idx < n - 1) marked[idx + 1] = true;
      }
  }

  return score;
};
```

## 다른사람의 수도 코드

1. **값과 인덱스를 함께 저장**
    - `nums` 배열을 `[값, 인덱스]` 형태로 변환하여 처리.
2. **정렬**
    - 값을 기준으로 오름차순 정렬하여 최소값을 빠르게 처리.
3. **효율적인 탐색**
    - 이미 정렬된 배열을 순회하면서, 마킹된 요소는 건너뛰고 처리.

## 다른사람의 시간복잡도

- 정렬: `O(n log n)`
- 순회 및 마킹: `O(n)`

전체 시간 복잡도는 **`O(n log n)`**

## 다른사람의 공간복잡도

**최종 공간복잡도는** 추가 배열(`indexedNums` 및 `marked`) 사용으로 **`O(n)`**.

## 알아둬야 할 것!

1. **그리디 알고리즘**
    - 각 단계에서 최적의 선택(현재 최소값)을 반복적으로 선택하여 문제를 해결한다는 개념.
2. **정렬과 인덱스 관리**
    - 값을 기준으로 정렬한 후, 원래 배열의 위치를 보존하기 위해 인덱스를 함께 관리한다.
3. **마킹 기법**
    - Boolean 배열을 사용하여 요소와 그 인접 요소의 상태를 추적한다.
4. **시간복잡도 분석**
    - 정렬(`O(n log n)`)과 배열 탐색(`O(n)`)을 결합한 효율적인 알고리즘 설계.
5. **경계 조건 처리**
    - 배열의 양 끝에서 인접 요소를 처리할 때 경계 값을 정확히 다루는 방법.

## 회고

이번 문제는 그리디 알고리즘을 활용해 최소값을 반복적으로 선택하며 점수를 계산하는 방식으로 해결했다.

정렬을 통해 효율성을 높였고, Boolean 배열을 활용해 요소의 상태를 추적하는 방법을 적용했다.

경계 조건 처리를 통해 배열의 양 끝에서도 안정적으로 동작하도록 구현했다.

문제 해결 과정에서 시간복잡도와 공간복잡도 최적화의 필요성을 배우는 좋은 기회가 되었다.
