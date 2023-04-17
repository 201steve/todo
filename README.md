# Todo-list
[![wakatime](https://wakatime.com/badge/user/e99352fb-fe22-4c5f-8d00-0071140b9a56/project/e47ad9b5-7781-4115-94a2-1fd40f14b856.svg)](https://wakatime.com/badge/user/e99352fb-fe22-4c5f-8d00-0071140b9a56/project/e47ad9b5-7781-4115-94a2-1fd40f14b856)

[![wakatime](https://wakatime.com/badge/user/e99352fb-fe22-4c5f-8d00-0071140b9a56/project/e47ad9b5-7781-4115-94a2-1fd40f14b856.svg)](https://wakatime.com/badge/user/e99352fb-fe22-4c5f-8d00-0071140b9a56/project/e47ad9b5-7781-4115-94a2-1fd40f14b856)

## 개발한 화면

| title              | view                                                                                                                       |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| createTodo         | ![createTodo](https://user-images.githubusercontent.com/79638133/235801274-99a3b5dd-3fa0-447c-8be2-40580cf080c8.gif)       |
| display detail     | ![displayDetail](https://user-images.githubusercontent.com/79638133/235801404-3d267ef3-14a3-44ba-919c-a44f83bb0931.gif)    |
| delete todo        | ![deleteTodo](https://user-images.githubusercontent.com/79638133/235801416-5be7d239-2ad7-4b2b-9d4e-383aadfa6c59.gif)       |
| updateTodo         | ![update](https://user-images.githubusercontent.com/79638133/235801454-009bf3a8-0ffa-44e0-b35f-ac961baea5ac.gif)           |
| signup             | ![signup](https://user-images.githubusercontent.com/79638133/235801476-c34f2835-2d4e-4020-b2fd-468e5dff9d77.gif)           |
| login              | ![signin](https://user-images.githubusercontent.com/79638133/235801500-ae75f154-ce95-48d9-a3ad-12b56dea4266.gif)           |
| refresh but steady | ![refreshbutsteady](https://user-images.githubusercontent.com/79638133/235801820-3e084ad6-059c-40c2-b472-1e8add8a1662.gif) |

## 개발 내용

| commit                                                                                              | Detail                                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [48fdafe](https://github.com/201steve/todo/pull/8/commits/48fdafe4f05839682faa40867c3ac4c35bcaea37) | layout signup, signin, add login validate,토큰 여부에 따른 route 처리 추가                                                                                                                                            |
| [3095ef7](https://github.com/201steve/todo/pull/8/commits/3095ef7e8461c26be34b27ab35e3b9dd54844b49) | api주소 관리용 파일 추가, 토큰 유효하지않다면 로그인페이지로 리다이렉트 추가                                                                                                                                          |
| [d5baa95](https://github.com/201steve/todo/pull/8/commits/d5baa9549fc9af43d99677a2cb6e3a196a70c0b6) | 특정 todo를 선택하면, 상세내역 출력                                                                                                                                                                                   |
| [5216eca](https://github.com/201steve/todo/pull/8/commits/5216eca39996e3ff7ef41165ad8d1599cf379a26) | label태그 삭제, 체크박스에 체크 되야 detail이 보이던 방식에서 todo 클릭 하면 보이는것으로 수정, detail 닫기 버튼 추가 ,title의길이가 특정 index이상 되면 ... 으로 collapse되게 view 수정, input scale transition 삭제 |
| [34eecbf](https://github.com/201steve/todo/pull/8/commits/34eecbf49b4ba5d9c6cbb08681dcf4fde868a9ce) | create todo 기능 추가                                                                                                                                                                                                 |
| [5229454](https://github.com/201steve/todo/pull/8/commits/52294540ecbd2d5b1ee2bb2cafa2e1e6e6e0f0f0) | delete 버튼을 누르면 todo 삭제 되는 기능 추가 ,delete 버튼을 누르고 삭제되면 re-render되도록 setState 구성 ,createTodo 하면re-render 되도록setState수정, update 용도 modal 구현중                                     |
| [5b96eb3](https://github.com/201steve/todo/pull/9/commits/5b96eb3233c2e50a5ec92905bef85e67044573ff) | todo update 기능 추가                                                                                                                                                                                                 |
| [536dbc7](https://github.com/201steve/todo/pull/9/commits/536dbc77e812f2f3f759018c37aadf52dcd83487) | 새로고침해도 유지되도록 기능 추가                                                                                                                                                                                     |

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

## Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## 회고

- create와 delete때 어떻게 re-render시킬까에 대한 고민이 많았는데, 차근차근 해결.
- delete할때 navigate로 넘기고 params로 받아오면 이전 id가 url에 남아있어서 2번 클릭해야 삭제되는 버그가 있었는데 선택한 element의 id를 받아와서 api로 보내주는 방식으로 수정.
- detail을 열어놓은상태로 목록의 todo를 다 지워도 delete가 그대로 남아있어서 useEffect로 todoList의 length가 0 이면 false되도록 일단 땜질.
- update 용도로 만드는 modal을 portal로 쓸지, absolute로 띄울지 여러 시도해보는중.
- 그러다가 배경색 opacity를 적용하는데서 꽤나 시간을 잡아먹었고, 정말 어이없이 간단하게도 background-color의 rgba 부분의 값을 부여하면 해결되는 문제였음.
  -update 감이 잘 안잡혔는데, 해결했다. CRUD 는 끝났고, 정합성, 다른 기능들을 좀 써보고 리팩토링도 필요하다. fetch 코드 반복이 많은데 그것부터 해봐야겟다.
