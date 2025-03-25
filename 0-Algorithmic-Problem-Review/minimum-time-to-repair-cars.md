## [**Minimum Time to Repair Cars**](https://leetcode.com/problems/minimum-time-to-repair-cars/description/?envType=daily-question&envId=2025-03-16)

총 `cars`대의 차가 수리를 기다리고 있을 때, 모든 차를 수리하는 데 필요한 최소 시간을 구하는 문제이다.

## 주요 포인트

- 이진 탐색으로 가능한 최소 시간을 찾는다.
    - 탐색의 왼쪽 경계(left): 1분 (최소 가능 시간)
    - 탐색의 오른쪽 경계(right): (가장 낮은 등급) * cars² (최대 가능 시간)
- 주어진 시간 내에 모든 차를 수리할 수 있는지 확인하는 함수 `canRepairAllCars()`를 구현한다.
    - 각 정비공은 시간 `time` 내에 최대 `Math.floor(Math.sqrt(time / rank))` 대의 차를 수리할 수 있다.
    - 모든 정비공들이 수리할 수 있는 차의 총 대수가 `cars` 이상이면 가능하다.

## 나의 코드

```tsx
var repairCars = function(ranks, cars) {
    let left = 1;
    let right = Math.min(...ranks) * cars * cars;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (canRepairAllCars(ranks, cars, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};

function canRepairAllCars(ranks, totalCars, time) {
    let carsRepaired = 0;
    
    for (const rank of ranks) {
        const carsThisMechanicCanRepair = Math.floor(Math.sqrt(time / rank));
        carsRepaired += carsThisMechanicCanRepair;
        
        if (carsRepaired >= totalCars) {
            return true;
        }
    }
    
    return false;
}
```

## 나의 수도 코드

1. 이진 탐색으로 최소 수리 시간 찾기
    - 왼쪽 경계: 1분 (최소 가능 시간)
    - 오른쪽 경계: (최소 등급) * 차량 수² (최대 가능 시간)
2. 중간값 시간에 대해 모든 차를 수리할 수 있는지 확인
    - 각 정비공이 해당 시간에 수리할 수 있는 차량 수 계산 (n = √(time/rank))
    - 모든 정비공의 수리 가능 차량 수 합계가 목표 차량 수 이상인지 확인
3. 모든 차를 수리 가능하면 시간을 줄이고, 불가능하면 시간을 늘림
4. 이진 탐색이 수렴하면 최소 필요 시간 반환

## 시간 복잡도

- 이진 탐색: O(log m), 여기서 m은 최대 가능 시간이다.
- 각 이진 탐색 단계에서 n명의 정비공을 확인: O(n)

따라서 총 시간 복잡도는 O(n log m)이다.

## 공간 복잡도

추가적인 자료구조를 사용하지 않으므로 O(1)이다.

## 알아둬야 할 것!

- **이진 탐색(Binary Search)** - 결정 문제에서 최적화 문제로 변환하여 효율적으로 해결하는 기법
- **결정 문제(Decision Problem)** - 특정 조건을 만족하는지 '예/아니오'로 답할 수 있는 문제 유형
- **단조성(Monotonicity)** - 이진 탐색을 적용하기 위해 필요한 조건으로, 특정 시간 이상에서는 항상 가능하고 그 미만에서는 항상 불가능해야 함

## 회고

처음엔 DP나 그리디를 생각했지만, 문제를 '특정 시간 내 모든 차를 수리할 수 있는가?'라는 결정 문제로 바꿔 이진 탐색으로 접근했다.

각 정비공이 주어진 시간에 수리할 수 있는 차량 수를 n = √(time/r) 공식으로 계산하는 것이 핵심이었다.

이진 탐색의 범위를 적절히 설정하여 O(n log m)의 시간 복잡도로 해결했고, 이런 매개변수 탐색 기법은 다른 최적화 문제에도 유용하게 적용될 수 있다는 것을 배웠다.
