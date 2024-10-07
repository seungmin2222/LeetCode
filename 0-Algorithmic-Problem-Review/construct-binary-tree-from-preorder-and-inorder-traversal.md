## [**Construct Binary Tree from Preorder and Inorder Traversal**](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal)

이 문제는 주어진 두 배열, **preorder**와 **inorder**는 각각 이진 트리의 **전위 순회**와 **중위 순회** 결과이다.<br> 이 두 배열을 이용하여 해당 트리를 재구성해야 한다.

## 주요 포인트

- **전위 순회 (Preorder)의 특성**
    - **Preorder** 배열의 첫 번째 요소는 항상 현재 트리 또는 서브트리의 **루트 노드**.<br>
    - 이 특성을 이용해 트리의 루트를 빠르게 결정.
- **중위 순회 (Inorder)의 특성**
    - **Inorder** 배열은 **루트 노드**를 중심으로 **왼쪽 서브트리**와 **오른쪽 서브트리**가 나뉨.<br>
    - **Inorder**에서 **루트 노드의 위치**를 찾아 이를 기준으로 왼쪽과 오른쪽 서브트리의 경계를 정의.
- **재귀적으로 트리를 구성하는 접근법**
    - **Preorder**와 **Inorder** 배열을 적절히 나누어 각각의 **서브트리**를 재귀적으로 구성하는 방법을 사용.<br>
    - 각 서브트리의 루트를 찾고, 배열을 나눈 뒤 이를 연결하는 과정이 반복.

## 나의 코드

```jsx
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null
  }
  
  const rootValue = preorder[0];
  const root = new TreeNode(rootValue);
  
  const rootIndex = inorder.indexOf(rootValue);
  
  const inorderLeft = inorder.slice(0, rootIndex);
  const inorderRight = inorder.slice(rootIndex + 1);
  
  const preorderLeft = preorder.slice(1, inorderLeft.length + 1);
  const preorderRight = preorder.slice(inorderLeft.length + 1);
  
  root.left = buildTree(preorderLeft, inorderLeft);
  root.right = buildTree(preorderRight, inorderRight);
  
  return root;
};
```

## 나의 수도 코드

1. 함수 buildTree(전위 순회 배열, 중위 순회 배열)<br>
만약 전위 순회 배열이 비어 있거나 중위 순회 배열이 비어 있다면 반환 null<br>

3. 루트 값 = 전위 순회 배열[0]<br>
루트 노드 = 새로운 TreeNode(루트 값)<br>

4. 중위 순회 배열에서 루트 값의 위치를 찾는다 (rootIndex)<br>

5. 왼쪽 중위 순회 배열 = 중위 순회 배열[0부터 rootIndex - 1까지]<br>
오른쪽 중위 순회 배열 = 중위 순회 배열[rootIndex + 1부터 끝까지]<br>

6. 왼쪽 전위 순회 배열 = 전위 순회 배열[1부터 1 + 왼쪽 중위 배열 길이까지]<br>
오른쪽 전위 순회 배열 = 전위 순회 배열[1 + 왼쪽 중위 배열 길이부터 끝까지]<br>

7. 루트 노드의 왼쪽 자식 = buildTree(왼쪽 전위 순회 배열, 왼쪽 중위 순회 배열<br>
루트 노드의 오른쪽 자식 = buildTree(오른쪽 전위 순회 배열, 오른쪽 중위 순회 배열)<br>

8. 반환 루트 노드<br>

## 알아둬야 할 것!

### 1. 트리 순회의 종류와 특성

- **전위 순회 (Preorder Traversal)**: 루트 → 왼쪽 → 오른쪽 순서로 방문한다.
    - 전위 순회에서 **첫 번째 값**은 항상 현재 트리의 루트 노드를 나타내므로, 이를 이용해 트리를 재구성할 수 있다.
- **중위 순회 (Inorder Traversal)**: 왼쪽 → 루트 → 오른쪽 순서로 방문다.
    - 중위 순회 배열에서 **루트의 위치**를 알면, 해당 위치를 기준으로 **왼쪽 서브트리**와 **오른쪽 서브트리**로 나눌 수 있다.

### 2. 이진 트리의 재구성

- **루트 노드의 결정**: 전위 순회 배열에서 첫 번째 요소를 사용해 루트를 찾는다.
- **배열의 분할**: 중위 순회 배열에서 루트의 위치를 찾아 왼쪽과 오른쪽 서브트리로 분할한다.
- **재귀적 트리 구성**: 서브트리를 재귀적으로 구해 전체 트리를 구성하는 방식을 이해하는 것이 중요하다.

### 3. 재귀 호출의 이해

- 이 문제는 **재귀적인 접근법**을 이용하여 트리를 구성하는데, 재귀적으로 호출될 때 각 호출이 독립적으로 **서브트리**를 생성하고 연결하는 역할을 한다.
- 재귀 호출을 이해하기 위해서는, 호출 스택을 생각해 보고 각 호출이 독립적으로 서브 문제를 해결하는 방식으로 나아간다는 점을 이해해야 한다.

## 회고

처음 문제를 접했을 때, 두 가지 순회 결과를 사용하여 트리를 구성한다는 개념이 다소 복잡하게 느껴졌다.

하지만 **Preorder**의 첫 번째 요소가 **루트 노드**가 된다는 점과 **Inorder**에서 루트의 위치를 기준으로

왼쪽과 오른쪽 서브트리로 나눌 수 있다는 점을 파악하고 나니 문제를 재귀적으로 해결할 수 있는 접근법이 분명해졌었다.

이 문제를 풀면서 **재귀적인 문제 해결 방식**에 대해 더 깊게 이해할 수 있었다.

각 함수 호출이 독립적인 서브트리를 구성하고 있다는 점을 명확히 이해야하는 문제였다.

트리의 특성과 순회 방법을 깊이 이해하고, 재귀적으로 문제를 해결하는 능력을 기르는데 좋은 문제였다. 다양한 자료 구조와 효율적인 알고리즘 설계에 대한 이해를 더욱 넓혀 나가고 싶다.
