# [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/)
이 문제는 주어진 이진 트리의 루트 노드에서 가장 먼 리프 노드까지의 경로에서 노드의 최대 개수를 반환하는 문제이다.

## 주요 포인트

1. **재귀적 깊이 탐색**: 각 노드에서 왼쪽과 오른쪽 자식 노드로 재귀적으로 이동하면서 깊이를 계산합니다.
2. **최대 깊이 결정**: 현재 노드에서의 왼쪽 깊이와 오른쪽 깊이 중 더 큰 값을 선택하여 최대 깊이를 계산합니다.
3. **루트에서 리프까지**: 루트 노드에서 시작하여 가장 먼 리프 노드까지의 경로에서 최대 깊이를 반환합니다.

## 나의 코드

```jsx
var maxDepth = function(root, num) {
  let maxNum = 0;

  function depth(node, num) {
    if (!node) return 0;
    num++
    
    let leftDepth = depth(node.left, num);
    let rightDepth = depth(node.right, num);
    
    if (maxNum < num) {
        maxNum = num;
    }
  }
  depth(root, 0);
  
  return maxNum;
};
```

## 나의 수도코드

1. 함수 `maxDepth`를 정의하고, 인자로 루트 노드 `root`와 초기 값 `num`을 받는다.
2. 변수 `maxNum`을 0으로 초기화하여 최대 깊이를 저장할 준비를 한다.
3. 재귀 함수 `depth`를 정의한다:
    1. 입력받은 노드가 존재하지 않으면 0을 반환하여 종료한다.
    2. 현재 깊이 `num`을 1 증가시킨다.
    3. 현재 노드의 왼쪽 자식 노드에 대해 `depth` 함수를 재귀적으로 호출하여 `leftDepth`를 계산한다.
    4. 현재 노드의 오른쪽 자식 노드에 대해 `depth` 함수를 재귀적으로 호출하여 `rightDepth`를 계산한다.
    5. `num`이 `maxNum`보다 크다면 `maxNum`을 `num`으로 갱신한다.
4. 루트 노드에서 시작하여 `depth` 함수를 호출한다.
5. 최종적으로 최대 깊이인 `maxNum`을 반환한다.

### 다른 사람의 풀이

```jsx
var maxDepth = function(root) {
  if (!root) return 0;
  
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  
  return Math.max(leftDepth, rightDepth) + 1;
};
```

## 회고

### 1. **매개변수 `num`의 제거**

- **나의 코드** :`num`이라는 매개변수를 사용하여 현재 깊이를 추적한다. 이 값은 재귀적으로 호출될 때마다 증가하며, 최종적으로 `maxNum`과 비교하여 최대 깊이를 업데이트하는 역할을 한다.
- 다른 사람의 **코드** : `num` 매개변수가 제거되었다. 대신, 재귀 호출의 반환 값을 사용하여 왼쪽과 오른쪽 서브트리의 깊이를 각각 계산하고, 그 중 최대값을 선택하여 트리의 깊이를 구한다.

### 2. **`maxNum` 변수의 제거**

- **나의 코드** : `maxNum` 변수를 사용하여 최대 깊이를 외부에서 추적한다. 이 변수는 `depth` 함수 내에서 조건문을 통해 업데이트된다.
- 다른 사람의 **코드** : `maxNum` 변수를 제거하고, 대신 재귀 호출 자체가 최대 깊이를 반환하도록 변경한다. 반환된 값 중 큰 값을 선택하여 최대 깊이를 구한다.

### 3. **재귀 호출의 반환 값 사용**

- **나의 코드** : 재귀적으로 왼쪽과 오른쪽 자식 노드의 깊이를 계산하지만, 이 깊이를 단순히 반환하지 않고, `num` 값을 증가시켜 `maxNum`을 업데이트하는 데 사용한다.
- 다른 사람의 **코드** : 각 재귀 호출이 바로 최대 깊이를 반환하도록 하여, 반환된 깊이 값을 활용해 `Math.max`로 왼쪽과 오른쪽 깊이 중 큰 값을 선택하고, 여기에 1을 더하여 현재 노드까지의 깊이를 반환한다.

### 4. **불필요한 연산 제거**

- **나의 코드** : 깊이를 계산한 후, `maxNum`과 비교하여 최대 깊이를 업데이트하는 별도의 연산이 필요한다.
- 다른 사람의 **코드** : 이러한 별도의 연산을 제거하고, 직접적으로 최대 깊이를 반환함으로써 코드를 간결하게 유지하고 불필요한 연산을 줄였다.

### 결론

- **나의 코드**는 `maxNum` 변수를 통해 외부에서 최대 깊이를 추적하는 구조였지만, 최적화된 코드는 재귀 함수 자체가 최대 깊이를 반환하는 방식으로 단순화되었다.
- 다른 사람의 코드는 더 적은 변수와 조건문을 사용해, 코드의 가독성을 높이고, 잠재적인 버그를 줄이면서 동일한 결과를 효율적으로 도출한다.
