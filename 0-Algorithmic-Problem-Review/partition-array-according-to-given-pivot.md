## [**Partition Array According to Given Pivot**](https://leetcode.com/classic/problems/partition-array-according-to-given-pivot/description/)

이 문제는 배열의 요소들을 주어진 피봇 값을 기준으로 재배열해야 하는 문제이다.

## 주요 포인트

- 피봇보다 작은 모든 요소는 피봇보다 큰 요소들 앞에 위치해야 함
- 피봇과 같은 모든 요소는 작은 요소들과 큰 요소들 사이에 위치해야 함
- 피봇보다 작은 요소들 간의 상대적 순서는 유지되어야 함
- 피봇보다 큰 요소들 간의 상대적 순서도 유지되어야 함
- 재배열된 배열을 반환해야 함

## 나의 코드

```jsx
const lowArr = [];
    const highArr = [];
    const sameArr = [];

    for (const num of nums) {
        if (num < pivot) {
            lowArr.push(num);
        } else if (num > pivot) {
            highArr.push(num);
        } else {
            sameArr.push(num);
        }
    }

    return [...lowArr, ...sameArr, ...highArr];
```

## 나의 수도 코드

- 작은 값들을 저장할 빈 배열 lowArr 생성
- 큰 값들을 저장할 빈 배열 highArr 생성
- 피봇과 같은 값들을 저장할 빈 배열 sameArr 생성
- 입력 배열 nums의 각 요소에 대해 반복:
    - 현재 숫자가 피봇보다 작으면 lowArr에 추가
    - 현재 숫자가 피봇보다 크면 highArr에 추가
    - 현재 숫자가 피봇과 같으면 sameArr에 추가
- lowArr, sameArr, highArr를 순서대로 합쳐서 새 배열을 만들고 반환

## 시간 복잡도

1. 입력 배열 nums를 한 번 순회 : O(n)
2. 세 배열을 병합하는 스프레드 연산자 세 배열의 모든 요소를 복사 : O(n)

전체 시간복잡도는 O(n) + O(n) = O(n)이다.

## 공간 복잡도

- 세 개의 새로운 배열(lowArr, sameArr, highArr)을 생성하고, 각 배열에는 최악의 경우 입력 배열의 모든 요소가 들어갈 수 있다.
- 세 배열을 합칠 때 새로운 배열이 생성된다.

 전체 공간복잡도는 O(n)입니다.

## 알아둬야 할 것!

1. 배열 분할 기법(파티셔닝) : 피봇을 기준으로 작은 값, 같은 값, 큰 값으로 요소 그룹화
2. 상대적 순서 유지(Stable Partitioning) : 원래 순서를 유지하면서 그룹 내 요소 재배열
3. 카운팅 기반 접근법 : 개수를 미리 계산하여 메모리 효율적인 배열 처리

## 회고

이 문제는 단순해 보이지만 중요한 배열 조작 개념들을 포함하고 있다.

초기 접근법에서는 직관적으로 세 개의 배열을 사용했지만, 메모리 사용을 최적화하려면 추가 배열 없이 결과를 직접 구성하는 방법이 더 효율적임을 배웠다.

카운팅 기반 기법은 이런 유형의 문제에서 자주 사용되며, 특히 상대적 순서를 유지해야 할 때 유용합니다. 실무에서는 이와 같은 파티셔닝 로직이 데이터 처리나 정렬 알고리즘에서 자주 활용되므로, 이런 패턴을 인식하고 효율적으로 구현하는 능력이 중요합니다.
