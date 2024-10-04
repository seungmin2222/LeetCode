## [**Gas Station**](https://leetcode.com/problems/gas-station/)

이 문제는 원형 경로에 있는 주유소들을 따라 순환할 때, 출발 지점으로 다시 돌아올 수 있는 출발점 인덱스를 찾는 문제이다.

## 주요 포인트

1. 마지막 주유소에서 다음 주유소로 이동하면 첫 번째 주유소로 돌아온다.
2. 각 주유소에서 `(gas[i] - cost[i])`로 얻는 연료와 소비되는 연료의 차이를 구해, 누적 연료량(`sum`)을 통해 현재 출발점으로 순환이 가능한지 판단한다.
3. 전체 주유소에서 얻을 수 있는 총 연료가 이동에 필요한 총 연료보다 적다면, 어떤 출발점에서도 순환이 불가능하므로 바로 `-1`을 반환할 수 있다.
4. 누적 연료가 음수가 되는 순간 출발점을 갱신합니다. 즉, 현재까지의 출발점에서 순환이 불가능하면 그 다음 지점부터 다시 시작한다.

## 나의 코드

```jsx
var canCompleteCircuit = function(gas, cost) {
  const candidates = [];
  
  for (let station = 0; station < gas.length; station++) {
    if (gas[station] >= cost[station]) {
      candidates.push(station);
    }
  }
  
  if (candidates.length === 0) return -1;
  
  for (let i = 0; i < candidates.length; i++) {
    let startStation = candidates[i];
    let fuelBalance = 0;
    let canCompleteCircuit = true;
    
    for (let traveled = 0; traveled < gas.length; traveled++) {
      let currentStation = (startStation + traveled) % gas.length;
      
      fuelBalance += gas[currentStation] - cost[currentStation];
      
      if (fuelBalance < 0) {
        canCompleteCircuit = false;
        break;
      }
    }
    
    if (canCompleteCircuit) return startStation;
  }
  
  return -1;
};
```

## 나의 수도 코드

1. 각 주유소 `i`
    - `gas[i] >= cost[i]`이면, `i`를 후보 리스트에 추가.
2. 각 후보 `start`
    - 연료 잔량을 0으로 초기화.
    - 한 바퀴를 순환
        - 현재 연료 잔량을 업데이트 →`fuelBalance += gas[current] - cost[current]`.
        - 연료 잔량이 음수가 되면 순환 불가, 다음 후보로 이동.
3. 순환 가능한 후보가 있으면 `start` 반환.
4. 없다면 `1` 반환.

## 다른 사람의 풀이

```jsx
var canCompleteCircuit = function(gas, cost) {
  let totalGas = 0, totalCost = 0;
  let startIndex = 0, tank = 0;
  
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    tank += gas[i] - cost[i];
    
    if (tank < 0) {
      startIndex = i + 1;
      tank = 0;
    }
  }

  return totalGas < totalCost ? -1 : startIndex;
};
```

## 다른 사람의 수도 코드

1. `totalGas`, `totalCost`, `tank`, `startIndex`를 0으로 초기화.
2. 각 주유소 `i`
    - `totalGas`에 현재 주유소의 연료(`gas[i]`)를 더함.
    - `totalCost`에 현재 주유소의 이동 비용(`cost[i]`)을 더함.
    - `tank`에 `(gas[i] - cost[i])`를 더해 잔여 연료를 업데이트.
    - **잔여 연료가 음수**
        - 현재까지의 경로로는 순환할 수 없으므로, 출발점을 `i + 1`로 업데이트.
        - `tank`를 0으로 초기화하여 새로운 출발점부터 다시 연료 잔량을 계산.
3. 전체 연료가 전체 비용보다 적으면 순환이 불가능하므로 `-1`을 반환.
4. 그렇지 않다면 순환이 가능하므로 `startIndex`를 반환.

## 회고

문제의 핵심 아이디어를 충분히 이해하지 못해 출발 가능 후보를 모두 탐색하는 비효율적인 방식으로 접근했다.

최적의 출발점을 찾기 위해 한 바퀴씩 모든 후보를 순환했지만, 전체 경로를 한 번의 순회로 해결할 수 있는 방법이 있었다.

앞으로는 문제의 조건을 더 면밀히 분석해 효율적인 풀이를 찾아야겠다.
