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
<br>

## 알아둬야 할 것!

코드에서 `diameter = Math.max(diameter, leftDepth + rightDepth);`는 이진 트리의 지름(가장 긴 경로)을 계산하는 핵심 부분이다. 

### 이진 트리의 지름(diameter)

이진 트리의 지름은 트리 내에서 두 노드 간의 가장 긴 경로의 길이를 의미한다.

이 경로는 루트를 통과할 수도, 통과하지 않을 수도 있으며, 노드 간의 경로는 간선(edge)의 수로 표현된다.

### `depth` 함수의 역할

`depth` 함수는 재귀적으로 노드를 탐색하면서 각 노드에서 왼쪽 서브트리와 오른쪽 서브트리의 깊이를 계산한다. 그리고 그 노드에서 가능한 최대 지름을 계산한다.

이 코드는 현재 노드에서 가능한 최대 지름을 계산하고, 이전에 저장된 지름(`diameter`)과 비교하여 더 큰 값을 `diameter` 변수에 저장한다.

- **`leftDepth`**: 현재 노드의 왼쪽 서브트리의 깊이.
- **`rightDepth`**: 현재 노드의 오른쪽 서브트리의 깊이.

`leftDepth + rightDepth`는 현재 노드를 포함하여 왼쪽 서브트리의 끝에서 오른쪽 서브트리의 끝까지의 경로 길이(즉, 지름)를 나타낸다.

### 동작 방식

1. 트리의 각 노드에서 `depth` 함수는 왼쪽과 오른쪽 서브트리의 깊이를 계산한다.
2. 그런 다음, `leftDepth + rightDepth`를 계산하여 현재 노드를 포함하는 경로의 길이를 구한다.
3. 이 경로의 길이와 현재까지 계산된 최대 지름(`diameter`)을 비교하여 더 큰 값을 `diameter` 변수에 저장한다.

이렇게 하면, 모든 노드를 탐색한 후, `diameter` 변수에는 트리의 지름이 저장된다.

### 예시

예를 들어, 다음과 같은 트리가 있다고 가정

```markdown

    1
   / \
  2   3
 / \
4   5
```

이 트리에서 지름은 `4-2-1-3` 또는 `5-2-1-3`이 될 수 있으며, 길이는 3이다.

- 노드 4와 5의 깊이는 각각 1이고, 노드 2에서의 왼쪽과 오른쪽 깊이는 각각 1이다.
- 노드 2에서의 `leftDepth + rightDepth`는 2이다. 현재 노드 1에서의 지름을 계산할 때, 이 값이 루트를 통과하는 지름이므로, 루트에서의 지름을 계산할 때 이를 고려한다.

이 과정에서 `diameter`는 트리 전체에서 가장 큰 지름 값으로 업데이트된다.
<br>

### DFS(Depth-First Search, 깊이 우선 탐색)란 ?

1. DFS는 그래프나 트리 구조를 탐색하는 알고리즘이다.
루트 노드(혹은 다른 임의의 노드)에서 시작해 다음 분기(branch)로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방법이다.
2. DFS의 특징
    - 재귀적으로 구현하기 쉽다.
    - 백트래킹(backtracking)을 통해 이전 상태로 돌아갈 수 있다.
    - 모든 노드를 방문하고자 할 때 적합하다.
