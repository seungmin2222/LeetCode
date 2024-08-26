# 01 Matrix
이 문제에서는 `m x n` 크기의 이진 행렬 `mat`이 주어진다.

각 셀에 대해 가장 가까운 `0`까지의 거리를 계산하고, 그 결과를 새로운 행렬로 반환해야 한다.

두 인접한 셀 사이의 거리는 1로 간주됩니다.

## 주요 포인트

1. 거리 계산 (Distance Calculation)
    - 행렬 `mat`에서 각 셀 `mat[i][j]`에 대해 해당 셀에서 가장 가까운 `0`까지의 거리를 계산해야 한다.
    - 두 인접한 셀 간의 거리는 1로 정의된다. 이는 단순히 행과 열의 차이의 절대값의 합으로 계산될 수 있다.
2. **정렬**
    - 계산된 거리 제곱 값을 기준으로 점들을 정렬한다. 이 과정에서 거리가 가까운 점들이 앞에 오도록 한다.
3. **상위 `k`개의 점 선택**
    - 정렬된 점들 중에서 가장 가까운 `k`개의 점을 선택하여 반환한다.

## 나의 코드

```jsx
var updateMatrix = function(mat) {
  let distanceMat = [...mat];
  const zeroArr = [];
  const nonZeroArr = [];
  
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        zeroArr.push([i, j]);
        distanceMat[i][j] = 0;
      } else {
        nonZeroArr.push([i, j]);
        distanceMat[i][j] = Infinity;
      }
    }
  }
  
  for (let i = 0; i < nonZeroArr.length; i++) {
    let minDistance = Infinity;
    for (let j = 0; j < zeroArr.length; j++) {
      const rowDistance = Math.abs(nonZeroArr[i][0] - zeroArr[j][0]);
      const colDistance = Math.abs(nonZeroArr[i][1] - zeroArr[j][1]);
      
      if (minDistance === 1) {
        break;
      }
      
      if (minDistance > rowDistance + colDistance) {
        minDistance = rowDistance + colDistance;
      }
    }
    distanceMat[nonZeroArr[i][0]][nonZeroArr[i][1]] = minDistance;
  }
  
  return distanceMat;
};
```

## 나의 수도 코드

1. `mat`과 동일한 크기의 행렬 `distanceMat`을 초기화
2. `mat`의 모든 요소를 순회
    - 값이 0인 요소의 좌표를 `zeroArr` 배열에 저장하고, `distanceMat`의 해당 위치에 0을 설정
    - 값이 0이 아닌 요소의 좌표를 `nonZeroArr` 배열에 저장하고, `distanceMat`의 해당 위치에 무한대(`Infinity`)를 설정
3. `nonZeroArr`에 있는 각 요소
    - `minDistance`를 무한대(`Infinity`)로 초기화
    - `zeroArr`에 있는 모든 요소와의 거리를 계산
        - 행 거리와 열 거리를 계산하여 총 거리를 구함
        - 만약 `minDistance`가 1이라면, 가장 가까운 0이 이미 존재하므로 계산을 중단, `break`를 사용하여 루프를 종료(early return)
        - 그렇지 않다면, 계산된 총 거리가 현재 `minDistance`보다 작으면 `minDistance`를 업데이트
    - `distanceMat`의 해당 위치에 `minDistance`를 저장한다.
4. 최종적으로 `distanceMat`을 반환

## 다른 사람의 풀이

```jsx
var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const queue = [];
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
            } else {
                mat[i][j] = Infinity;
            }
        }
    }
    
    while (queue.length > 0) {
        const [row, col] = queue.shift();
        
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
                if (mat[newRow][newCol] > mat[row][col] + 1) {
                    mat[newRow][newCol] = mat[row][col] + 1;
                    queue.push([newRow, newCol]);
                }
            }
        }
    }
    
    return mat;
};
```

1. 별도의 `distanceMat`를 만들지 않고 입력 `mat`를 직접 수정. 이로써 추가적인 공간 사용을 줄임.
2. BFS를 사용하여 0에서 시작하여 점진적으로 거리를 계산. 이는 각 셀을 한 번만 방문하므로 효율적.
3. 큐(queue)를 사용하여 BFS를 구현. 초기에 모든 0의 위치를 큐에 넣고 시작.
4. 4방향(상, 하, 좌, 우)으로 이동하면서 거리를 계산. 이전에 계산된 거리보다 더 짧은 거리를 발견하면 업데이트하고 해당 위치를 큐에 추가.

이 방식은 각 셀을 최대 한 번만 방문하므로, 시간 복잡도가 O(m*n)으로 개선된다.
또한, 추가적인 배열을 만들지 않아 공간 복잡도도 개선된다.

# 회고

1. 메모리 사용
    - 원래 코드: 새로운 `distanceMat` 배열을 만들어 결과를 저장한다.
    - 최적화된 코드: 입력 `mat`를 직접 고쳐서 추가 메모리를 아낀다.
