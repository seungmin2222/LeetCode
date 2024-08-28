이 문제는 이진 트리의 레벨 순서 순회(Level Order Traversal) 알고리즘에 관한 것이다.

## 주요 포인트

1. 너비 우선 탐색(BFS) 이해
이 문제의 핵심은 이진 트리를 레벨 순서로 순회하는 것아다. 이는 BFS 알고리즘을 이용하여 구현된다.
2. 큐(Queue) 활용
BFS를 구현하기 위해 큐 자료구조를 사용한다. 큐를 통해 각 레벨의 노드들을 순서대로 처리할 수 있다.
3. 레벨별 처리
트리의 각 레벨을 별도로 처리하고 결과를 저장해야 한다. 이를 위해 각 반복마다 현재 레벨의 크기를 확인하고, 그만큼의 노드만 처리다.
4. 트리 구조 이해
이진 트리의 구조를 이해하고, 노드의 값과 자식 노드들에 어떻게 접근하는지 알아야 한다.

## 나의 코드

```jsx
var levelOrder = function(root) {
   if (!root) {
      return [];
  }

  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(currentLevel);
  }

  return result;
};
```

## 나의 수도코드

1. 함수 levelOrder(root) 정의
2. 루트 노드 확인
    - 만약 root가 null이면 빈 리스트 반환
3. 변수 초기화
    - result = 빈 리스트
    - queue = [root]를 포함하는 리스트
4. 큐가 비어있지 않은 동안 반복
    1. levelSize = queue의 길이
    2. currentLevel = 빈 리스트
    3. i = 0부터 levelSize - 1까지 반복
        - node = queue에서 첫 번째 요소 제거
        - currentLevel에 node.val 추가
        - 만약 node.left가 존재하면 queue에 추가
        - 만약 node.right가 존재하면 queue에 추가
    4. result에 currentLevel 추가
5. result 반환

## 알아둬야 할 것!

### 큐에 담기는 것은 `TreeNode` 객체들이다!

```jsx
const node = queue.shift();  // 여기서 node는 전체 TreeNode 객체
currentLevel.push(node.val);  // 값만 저장

if (node.left) {
    queue.push(node.left);  // 왼쪽 자식 노드를 큐에 추가
}
if (node.right) {
    queue.push(node.right);  // 오른쪽 자식 노드를 큐에 추가
}
```

1. `currentLevel`에 저장된 값들은 단순한 값(숫자, 문자열 등)이며, 원래 노드 객체의 구조나 메서드를 가지고 있지 않는다.
2. 노드의 구조를 활용해야 할 때는 `queue`에서 노드를 처리하는 시점에서 해야한다.

---

큐에 담기는 것은 `TreeNode` 객체들이다.

1. `const node = queue.shift();`
    - 이 줄에서 `queue`에서 꺼내는 `node`는 완전한 `TreeNode` 객체이다.
    - 이 객체는 `val`, `left`, `right` 속성을 모두 가지고 있다.
2. `currentLevel.push(node.val);`
    - 여기서는 노드의 값만 `currentLevel` 배열에 추가한다.
3. `if (node.left) { queue.push(node.left); }`
    - 노드의 왼쪽 자식이 존재한다면, 그 자식 노드(역시 `TreeNode` 객체)를 큐에 추가한다.
4. `if (node.right) { queue.push(node.right); }`
    - 노드의 오른쪽 자식이 존재한다면, 그 자식 노드(역시 `TreeNode` 객체)를 큐에 추가한다.

### 따라서

- `queue`에는 항상 완전한 `TreeNode` 객체들이 들어있다.
- 이 객체들은 자신의 값(`val`)과 자식 노드들에 대한 참조(`left`, `right`)를 모두 가지고 있다.

---

### const node = queue.shift() 와 node.value의 차이

1. `const node = queue.shift();`
    - 이 줄은 큐에서 첫 번째 요소(완전한 `TreeNode` 객체)를 제거하고 그것을 `node` 변수에 할당한다.
    - `node`는 이제 전체 `TreeNode` 객체를 참조한다.. 즉, `val`, `left`, `right` 속성을 모두 가진 객체이다.
2. `node.val`
    - 이것은 `node` 객체의 `val` 속성에 접근한다.
    - 이는 노드의 값만을 나타내며, 노드 객체의 전체 구조를 나타내지 않는다.

### 따라서

- `queue.shift()`는 전체 노드 객체를 반환하고 node.val은 그 노드의 값만 가져온다.

### 이 차이의 중요성

- `currentLevel.push(node.val);`에서는 노드의 값만 필요하므로 `node.val`을 사용한다.
- 그러나 `if (node.left)` 와 `if (node.right)`에서는 노드의 전체 구조가 필요하다.
- 만약 `queue.shift().val`만 사용했다면, 자식 노드들에 대한 정보(`left`와 `right`)를 잃어버리게 된다.
