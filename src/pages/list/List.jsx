import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Todo from "./Todo/Todo";
import TodoModal from "./TodoModal/TodoModal";
import TodoDetail from "./TodoDetail/TodoDetail";
import { client } from "api/client";

const List = () => {
  const [todoList, setTodoList] = useState([]);
  const [isTodoModalOpend, setTodoModalIsOpend] = useState(false);
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate("signin");
  };

  const toggleTodoModal = () => {
    setTodoModalIsOpend((prev) => !prev);
  };

  const getTodo = async () => {
    const response = await client.getTodos();
    setTodoList(response.data.data);
  };

  const deleteTodo = async (e, selectedId) => {
    const response = await client.deleteTodo(selectedId);
    if (response.statusText === "OK") {
      const filteredList = todoList.filter((list) => list.id !== selectedId);
      setTodoList(filteredList);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("todo-token")) {
      alert("로그인이 필요합니다");
      navigate("/signin");
    }
    getTodo();
  }, []);
  return (
    <div className="relative max-w-2xl pb-10 m-10 border-2 rounded-lg">
      <div className="w-full p-4 text-right">
        <button
          onClick={goToSignIn}
          className="px-3 py-1 rounded-lg text-md bg-zinc-100 active:bg-zinc-300 active:text-white"
        >
          Login
        </button>
        <button
          onClick={toggleTodoModal}
          className="px-3 py-1 rounded-lg text-md bg-zinc-100 active:bg-zinc-300 active:text-white"
        >
          +
        </button>
      </div>
      {isTodoModalOpend && (
        <TodoModal setTodoModalIsOpend={setTodoModalIsOpend} setTodoList={setTodoList} />
      )}
      {todoList?.map(({ id, title, content }) => (
        <Todo
          key={id}
          id={id}
          title={title}
          content={content}
          todoList={todoList}
          deleteTodo={deleteTodo}
          setTodoList={setTodoList}
        />
      ))}
      {id && <TodoDetail todoList={todoList} />}
    </div>
  );
};

export default List;
