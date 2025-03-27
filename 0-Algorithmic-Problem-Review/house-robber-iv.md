## [House Robber IV](https://leetcode.com/problems/house-robber-iv/description/?envType=daily-question&envId=2025-03-15)

"House Robber IV"는 도둑이 인접한 집은 털지 않으면서 최소 k개의 집을 털어야 할 때, 가능한 최소 "capability"(가장 많은 돈을 가진 집)를 찾는 문제이다. 

## 주요 포인트

1. 가능한 capability의 범위를 설정합니다 (배열의 최소값부터 최대값까지).
2. 범위 내에서 중간값을 capability로 정한다.
3. 해당 capability로 최소 k개의 집을 털 수 있는지 확인한다.
4. 가능하다면 더 낮은 capability를 시도하고, 불가능하다면 더 높은 capability를 시도한다.

## 나의 코드

```tsx
var minCapability = function (nums, k) {
    let left = Math.min(...nums);
    let right = Math.max(...nums);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        let count = 0;
        let i = 0;

        while (i < nums.length) {
            if (nums[i] <= mid) {
                count++;
                i += 2;
            } else {
                i++;
            }
        }

        if (count >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
```

## 나의 수도 코드

1. 이진 탐색의 범위를 배열의 최소값(left)부터 최대값(right)으로 설정.
2. left < right 동안 반복.
    - 중간값 mid를 계산.
    - mid를 capability로 했을 때 털 수 있는 집의 수를 계산.
        - 집의 금액이 mid 이하인 경우에만 털 수 있음.
        - 한 집을 털면 인접한 집은 건너뜀(i+2).
    - 털 수 있는 집의 수가 k 이상이면, right = mid로 범위를 좁힘.
    - 털 수 있는 집의 수가 k 미만이면, left = mid + 1로 범위를 좁힘.
3. 최종적으로 left을 반환한다.

## 시간 복잡도

1. 이진 탐색: O(log(max(nums)))
2. 각 이진 탐색 단계에서 배열 순회: O(n)

최종 시간 복잡도는 O(n * log(max(nums)))이다.

## 공간 복잡도

추가 배열을 사용하지 않으므로 O(1)이다.

## 알아둬야 할 것!

1. 매개변수 탐색(Parametric Search)
    - 최적화 문제를 결정 문제로 변환하여 이진 탐색으로 해결하는 일반적인 기술.
2. 이진 탐색(Binary Search)
    - 답을 추측하고 검증하는 방식으로 해결 범위를 절반씩 줄여나가는 알고리즘.
    - 특히 "최소/최대값 찾기" 문제에서 효과적.
3. 매개변수 탐색(Parametric Search)
    - 최적화 문제를 결정 문제로 변환하여 이진 탐색으로 해결하는 일반적인 기술.

## 회고

House Robber IV 문제를 풀면서 이진 탐색의 활용 범위가 단순히 정렬된 배열에서의 검색을 넘어 최적화 문제까지 확장됨을 깨달았다. 문제의 본질을 이해하고 나니 이진 탐색이 더 효율적인 해결책이라고 생각했다. 앞으로 "최소값의 최대화" 또는 "최대값의 최소화" 유형의 문제에서 이러한 접근 방식을 적용해볼 수 있을 것 같다.
