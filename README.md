# TDD

## 구성

### node

- jest를 활용한 Unit 테스트 및 TDD 적용, 리팩토링

<br>

## 목적

- 실제 프로젝트 적용 전 Study

<br>

## 실행

```javascript 
cd 폴더명 // ex : cd node

npm i

npm run test
```

<br>

## Jest

Test Runner(결과 생성) + Assertion(비교)

<br>

### 구성

- basic
  
  - add.test.js : 첫 테스트
  - async.test.js : 비동기 테스트
  - calculate.test.js : 계산기 예제를 통한 테스트

- mock

  - check : mock 함수를 이용한 테스트
  - product : stub을 사용해 테스트, mock을 잘못 사용한 사례
  - user : 특정 상황에 호출 되었는지 안되었는지 등 행동에 대한 검사 stub 대신 mock 이용

- challenge

  - TDD로 stack 구현 
  - 작은 단위로 Test 작성 => 오류 해결 => 작은 단위로 Test 작성 => 반복

<br>

### 테스트코드 작성시 주의점

- 내부 구현사항을 토대로 테스트를 작성하지 말 것