2. 데이터 구조
    - 원래 코드: `zeroArr`와 `nonZeroArr` 두 배열에 0과 0 아닌 위치를 따로 담는다.
    - 최적화된 코드: 큐를 써서 BFS를 구현한다. 처음에는 0 위치만 큐에 넣는다.
3. 알고리즘 접근 방식
    - 원래 코드: 0 아닌 모든 위치에서 모든 0 위치까지 거리를 재고 제일 가까운 걸 찾는다.
    - 최적화된 코드: BFS로 0에서 시작해 점점 멀리 가면서 거리를 잰다.
4. 방향 처리
    - 원래 코드: 모든 0 위치까지 직접 거리를 잰다.
    - 최적화된 코드: 위, 아래, 왼쪽, 오른쪽 네 방향만 살펴본다.
5. 반복문 구조
    - 원래 코드: for 반복문을 겹쳐 써서 모든 위치를 돌아본다.
    - 최적화된 코드: while 반복문으로 큐가 빌 때까지 BFS를 한다.
6. 거리 재는 방법
    - 원래 코드: 매번 `Math.abs()`로 거리를 잰다.
    - 최적화된 코드: 지금 위치 거리에 1 더해서 옆 칸 거리를 잰다.
7. 최적화 멈추는 조건
    - 원래 코드: 제일 가까운 거리가 1이면 안쪽 반복문을 끝낸다.
    - 최적화된 코드: 전에 잰 거리보다 멀면 업데이트 안 하고 큐에도 안 넣는다.
8. 결과 내놓기
    - 원래 코드: `distanceMat`를 돌려준다.
    - 최적화된 코드: 고친 `mat`를 그대로 돌려준다.

이번 코드를 다시 살펴보니 여러 가지 아쉬운 점이 눈에 띈다. 가장 먼저 효율성 문제가 크다. 모든 0이 아닌 위치에서 모든 0 위치까지의 거리를 일일이 계산하느라 불필요한 연산이 너무 많다. 큰 행렬을 다룰 때는 이 방식이 엄청 느리게 작동할 것이다.

메모리 사용면에서도 개선이 필요하다. 새로운 배열 `distanceMat`를 만들어 추가 메모리를 쓴다. `zeroArr`와 `nonZeroArr`까지 따로 만들어 메모리를 더 잡아먹는다.

알고리즘 선택에서도 실수가 있다. BFS나 다른 효율적인 알고리즘을 고려해보지 않고 단순히 모든 경우를 다 계산하는 방식을 택했다. 이게 성능 저하의 주요 원인이 된다.

코드 구조도 개선의 여지가 많다. 중첩된 반복문을 많이 써서 코드가 복잡해졌고, 함수를 더 작은 단위로 나누지 않아 가독성과 유지보수성이 떨어진다.

`zeroArr`, `nonZeroArr` 같은 이름의 변수명 선택에서도 변수의 목적을 완전히 설명을 못하는거 같다. 변수명에 대해 더 신경쓰면 좋을 것 같다.

최적화 기회도 놓쳤다. 거리가 1일 때 계산을 멈추는 작은 최적화는 했지만, 더 효과적인 방법을 찾지 못했다. 상하좌우 네 방향을 명시적으로 처리하지 않은 것도 아쉽다.

이런 점들을 개선한다면 훨씬 더 효율적이고 읽기 쉬운 코드를 만들 수 있을 것이다. 앞으로는 문제를 해결할 때 더 효율적인 알고리즘을 고민하고, 코드의 가독성과 성능을 모두 신경 쓰며 작성할 것이다. 이번 경험을 교훈 삼아 다음에는 더 나은 코드를 작성할 수 있을 것이다.

<br>

## BFS (Breadth-First Search, 너비 우선 탐색) 란?

BFS는 그래프나 트리 구조에서 노드를 탐색하는 알고리즘이다.

시작 노드에서 출발해 인접한 노드를 먼저 탐색하는 방식으로 진행된다.

## BFS의 주요 특징과 원리

1. 큐를 사용
    - BFS는 선입선출(FIFO) 구조인 큐를 사용해 탐색 순서를 관리한다.
2. 레벨 단위 탐색
    - 시작 노드에서 가까운 노드부터 차례대로 탐색한다.
    - 이는 거리에 비례한 순서로 탐색이 이루어짐을 의미한다.
3. 최단 경로 보장
    - 가중치 없는 그래프에서 BFS는 시작 노드로부터 다른 모든 노드까지의 최단 경로를 찾는다.
4. 방문 표시
    - 이미 방문한 노드를 다시 방문하지 않도록 방문 여부를 표시한다.

## 이 문제에서 BFS는?

1. 0인 모든 위치를 시작점으로 큐에 넣는다.
2. 큐에서 위치를 하나씩 꺼내 인접한 네 방향을 확인한다.
3. 새 위치의 거리가 더 크면 업데이트하고 큐에 넣는다.
4. 이 과정을 큐가 빌 때까지 반복한다.

이렇게 하면 모든 위치에 대해 가장 가까운 0까지의 거리를 효율적으로 계산할 수 있다.
