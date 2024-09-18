## [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree)

이 문제는 주어진 이진 트리가 유효한 이진 탐색 트리(BST)인지 확인하는 것이다.

BST의 각 노드는 왼쪽 서브트리의 모든 노드보다 크고, 오른쪽 서브트리의 모든 노드보다 작아야 한다.

## 주요 포인트

1. 각 노드에 대해 왼쪽 서브트리의 모든 노드 값은 현재 노드보다 작고, 오른쪽 서브트리의 모든 노드 값은 현재 노드보다 커야 한다.
2. 트리의 각 노드를 재귀적으로 검사하여 BST 속성을 확인해야 한다.
3. 노드에 대해 유효한 값의 범위를 추적해야 한다. 이 범위는 트리를 탐색하면서 계속 갱신된다.
4. 빈 트리(null 노드)는 유효한 BST로 간주해야 하며, 리프 노드에 도달했을 때의 처리도 고려해야 한다.

## 나의 코드

```jsx
var isValidBST = function(root) {
  function isBSTUtil(node, min, max) {
    if (node === null) {
      return true;
    }

    if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
      return false;
    }

    return isBSTUtil(node.left, min, node.val) && isBSTUtil(node.right, node.val, max);
  }

  return isBSTUtil(root, null, null);
};
```

## 나의 수도 코드

1. 메인 함수 isValidBST(root)
    - isBSTUtil(root, null, null) 호출하여 결과 반환
2. 보조 함수 isBSTUtil(node, min, max)
    - 노드가 null이면 true 반환 (기저 사례)
3. 노드 값 검증
    - 노드 값이 주어진 범위를 벗어나면 false 반환
    (node.val <= min 또는 node.val >= max)
4. 재귀적 검사
    - 왼쪽 서브트리 검사: isBSTUtil(node.left, min, node.val)
    - 오른쪽 서브트리 검사: isBSTUtil(node.right, node.val, max)
    - 두 검사 결과의 논리곱(AND) 반환

## 알아둬야 할 것!

- **데이터 구조 이해**
    - BST는 효율적인 검색, 삽입, 삭제 연산을 제공하는 중요한 데이터 구조다
    - 이 구조의 유효성을 검증하는 능력은 BST를 올바르게 이해하고 있음을 나타낸다.
- **재귀와 트리 순회**
    - 이 문제는 재귀적 사고와 트리 순회 기술을 연습할 수 있는 좋은 기회를 제공한다.
- **경계 조건 처리**
    - 최소값과 최대값을 추적하며 경계 조건을 처리하는 능력을 기르게 된다.
- **알고리즘 최적화**
    - 단순한 접근법부터 최적화된 솔루션까지 다양한 방법을 고려하게 되어 알고리즘 설계 능력을 향상시킨다.

## 회고

문제의 정확한 이해가 해결의 첫걸음이었다. BST의 전체 구조와 속성을 종합적으로 고려하는 것이 중요했다고 생각된다.

재귀적 사고와 범위 기반 검증 전략이 문제 해결의 핵심이었고 이 접근 방식을 통해 복잡한 문제를 효과적으로 해결할 수 있었다.

이 문제를 통해 재귀적 사고 능력, 트리 구조에 대한 깊은 이해, 그리고 문제 해결 접근법의 일반화 능력을 크게 향상시킬 수 있는 문제라고 생각이 된다.

트리 구조를 점점 이해하고 있어지는 것 같지만 노력이 더 필요한 것 같다.
