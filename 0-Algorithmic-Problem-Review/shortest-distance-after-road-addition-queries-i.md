## [**Shortest Distance After Road Addition Queries I**](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/)

- 도시 0부터 n-1까지 초기 도로가 주어지고, 각 쿼리마다 새로운 도로가 추가된다.
- 각 쿼리 후 도시 0에서 도시 n - 1까지의 최단 경로 길이를 구하는 문제이다.

## 주요 포인트

1. **그래프 표현 (Adjacency List)**
    - 그래프를 인접 리스트 형태로 표현하여 동적으로 도로를 추가하고 관리할 수 있음.
2. **최단 경로 탐색 (BFS)**
    - 너비 우선 탐색(Breadth-First Search)을 통해 단일 출발점에서 모든 정점까지의 최단 경로를 효율적으로 계산.
3. **다이나믹 그래프 업데이트**
    - 쿼리마다 그래프 구조를 변경한 후 다시 최단 경로를 계산하는 방법.

## 나의 코드

```jsx
var shortestDistanceAfterQueries = function(n, queries) {
  const answer = [];

  const graph = Array.from({ length: n }, () => []);
  for (let i = 0; i < n - 1; i++) {
    graph[i].push(i + 1); 
  }

  const bfs = () => {
    const distances = Array(n).fill(Infinity);
    distances[0] = 0;
    const queue = [0];

    while (queue.length > 0) {
      const current = queue.shift();
      for (const neighbor of graph[current]) {
        if (distances[neighbor] > distances[current] + 1) {
          distances[neighbor] = distances[current] + 1;
          queue.push(neighbor);
        }
      }
    }

    return distances[n - 1];
  };

  for (const [u, v] of queries) {
    graph[u].push(v);  
    answer.push(bfs());
  }

  return answer;
};
```

## 나의 수도 코드

1. 인접 리스트 `graph`를 생성하고, n개의 도시를 초기화
    - 초기 도로를 추가 (도시 i에서 i+1로 연결, 0 <= i < n-1).
2. BFS 함수 정의
    - 입력: 그래프, 시작 도시(0), 목표 도시(n-1).
    - `distances` 배열을 무한대로 초기화하고 `distances[0] = 0`으로 설정.
    - 큐를 사용해 레벨별로 그래프 탐색.
    - 현재 도시에서 이웃 도시로의 최단 거리를 갱신.
3. 빈 배열 `answer` 초기화.
4. 각 쿼리 [u, v]에 대해
    - `graph`에 u -> v 도로 추가.
    - BFS 함수를 호출해 도시 0에서 n-1까지의 최단 경로 계산.
    - 결과를 `answer` 배열에 추가.
5. 최종적으로 `answer` 배열 반환.

## 시간 복잡도

- **쿼리당 BFS** : O(n + m).
    - n : 도시의 개수 (노드 수).
    - m : 도로의 개수 (엣지 수).
- **총 시간 복잡도**  O(q×(n+m))
    - q : 쿼리의 개수.

## 공간 복잡도

- **그래프 저장** : O(n + m)
    - n : 도시의 개수.
    - m : 도로의 개수.
- **BFS 관련 메모리**
    - `distances` 배열: O(n).
    - 큐: 최악의 경우 O(n).
- **총 공간 복잡도**: O(n+m).

## 알아둬야 할 것!

- **BFS를 이용한 최단 경로 탐색**
    - BFS는 단일 시작점에서 그래프의 최단 경로를 탐색할 때 효율적이다.
- **동적 그래프 업데이트 처리**
    - 쿼리마다 그래프가 변경되는 경우에도 적절히 BFS를 반복적으로 활용하는 방법.
- **그래프의 효율적인 표현 (Adjacency List)**
    - 공간 효율성과 간단한 구현을 위해 인접 리스트를 사용하는 이유.
- **시간복잡도 분석**
    - 쿼리 개수와 그래프 크기에 따라 BFS의 시간 복잡도가 어떻게 영향을 받는지 이해.

## 회고

이 문제를 풀면서 동적으로 변경되는 그래프에서 최단 경로를 반복적으로 계산하는 방법을 배울 수 있었다.

BFS를 활용해 단일 쿼리마다 최단 경로를 계산하는 방법은 구현이 간단하고 직관적이지만, 쿼리가 많아질수록 성능 문제가 발생할 수 있음을 확인했다.

이번에는 해결하지 못했지만 앞으로는 성능 최적화와 더 복잡한 그래프 알고리즘을 적용할 수 있는 상황에서 잘 해결해 보고싶다.
