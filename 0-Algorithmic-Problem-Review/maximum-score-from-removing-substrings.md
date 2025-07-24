## [**Maximum Score From Removing Substrings**](https://leetcode.com/problems/maximum-score-from-removing-substrings/)

## 주요 포인트

- x와 y 중 큰 점수의 쌍(“ab” 또는 “ba”)을 먼저 제거하는 것이 최대 점수를 얻는 핵심.
- **스택을 활용**해 문자열을 선형적으로 스캔하며 목표 패턴을 제거하고 점수를 누적.
- 문자열 길이가 최대 10^5이므로 **O(n)** 알고리즘 필요.

## 나의 코드

```jsx
var maximumGain = function(s, x, y) {
    let total = 0;

    const first = x >= y ? ['a', 'b', x] : ['b', 'a', y];
    const second = x >= y ? ['b', 'a', y] : ['a', 'b', x];

    const removePattern = (str, p1, p2, score) => {
        const stack = [];
        let points = 0;
        for (let ch of str) {
            if (stack.length && stack[stack.length - 1] === p1 && ch === p2) {
                stack.pop();
                points += score;
            } else {
                stack.push(ch);
            }
        }
        return [stack.join(''), points];
    };

    let [temp, points1] = removePattern(s, first[0], first[1], first[2]);
    total += points1;

    let [_, points2] = removePattern(temp, second[0], second[1], second[2]);
    total += points2;

    return total;
};
```

## 나의 수도 코드

1. 점수가 큰 쌍을 first, 작은 쌍을 second로 정한다.
2. removePattern 함수로 문자열을 한 번 순회하며 first 패턴을 제거하고 점수를 누적한다.
3. 제거 후 남은 문자열을 second 패턴으로 다시 처리하고 점수를 더한다.
4. total 반환.

## **시간 복잡도**

- 문자열을 최대 2번 순회하므로 **O(n)** (n = s.length).

## **공간 복잡도**

- 스택을 사용하므로 최악의 경우 **O(n)**.

## 알아둬야 할 것!

- 문자열 내 특정 패턴 제거 시 **우선순위를 명확히 정해야 최대 점수**를 얻을 수 있다.
- 스택을 사용하면 패턴 제거를 O(n)에 구현할 수 있다.

## 회고

- 처음에는 “ab”와 “ba”를 동시에 처리하려다 점수 최대화가 안 되어 틀렸었다.
- 우선순위를 명확히 나누는 전략이 핵심이었고, 스택으로 단순화하여 풀었다.
