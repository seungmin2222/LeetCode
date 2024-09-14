## [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)

이 문제는 주어진 이진 트리(root)에 다른 이진 트리(subRoot)가 서브트리로 존재하는지 확인하는 알고리즘이다.

## 주요 포인트

1.  root 트리의 모든 노드를 순회하면서 각 노드를 시작점으로 subRoot와 일치하는지 확인해야 한다.
2. 두 트리가 동일한지 비교하는 별도의 로직이 필요하다. 이는 노드의 값과 구조를 모두 고려해야 한다.
3.  트리의 순회와 비교 모두 재귀를 사용하여 효과적으로 구현할 수 있다.
4. 빈 트리(null)에 대한 적절한 처리가 필요하다. ex) subRoot가 null일 때의 경우를 주의해야 한다.

## 나의 코드

```jsx
var isSubtree = function(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;
    
    if (isSameTree(root, subRoot)) return true;
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```

## 나의 수도 코드

1. subRoot가 null이면 true 반환
2. root가 null이면 false 반환
3. isSameTree 함수를 사용하여 확인
4. 일치하면 true 반환
5. 왼쪽 서브트리에서 isSubtree 재귀 호출
6. 오른쪽 서브트리에서 isSubtree 재귀 호출
7. 두 결과를 OR 연산으로 결합
8. 두 노드의 null 여부 및 값 비교
9. 왼쪽과 오른쪽 자식에 대해 재귀적으로 isSameTree 호출

## 알아둬야 할 것!

1. 트리 순회의 이해
    - 이진 트리를 재귀적으로 순회하는 방법을 익혀야 한다.
    - 전위, 중위, 후위 순회 중 이 문제는 전위 순회 방식을 사용한다.
2. 재귀의 활용
    - 트리 구조에서 재귀가 얼마나 효과적인지 배울 수 있었다.
    - 복잡한 문제를 작은 부분 문제로 나누어 해결하는 방법을 익혔다.
3. 종료 조건의 중요성
    - 재귀에서 적절한 종료 조건(base case)을 설정하는 것의 중요성을 알게 되었다.
    - null 노드 처리가 알고리즘의 정확성에 큰 영향을 미침을 이해했다.
4. 문제 분해 기술
    - 하나의 큰 문제(서브트리 확인)를 두 개의 작은 문제(트리 순회와 트리 비교)로 나누어 해결했다.

## 회고

이 문제는 트리 구조와 재귀에 대한 깊은 이해를 요구한다.

처음에는 복잡해 보일 수 있지만, 문제를 작은 부분으로 나누어 생각하면 해결할 수 있었다.

이러한 유형의 문제를 해결하면서 트리 구조에 대한 직관이 발달하고, 이는 더 복잡한 트리 관련 문제를 해결하는 데 도움이 될 것이라 생각한다!
