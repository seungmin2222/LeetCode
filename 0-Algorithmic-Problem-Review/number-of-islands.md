## [**Number of Islands**](https://leetcode.com/problems/number-of-islands/)

이 문제는 2D 그리드에서 연결된 '1'로 구성된 섬의 개수를 세는 것다.

## 주요 포인트

1. 2차원 배열을 효과적으로 순회하는 방법을 이해해야 한다.
2. 그래프나 트리 구조에서 가능한 깊게 탐색하는 알고리즘으로, 이 문제에서 연결된 육지를 찾는 데 사용된다.
3. DFS를 구현할 때 주로 사용되는 기법으로, 함수가 자기 자신을 호출하는 방식이다.
4. 이미 확인한 위치를 표시하여 중복 검사를 방지하는 기법이다.
5. 이 문제에서는 '1'을 '0'으로 바꾸는 방식으로 구현된다.
6. 그리드의 가장자리를 벗어나지 않도록 인덱스를 체크하는 것이 중요하다.

## 나의 코드

```jsx
var numIslands = function(grid) {
  if (!grid || grid.length === 0) return 0;

  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j);
        count++;
      }
    }
  }

  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
      return;
    }

    grid[i][j] = '0';

    dfs(i-1, j);
    dfs(i+1, j);
    dfs(i, j-1);
    dfs(i, j+1);
  }

  return count;
};
```

## 나의 수도 코드

1. 함수 numIslands(grid)
    - count 변수를 0으로 초기화
    - grid의 모든 셀을 순회:
        - 만약 현재 셀이 '1'이라면:
            - DFS 함수 호출(현재 위치)
            - count 증가
    - count 반환
2. 함수 DFS(x, y)
    - 만약 x나 y가 그리드 범위를 벗어나거나, 현재 셀이 '0'이라면:
        - 함수 종료
    - 현재 셀을 '0'으로 변경 (방문 표시)
    - 상하좌우 네 방향에 대해 DFS 호출
        - DFS(x-1, y) // 위
        - DFS(x+1, y) // 아래
        - DFS(x, y-1) // 왼쪽
        - DFS(x, y+1) // 오른쪽
3. 메인 로직
    - 입력으로 받은 grid 유효성 검사
    - numIslands 함수 호출 및 결과 반환
4. 경계 조건 처리
    - x < 0 || x >= grid.length || y < 0 || y >= grid[0].length
5. 최적화 (선택적)
    - 원본 그리드 직접 수정 vs 복사본 사용 결정
    - 재귀 대신 스택을 사용한 반복적 DFS 구현 고려

## 알아둬야 할 것!

1. DFS(깊이 우선 탐색)가 연결된 컴포넌트를 찾는 데 효과적임을 이해해야한다.
2. 2차원 배열에서의 인덱싱과 탐색 방법을 알아야 한다.
3. DFS를 구현할 때 재귀적 방법과 반복적 방법(스택 사용) 모두 가능함을 인지해야 한다.
4. 추가 공간을 사용하지 않고 원본 배열을 직접 수정하는 기법의 장단점을 이해한다.

## 회고

이 문제를 통해 그래프 탐색 알고리즘을 2D 그리드에 적용하는 방법을 배웠다.

DFS를 사용하여 연결된 컴포넌트(여기서는 섬)를 효율적으로 찾을 수 있었다.

재귀 함수의 사용이 코드를 간결하게 만들어주지만, 대규모 입력에서는 스택 오버플로우 가능성을 고려해야 함을 생각해야 되는 문제였다.

또한, 원본 데이터를 수정하는 방식으로 추가 메모리 사용을 줄일 수 있었지만, 이는 원본 데이터 보존이 필요 없는 경우에만 적용 가능한 기법임을 인지 해야되는 문제이다.

실제 플러드 필 개념과 유사한 것 같다.
플러드 필은 연결된 걸 찾는 것이라면
이 문제는 모든 연결된걸 다시 없애고 새로운 연결된거를 찾는 개념이였다.

개인 프로젝트하면서 플러드필 개념을 알고 있어서 풀 수 있었던 것 같다.
