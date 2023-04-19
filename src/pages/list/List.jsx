import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "./Todo";
import { api } from "../../api/api";
import TodoModal from "./TodoModal/TodoModal";

const List = () => {
  const [todoList, setTodoList] = useState([]);
  const [isTodoSelected, setIsTodoSelected] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [isTodoModalOpend, setTodoModalIsOpend] = useState(false);
  const navigate = useNavigate();

  const getTodo = async (url, option) => {
    const response = await fetch(url, option);
    const todoData = await response.json();
    setTodoList(todoData.data);
  };

  const goToSignIn = () => {
    navigate("signin");
  };

  const displayDetail = () => {
    setIsTodoSelected(true);
  };
  const hiddenDetail = () => {
    setIsTodoSelected(false);
  };

  const whichISelected = (e, selectedId) => {
    const selectedTodo = todoList.find(({ id }) => id === selectedId);
    setSelectedTodo(selectedTodo);
  };

  const toggleTodoModal = () => {
    setTodoModalIsOpend((prev) => !prev);
  };

  const deleteTodo = async (e, selectedId) => {
    const response = await fetch(`${api.deleteTodo}${selectedId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("todo-token"),
      },
    });
    if (response.ok) {
      const filteredList = todoList.filter((list) => list.id !== selectedId);
      setTodoList(filteredList);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("todo-token")) {
      alert("로그인이 필요합니다");
      navigate("/signin");
    }
    getTodo(api.getTodos, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=utf-8",
        Authorization: localStorage.getItem("todo-token"),
      },
    });
  }, []);

  useEffect(() => {
    if (todoList.length === 0) setIsTodoSelected(false);
  }, [todoList]);

  return (
    <div className="relative m-10 max-w-2xl border-2 rounded-lg pb-10">
      <div className="w-full text-right p-4">
        <button
          onClick={goToSignIn}
          className="text-md bg-zinc-100 rounded-lg px-3 py-1 mr-3 active:bg-zinc-300 active:text-white"
        >
          Login
        </button>
        <button
          onClick={toggleTodoModal}
          className="text-md bg-zinc-100 rounded-lg px-3 py-1 active:bg-zinc-300 active:text-white"
        >
          +
        </button>
      </div>
      {isTodoModalOpend && (
        <TodoModal setTodoModalIsOpend={setTodoModalIsOpend} setTodoList={setTodoList} />
      )}
      {todoList &&
        todoList.map(({ id, title }) => (
          <Todo
            key={id}
            title={title}
            id={id}
            whichISelected={whichISelected}
            displayDetail={displayDetail}
            deleteTodo={deleteTodo}
          />
        ))}
      {isTodoSelected && (
        <div className="flex items-start justify-between rounded-lg p-3 bg-emerald-50 mx-5">
          <p className="w-full p-3 border-2 rounded-lg text-sm break-words">
            {selectedTodo.content || "todoDetail입니다"}
          </p>
          <button
            onClick={hiddenDetail}
            className="w-1/6 h-10 ml-5 bg-zinc-100  active:bg-zinc-300 active:text-white rounded-lg text-sm"
          >
            닫기
          </button>
        </div>
      )}
    </div>
  );
};

export default List;
