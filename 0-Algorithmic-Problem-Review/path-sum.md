# [Path Sum](https://leetcode.com/problems/path-sum/)

이진 트리에서 루트(root)부터 리프(leaf)까지의 경로 중 노드 값들의 합이 targetSum과 같은 경로가 있는지 확인.

## 주요 포인트

- 자식 노드가 없는 노드.
- DFS(깊이 우선 탐색)로 루트부터 리프까지 경로 합을 누적하고, 리프에 도달했을 때 targetSum과 비교.

## 나의 코드

```jsx
var hasPathSum = function(root, targetSum) {
  const arr = [];
  
  function sumRootValue (root, sum) {
    if (root === null) {
      return;
    }
    
    sum += root.val;
    
    if (!root.left && !root.right) {
      arr.push(sum);
      return;
    }
    
    sumRootValue(root.left, sum);
    sumRootValue(root.right, sum);
  }
  
  sumRootValue(root, 0);
  
  return arr.includes(targetSum);
};
```

## 나의 수도 코드

1. 빈 배열 arr 선언
2. sumRootValue(node, sum):
    - node가 null이면 종료
    - 현재 노드 값을 sum에 더한다
    - node가 리프이면 sum을 arr에 추가하고 종료
    - 왼쪽 자식 탐색
    - 오른쪽 자식 탐색
3. root에서 DFS 시작
4. arr에 targetSum이 있는지 확인

## 시간 복잡도

- O(N) : 모든 노드를 한 번씩 방문 (N은 트리의 노드 수)

## 공간 복잡도

- O(N) : arr 배열에 최대 리프 경로 수 저장 + DFS 재귀 호출 스택

## 다른 사람의 풀이

```jsx
var hasPathSum = function(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return targetSum === root.val;
  
  return hasPathSum(root.left, targetSum - root.val) || 
         hasPathSum(root.right, targetSum - root.val);
};
```

## 알아둬야 할 것!

- 배열을 사용할 필요가 없으며, DFS 재귀로 경로 합을 바로 비교하면 메모리 절약 가능.
- targetSum을 줄여나가는 방식이 훨씬 직관적이며 성능도 조금 더 좋음.

## 회고

- 현재 풀이(arr.includes)는 불필요한 배열 탐색이 추가되어 비효율적.
- 다음엔 경로 합을 실시간으로 체크하는 재귀적 누적 합 방식을 우선 고려해야 함.
