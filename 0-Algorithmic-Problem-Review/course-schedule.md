## [**Course Schedule**](https://leetcode.com/problems/course-schedule/)

이 문제는 주어진 과목 간의 선수 조건을 기반으로, 모든 과목을 순서대로 수강할 수 있는지(순환이 없는지)를 확인하는 문제다.

## 주요 포인트

1. **방향 그래프**로 문제를 표현하고 선수 과목 관계를 그래프로 구성할 수 있어야 한다.
2. **순환(Cycle)이 존재하는지** 확인하는 것이 문제의 핵심!
3. **DFS(깊이 우선 탐색)** 또는 **위상 정렬**을 통해 순환 여부를 탐지할 수 있어야 한다.
4. 각 노드(과목)의 방문 상태(미방문, 방문 중, 방문 완료)를 추적하는 것이 중요하다.

## 나의 코드

```jsx
var canFinish = function(numCourses, prerequisites) {
  const graph = {}; 
  const visited = new Array(numCourses).fill(0);

  for (let [course, prereq] of prerequisites) {
    if (!graph[course]) graph[course] = [];
    graph[course].push(prereq);
  }

  const dfs = (course) => {
    if (visited[course] === 1) return true;
    if (visited[course] === 2) return false;

    visited[course] = 1;

    if (graph[course]) {
      for (let prereq of graph[course]) {
        if (dfs(prereq)) return true;
      }
    }

    visited[course] = 2;
    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }

  return true;
};

```

## 나의 수도 코드

1. **그래프 생성 및 초기화**
    - 입력값으로 주어진 과목 수와 선수 과목 관계를 기반으로 그래프를 만든다.
    - 각 과목에 대해 해당 과목을 수강하기 위해 필요한 선수 과목들을 그래프에 저장한다.
    - 각 과목의 방문 여부를 추적하는 배열 `visited`를 초기화한다.
    (0: 아직 방문하지 않음, 1: 방문 중, 2: 방문 완료)
2. **그래프에 선수 과목 관계 추가**
    - 선수 과목 관계 `prerequisites`를 순회하며 그래프를 구성한다.
    - 과목 `ai`를 듣기 위해 `bi`를 먼저 들어야 하므로, `graph[ai]`에 `bi`를 추가한다.
3. **DFS 함수 정의**
    - DFS를 사용하여 순환을 탐지하는 함수 `dfs(course)`를 정의한다.
    - 만약 과목이 이미 "방문 중"이면 순환이 있으므로 `true`를 반환한다.
    - 과목이 이미 "방문 완료" 상태라면 탐색을 종료하고 `false`를 반환한다.
    - 현재 과목의 모든 선수 과목에 대해 재귀적으로 DFS를 수행한다.
    - 탐색이 끝나면 해당 과목을 "방문 완료" 상태로 변경한다.

## 다른 사람의 풀이

```jsx
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const indegree = new Array(numCourses).fill(0);
  
  for (let [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    indegree[course]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  let completedCourses = 0;
  while (queue.length > 0) {
    const current = queue.shift();
    completedCourses++;
    
    for (let next of graph[current]) {
      indegree[next]--;
      if (indegree[next] === 0) queue.push(next);
    }
  }

  return completedCourses === numCourses;
};
```

## 다른 사람의 수도 코드

1. **그래프와 진입 차수 배열 초기화**
    - 각 과목에 대해 선수 과목들을 저장하기 위한 `graph`와, 각 과목의 **진입 차수**(해당 과목으로 들어오는 간선 수)를 기록하는 `indegree` 배열을 초기화한다.
2. **그래프 및 진입 차수 구성**
    - 선수 과목 관계 `prerequisites`를 순회하며, 선수 과목과 후속 과목 간의 관계를 그래프에 저장한다.
    - 후속 과목으로 들어오는 간선(진입 차수)을 기록한다.
3. **큐 초기화**
    - 진입 차수가 0인 과목(선수 과목이 없는 과목)을 큐에 넣는다. 이 과목들은 바로 수강할 수 있다.
4. **위상 정렬**
    - 큐에서 과목을 하나씩 꺼내며, 그 과목을 완료했다고 가정한다.
    - 해당 과목과 연결된 후속 과목들의 진입 차수를 하나씩 감소시키고, 진입 차수가 0이 된 과목은 큐에 추가한다.
    - 완료한 과목 수를 카운트한다.
5. **결과 반환**
    - 완료한 과목 수가 `numCourses`와 같으면 순환 없이 모든 과목을 수강할 수 있으므로 `true`를 반환한다.
    - 그렇지 않으면 `false`를 반환한다.

## 알아둬야 할 것!

### **순환(Cycle) 탐지**

- **순환이란?**
    - 그래프 내에서 노드를 시작점으로 하여 다시 자신에게 돌아오는 경로가 존재할 때 이를 순환이라고 한다.
    - 예를 들어, 과목 A를 듣기 위해 과목 B가 필요하고, 다시 과목 B를 듣기 위해 과목 A가 필요한 상황은 순환을 형성한다.
- **순환이 존재하면 문제 해결 불가**
    - 선수 과목 관계에서 순환이 발생하면, 해당 과목들을 모두 수강할 수 없다.
    - 따라서 **순환 탐지**가 이 문제의 핵심이다.

### **그래프(Graph) 이론**

- **방향 그래프(Directed Graph)**
    - 이 문제에서 과목 간의 선수 관계를 **방향 그래프**로 나타낼 수 있다.
    - 노드(과목) 사이의 간선은 한 방향으로만 연결되며, 이는 "A 과목을 수강하기 위해 B 과목을 먼저 들어야 한다"라는 관계를 의미한다.
- **노드(Node)는** 각 과목은 그래프의 노드로 표현된다.
- **간선(Edge)은** 과목 간의 선수 조건을 나타내는 연결이다.
- 예를 들어, 간선 `B → A`는 A 과목을 듣기 전에 B 과목을 들어야 한다는 의미다.

## 회고

이 문제를 풀며 **그래프 탐색**의 다양한 기법을 배웠다.

**위상 정렬**을 사용한 효율적인 문제 해결 방법을 적용할 수 있었다.

순환 탐지 문제는 알고리즘 문제에서 매우 빈번하게 등장하며, 이를 다양한 방식으로 풀어내는 연습이 문제 해결 능력을 키우는 데 도움이 되었던 것 같다.
