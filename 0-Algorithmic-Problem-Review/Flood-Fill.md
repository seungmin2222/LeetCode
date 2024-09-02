# [Flood Fill](https://leetcode.com/problems/flood-fill/)
이 문제는 **Flood Fill 알고리즘**을 구현하는 문제로, 특정 좌표에서 시작하여 연결된 같은 색상의 픽셀을 지정된 색상으로 채우는 작업을 수행한다.

## 주요 포인트

1. 너비 우선 탐색(BFS) 이해
이 문제의 핵심은 이진 트리를 레벨 순서로 순회하는 것, 이는 BFS 알고리즘을 이용하여 구현된다.
2. 큐(Queue) 활용
BFS를 구현하기 위해 큐 자료구조를 사용한다. 큐를 통해 각 레벨의 노드들을 순서대로 처리할 수 있다.
3. 레벨별 처리
트리의 각 레벨을 별도로 처리하고 결과를 저장해야 한다. 이를 위해 각 반복마다 현재 레벨의 크기를 확인하고, 그만큼의 노드만 처리한다.
4. 트리 구조 이해
이진 트리의 구조를 이해하고, 노드의 값과 자식 노드들에 어떻게 접근하는지 알아야 한다.

## 나의 코드

```jsx
var floodFill = function(image, sr, sc, color) {
  let cloneImageArr = [...image];
  const stack = [];
  const originalColor = image[sr][sc];

  if (originalColor === color) return image;

  stack.push([sr, sc]);

  while (stack.length > 0) {
    const [r, c] = stack.pop();

    if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) continue;
    if (cloneImageArr[r][c] !== originalColor) continue;

    cloneImageArr[r][c] = color;
    
    stack.push([r - 1, c]);
    stack.push([r + 1, c]);
    stack.push([r, c - 1]);
    stack.push([r, c + 1]);
  }

  return cloneImageArr;
};
```

## 나의 수도코드

1. **초기 작업**
    - 이미지 배열을 복사하여 `cloneImageArr`를 생성
    - 시작 좌표의 원래 색상 `originalColor`를 저장
    - 만약 `originalColor`가 `color`와 같다면, 이미 채색된 상태이므로 원본 이미지를 반환
2. 스택을 빈 상태로 초기화하고, 시작 좌표 `[sr, sc]`를 스택에 추가
3. **스택이 빌 때까지 반복**
    - 스택에서 좌표 `[r, c]`를 꺼냄
    - 다음 조건들을 확인
        - 좌표 `[r, c]`가 이미지 배열의 범위를 벗어나는지 확인
        - `cloneImageArr[r][c]`가 `originalColor`와 같은지 확인
    - 위 조건들이 모두 만족하면, 해당 좌표를 `color`로 채색
4. 상, 하, 좌, 우에 위치한 좌표들을 스택에 추가
5. **모든 연결된 좌표들을 채색한 후** 변경된 이미지 배열 `cloneImageArr`를 반환

## 다른 사람의 풀이

```jsx
var floodFill = function(image, sr, sc, color) {
  const originalColor = image[sr][sc];
  if (originalColor === color) return image;

  const queue = [[sr, sc]];
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const m = image.length;
  const n = image[0].length;

  while (queue.length > 0) {
    const [r, c] = queue.shift();
    
    if (image[r][c] === originalColor) {
      image[r][c] = color;

      for (const [dr, dc] of directions) {
        const newR = r + dr;
        const newC = c + dc;
        
        if (newR >= 0 && newR < m && newC >= 0 && newC < n && image[newR][newC] === originalColor) {
          queue.push([newR, newC]);
        }
      }
    }
  }

  return image;
};
```

## 코드 차이점 분석

### 1. 탐색 방식

- 원본 코드: DFS (깊이 우선 탐색) 사용
- 최적화 코드: BFS (너비 우선 탐색) 사용

### 2. 데이터 구조

