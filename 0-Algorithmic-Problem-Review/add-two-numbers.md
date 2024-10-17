## [**Add Two Numbers**](https://leetcode.com/problems/add-two-numbers/)

두 개의 역순으로 저장된 비어있지 않은 링크드 리스트가 주어졌을 때, 각 노드가 하나의 숫자를 나타낸다.

이 두 숫자를 더한 값을 새로운 `Linked List`로 반환하는 문제이다.

## 주요 포인트

1. `Linked List` **순회**
    - 두 개의 리스트를 동시에 순회하면서 각 자리의 값을 더하고 새로운 리스트에 저장해야 한다.
2. **리스트의 끝까지 순회**
    - 두 리스트의 길이가 다를 수 있으며, 더 긴 리스트의 나머지 값과 자리 올림을 처리할 수 있어야 한다.

## 나의 코드

```jsx
var addTwoNumbers = function(l1, l2) {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;
  
  while (l1 !== null || l2 !== null) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    let sum = carry + x + y;
    
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  
  return dummyHead.next;
}

```

## 나의 수도 코드

1. `dummyHead`라는 더미 노드를 생성하고, `current` 포인터를 `dummyHead`로 설정.
2. `carry` 변수를 0으로 초기화하여 자리 올림 값을 저장할 준비를 함.
3. 두 링크드 리스트 `l1`과 `l2`가 둘 다 `null`이 될 때까지 반복.
    - `l1`의 값(`x`)과 `l2`의 값(`y`)를 더함. (만약 해당 노드가 `null`이면 0으로 간주)
    - `sum = carry + x + y`로 두 값을 더한 후, 자리 올림을 계산.
    - `carry = sum // 10`으로 자리 올림을 계산하고, `current.next`에 `sum % 10`을 새 노드로 추가.
    - `current`를 다음 노드로 이동.
    - `l1`과 `l2`를 각각 다음 노드로 이동.
4. 리스트 순회를 다 마친 후에도 `carry`가 남아 있다면, `carry` 값을 새로운 노드로 추가.
5. `dummyHead.next`를 반환하여 새로 생성된 링크드 리스트의 시작 노드를 반환.

## 알아둬야 할 것!

1. `Linked List` **구조와 순회**
    - 노드들을 순차적으로 탐색하고 연결하는 방법을 이해해야 함.
2. **자리 올림(Carry) 처리**
    - 두 자리 수를 더할 때 10을 넘는 경우 자리 올림하여 처리함.
3. **더미 노드(Dummy Node) 사용**
    - 리스트의 시작을 쉽게 추적하고 관리하기 위한 더미 노드 활용.
4. **리스트의 동적 크기 처리**
    - 두 리스트의 길이가 다를 때 유연하게 처리하는 방법을 적용.
5. **결과 리스트 반환**
    - 더미 노드를 사용하여 결과 링크드 리스트의 첫 노드를 반환.

## 회고

두 리스트를 직접 순회하며 각 자리의 합을 구하고, 자리 올림을 관리하는 방식이었다.

더미 노드를 활용해 결과 리스트의 시작을 추적하는 방법을 배웠고, 향후 유사한 문제를 통해 자리 올림 및 리스트 처리 능력을 강화할 필요가 있다.

코드 효율성과 예외 처리에 대한 고려도 중요했다.
