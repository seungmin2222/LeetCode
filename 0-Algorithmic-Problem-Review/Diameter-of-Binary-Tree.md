# [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)

이 문제는 주어진 이진 트리에서 가장 긴 경로가 가지는 노드의 수를 계산하는 문제다.

## 주요 포인트

1. **재귀적으로 깊이 탐색**: 각 노드의 왼쪽과 오른쪽 자식 노드에 대해 재귀적으로 깊이를 탐색한다.
2. **지름 계산**: 현재 노드에서의 왼쪽 깊이와 오른쪽 깊이의 합을 이용해 이진 트리의 지름을 업데이트한다.
3. **최대 깊이 반환**: 각 노드에서 왼쪽과 오른쪽 자식 노드의 깊이 중 더 큰 값을 반환하여 트리의 깊이를 계산한다.

## 나의 코드

```jsx
var diameterOfBinaryTree = function(root) {
  let diameter = 0;
  
  function depth(node) {
    if (!node) return 0;
    
    let leftDepth = depth(node.left);
    let rightDepth = depth(node.right);
    
    diameter = Math.max(diameter, leftDepth + rightDepth);
    
    return Math.max(leftDepth, rightDepth) + 1;
  }
  depth(root);
  
  return diameter;
};

```

## 나의 수도코드

1. **깊이 계산 함수 정의**
    - **재귀 호출**
        - `leftDepth`를 `node`의 왼쪽 자식 노드에 대해 재귀적으로 호출
        - `rightDepth`를 `node`의 오른쪽 자식 노드에 대해 재귀적으로 호출
    - **지름 갱신**
        - `leftDepth`와 `rightDepth`의 합을 계산하여 현재까지의 `diameter`와 비교하여 더 큰 값을 `diameter`로 갱신
    - **깊이 반환**
        - `leftDepth`와 `rightDepth` 중 큰 값에 1을 더한 값을 반환(자신의 깊이를 포함)
2. 트리의 루트 노드를 입력으로 하여 깊이 계산 함수를 호출
3. **지름 반환**: `diameter` 값을 반환

### DFS(Depth-First Search, 깊이 우선 탐색)란 ?

1. DFS는 그래프나 트리 구조를 탐색하는 알고리즘이다.
루트 노드(혹은 다른 임의의 노드)에서 시작해 다음 분기(branch)로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방법이다.
2. DFS의 특징
    - 재귀적으로 구현하기 쉽다.
    - 백트래킹(backtracking)을 통해 이전 상태로 돌아갈 수 있다.
    - 모든 노드를 방문하고자 할 때 적합하다.
