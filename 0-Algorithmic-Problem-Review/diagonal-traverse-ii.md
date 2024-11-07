## [**Diagonal Traverse II**](https://leetcode.com/problems/diagonal-traverse-ii/)

이 문제는 주어진 2D 정수 배열 `nums`에서, 배열의 모든 요소를 대각선 순서로 순회하여 결과 배열로 반환하는 문제이다.

## 주요 포인트

1. **각선 순서 이해**
    - 대각선 순서는 좌상단에서 시작해 우하단으로 내려가며, 대각선별로 요소를 순회하는 방식이다.
    - 같은 대각선에 있는 요소들은 `(row + col)` 값이 같다.
2. **가변 행렬 처리**
    - `nums`는 가변 길이의 행렬이므로, 각 행의 길이가 다를 수 있다.
    - 범위를 벗어난 인덱스 접근을 방지해야 한다.

## 나의 코드

```jsx
var findDiagonalOrder = function(nums) {
  const arr = [];
  let maxX = -Infinity;
  
  for (let i = 0; i < nums.length; i++) {
    if (maxX < nums[i].length) {
      maxX = nums[i].length;
    }
  }
  
  for (let i = 0; i < nums.length + maxX; i++) {
    let x = i;
    let y = 0;
    while (x > 0 || y < maxX) {
      if (nums[x]) {
        if (nums[x][y]) {
            arr.push(nums[x][y]);
        }
      }
      x--;
      y++;
    }
  }
  
  return arr;
};
```

## 나의 수도 코드

1. **출력 배열 초기화**
    - 대각선 순서의 결과를 저장할 빈 배열 `arr`를 생성.
2. **최대 열 길이 찾기 (`maxX`)**
    - `maxX` 변수를 `Infinity`로 초기화.
    - 각 행의 길이를 확인하여 가장 긴 열의 길이를 `maxX`에 저장.
3. `nums.length + maxX` 만큼 반복하여 모든 대각선을 처리.
4. 각 대각선에서 `x`는 `i`, `y`는 `0`으로 설정하여 시작 위치를 정함.
5. **대각선 이동**
    - `x`가 0보다 크거나 `y`가 `maxX`보다 작은 동안 대각선으로 이동.
        - 유효한 `x`, `y` 좌표인지 확인하고, 유효하면 `arr`에 `nums[x][y]` 값을 추가.
    - `x`를 1씩 줄이고, `y`를 1씩 증가시키며 대각선 방향으로 이동.
6. 대각선 순회가 끝나면 `arr` 배열을 반환.

## 시간 복잡도

- `M`은 `nums` 배열의 행의 수.
- `N`은 가장 긴 행의 열 길이.
- **최대 열 길이 찾기 (`maxX` 계산)**
    - 첫 번째 `for` 루프는 `nums` 배열의 각 행을 순회하여 최대 길이 `maxX`를 찾는다.
    - `M`번 반복, 이 부분의 시간복잡도는 `O(M)`이다.
- **대각선 순회**
    - 두 번째 `for` 루프는 최대 `M + N`번 반복되며, 각 대각선에서 요소를 순회한다.
    - 내부 `while` 루프는 `nums` 배열의 모든 요소를 한 번씩 방문
    - 총 `M * N`번의 연산이 발생한다.

따라서, 전체 시간복잡도는 `O(M * N)`이다.

## 공간 복잡도

- `M`은 `nums` 배열의 행의 수.
- `N`은 가장 긴 행의 열 길이.
- **출력 배열 `arr`**
    - `arr` 배열은 `nums` 배열의 모든 요소를 저장하므로, 최대 `M * N`개의 요소를 가진다.

따라서, 공간복잡도는 `O(M * N)`입니다.

## 다른 사람의 풀이

```jsx
var findDiagonalOrder = function(nums) {
  const diagonalMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (!diagonalMap.has(i + j)) {
        diagonalMap.set(i + j, []);
      }
      diagonalMap.get(i + j).unshift(nums[i][j]);
    }
  }

  const arr = [];
  for (let key of diagonalMap.keys()) {
    arr.push(...diagonalMap.get(key));
  }

  return arr;
};
```

## 다른 사람의 수도 코드

1. `diagonalMap`이라는 빈 맵을 생성.
2. **대각선별로 요소를 맵에 추가**
    - 현재 요소의 `i + j` 값을 대각선의 키로 사용.
    - `diagonalMap`에 해당 키가 없으면, 빈 배열을 생성하여 키에 할당.
    - 현재 요소 `nums[i][j]`를 해당 배열에 `unshift`하여 대각선별로 역순으로 추가.
3. **결과 배열 생성 (`arr`)**
4. `diagonalMap`의 키를 순서대로 순회하면서 각 대각선에 저장된 배열을 펼쳐서(`...`) `arr`에 추가.
5. `arr` 배열을 반환하여 대각선 순서로 정렬된 요소들을 반환.

## 알아둬야 할 것!

1. `(i + j)` 값을 이용하여 각 요소가 속하는 대각선을 구별.
2. **대각선별 요소 저장 방법**
    - `Map`을 사용해 대각선 인덱스 `(i + j)`를 키로 하여, 같은 대각선의 요소들을 배열에 저장.
3. 문제의 요구에 따라, 각 대각선별로 요소를 **역순**(`unshift`)으로 추가하여 원하는 순서를 맞춤.
4. `Map`의 키를 순서대로 순회하면서 각 대각선의 요소를 펼쳐서(`...`) 결과 배열에 추가.

## 회고

이번 문제를 풀면서 **대각선 순서로 배열을 순회하는 방법**과 그걸 효율적으로 구현하는 방법을 배웠다.

초기 코드에서는 `maxX` 계산과 조건 검사가 불필요하게 많았지만, 다른 사람의 코드에선 `Map`을 사용해 대각선별로 요소를 관리하고 불필요한 연산을 줄일 수 있는 방법을 깨달았다.

최적화 덕에 가독성과 실제 실행 속도는 개선됐지만, 이론적인 시간복잡도와 공간복잡도는 문제 특성상 `O(M * N)`으로 동일하다는 걸 알게 됐었다.

앞으로도 **코드 효율성을 높이는 방법**을 고민해봐야겠다.
