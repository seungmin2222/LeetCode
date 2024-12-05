## [Move Pieces to Obtain a String](https://leetcode.com/problems/move-pieces-to-obtain-a-string/)

## 주요 포인트

1. **문자 이동 규칙**
    - `L`: 왼쪽으로만 이동 가능.
    - `R`: 오른쪽으로만 이동 가능.
2. **빈칸(`_`)의 역할**
    - 이동은 빈칸이 있어야 가능하며, 다른 문자 위로 이동할 수 없다.
3. **순서 유지 조건**
    - `L`과 `R`의 상대적 순서는 `start`와 `target`에서 유지되어야 한다.
4. **위치 비교**
    - `L`: `target`에서의 위치는 반드시 `start`의 위치보다 왼쪽에 있어야 한다.
    - `R`: `target`에서의 위치는 반드시 `start`의 위치보다 오른쪽에 있어야 한다.
5. **불가능 조건**
    - `_`를 제외한 문자 순서가 다르면 변환은 불가능하다.

## 나의 코드

```jsx
var canChange = function(start, target) {
  const sWithoutUnderscore = start.split("_").join("");
  const tWithoutUnderscore = target.split("_").join("");

  if (sWithoutUnderscore !== tWithoutUnderscore) return false;

  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < start.length && tIndex < target.length) {
    while (sIndex < start.length && start[sIndex] === '_') sIndex++;
    while (tIndex < target.length && target[tIndex] === '_') tIndex++;

    if (sIndex === start.length || tIndex === target.length) break;

    if (start[sIndex] !== target[tIndex]) return false;

    if (start[sIndex] === 'L' && sIndex < tIndex) return false;
    if (start[sIndex] === 'R' && sIndex > tIndex) return false;

    sIndex++;
    tIndex++;
  }

  return true;
};
```

## 수도 코드

1. `start`와 `target`에서 모든 `_`를 제거.
    - `sWithoutUnderscore`와 `tWithoutUnderscore`가 다르면 false 반환.
2. 두 개의 포인터 초기화.
    - `sIndex` = 0 (start 문자열을 순회할 포인터).
    - `tIndex` = 0 (target 문자열을 순회할 포인터).
3. 두 포인터가 문자열 범위 내에 있는 동안 반복.
    - `start`에서 `_`를 건너뜀.
        - `start[sIndex]`가 `_`일 때 `sIndex`를 증가.
    - `target`에서 `_`를 건너뜀.
        - `target[tIndex]`가 `_`일 때 `tIndex`를 증가.
4. 포인터 중 하나가 문자열 끝에 도달하면 반복 종료.
5. `start[sIndex]`와 `target[tIndex]`의 문자가 다르면 false 반환.
6. 이동 규칙 확인.
    - `L`: `sIndex`가 `tIndex`보다 작아야 함. 아니면 false 반환.
    - `R`: `sIndex`가 `tIndex`보다 커야 함. 아니면 false 반환.
7. 두 포인터를 증가 (`sIndex++`, `tIndex++`).
8. 반복이 끝난 후 모든 조건을 만족하면 true 반환.

## 시간 복잡도

- **문자열 비교**
    - `replace("_", "")` 또는 `split("_").join("")`으로 `_`를 제거한 문자열을 비교.
    - 이 과정은 문자열 길이에 비례하므로 O(n).
- **반복문을 통한 위치 검사**
    - `while` 루프를 통해 두 문자열을 순회하며 각 문자의 이동 규칙을 확인.
    - 문자열의 길이만큼 순회하므로 역시 O(n).
- **전체 시간 복잡도**
    
    두 작업 모두 문자열 길이에 비례하므로 최종 시간 복잡도는 O(n).
    

## 공간 복잡도

- **중간 결과 저장**
    - `_`를 제거한 두 문자열(`sWithoutUnderscore`와 `tWithoutUnderscore`)을 생성.
    - 문자열 길이가 각각 최대 `n`이므로 이 두 문자열은 O(n)의 추가 공간을 사용.
- **기타 변수**
    - 인덱스를 저장하기 위한 정수 변수(`sIndex`, `tIndex`)와 몇 개의 상수 크기 변수만 사용.
    - 이는 O(1)에 해당.
- **전체 공간 복잡도**
    
    문자열 처리 과정에서 추가적인 문자열을 생성하므로 최종 공간 복잡도는 O(n).
    

## 다른 사람의 풀이

```jsx
var canChange = function(start, target) {
  let sPointer = 0, tPointer = 0;
  const n = start.length;

  while (sPointer < n && tPointer < n) {
    while (sPointer < n && start[sPointer] === '_') sPointer++;
    while (tPointer < n && target[tPointer] === '_') tPointer++;

    if (sPointer === n && tPointer === n) return true;

    if (sPointer === n || tPointer === n) return false;

    if (start[sPointer] !== target[tPointer]) return false;

    if (start[sPointer] === 'L' && sPointer < tPointer) return false;
    if (start[sPointer] === 'R' && sPointer > tPointer) return false;

    sPointer++;
    tPointer++;
  }

  return true;
};
```

## 다른 사람의 수도 코드

1. **포인터가 `_`를 건너뛰는 역할**
    - 각 포인터는 `_`가 아닌 `L` 또는 `R`에 도달할 때까지 이동.
    - 두 문자열에서 비교 대상이 되는 문자를 찾아냄.
2. **문자 이동 규칙 확인**
    - `L`: `start`에서의 인덱스가 `target`의 인덱스보다 크면 안 됨.
    - `R`: `start`에서의 인덱스가 `target`의 인덱스보다 작으면 안 됨.
3. **최적화**
    - `_`를 제외한 문자의 순서만 비교하므로, 추가적인 문자열 생성 없이 원래 문자열에서 비교를 수행.

## 시간 및 공간 복잡도

- **시간 복잡도**
    - 두 문자열을 한 번씩 순회하므로 **O(n)**.
- **공간 복잡도**
    - 포인터와 상수 크기 변수만 사용하므로 **O(1)**.

## 알아둬야 할 것!

1. **투 포인터(Two Pointer) 알고리즘.**
    - 두 개의 포인터를 사용하여 문자열을 효율적으로 순회하며 특정 조건을 검증하는 기법.
2. **문자 이동 규칙.**
    - `L`은 왼쪽으로만 이동 가능하며, 시작 위치가 목표 위치보다 오른쪽에 있으면 안 됨.
    - `R`은 오른쪽으로만 이동 가능하며, 시작 위치가 목표 위치보다 왼쪽에 있으면 안 됨.
3. **문자열 순서 비교.**
    - `_`를 제외한 문자열의 순서가 같아야 이동 가능성이 있음.
4. **시간 복잡도와 공간 복잡도.**
    - 효율적으로 문제를 해결하기 위해 O(n) 시간 복잡도와 O(1) 공간 복잡도로 설계하는 방법.

## 회고

이 문제는 투 포인터를 활용하여 문자열을 효율적으로 비교하는 방법을 학습할 수 있는 좋은 사례였다.

처음에는 단순히 `_`를 제외한 문자열 비교만으로 해결할 수 있다고 생각했지만, `L`과 `R`의 이동 규칙을 만족시키는 것이 더 중요한 조건임을 깨달았다.

또한, 문자열 처리에서 `_`를 건너뛰는 과정과 이동 규칙을 충족하지 못했을 때 즉시 false를 반환하는 최적화가 필요했다.

이번 문제를 통해 투 포인터 기법의 유용성을 다시 한번 실감했으며, 문자열 순회와 조건 검증의 중요성을 배울 수 있었다.
