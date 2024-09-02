# [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/submissions/)

이 문제는 주어진 연결 리스트가 회문(앞뒤로 읽어도 같은 값)인지 여부를 확인하는 문제이다.

## 주요 포인트

1. **연결 리스트의 특성**
    - 연결 리스트는 배열처럼 인덱스로 접근할 수 없고, 순차적으로 노드를 따라가야 하므로, 효율적인 중간 지점 찾기와 노드 접근이 중요하다.
2. **회문 구조**
    - 회문은 앞뒤로 동일한 값을 가지는 구조이다.
    - 연결 리스트에서 이를 확인하려면 리스트의 중간을 기준으로 앞부분과 뒷부분을 비교해야 한다.
3. **공간 복잡도**
    - **고려**공간 복잡도를 줄이기 위해 연결 리스트를 직접 조작하거나, 배열로 변환하는 방식의 선택이 필요하다. → 나는 배열로 변환하여 문제를 해결했다.
    - 만약 리스트를 뒤집거나 조작한 경우, 원상태로 복원할 필요가 있을 수 있다.

## 나의 코드

```jsx
var isPalindrome = function(head) {
  let values = [];
  
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  
  let i = 0;
  let j = values.length - 1;
  
  while (i < j) {
    if (values[i] !== values[j]) {
      return false;
    }
    
    i++;
    j--;
  }
  
  return true;
};
```

## 나의 수도코드

1. 배열 `values`를 빈 배열로 초기화한다.
2. `current` 노드를 `head`로 초기화한다.
3. 연결 리스트를 순회
    - `current` 노드의 값을 `values` 배열에 추가한다.
    - `current`를 다음 노드로 이동시킨다.
4. 두 포인터 `i`와 `j`를 각각 0과 `values.length - 1`로 초기화한다.
5. 배열의 양 끝에서 중앙으로 이동
    - `values[i]`와 `values[j]`를 비교한다.
    - 만약 두 값이 다르면 `false`를 반환한다.
    - 그렇지 않으면 `i`를 1 증가시키고, `j`를 1 감소시킨다.
6. 모든 비교가 완료된 후에도 불일치가 없으면 `true`를 반환한다.

## 연결 리스트를 직접 조작하여 회문 검사하는 코드

```jsx
var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;
    
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let prev = null;
    let curr = slow;
    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    
    let firstHalf = head;
    let secondHalf = prev;
    while (secondHalf !== null) {
        if (firstHalf.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    
    return true;
};
```

## 코드 설명

1. `slow`와 `fast` 포인터를 사용해 연결 리스트의 중간 지점을 찾는다.
2. 중간 이후의 리스트를 반대로 뒤집는다. 이렇게 하면 뒷부분을 앞부분과 직접 비교할 수 있다.
3. 리스트의 앞부분과 뒤집힌 뒷부분을 차례대로 비교한다. 모든 노드가 동일하면 회문이다.
4. 비교 결과에 따라 `true` 또는 `false`를 반환합니다.

### 장점

1. **공간 효율성**
    - 리스트를 직접 조작하는 방법은 O(1) 추가 공간만을 사용한다.
    - 배열에 값을 저장하지 않기 때문에 메모리 사용량이 적다.
2. **빠른 실행 시간**
    - 직접 리스트를 조작하는 방법은 리스트 자체의 구조를 사용하기 때문에 비교적 빠르게 동작한다.

### 단점

1. **리스트 조작**
    - 리스트의 중간 부분을 반전해야 하므로 연결 리스트의 구조를 이해하고 있어야 한다.
    - 리스트가 원래 상태로 복원되지 않는다.
2. **코드 복잡성**
    - 이 방법은 연결 리스트를 반전하거나 비교하는 과정이 다소 복잡할 수 있다.

## 회고

- **배열 사용 방법**은 직관적이고 구현이 쉽지만, 추가적인 메모리가 필요하다. 
이 방법은 연결 리스트의 구조에 대한 이해가 적어도 쉽게 접근할 수 있다.
- **연결 리스트 직접 조작 방법**은 더 복잡하지만, 메모리 사용을 최소화할 수 있다. 이 방법은 연결 리스트를 깊이 이해하고 효율적으로 다루어야 할 때 유용하다.

각 방법은 문제의 조건과 상황에 따라 선택될 수 있으며, 이를 통해 알고리즘 설계의 다양한 측면을 이해할 수 있다.