- 원본 코드: 스택 (stack) 사용
- 최적화 코드: 큐 (queue) 사용

### 3. 메모리 사용

- 원본 코드: 이미지 복사본 (`cloneImageArr`) 생성
- 최적화 코드: 원본 이미지 직접 수정

### 4. 방향 처리

- 원본 코드: 각 방향을 개별적으로 처리
- 최적화 코드: 방향 배열 사용으로 코드 간소화

### 5. 유효성 검사

- 원본 코드: 스택에서 꺼낸 후 검사
- 최적화 코드: 큐에 추가하기 전 검사

### 6. 성능 최적화

- 원본 코드: 기본적인 구현
- 최적화 코드: 이미지 크기 미리 계산, 불필요한 연산 감소

## 회고

이번 과제를 통해, 내가 작성한 `Flood Fill` 알고리즘과 다른 사람이 작성한 최적화된 코드를 비교하면서, 여러 가지 중요한 학습 포인트를 발견할 수 있었다.

1.  깊이 우선 탐색(DFS)과 너비 우선 탐색(BFS)의 차이
    - 나는 DFS를 사용하여 문제를 해결했지만, 다른 사람은 BFS를 선택했다. 이 과정에서 DFS와 BFS의 차이점을 이해할 수 있었다. DFS는 특정 경로를 깊이 있게 탐색해 나가며, 스택을 활용해 경로를 추적한다. 반면에 BFS는 큐를 사용해 가까운 노드부터 차례로 탐색해 나가며, 탐색이 더 넓게 퍼져나가는 특징이 있다.
    - 두 가지 접근 방식 모두 문제를 해결할 수 있지만, 어떤 상황에서 BFS가 더 적합한지, 또는 DFS가 더 적합한지를 판단할 수 있는 기준을 더 깊이 이해해야겠다.
2. 배열 복사와 메모리 사용의 효율성
    - 나는 원본 배열의 상태를 유지하기 위해 얕은 복사를 사용했지만, 이 과정에서 원본 배열이 의도치 않게 수정될 수 있는 위험이 존재했다. 이를 해결하기 위해 깊은 복사를 사용할 수 있다는 점도 알게 되었다.
    - 반면, 다른 사람의 코드는 배열 복사 없이 원본 배열을 직접 수정함으로써 메모리 사용량을 줄이고, 코드의 간결성을 높였다. 이는 메모리 효율성 측면에서 더 나은 접근이었다.
    - 앞으로는 배열 복사에 대한 필요성을 더 신중하게 판단하고, 상황에 맞게 원본 배열을 직접 수정할지 여부를 고려해야겠다.
3. 코드 최적화와 간결성
    - 다른 사람의 코드는 나의 코드보다 더 간결하고, 큐와 방향 벡터를 사용하여 반복되는 코드를 최소화했다. 이로 인해 코드가 더 읽기 쉽고 유지보수하기 쉬워졌다.
    - 나는 코드에서 반복문을 사용해 인접한 좌표를 일일이 스택에 추가했지만, 다른 사람은 방향 벡터를 사용하여 이를 더 간단하게 구현했다. 이 접근법은 반복되는 코드를 줄이고, 실수를 방지할 수 있는 좋은 방법이라는 것을 배웠다.
4. 짚고 가야할 부분
    - DFS와 BFS의 이해
        - 각각의 장단점과, 어떤 상황에서 어떤 탐색 방법이 더 적합한지를 더 깊이 이해할 필요가 있다.
    - 배열 복사 vs 원본 수정
        - 배열을 복사할 필요성이 있는 경우와 그렇지 않은 경우를 잘 판단하고, 메모리 효율성을 고려하여 코드를 작성하는 습관을 길러야 한다.
    - 코드 최적화
        - 코드의 간결성과 유지보수성을 높이기 위해 반복되는 코드를 줄이는 방법을 익히고, 방향 벡터와 같은 기법을 적극 활용해야겠다.
