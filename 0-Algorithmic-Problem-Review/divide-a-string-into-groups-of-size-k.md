# [Divide a String Into Groups of Size k](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/)

## 주요 포인트

- 문자열을 k 크기씩 그룹으로 나눈다.
- 마지막 그룹이 부족하면 fill 문자로 채워 k 길이로 만든다.
- 결과는 string 배열로 리턴한다.

## 나의 코드

```tsx
var divideString = function(s, k, fill) {
    const result = [];
    
    for (let i = 0; i < s.length; i += k) {
        let group = s.slice(i, i + k);
        
        if (group.length < k) {
            group = group + fill.repeat(k - group.length);
        }
        
        result.push(group);
    }
    
    return result;
};
```

## 나의 수도 코드

1. 결과 배열 초기화
2. i를 0부터 s.length까지 k 간격으로 증가시키며:
    - group = s의 i부터 i+k 슬라이스
    - 만약 group의 길이가 k보다 작으면 fill 문자로 부족한 만큼 채움
    - group을 결과 배열에 push
3. 결과 배열 반환

## 시간 복잡도

- O(n)
    
    → 문자열 전체를 한 번 순회하면서 그룹을 생성하므로 n은 문자열의 길이
    

## 공간 복잡도

- O(n)
    
    → 결과 배열에 문자열 그룹들을 저장하므로 최대 n/k개의 그룹이 생김 (합쳐서 O(n))
    

## 알아둬야 할 것!

- slice() 메서드는 범위를 벗어나도 오류 없이 가능한 만큼만 잘라줌.
- repeat(count)는 count만큼 문자열을 반복해줌.
- 패딩이 필요한 경우 .repeat()를 활용하면 깔끔하게 처리 가능.

## 회고

간단한 문자열 슬라이싱과 패딩 문제지만, 문제 조건을 정확히 반영해야 한다.

마지막 그룹의 길이가 k보다 짧은 경우만 fill을 쓰는 조건은 주의해야했고 실무에서도 문자열을 일정 크기로 분할하고 패딩하는 로직은 종종 등장하는 것 같다.
