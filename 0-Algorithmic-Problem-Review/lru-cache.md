## [**LRU Cache**](https://leetcode.com/problems/lru-cache)

이 문제는 **LRU Cache 클래스**를 설계하고 구현하는 문제이다.

## 주요 포인트

### 1. **LRU (Least Recently Used) 캐시란?**

- **LRU 캐시**는 **가장 오랫동안 사용되지 않은 데이터**를 캐시에서 제거하는 **캐싱 전략이다.**
- **캐시**란 자주 사용되는 데이터를 메모리에 저장해, 빠르게 접근하기 위한 구조이다.
- LRU 캐시는 제한된 크기의 메모리를 사용하므로, 새 데이터를 추가할 때 **용량을 초과**하면 **가장 오래 사용되지 않은 데이터를 제거**해야 한다.

### 2. **캐시의 동작 원리**

- **`get(key)`**
    - 캐시에 **키가 존재**하면 해당 값을 반환하고, **해당 키를 최근 사용된 것으로 갱신한다.**
    - 키가 **없으면** `1`을 반환한다.
- **`put(key, value)`**
    - **새로운 키-값 쌍을 추가한**다.
    - 만약 키가 이미 존재한다면, **값을 업데이트**하고 **최근 사용된 것으로 갱신한**다.
    - **용량을 초과**할 경우 **가장 오래된 키-값**을 제거한다.

---

### 3. **자료구조 선택**

LRU Cache는 `get`과 `put` 연산 모두 O(1)의 시간 복잡도로 동작해야 한다.

1. **`Map` (Hash Map)**
    - **키-값 쌍**을 저장하여 빠르게 접근할 수 있다 (`O(1)`).
    - 문제: 삽입 순서를 유지하거나 가장 오래된 항목을 찾는 데 최적화되어 있지 않다.
2. **이중 연결 리스트 (Doubly Linked List)**
    - **가장 최근 사용된 항목**과 **오래된 항목**을 빠르게 이동할 수 있다 (`O(1)`).
    - 이중 연결 리스트는 **앞뒤로 연결된 노드**를 사용해, **항목을 삭제하거나 추가**하는 데 효율적이다.

## 나의 코드

```jsx
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) return -1;
  
  const value = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, value);
  
  return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) this.cache.delete(key);
  
  this.cache.set(key, value);
  
  if (this.cache.size > this.capacity) {
    const oldestKey = this.cache.keys().next().value;
    this.cache.delete(oldestKey);  
  }
};
```

## 나의 수도 코드

1. **초기화 (Constructor)**
    - 캐시의 **최대 용량**을 설정.
    - 캐시 데이터를 저장할 **`Map`** 객체를 생성.
2. **`get(key)` 메서드**
    - **캐시에 키가 없으면** `1`을 반환.
    - **캐시에 키가 있으면**, 해당 키의 값을 가져옴.
    - 가져온 후 **키를 삭제하고 다시 추가**하여, **최근 사용된 항목**으로 갱신.
    - 값을 반환.
3. **`put(key, value)` 메서드**
    - **캐시에 키가 이미 존재하면**, 먼저 삭제.
    - 새로 **키-값 쌍을 추가**.
    - **캐시의 크기가 용량을 초과**한 경우, **가장 오래된 키**를 찾아 제거.

## 알아둬야 할 것!

### **용량 초과 시 가장 오래된 키 삭제**

```jsx
if (this.cache.size > this.capacity) {
  const oldestKey = this.cache.keys().next().value;
  this.cache.delete(oldestKey);
}
```

---

### **이 부분이 핵심인 이유**

1. **LRU(Least Recently Used) 캐시의 동작 원칙 구현**
    - **캐시 용량**이 초과될 때, 가장 오래된 데이터를 **먼저 제거**해야 한다.
    - 이 부분이 없다면 **캐시가 무한정 커지면서 메모리 관리**가 제대로 되지 않는다.
2. **가장 오래된 키 추출**
    - `this.cache.keys()`는 **삽입된 순서**를 기억하는 이터레이터를 반환한다.
    - *`next().value`*를 사용하면 **가장 처음 삽입된(가장 오래된) 키**를 가져온다.
3. **용량 관리가 LRU의 핵심 전략**
    - 이 코드가 **캐시 용량을 초과하지 않도록** 보장한다.
    - **오래된 데이터를 정리**하면서 새 데이터를 효율적으로 추가할 수 있다.

---

### **동작 흐름 요약**

- **새로운 데이터가 추가될 때**
    1. 캐시가 가득 차 있으면(`this.cache.size > this.capacity`)
    2. **가장 오래된 키**를 찾아 제거한다 (`this.cache.keys().next().value`).
- 이 코드를 통해 **LRU 캐시 전략**을 완벽하게 구현할 수 있다.
    - **오래된 데이터는 제거**되고, **새로운 데이터**는 최신 상태로 유지된다.

---

## 회고

이번 LRU Cache 문제를 풀면서 **`Map`과 이터레이터(`next()`)의 동작 원리**를 깊이 이해할 수 있었다.

특히, `this.cache.keys().next().value`를 통해 **가장 오래된 키를 추출**하는 부분이 핵심이었으며,

왜 이터레이터에서 `next()`가 필요한지 확실히 알게 되었다.

또한 캐시 용량을 초과할 때 **LRU 원칙에 따라 가장 오래된 데이터를 정확히 제거**하는 구현의 중요성을 깨달았다.
