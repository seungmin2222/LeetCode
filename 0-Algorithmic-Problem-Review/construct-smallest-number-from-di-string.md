## [Construct Smallest Number From DI String](https://leetcode.com/classic/problems/construct-smallest-number-from-di-string/description/)

이 문제는 주어진 'I'와 'D' 패턴에 따라 가장 작은 수를 만드는 문제이다.

## 주요 포인트

1. 초기 숫자 범위
    - 사용할 수 있는 숫자는 1~9까지이며, 각 숫자는 최대 한 번만 사용 가능
    - 결과 문자열의 길이는 패턴 길이 + 1이 됨
2. 패턴의 의미
    - 'I'는 현재 숫자가 다음 숫자보다 작아야 함 (증가)
    - 'D'는 현재 숫자가 다음 숫자보다 커야 함 (감소)
3. 연속된 패턴의 처리
    - 연속된 'D'나 'I'가 나올 때의 처리 방법을 고려해야 함
    - 특히 연속된 'D'는 해당 구간을 뒤집어야 할 수 있음

## 나의 코드

```jsx
var smallestNumber = function(pattern) {
    const n = pattern.length;
    const nums = Array.from({length: n + 1}, (_, i) => i + 1);
    
    const findConsecutiveD = (start) => {
        let count = 0;
        
        for (let i = start; i < pattern.length; i++) {
            if (pattern[i] === 'D') {
                count++;
            } else {
                break;
            }
        }

        return count;
    };
    
    let i = 0;

    while (i < pattern.length) {
        if (pattern[i] === 'D') {
            const dCount = findConsecutiveD(i);
            let left = i;
            let right = i + dCount;

            while (left < right) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
                right--;
            }

            i += dCount;
        }

        i++;
    }
    
    return nums.join('');
};
```

## 나의 수도 코드

1. 1부터 n+1까지의 숫자로 구성된 배열을 만든다.
2. 패턴을 순회하면서 연속된 'D'의 위치와 길이를 찾는다.
3. 'D'를 만나면 해당 위치부터 연속된 'D'의 개수를 세어 그 구간을 뒤집는다.
4. 'I'는 오름차순이므로 기본 배열 상태를 유지한다.
5. 'D'는 내림차순이어야 하므로 해당 구간을 뒤집는다.

## 시간 복잡도

1. nums 배열 생성: O(n)
2. 패턴 순회: O(n)
    - findConsecutiveD 함수: 각 위치에서 최대 한 번만 호출됨
    - 배열 뒤집기: 각 요소는 최대 한 번만 뒤집힘
3. 결과 문자열 생성(join): O(n)

최종 시간 복잡도는 O(n) 이다.

## 공간 복잡도

1. nums 배열: O(n) - pattern.length + 1 크기의 배열
2. 결과 문자열: O(n)
3. 그 외 추가 변수들: O(1)

최종 공간복잡도는 O(n)이다.

## 알아둬야 할 것!

1. 문자열 패턴에 따른 정렬/역정렬 처리 방법 → 패턴 'I'/'D'를 보고 증가/감소 순서를 즉시 처리하기
2. 연속된 구간(consecutive sequence) 처리하는 방법 → 연속된 'D'를 하나의 그룹으로 묶어 한번에 처리하기
3. Array.from()으로 숫자 범위 생성하는 법 → `Array.from({length: n}, (_, i) => i + 1)`로 1~n까지 생성하기
4. lexicographically smallest를 찾는 그리디한 접근법 → 가능한 가장 작은 숫자부터 순서대로 배치하기
5. in-place swap으로 메모리 최적화하는 방법 → 추가 배열 없이 [a, b] = [b, a]로 위치 교환하기

## 회고

이 문제는 처음에는 복잡해 보였지만, 핵심은 연속된 'D' 패턴을 찾아 해당 구간만 뒤집는 단순한 아이디어였다.

특히 lexicographically smallest를 찾기 위해 가장 작은 숫자부터 순차적으로 배치한 후, 필요한 부분만 뒤집는 접근이 효율적이었다.

시간복잡도를 O(n)으로 유지하면서도 추가 메모리 사용을 최소화할 수 있었던 점이 인상적이었고, Array.from()을 활용한 배열 생성과 destructuring assignment를 통한 swap 기능을 잘 활용한 것 같다.

앞으로 비슷한 패턴 매칭 문제를 마주했을 때, 이번 해결 방식을 참고하면 좋을 것 같다.
