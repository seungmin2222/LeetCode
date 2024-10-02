## [**Kth Smallest Element in a BST**](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

이 문제는 주어진 이진 탐색 트리(BST)에서 k번째로 작은 노드의 값을 찾는 문제이다.

## 주요 포인트

**이진 탐색 트리(BST)의 성질**

- 왼쪽 서브트리는 항상 루트보다 작고, 오른쪽 서브트리는 루트보다 크다는 성질을 활용한다.
- 이 성질을 이용하면 중위 순회(In-order Traversal)를 통해 값을 오름차순으로 순회할 수 있다.

## 나의 코드

```jsx
var kthSmallest = function(root, k) {
  const arr = [];
  
  function kth(node) {
    if (node) {
        kth(node.left);
        arr.push(node.val);
        kth(node.right);
    }
  }
  
  kth(root);
  
  return arr[k - 1];
};
```

## 나의 수도 코드

1. 함수 kthSmallest(root, k)
2. 내부 함수 kth(node)
    - 만약 node가 null이 아니면
        1. 왼쪽 서브트리로 재귀 호출(왼쪽 서브트리로 재귀)
        2. node의 값을 arr에 추가
        3. kth(node.right) (오른쪽 서브트리로 재귀)
3. 루트 노드로 kth 함수 호출
    - 배열 arr의 k번째 요소 (arr[k - 1]) 반환

## 다른 사람의 코드

```jsx
var kthSmallest = function(root, k) {
	let count = 0;
	let result = null;

  function inOrder(node) {
    if (!node || result !== null) return;

    inOrder(node.left); //
    
    count++;
    if (count === k) {
      result = node.val;
      return;
    }

    inOrder(node.right);
  }

  inOrder(root);
  return result;
};
```

## 다른 사람의 수도 코드

1. 노드가 null이거나 k번째 값을 찾은 경우 재귀를 종료한다.
2.  왼쪽 서브트리 순회 → inOrder(node.left);
3. 현재 노드를 방문했으므로 카운트를 증가
4. k번째 노드에 도달한 경우 → result = node.val;
5. 오른쪽 서브트리 순회

## 나의 코드와 다른점

**나의 코드**

- 중위 순회로 모든 노드를 순회하며 그 값을 배열에 저장한 후, 배열에서 k번째로 작은 값을 가져온다.
- 트리의 모든 노드를 순회한 후에만 k번째 값을 알 수 있다.

다른 사람의 코드

- 중위 순회 도중 `k번째` 값을 찾으면 순회를 중지하고 즉시 반환한다.
- `k번째` 노드에 도달하면 더 이상 순회할 필요가 없기 때문에 더 빠르게 답을 구할 수 있다.

## 알아둬야 할 것!

1. 재귀 함수가 중위 순회를 구현하는 데 사용되었으며, 왼쪽 서브트리, 루트, 오른쪽 서브트리 순으로 순회하는 방식에 익숙해질 필요가 있다.
2. 이진 탐색 트리(BST)에서 중위 순회는 노드의 값을 오름차순으로 순회할 수 있는 방법이라는 점을 명확히 이해해야 한다.

## 회고

이번 문제는 이진 탐색 트리(BST)에서 중위 순회를 이용해 k번째로 작은 값을 찾는 것이 목표였다.

처음에는 노드의 값을 배열에 저장한 후, 그 배열에서 k번째 값을 반환하는 방식으로 접근했다.

BST의 중위 순회(In-order Traversal)를 활용하면 자연스럽게 값들이 오름차순으로 정렬된다는 사실을 이용한 방법이었다.

이 방식은 직관적이고 간단하며 트리의 성질을 잘 활용했다.

하지만 메모리를 추가적으로 사용한다는 단점이 있었다.

최적화된 방법을 생각해보니 배열을 만들지 않고도 문제를 해결할 수 있다는 것을 깨달았다.
