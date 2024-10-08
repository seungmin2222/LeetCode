## [**Balanced Binary Tree**](https://leetcode.com/problems/balanced-binary-tree)

이 문제는 주어진 이진 트리가 높이 균형(height-balanced)인지 확인하는 것이다.

높이 균형 트리란 모든 노드에서 왼쪽과 오른쪽 서브트리의 높이 차이가 1 이하인 트리를 말한다.

## 주요 포인트

1. 재귀적 접근
    - 트리의 각 노드를 순회하며 높이를 계산합니다.
2. 높이 계산과 균형 체크 동시 수행
    - 각 노드에서 서브트리의 높이를 계산하면서 동시에 균형 여부를 확인합니다.
3. 불균형 조기 감지
    - 불균형이 발견되면 즉시 중단하고 결과를 반환합니다.
4. 기저 조건 처리
    - 빈 노드(null)의 높이는 0으로 처리합니다.

## 나의 코드

```jsx
var isBalanced = function(root) {
    function dfs(node) {
        if (!node) return 0;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1;
        }
        
        return Math.max(left, right) + 1;
    }
    
    return dfs(root) !== -1;
};
```

## 나의 수도 코드

1. `isBalanced` 함수는 트리의 루트를 입력으로 받는다.
2. 내부에 `dfs` (깊이 우선 탐색) 함수를 정의. 이 함수는 재귀적으로 트리를 탐색한다.
3. `dfs` 함수는 각 노드에 대해
    - 노드가 null이면 높이 0을 반환한다.
    - 왼쪽과 오른쪽 자식에 대해 재귀적으로 `dfs`를 호출한다.
    - 불균형 상태(높이 차이가 1보다 크거나, 하위 트리가 이미 불균형)를 확인하고, 불균형이면 -1을 반환한다.
    - 균형 상태라면 현재 노드의 높이(자식 노드 중 큰 높이 + 1)를 반환한다.
4. 최종적으로 `dfs(root)`의 결과가 -1이 아니면 트리가 균형잡혔다고 판단하여 true를 반환하고, -1이면 false를 반환한다.

## 알아둬야 할 것!

1. 이진 트리 구조: 각 노드가 최대 두 개의 자식을 가질 수 있는 트리 구조.
2. 높이 균형 이진 트리의 정의: 모든 노드에서 왼쪽과 오른쪽 서브트리의 높이 차이가 1 이하인 트리.
3. 재귀 함수: 트리를 순회하고 높이를 계산하는 데 사용.
4. 깊이 우선 탐색(DFS): 트리를 효율적으로 탐색하는 알고리즘.
5. 트리의 높이 계산: 리프 노드에서 현재 노드까지의 가장 긴 경로의 길이.

## 회고

이 문제는 단순해 보이지만, 효율적인 해결책을 찾기 위해서는 깊은 사고가 필요하다. 트리 구조에 대한 이해와 재귀적 사고, 그리고 최적화 능력을 테스트하는 좋은 문제다. 이러한 유형의 문제를 통해 복잡한 데이터 구조를 다루는 능력과 효율적인 알고리즘을 설계하는 능력을 기를 수 있다.
