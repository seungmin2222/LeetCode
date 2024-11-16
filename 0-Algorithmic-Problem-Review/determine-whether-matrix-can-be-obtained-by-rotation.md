## [**Determine Whether Matrix Can Be Obtained By Rotation**](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/)

## 주요 포인트

1. **90도 회전의 원리 이해**
    - `(i, j)` 위치의 요소는 회전 후 `(j, n-1-i)`로 이동.
    - 새로운 배열을 생성하여 요소를 복사해야 함.
2. **회전 반복**
    - 한 번의 90도 회전을 4번 반복(0도, 90도, 180도, 270도).
    - 각 회전 후 `mat`과 `target`을 비교.
3. **배열 비교**
    - 다차원 배열의 요소를 비교하는 방법 구현.
    - 간단히 문자열로 변환 후 비교하거나, 요소를 직접 비교.

## 나의 코드

```tsx
var findRotation = function(mat, target) {
  function rotate(mat) {
    const n = mat.length;
    const rotated = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[j][n - i - 1] = mat[i][j];
      }
    }
    
    return rotated;
  }

  for (let i = 0; i < 4; i++) {
    if (mat.toString() === target.toString()) {
      return true;
    }
    
    mat = rotate(mat);
  }
  
  return false;
};
```

## 나의 수도 코드

1. **회전 함수 정의**
    - `rotate(mat)`
        - 행렬의 크기 `n` 계산.
        - 새로운 빈 `n x n` 행렬 `rotated` 생성.
        - 각 원소 `(i, j)`를 90도 회전에 따라 `(j, n-1-i)` 위치로 이동.
        - 회전된 행렬 반환.
2. **메인 함수**
    - `findRotation(mat, target`
        1. 최대 4번 반복.
            - `mat`와 `target`을 비교.
                - `mat.toString()`과 `target.toString()`이 동일하면 `true` 반환.
            - 그렇지 않으면 `mat`을 90도 회전.
        2. 모든 반복 후에도 동일하지 않으면 `false` 반환.

## 시간 복잡도

1. **회전 함수 (`rotate`)**
    - `rotate`는 `n x n` 행렬의 모든 요소를 순회하면서 새로운 위치로 복사.
    - 따라서, 회전 함수의 시간복잡도는 `O(n^2)`이다.
2. **메인 함수 (`findRotation`)**
    - `rotate`를 최대 4번 호출.
    - 각 회전 후에 `mat`과 `target`을 비교
        - `toString()`을 호출하므로 문자열로 변환에 `O(n^2)`

**따라서 전체 시간 복잡도 `O(n^2)` 이다.**

## 공간 복잡도

1. **회전 함수 (`rotate`)**
    - 새로운 행렬 `rotated`를 생성.
    - `rotated`는 `n x n` 크기이므로 공간복잡도는 **`O(n^2)`**.
2. **메인 함수 (`findRotation`)**
    - `mat`과 `target`만 추가적으로 저장하며, 이들은 입력 행렬로 이미 존재.
    - 별도의 추가 공간은 필요하지 않음.

**따라서 `O(n^2)` 이다.**

## 알아둬야 할 것!

1. **`rotate` 함수**
    - `rotated`를 `Array.from`을 사용하여 새로운 빈 배열로 초기화.
    - 행렬 크기를 계산하는 `n = mat.length` 추가.
    - `for` 루프에서 `i`와 `j`를 이용하여 각 요소를 올바르게 회전시킴.
2. **`findRotation` 함수**
    - `mat.toString() === target.toString()`을 유지했지만, 다차원 배열 비교를 간단히 처리하기 위한 임시 방법으로 사용.
    - 함수 내부에서 자기 자신을 재귀적으로 호출하는 문제 제거.

## 회고

이번 문제는 주어진 행렬을 최대 네 번 회전해서 목표 행렬과 동일한지 확인하는 작업이었다.

핵심은 행렬을 90도 회전시키는 원리를 제대로 이해하고, 이를 코드로 깔끔하게 구현하는 거였다.

회전 로직은 규칙을 찾는 것에 있어서 흥미로웠다.

또, 행렬 회전과 관련된 기본 연산의 중요성을 복습할 기회가 됐고, 효율적인 코드를 작성하려면 반복적인 연산을 어떻게 최적화할지 고민해야겠다는 생각도 들었다.
