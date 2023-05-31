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
| [853ce94](https://github.com/201steve/todo/commit/853ce94db778dc608639896154526350968fe9c7)         | todo update 기능 추가                                                                                                                                                                                                 |
| [859ae90](https://github.com/201steve/todo/commit/859ae90012d7d20be928dece876b6b9b7cd2c920)         | 새로고침해도 유지되도록 기능 추가                                                                                                                                                                                     |
| [e76c6a5](https://github.com/201steve/todo/pull/9/commits/e76c6a58b03c967e7811f62490026412a5dcd51b) | axios로 전환, 불필요 state 삭제, detail 여부에 따라 조건부 렌더링으로 변경                                                                                                                                            |
| [e04b37d](https://github.com/201steve/todo/pull/9/commits/e04b37dd52e0acd73a7da3d9d9ce6c2e11ccd947) | service code 분리, 로그인 여부에 따른 privateRouter 설정, axios interceptors추가로 instance request 전 header에 Authorization token update                                                                            |

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
- axios 처음써봤는데, 반복되는 옵션들을 instance 생성해서 쓸 수 있는게 굉장히 편한 것 같다. JSON파싱도 해줘서 비동기함수로 편하게 쓸 수 있는게 장점같다. 왜 진즉 써볼 생각을 안했을까.. 너무 좋다
- 이전까지는 특정페이지에 접근했을 때 로그인 여부를 판단해서 일단 useEffect가 돌기 전에 렌더부터된 화면이 노출됐었는데, PrivateRouter로 경로 설정하는걸 알게되서, 애시당초 로그인 여부를 Router에서 판단해 진입조차 안되도록 수정.
- 로그아웃된상태에서 로그인을하면 리스트로 보내지도록 구성했는데, 리스트로와서 꼭 새로고침 한번을 해야 했다. 원인은 localstorage에 값이 초기엔 null이라 unAuthorization 인것. 그래서 리스트 컴포넌트가 마운트되고-> JSX render->get 요청에서 get요청이 안됐던것. 해결은, axios에 interceptors라는 방법으로 해결. interceptors가 하는일은 api request 하기전, response 받기 전에 특정 동작을 수행할 수 있는데, list페이지로 넘어와서 get 요청하기전에 interceptors가 낚아채서 headers에 있는 Authorization 값을 null에서 JWT로 갈아끼우고 api call 하는 순서로 진행되어 이상없이 list에 todoList 렌더..
- 다른 api call은 다 잘됐는데, 유난히 signup할때만 안되더라. 그래서 인스턴스에 config를 봤더니, baseUrl로 되어있던것...ㅠㅠㅠㅠㅠ4시간날림...`baseURL`이다..
- update할 때 findIndex로 배열의 index를 찾아서 값을 갈아끼우는 방식이었는데, 조건이 이중부정으로 어색했음.

```javascript
const updateElement = (updatedTodo) => {
    setTodoList((prevTodoList) => {
      const editedIndex = prevTodoList.findIndex(({ id }) => id === updatedTodo.id);
      if (editedIndex !== -1)//이중부정 {
        const updatedTodoList = [...prevTodoList];
        updatedTodoList[editedIndex] = updatedTodo;
        return updatedTodoList;
      } else {
        return prevTodoList;
      }
    });
  };
```

- find메서드로 해당 요소를 직접찾아 원본배열과 선택된 배열의 id를 비교해서 같으면 업데이트한 요소로, 아니면 원본 요소로 반환하도록 수정.

```javascript
const updateElement = (updatedTodo) => {
  setTodoList((prevTodoList) => {
    const matchedTodo = prevTodoList.find((todo) => todo.id === updatedTodo.id);
    if (matchedTodo) {
      const updatedTodoList = prevTodoList.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
      return updatedTodoList;
    } else {
      return prevTodoList;
    }
  });
};
```
