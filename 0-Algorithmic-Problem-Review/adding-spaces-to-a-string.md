## [**Adding Spaces to a String**](https://leetcode.com/problems/adding-spaces-to-a-string/)

주어진 문자열에서 지정된 인덱스 위치에 공백을 추가하는 문제이다. 주어진 인덱스에서 해당 문자 앞에 공백을 삽입해야 한다.

## 주요 포인트

1. **문자열 인덱싱 (String Indexing)**
    - 문자열은 0부터 시작하는 인덱스를 가진다.
    - 이를 사용하여 특정 위치의 문자를 확인하거나 수정할 수 있다.
2. **배열 인덱싱 (Array Indexing)**
    - 배열에서 각 값은 해당 위치에 공백을 삽입할 인덱스를 나타낸다.
    - 배열을 순회하며 그 위치에 공백을 추가해야 한다.
3. **문자열 불변성 (String Immutability)**
    - JavaScript에서 문자열은 불변(immutable) 타입이므로 문자열 자체를 수정할 수 없다.
    - 문자열을 수정하려면 새로운 문자열을 생성해야 한다.

## 나의 코드

```jsx
var addSpaces = function(s, spaces) {
  let result = '';
  let prev = 0;

  for (let i = 0; i < spaces.length; i++) {
    result += s.slice(prev, spaces[i]) + ' ';
    prev = spaces[i];
  }
  
  result += s.slice(prev);

  return result;
};
```

## 나의 수도 코드

1. 문자열을 배열로 변환하여 각 문자를 쉽게 다룰 수 있도록 한다.
2. `spaces` 배열을 순회하면서 공백을 삽입할 위치를 찾는다.
3. 각 인덱스에서 공백을 삽입합니다. 이때, 문자열의 길이가 변경되므로, 인덱스를 올바르게 조정해야 한다.
4. 배열에 공백을 삽입한 후, `join()` 메서드를 사용하여 다시 하나의 문자열로 합친다.

## 시간 복잡도

1. 문자열을 배열로 변환하는 데 `O(n)` 시간이 걸림.
2. 공백을 삽입할 때마다 배열의 크기가 커지고, 삽입이 진행되므로 각 삽입에 대해 `O(n)` 시간이 걸림.
최대 `m`번 삽입하므로, 전체 시간 복잡도는 `O(m * n)`.
3. 배열을 문자열로 결합하는 데 `O(n + m)` 시간이 걸림.

전체 시간 복잡도는 O(n + m * n).

## 공간 복잡도

1. 문자열을 배열로 변환하면 `O(n)` 공간을 사용.
2. 공백을 삽입하고 배열 크기가 `n + m`이 되므로, 배열에 `O(n + m)` 공간이 필요.

전체 공간 복잡도는 O(n + m).

## 알아둬야 할 것!

- **문자열 불변성 (String Immutability)**
    
    JavaScript에서 문자열은 불변(immutable) 타입이므로, 직접 수정할 수 없다.
    문자열을 수정하려면 새로운 문자열을 생성해야 한다는 점을 이해해야 한다.
    
- **효율적인 문자열 처리 방법 (Efficient String Handling)**
    
    문자열을 수정하는데 반복문을 사용하여 새로운 문자열을 점차적으로 생성하는 방식이 효율적다. 이때 `+` 연산자를 사용하는 것보다 배열을 이용해 처리를 더 효율적으로 할 수 있다.
    
- **배열의 `splice()` 메서드와 효율성 (Using `splice()` and Efficiency)**
    
    `splice()` 메서드는 배열에서 요소를 삽입하거나 제거하는 데 사용된                                                                                                                                                                                                                                                                                                                                            다. 그러나 이 방법은 배열을 수정할 때 모든 요소를 재배치해야 하므로 성능에 영향을 미칠 수 있다. 이를 피하는 최적화 방법을 이해해야 한다.
    

## 회고

이번 문제를 풀면서 문자열을 다루는 기본적인 개념인 인덱싱과 순회를 잘 이해할 수 있었다.

문자열이 불변(immutable) 타입이기 때문에, 새로운 문자열을 만들어서 처리하는 방식이 중요하다는 점을 깨달았다.

또한, 공백을 삽입할 위치를 효율적으로 관리해야 성능이 개선된다는 점을 배웠다.

`splice()` 같은 배열 수정 메서드의 비효율성을 인식하고, 더 나은 방법으로 문자열을 다룰 수 있음을 알게 되었다.

전체적으로, 문제를 해결하는 과정에서 최적화와 성능을 고려한 접근 방법을 중요하게 여겨야 한다는 것을 다시 한 번 느꼈다.