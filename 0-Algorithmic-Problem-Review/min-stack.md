# [Min Stack](https://leetcode.com/problems/min-stack/submissions/)

이 문제는 스택 자료구조를 설계하는 것으로, push, pop, top, 최소값을 상수 시간 복잡도로 처리할 수 있어야 한다.

## 주요 포인트

1. **스택과 최소값 관리**: 두 개의 스택을 사용해 하나는 일반적인 값을 저장하고, 다른 하나는 최소값을 저장한다.
2. **최소값 갱신**: push할 때 최소값 스택을 업데이트하며, pop할 때 최소값 스택에서도 값을 제거한다.

## 나의 코드

```jsx
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  
  if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.length === 0) return;

  const poppedValue = this.stack.pop();

  if (poppedValue === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length === 0) return null;
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.minStack.length === 0) return null;
  return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

```

## 나의 수도코드

1. **`__init__()`**
    
    스택과 최소값을 저장할 두 개의 리스트(stack, minStack)를 초기화한다.
    
2. **`push(val)`**
    - `val`을 스택(stack)에 추가한다.
    - 만약 minStack이 비어 있거나 `val`이 minStack의 마지막 값보다 작거나 같으면 minStack에 `val`을 추가한다.
3. **`pop()`**
    - 스택(stack)이 비어 있으면 아무것도 하지 않는다.
    - 스택에서 값을 제거하고, 제거된 값이 minStack의 마지막 값과 같으면 minStack에서도 해당 값을 제거한다.
4. **`top()`**
    - 스택(stack)이 비어 있으면 null을 반환한다.
    - 스택의 마지막 값을 반환한다.
5. **`getMin()`**
    - minStack이 비어 있으면 null을 반환한다.
    - minStack의 마지막 값을 반환한다.

## 알아둬야 할 것!

1. **스택의 기본 연산**
    - 스택은 LIFO(Last In, First Out) 자료구조로, `push`, `pop`, `top` 같은 기본 연산을 효율적으로 처리할 수 있어야 한다.
2. **최소값 유지**
    - 스택 내에서 최소값을 상수 시간 복잡도(O(1))로 추적해야 한다.
    - 이 문제의 핵심은 **minStack**을 사용해 현재 스택에서의 최소값을 효율적으로 관리하는 것.
3. **보조 스택(minStack)의 역할**
    - `minStack`은 스택의 최소값을 추적하기 위해 사용된다.
    - 스택에 새로운 값을 추가할 때, 그 값이 최소값보다 작거나 같을 경우 **minStack**에도 추가한다.
    - 값을 제거할 때는 해당 값이 최소값과 동일할 경우 **minStack**에서도 함께 제거한다.
4. **시간 복잡도**
    - 모든 연산(`push`, `pop`, `top`, `getMin`)이 **O(1)**로 실행되어야 한다.
    - 이를 위해 스택과보조 스택 두 개를 사용해 최소값을 효과적으로 유지해야 한다.
5. **경계 조건 처리**
    - 스택이 비었을 때 (`stack.length === 0`) 각 메서드(`pop`, `top`, `getMin`)에서 이를 처리해야 한다.

## **회고**

- 단순 스택 연산(push, pop, top)을 구현하는 것뿐만 아니라, 추가적인 최소값 관리 문제를 해결하기 위해 보조 스택(minStack)을 사용하는 아이디어가 중요했다.
- 이를 통해 최소값을 O(1) 시간 안에 추적할 수 있다는 것이 이 문제의 해결 포인트였다.
