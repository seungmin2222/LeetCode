## [String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi)

이 문제는 주어진 문자열을 32비트 정수로 변환하는 문제다.

이 과정에서 공백 처리, 부호 확인, 숫자 변환, 그리고 범위 초과 시 처리 등 여러 단계를 거쳐야 한다.

## 주요 포인트

- 공백 처리, 부호 확인, 숫자 읽기 등 문자열을 순차적으로 처리하는 능력이 필요하다.
- INT_MAX (2^31 - 1)와 INT_MIN (-2^31)의 값을 알고, 이 범위를 벗어나는 경우를 처리해야 한다.
- 숫자를 읽어가는 과정에서 결과값이 32비트 정수 범위를 초과할 가능성을 항상 체크해야 한다.
- 부호 다음에 숫자가 아닌 문자가 나오는 경우, 숫자 중간에 다른 문자가 나오는 경우 등 다양한 예외 상황에 대응할 수 있어야 한다.

## 나의 코드

```jsx
function myAtoi(s) {
  let i = 0;
  let result = 0;
  let sign = 1;
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  
  while (i < s.length && s[i] === ' ') {
    i++;
  }
  
  if (i < s.length && (s[i] === '+' || s[i] === '-')) {
    sign = s[i] === '+' ? 1 : -1;
    i++;
  }
  
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    const digit = s[i] - '0';
    
    if (result > Math.floor(INT_MAX / 10) || 
        (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }
    
    result = result * 10 + digit;
    i++;
  }
  
  return sign * result;
}
```

## 나의 수도 코드

1. 인덱스 i를 0으로 초기화
2. 결과값 result를 0으로 초기화
3. 부호 sign을 1(양수)로 초기화
4. 32비트 정수의 최대값 INT_MAX와 최소값 INT_MIN 정의
5. s[i]가 공백인 동안 i를 증가시킴
6. s[i]가 '+'나 '-'인 경우
    - '+'이면 sign을 1로, '-'이면 sign을 -1로 설정
    - i를 1 증가시킴
7. s[i]가 숫자('0'에서 '9' 사이)인 동안 반복
    - 현재 숫자(digit)를 s[i] - '0'으로 계산
    - 오버플로우 체크
        - result > INT_MAX / 10 이거나
        - (result == INT_MAX / 10 이고 digit > INT_MAX % 10) 이면
            - sign이 1이면 INT_MAX 반환, 아니면 INT_MIN 반환
    - result = result * 10 + digit으로 결과값 갱신
    - i를 1 증가시킴
8. sign * result 반환

## 알아둬야 할 것!

1. 문자열 파싱 (String Parsing)
    - 문자열을 순차적으로 읽어가며 의미 있는 정보를 추출하는 기술
2. 타입 변환 (Type Conversion)
    - 문자를 숫자로 변환하는 방법 (예: '5' - '0' = 5)
3. 범위 제한 처리 (Boundary Checking)
    - 32비트 정수의 최대값과 최소값을 알고 이를 처리하는 방법
4. 오버플로우 방지 (Overflow Prevention)
    - 큰 숫자를 다룰 때 오버플로우를 미리 감지하고 방지하는 기술
5. 예외 처리 (Exception Handling)
    - 잘못된 입력이나 예상치 못한 상황을 처리하는 방법
6. 반복문과 조건문의 적절한 사용
    - while 루프를 이용한 문자열 순회
    - if 문을 이용한 조건 체크

## 회고

이 문제는 단순해 보이지만 여러 가지 세부 사항을 고려해야 한다.

문제를 꼼꼼히 읽고 모든 요구사항을 정확히 이해하는 것이 중요했다.

공백, 부호, 숫자가 아닌 문자, 오버플로우 등 다양한 엣지 케이스를 고려해야했고 실제 개발에서도 매우 중요한 부분이라고 생각이 된다.

코드를 간결하게 유지하면서도 모든 요구사항을 충족시키는것이 도전이였다.

각 부분의 역할을 명확히 하여 가독성을 높이려 했다.

이 문제는 단순해 보이지만 프로그래밍의 여러 기본적인 개념들을 종합적으로 적용해야하는 좋은 문제라고 생각한다.

이 문제르 ㄹ통해 기본기의 중요성과 세세한 부분까지 신경 쓰는 꼼꼼함의 가치를 다시 한번 생각할 수 있어서 좋았다.
