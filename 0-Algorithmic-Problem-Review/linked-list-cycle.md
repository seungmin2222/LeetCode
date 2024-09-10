## [**Linked List Cycle**](https://leetcode.com/problems/linked-list-cycle/)

## 주요 포인트

1. 먼저 `head`가 null이거나 노드가 하나만 있는 경우 사이클이 존재할 수 없으므로 `false`를 반환합니다.
2. 두 개의 포인터 `slow`와 `fast`를 `head`에 위치시키고, 빠른 포인터가 리스트 끝에 도달할 때까지 순회합니다.
3. 순회 중 두 포인터가 같은 노드를 가리키면 사이클이 존재한다고 결론을 내립니다.
4. 빠른 포인터가 끝까지 가면 사이클이 없다고 판단합니다.

## 나의 코드

```jsx
var hasCycle = function(head) {
  if (head === null || head.next === null) {
      return false;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
      slow = slow.next;    
      fast = fast.next.next;

      if (slow === fast) {
          return true;
      }
  }

  return false;
};
```

## 나의 수도 코드

1. `head`가 null이거나 노드가 하나만 있는 경우 `false` 반환
2. `slow`와 `fast` 두 포인터를 `head`에 위치시킴
3. `while fast`와 `fast.next`가 null이 아닌 동안 반복:
    - `slow`는 한 칸 이동 (`slow = slow.next`)
    - `fast`는 두 칸 이동 (`fast = fast.next.next`)
    - 만약 `slow == fast`이면 사이클이 존재하므로 `true` 반환
4. 반복문이 끝나면 `false` 반환 (사이클이 없음)

## 알아둬야 할 것!

1. **연결 리스트의 기본 개념**
    - 연결 리스트는 노드로 이루어지며, 각 노드는 다음 노드를 가리킨다.
    - 이 구조에서 순환(사이클)이 존재하는지 판단하는 것이 문제의 핵심이다.
2. **투 포인터(Two-pointer) 기법**
    - 느린 포인터(slow)와 빠른 포인터(fast)를 사용하여 리스트를 탐색한다. 이는 사이클을 감지하는 효과적인 방법입니다.
    - 두 포인터가 만나면 사이클이 존재하고, 만나지 않으면 리스트에 사이클이 없다는 것을 의미한다.
3. **Floyd's Cycle Detection 알고리즘**
    - 이 알고리즘은 두 포인터의 이동 속도를 다르게 설정해 사이클을 찾는 기법으로, 시간 복잡도 O(n)과 공간 복잡도 O(1)의 효율성을 가진다.
    - 이를 잘 이해하고 활용하면 유사한 문제에 응용할 수 있습니다.

## 회고

이번 문제를 통해 **연결 리스트에서 사이클을 감지하는 방법**에 대해 배울 수 있었다. 특히, 두 포인터를 이용한 **Floyd's Cycle Detection** 기법을 적용하여 효율적으로 사이클을 찾아낼 수 있다는 점이 유익했다. 느린 포인터와 빠른 포인터를 사용하면 시간 복잡도를 O(n)으로 유지하면서도 추가적인 메모리 사용 없이 문제를 해결할 수 있다는 것을 알게 되었다.

또한, 이번 문제를 풀면서 **투 포인터 알고리즘**이 간단하면서도 강력한 도구라는 것을 다시 한번 깨달았다. 이 방식은 연결 리스트뿐만 아니라 여러 다른 자료구조에서도 활용될 가능성이 높다고 느꼈다. 앞으로는 이런 효율적인 알고리즘을 다양한 문제에 적용할 수 있도록 연습해야겠다고 생각했다.
