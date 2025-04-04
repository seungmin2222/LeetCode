## [Lowest Common Ancestor of Deepest Leaves](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/description/?envType=daily-question&envId=2025-04-04)

이 문제는 이진 트리의 루트 노드가 주어졌을 때, 가장 깊은 리프(leaf, 자식이 없는 노드) 노드들의 최저 공통 조상을 구하는 문제이다.

## 주요 포인트

- DFS를 통해 가장 깊은 리프 노드를 찾고,
- 좌우 서브트리의 깊이를 비교해가며 공통 조상을 찾아간다.
- 리턴값은 [깊이, LCA 노드] 형식으로 사용하면 깔끔하게 풀 수 있다.

## 나의 코드

```tsx
var lcaDeepestLeaves = function (root) {
    const dfs = (node) => {
        if (!node) return [null, -1];

        const [leftLCA, leftDepth] = dfs(node.left);
        const [rightLCA, rightDepth] = dfs(node.right);

        const currentDepth = Math.max(leftDepth, rightDepth) + 1;

        if (leftDepth === rightDepth) {
            return [node, currentDepth];
        }
        else if (leftDepth > rightDepth) {
            return [leftLCA, currentDepth];
        }
        else {
            return [rightLCA, currentDepth];
        }
    };

    return dfs(root)[0];
};
```

## 나의 수도 코드

1. DFS (Depth-First Search) 를 이용해서,
2. 각 서브트리에서 가장 깊은 리프 노드의 깊이 와 해당 서브트리의 LCA 를 함께 리턴한다.
3. 왼쪽/오른쪽 서브트리에서 깊이가 같으면 현재 노드가 LCA
4. 깊이가 다르면, 더 깊은 쪽에서 내려온 LCA를 그대로 유지

## 시간 복잡도

이 함수는 **각 노드를 한 번씩** 방문한다.

즉, **트리의 노드 수 = N** 이다.

**최종 시간 복잡도는 O(N) 이다.**

## 공간 복잡도

1. **재귀 호출 스택**
    - 이진 트리에서 DFS는 **재귀 호출**을 사용합니다.
    - **최악의 경우**, 트리가 한쪽으로 쏠려 있을 때(예: linked list 형태), 재귀 깊이는 N
    - **평균적인 경우** (balanced tree)에서는 깊이가 log N

**→ O(N)** (N = 트리의 높이)

1. **추가 공간**
    - 깊이와 노드를 튜플로 리턴하지만, 새로운 구조를 만들진 않고 스택 내에서만 사용
    - 별도의 큐나 배열 등은 사용하지 않음

최종 공간 복잡도는 O(1)이다.

## 알아둬야 할 것!

1. **DFS (깊이 우선 탐색)**
    - 트리 구조에서 하위 노드를 재귀적으로 탐색할 때 유용하며, 깊이 정보를 계산할 수 있음.
2. **LCA (Lowest Common Ancestor)**
    - 두 노드(또는 여러 노드)의 공통 조상 중 가장 깊은 노드를 찾는 개념.
3. **Post-ord**er Traversal
    - 좌우 자식 노드를 먼저 탐색하고 그 결과를 바탕으로 부모 노드를 처리하는 순회 방식. 이 문제에 적합함.
4. 재귀 기반 상태 전달

•	DFS 과정에서 각 노드의 서브트리 정보를 상위 노드로 리턴하는 방식이 핵심 로직임 ([깊이, LCA] 형태).

---

## 회고

이번 문제를 통해 LCA와 DFS의 결합이 어떻게 트리 문제를 효과적으로 풀 수 있게 하는지 배웠다.
재귀적으로 하위 결과를 상위에 전달하는 방식은 트리의 특성을 잘 활용한 전형적인 풀이였다.
“가장 깊은 노드들 사이의 공통 조상”이라는 문제 조건이 핵심이었다.
트리 문제에서 post-order traversal이 왜 자주 쓰이는지도 체감할 수 있었다.
다음엔 다양한 트리 구조를 직접 그려보며 시각적으로도 이해를 더 다져보고 싶다.
