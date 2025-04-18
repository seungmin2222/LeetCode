## [**Isomorphic Strings**](https://leetcode.com/problems/isomorphic-strings/)

이 문제는 두문자열 `s`와 `t`가 주어졌을 때, 각 문자가 서로 일대일 대응 관계를 유지하면서 변환될 수 있는지(동형인지) 확인하는 문제이다.

## 주요 포인트

- **동형 문자열 (Isomorphic Strings)**
    
    두 문자열이 동형이라는 것은 각 문자가 서로 일대일 대응하며 다른 문자열로 변환될 수 있다는 뜻이다.
    
    한 문자가 여러 개의 문자에 대응되거나, 서로 다른 문자가 동일한 문자에 매핑되면 안된다.
    
- **일대일 대응 (One-to-One Mapping)**
    
    동형 문자열인지 확인하려면, `s -> t`와 `t -> s` 두 방향 모두에서 문자열의 각 문자가 하나의 문자와만 대응해야 한다.
    

## 나의 코드

```jsx
var isIsomorphic = function(s, t) {
  const check = {};
  const check2 = {};
  
  for (let i = 0; i < s.length; i++) {
    if (!check[s[i]]) {
      check[s[i]] = t[i];
    } else {
      if (check[s[i]] !== t[i]) {
        return false;
      }
    }
    
    if (!check2[t[i]]) {
      check2[t[i]] = s[i];
    } else {
      if (check2[t[i]] !== s[i]) {
        return false;
      }
    }
  }
  
  return true;
};
```

## 나의 수도 코드

1. **매핑을 저장할 두 개의 객체 생성**
    
    `check`: `s -> t` 방향의 매핑을 저장
    
    `check2`: `t -> s` 방향의 매핑을 저장
    
2. **문자열의 각 문자에 대해 다음 작업 수행**
    - **`s -> t` 매핑 확인 및 설정**
        - `s[i]`가 `check`에 없으면, `t[i]`와 매핑하여 저장
        - 이미 매핑된 경우, 현재 `t[i]`와 일치하는지 확인하고 일치하지 않으면 `false` 반환
    - **`t -> s` 매핑 확인 및 설정**
        - `t[i]`가 `check2`에 없으면, `s[i]`와 매핑하여 저장
        - 이미 매핑된 경우, 현재 `s[i]`와 일치하는지 확인하고 일치하지 않으면 `false` 반환
3. **모든 매핑이 일관된 경우**
    
    문자열 전체를 순회한 후 일관된 매핑이면 `true` 반환
    

## 회고

이번 문제에서 `Object`를 사용해 `s -> t`와 `t -> s` 방향의 양방향 매핑을 구현하면서 동형 문자열을 효율적으로 판별할 수 있었다.

초기에는 한 방향 매핑만 고려했으나, 동형성을 완벽하게 확인하려면 양방향 모두를 체크해야 함을 알게 되었다.

앞으로는 이런 양방향 매핑 개념을 활용해 문자열 문제를 더 정확하고 효율적으로 풀 수 있을 것 같다.
