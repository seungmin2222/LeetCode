## [**Deepest Leaves Sum**](https://leetcode.com/problems/deepest-leaves-sum/)

이 문제는 주어진 이진 트리에서 가장 깊은 레벨에 위치한 노드들의 값을 모두 합산하여 반환하는 문제이다.

## 주요 포인트

- **이진 트리 탐색 방법 이해**
    - 트리의 노드를 탐색하는 방법으로 DFS(깊이 우선 탐색)와 BFS(너비 우선 탐색)가 있다.
    - 이 문제에서는 **BFS**를 사용하면 각 레벨별로 노드를 순회하기에 적합하다.
- **가장 깊은 레벨의 노드 값만 합산하기**
    - BFS를 이용할 경우 마지막 레벨의 노드들만 따로 확인할 수 있다.
    - 따라서 각 레벨의 합을 구하고 최종적으로 마지막 레벨의 합이 결과가 된다.

## 나의 코드

```jsx
var deepestLeavesSum = function(root) {
  if (!root) return 0;

  let queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;
    sum = 0;
  
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      sum += currentNode.val;

      if (currentNode.left) queue.push(currentNode.left);

      if (currentNode.right) queue.push(currentNode.right);
    }
}

  return sum;  
}
```

## 나의 수도 코드

1. 만약 루트 노드가 비어 있다면(즉, null이라면) 0을 반환.
2. BFS를 위한 큐를 루트 노드로 초기화. 깊은 레벨 노드들의 합을 저장할 변수를 0으로 설정.
3. 큐가 비어 있지 않은 동안 반복. 현재 레벨의 노드 개수를 확인하고, 합 변수를 0으로 초기화.
4. 현재 레벨의 모든 노드를 순회하며 각 노드의 값을 합산하고, 왼쪽과 오른쪽 자식 노드가 존재하면 큐에 추가.
5. 모든 레벨을 탐색한 후, 마지막 레벨에서의 합을 반환합니다.

## 다른 사람의 풀이

```jsx
var deepestLeavesSum = function(root) {
  let maxDepth = -1;
  let sum = 0;

  function dfs(node, depth) {
    if (!node) return;

    if (depth > maxDepth) {
      maxDepth = depth;
      sum = node.val;
    } else if (depth === maxDepth) {
      sum += node.val;
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);
  return sum;
};
```

## 다른 사람의 코드 해석

- **1. 재귀적 탐색**
    - `dfs` 함수는 현재 노드와 깊이를 인자로 받아 재귀적으로 호출.
- **최대 깊이와 합 저장**
    - 각 노드에 대해 깊이를 확인하고, 최대 깊이보다 깊으면 `maxDepth`를 갱신.
    - `sum`을 현재 노드의 값으로 초기화.
    - 같은 깊이라면 값을 더함.
- **DFS 호출**
    - 왼쪽과 오른쪽 자식 노드에 대해 DFS를 재귀적으로 호출.
- **결과 반환**
    - DFS가 완료되면 `sum`을 반환.

## 알아둬야 할 것!

- **DFS의 이해**
    - DFS는 트리를 탐색하는 방법 중 하나로, 노드를 깊이 우선으로 방문한다.
    - 각 노드를 재귀적으로 방문하면서 작업을 수행한다.
- **깊이 추적**
    - 각 노드를 방문할 때 현재 깊이를 인자로 전달하여, 가장 깊은 노드의 값을 추적할 수 있다.
    - 이를 통해 트리의 최대 깊이를 확인하고, 해당 깊이의 노드들을 합산한다.
- **상태 관리**
    - 최대 깊이(`maxDepth`)와 합(`sum`)을 관리하기 위해 전역 변수나 클로저를 사용할 수 있다.
    - 이를 통해 재귀 호출 간에 상태를 유지한다.
- **null 체크**
    - 재귀 호출을 수행할 때 각 노드가 null인지 확인하여 더 이상 탐색할 필요가 없음을 처리해야 한다.
    - 이는 탐색 중 오류를 방지한다.

## 회고

이번 문제를 통해  BFS와 DFS 두 가지 방법 모두 효과적으로 문제를 해결할 수 있으며, 각 방법의 특징을 이해하는 것이 중요하다는 것을 느꼈다.

FS는 레벨 순서대로 탐색하여 마지막 레벨의 노드들을 쉽게 처리할 수 있는 반면, DFS는 깊이를 추적하며 각 노드에 대한 접근을 더 유연하게 할 수 있었다.
