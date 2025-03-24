## [**Count Days Without Meetings**](https://leetcode.com/problems/count-days-without-meetings/description/?envType=daily-question&envId=2025-03-24)

이 문제는 주어진 `days`(근무 가능한 총 일수)와 `meetings`(회의 일정)에 대해 회의가 없는 날의 수를 구하는 문제이다.

## 주요 포인트

- 회의는 여러 개가 있을 수 있으며, 각 회의는 `start_i`와 `end_i`로 주어진 범위 내에서 진행된다.
- 이 범위 내의 모든 날은 회의가 예정된 날로 간주되며, 중복되는 날이 있을 수 있다.

## 나의 코드

```tsx
var countDays = function(days, meetings) {
    const wordsDay = new Set();

    for (let i = 0; i < meetings.length; i++) {
        for (let j = meetings[i][0]; j <= meetings[i][1]; j++) {
            wordsDay.add(j);
        }
    }

    return days - wordsDay.size;
};
```

## 나의 수도 코드

1. `wordsDay`라는 `Set`을 사용하여 회의가 예정된 날짜들을 저장.
2. 각 회의의 시작일과 종료일 사이의 날짜들을 `wordsDay`에 추가.
3. 최종적으로 `days`에서 `wordsDay`의 크기를 빼서 회의가 없는 날짜의 수를 구함.

## 시간 복잡도

1. `meetings.length`는 `n`이라고 할 때, 각 회의의 날짜들을 처리하는 데 걸리는 시간은 회의의 길이에 비례한다.
2. 최악의 경우 모든 날을 중복 없이 처리해야 하므로 시간 복잡도는 `O(n * m)`이 될 수 있습니다. 여기서 `m`은 각 회의의 길이다.
3. `Set`에 값을 추가하는 시간은 평균적으로 `O(1)`다.

따라서 전체 시간 복잡도는 `O(n * m)`이다.

## 공간 복잡도

`wordsDay`는 최대 `days` 개의 날짜를 저장할 수 있기 때문에, 공간 복잡도는 `O(days)`이다.

## 다른 사람의 풀이

```tsx
=var countDays = function(days, meetings) {
    // 회의 시작일 기준으로 정렬
    meetings.sort((a, b) => a[0] - b[0]);
    
    let mergedMeetings = [];
    
    // 회의들을 병합
    for (const meeting of meetings) {
        if (mergedMeetings.length === 0 || mergedMeetings[mergedMeetings.length - 1][1] < meeting[0]) {
            mergedMeetings.push(meeting);
        } else {
            mergedMeetings[mergedMeetings.length - 1][1] = Math.max(mergedMeetings[mergedMeetings.length - 1][1], meeting[1]);
        }
    }

    // 회의가 없는 날을 계산
    let bookedDays = 0;
    for (const meeting of mergedMeetings) {
        bookedDays += meeting[1] - meeting[0] + 1;
    }
    
    return days - bookedDays;
};
```

## 다른 사람의 코드 풀이

meetings = [[1, 3], [5, 7], [2, 4]] 일 때,

1. 첫 번째 회의 `[1, 3]`을 `mergedMeetings`에 추가한다.
`mergedMeetings = [[1, 3]]`.
2. 두 번째 회의 `[5, 7]`을 확인인다.
이전 회의 `[1, 3]`과 겹치지 않으므로 `mergedMeetings`에 추가한다
`mergedMeetings = [[1, 3], [5, 7]]`.
3. 세 번째 회의 `[2, 4]`을 확인합니다.
이전 회의 `[1, 3]`과 겹치므로, 두 회의를 병합하여 `[1, 4]`로 갱신한다.
`mergedMeetings = [[1, 4], [5, 7]]`이 된다.

## 알아둬야 할 것!

1. **정렬(Sorting)**
    - 문제에서 회의들이 겹치는지 확인하려면 먼저 시작일을 기준으로 정렬해야 한다.
    - 정렬된 데이터를 다루면 중복을 처리하거나 범위를 병합하는 것이 효율적으로 가능하다.
2. **병합(Merging)**
    - 여러 개의 구간(회의 날짜들)을 처리할 때 겹치는 구간은 하나로 병합하여 처리한다.
    - 이 과정은 각 구간을 비교하면서 겹치는 범위를 하나로 통합하는 방법이다.
3. **시간 복잡도 최적화**
    - 문제 해결 시, 회의들이 겹치는 범위를 병합하여 처리하면 중복된 계산을 줄이고, 더 효율적인 해결책을 제시할 수 있다.

## 회고

이번 문제를 풀면서 회의 일정이 겹칠 때 그 구간을 병합하는 방법에 대해 깊이 생각해볼 수 있었다.

데이터를 정렬한 후 구간을 병합하는 방식은 그동안 단순히 중복을 없애는 것에 초점을 맞추었다면, 더 효율적으로 날짜를 처리하는 방법을 알게 되었다.

정렬과 병합을 통해 불필요한 계산을 줄이고 성능을 최적화할 수 있다는 점에서 큰 깨달음을 얻었고 코드가 더 간결하고 빠르게 동작하게 되어 만족한다.
