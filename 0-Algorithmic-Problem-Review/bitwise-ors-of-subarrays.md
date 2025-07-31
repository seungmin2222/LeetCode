# [**Bitwise ORs of Subarrays**](https://leetcode.com/problems/bitwise-ors-of-subarrays/)

## 주요 포인트

- **동적 프로그래밍 + Set 활용**: 각 위치에서 끝나는 부분배열들의 OR 값들을 점진적으로 구축
- **OR 연산의 단조성**: 비트가 한 번 켜지면 꺼지지 않으므로 값이 감소하지 않음
- **중복 제거**: Set을 사용해 고유한 OR 값들만 추적
- **최적화**: 이전 계산 결과를 재활용하여 효율성 극대화

## 나의 코드

```tsx
var subarrayBitwiseORs = function(arr) {
    const allResults = new Set();
    let currentORs = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        const newORs = new Set();
        
        newORs.add(arr[i]);
        
        for (const prevOR of currentORs) {
            newORs.add(prevOR | arr[i]);
        }
        
        for (const orValue of newORs) {
            allResults.add(orValue);
        }
        
        currentORs = newORs;
    }
    
    return allResults.size;
};
```

## 나의 수도 코드

1. 전체 결과를 저장할 Set과 현재 OR 값들을 저장할 Set 초기화
2. 배열의 각 원소에 대해:
a. 새로운 OR 값들을 저장할 Set 생성
b. 현재 원소 자체를 새 Set에 추가 (길이 1인 부분배열)
c. 이전 OR 값들과 현재 원소를 OR 연산하여 새 Set에 추가
d. 새로운 모든 OR 값들을 전체 결과 Set에 추가
e. 현재 OR Set을 새 Set으로 업데이트
3. 전체 결과 Set의 크기 반환

## 시간 복잡도

**O(n × k)**

- n: 배열의 길이
- k: 각 위치에서 가능한 고유한 OR 값의 개수
- k는 최대 32개 (32비트 정수에서 각 비트 위치당 최대 1개의 새로운 OR 값)
- 따라서 실제로는 **O(32n) = O(n)**

## 공간 복잡도

**O(k)**

- currentORs Set: 최대 32개의 OR 값
- allResults Set: 전체 고유 OR 값들
- 실제로는 **O(min(n², 32n))**

## 알아둬야 할 것!

- 비트가 한 번 켜지면 꺼지지 않으므로 OR 값이 감소하지 않음
- 이전 위치의 OR 값들과 현재 원소를 조합하여 새로운 OR 값들 생성
- **Set 활용** : 중복 제거와 고유 값 추적을 위해 Set 자료구조 필수 사용

## 회고

처음엔 모든 부분배열을 다 만들어서 OR 연산하는 브루트 포스로 접근하려고 했다. 그런데 OR 연산이 한 번 켜진 비트는 꺼지지 않는다는 특성을 깨달으니까 DP로 접근할 수 있다는 걸 알았다. 

Set을 써서 중복을 자동으로 제거하면서 이전 계산 결과를 재활용하는 방식이 정말 깔끔했다. 가

앞으로는 비트 연산 문제를 만나면 이런 단조성이나 제약 조건을 먼저 찾아봐야겠다.
