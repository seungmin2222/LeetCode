## [**Swap Nodes in Pairs**](https://leetcode.com/problems/swap-nodes-in-pairs/)

이 문제는 주어진 링크드 리스트에서, 인접한 두 노드씩 짝지어 자리를 바꿔주는 문제이다.

단, 노드의 값은 변경하지 않고, 노드 자체를 교환해야 한다.

## 주요 포인트

1. **노드의 값 변경 금지**
    - 노드의 값을 바꾸는 것이 아니라, 노드 자체를 교환해야 한다.
    - 각 노드의 `next` 포인터를 바꾸는 방식으로 접근해야 한다.
2. **더미 노드 활용**
    - 더미 노드를 사용하여 리스트의 처음부터 안정적으로 조작할 수 있다.
    - 더미 노드를 사용하면 리스트의 첫 번째 두 노드를 바꿀 때의 혼란을 줄일 수 있다.
3. **포인터 조작**
    - 두 노드를 교환하기 위해서는 `next` 포인터를 조작해야 한다.
    - 이를 위해 현재 노드를 가리키는 포인터를 설정하고, 두 개의 노드를 지정한 후 포인터를 변경한다.
4. **반복문 사용**
    - 두 개의 노드를 계속해서 교환해야 하므로, 반복문을 통해 리스트 끝까지 순회하면서 노드들을 바꿔야 한다.

## 나의 코드

```jsx
var swapPairs = function(head) {
  const dummy = new ListNode(0);

  dummy.next = head;
  let current = dummy;

  while (current.next !== null && current.next.next !== null) {
    let first = current.next;
    let second = current.next.next;

    first.next = second.next;
    second.next = first;    
    current.next = second;

    current = first;
  }

  return dummy.next;
};
```

## 나의 수도 코드

1. `dummy`라는 새로운 노드를 만듬, 이 노드의 `next`를 `head`로 설정.
2. 현재 위치를 가리키는 포인터 `current`를 `dummy`로 초기화.
3. **반복문으로 두 개의 인접한 노드가 있는지 확인**
4. `current.next`와 `current.next.next`가 존재하는 동안 반복문을 실행.
    - 첫 번째 노드(`first`)는 `current.next`로 설정.
    - 두 번째 노드(`second`)는 `current.next.next`로 설정.
5. `first.next`를 `second.next`로 설정하여 첫 번째 노드가 세 번째 노드를 가리키도록 함.
6. `second.next`를 `first`로 설정하여 두 번째 노드가 첫 번째 노드를 가리키도록 함.
7. `current.next`를 `second`로 설정하여 현재 노드가 두 번째 노드를 가리키도록 함.
8. `current`를 `first`로 업데이트하여 다음 두 노드로 이동.
9. `dummy.next`를 반환하여, 더미 노드 다음에 위치한 실제 헤드를 반환.

## 알아둬야 할 것!

- **포인터 조작의 중요성**
    
    이 문제에서는 노드의 값을 변경하는 것이 아니라, 노드 자체의 연결을 바꿔야 한다.
    
    이를 위해 `next` 포인터를 조작하는 방법이 필수적이다.
    
- **조건문을 활용한 반복문 제어**
    
    current.next 와 current.next.next가 유효한지 체크하는 조건문을 통해, 두 개의 인접한 노드가 있는 동안만 스왑이 이루어지도록 한다.
    
    이를 통해 리스트의 끝까지 스왑 작업을 안전하게 수행할 수 있다.
    
- **연결 리스트의 기본 이해**
    
    문제를 풀기 위해서는 연결 리스트의 기본적인 구조와 동작 방식을 이해해야 한다. 연결 리스트의 각 노드는 값과 다음 노드에 대한 포인터를 가지고 있으며, 이를 조작하는 것이 이 문제의 핵심이다.
    

## 회고

이번 문제를 풀면서 링크드 리스트의 구조와 포인터 조작의 중요성을 깊이 이해할 수 있었다.

특히, 두 개씩 노드를 스왑할 때 더미 노드를 활용해 코드의 안정성과 가독성을 높이는 방법이 인상적이였다.

포인터 조작이 어려울 수 있었지만, 반복적인 조건 체크와 명확한 포인터 업데이트를 통해 문제를 체계적으로 접근할 수 있었다.
