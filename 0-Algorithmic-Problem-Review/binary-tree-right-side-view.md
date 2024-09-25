## [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)

이 문제는 주어진 이진 트리의 루트 노드를 기준으로, 오른쪽에서 바라보았을 때 각 레벨에서 보이는 노드의 값을 위에서 아래로 나열하여 반환하는 문제이다.

## 주요 포인트

1. **이진 트리 탐색의 기본 개념 이해**
    - 이진 트리는 각 노드가 최대 두 개의 자식 노드를 가지는 트리 구조이다.
    - 루트 노드에서 시작하여 왼쪽과 오른쪽 자식을 따라가며 트리를 탐색한다.
2. **BFS (너비 우선 탐색) 이해**
    - BFS는 큐(Queue)를 사용하여 각 레벨의 노드를 순서대로 탐색한다.
    - 현재 레벨의 모든 노드를 탐색한 후, 다음 레벨로 넘어가는 방식이다.
3. **큐(Queue)의 역할과 사용법**
    - 큐는 FIFO(First In First Out) 구조로, 가장 먼저 들어온 노드가 가장 먼저 처리된다.
    - 각 레벨의 노드를 큐에 추가하고, 이를 차례로 꺼내면서 탐색하는 방식이다.
4. **레벨별 마지막 노드 추적**
    - 각 레벨에서 가장 오른쪽에 있는 노드만 결과 배열에 추가해야 한다.
    - 이를 위해 현재 레벨의 모든 노드를 탐색하고, 해당 레벨의 마지막 노드를 확인해야 한다.

## 나의 코드

```jsx
var rightSideView = function(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    let levelLength = queue.length;
    
    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift();
      
      if (i === levelLength - 1) {
        result.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  
  return result;
};

```

## 나의 수도 코드

1. 루트 노드가 없으면 빈 배열 반환.
2. `result` 배열 초기화, `queue`에 루트 노드 추가.
3. `queue`가 비어있지 않다면
    - `levelLength`에 현재 레벨의 노드 수 저장.
    - `for` 루프로 현재 레벨의 모든 노드 탐색
        - `node = queue.shift()`로 현재 노드 꺼내기.
        - 현재 노드가 레벨의 마지막 노드면 `result`에 `node.val` 추가.
        - 현재 노드의 왼쪽 자식이 있으면 `queue`에 추가.
        - 현재 노드의 오른쪽 자식이 있으면 `queue`에 추가.
4. 모든 레벨을 탐색한 후, `result` 배열 반환.

## 다른 사람의 풀이

```jsx
var rightSideView = function(root) {
    const result = [];
    
    function dfs(node, level) {
        if (!node) return;

        if (result.length === level) {
            result.push(node.val);
        }

        dfs(node.right, level + 1);
        dfs(node.left, level + 1);
    }
    dfs(root, 0);

    return result;
};
```

## 다른 사람의 수도 코드

1. **DFS 함수 정의**: `dfs(node, level)`
    - 현재 노드가 `null`인 경우 탐색을 종료한다.
2. **현재 레벨에 처음 도달한 경우**
    - `result.length`와 `level`이 같으면 현재 노드가 해당 레벨에서 처음 방문한 노드이므로 `result`에 노드의 값을 추가한다.
3. **우선 오른쪽 자식을 먼저 탐색**
    - `dfs(node.right, level + 1)`로 오른쪽 자식을 먼저 탐색하여 오른쪽에서 보이는 노드를 우선적으로 확인힌다.
4. **왼쪽 자식을 나중에 탐색**
    - `dfs(node.left, level + 1)`로 왼쪽 자식을 탐색한다.
    - 오른쪽 자식이 없을 경우, 왼쪽 자식이 오른쪽 뷰에 나타나게 된다.
5. **결과 반환**
    - `dfs` 함수가 모든 노드를 탐색한 후 `result` 배열에 오른쪽 뷰의 노드 값들이 저장되며, 이를 반환한다.

## 알아둬야 할 것!

- **이진 트리 (Binary Tree) 탐색**
    - 이진 트리는 각 노드가 최대 두 개의 자식 노드를 가지는 트리 구조이다.
    - 트리 탐색에는 두 가지 주요 방식
        - **DFS(Depth-First Search)**
            - 깊이 우선 탐색으로, 한 경로를 따라 끝까지 내려간 후 다른 경로를 탐색. (전위, 중위, 후위 순회)
        - **BFS(Breadth-First Search)**
            - 너비 우선 탐색으로, 레벨별로 모든 노드를 탐색한 후 다음 레벨로 이동.
- **BFS(너비 우선 탐색)와 큐(Queue)의 활용**
    - BFS는 각 레벨의 노드들을 순서대로 탐색하며, 이를 위해 큐(Queue) 자료구조를 사용한다.
    - 큐는 FIFO(First In First Out) 구조로, 현재 레벨의 노드를 차례로 처리하고 다음 레벨의 자식 노드들을 큐에 추가하여 탐색힌다.
- **DFS(깊이 우선 탐색)와 재귀(Recursion)**
    - DFS는 스택(Stack) 자료구조를 사용하거나 재귀 함수를 이용하여 트리의 깊숙한 노드까지 탐색한다.
    - 재귀를 이용하면 코드가 간결해지며, 오른쪽부터 탐색하여 각 레벨의 첫 번째 노드를 기록하면 오른쪽 뷰를 쉽게 구할 수 있다.
- **트리의 레벨 개념 및 레벨 순회**
    - 트리의 레벨은 루트 노드를 0으로 시작하여 아래로 내려갈수록 증가한다.
    - 각 레벨에서 특정 조건(예: 가장 오른쪽 노드, 가장 왼쪽 노드 등)에 맞는 노드를 추출해야 할 때, 레벨을 기준으로 노드를 탐색하는 것이 중요하다.

## 회고

**트리의 오른쪽 뷰를 정의하는 방식 이해**: 오른쪽에서 보이는 노드가 단순히 오른쪽 자식만을 의미하지 않고, 각 레벨의 오른쪽에서 보이는 첫 번째 노드를 의미한다는 것을 명확하게 이해하는 데 시간이 필요했다.

오른쪽 자식을 우선적으로 탐색하고 각 레벨에서 처음 방문한 노드를 `result`에 추가하는 방식을 사용했다. 이 방식은 재귀를 통해 간결한 코드를 작성할 수 있었다.

유사한 트리 문제를 만났을 때, BFS와 DFS를 빠르게 선택하고, 각 방법의 장단점을 활용하여 더욱 효율적인 코드를 작성할 수 있도록 훈련할 것이다.
