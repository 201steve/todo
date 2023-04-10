import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "./Todo";
import { api } from "../../api/api";

const List = () => {
  const [todoList, setTodoList] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [isTodoChecked, setIsTodoChecked] = useState(false);

  const navigate = useNavigate();

  const getTodo = async (url, option) => {
    const response = await fetch(url, option);
    const todoData = await response.json();
    setTodoList(todoData.data);
  };

  const goToSignIn = () => {
    navigate("signin");
  };

  const whichISelected = (e, selectedId) => {
    const selectedTodo = todoList.find(({ id }) => id === selectedId);
    setSelectedTodo(selectedTodo);
  };

  const selectOrNot = (e) => {
    setIsTodoChecked(e.target.checked);
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
    getTodo("/mock/getTodo.json");
    //TODO: createTodo 만들어지면 사용 예정
    // getTodo(api.getTodos, {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json;charset=utf-8",
    //     Authorization: localStorage.getItem("todo-token"),
    //   },
    // });
  }, []);

  return (
    <div className="m-10 max-w-2xl border-2 rounded-lg pb-10">
      <div className="w-full text-right p-4">
        <button
          onClick={goToSignIn}
          className="text-md bg-zinc-100 rounded-lg px-3 py-1 mr-3 active:bg-zinc-300 active:text-white"
        >
          Login
        </button>
        <button className="text-md bg-zinc-100 rounded-lg px-3 py-1 active:bg-zinc-300 active:text-white">
          +
        </button>
      </div>
      {todoList.map(({ id, title }) => (
        <Todo
          key={id}
          title={title}
          id={id}
          text={"Bernard Shelton"}
          whichISelected={whichISelected}
          selectOrNot={selectOrNot}
        />
      ))}
      {isTodoChecked && <div className="bg-emerald-100 mx-5">{selectedTodo.content}</div>}
    </div>
  );
};

export default List;
