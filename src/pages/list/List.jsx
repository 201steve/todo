import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const List = () => {
  const [todoList, setTodoList] = useState([]);

  const getTodo = async (url) => {
    const response = await fetch(url);
    const todoData = await response.json();
    setTodoList(todoData.data);
  };

  useEffect(() => {
    getTodo("/mock/getTodo.json");
  }, []);

  return (
    <div className="m-10 max-w-2xl border-2 rounded-lg pb-10">
      <div className="w-full text-right p-4">
        <button className="text-md bg-zinc-100 rounded-lg px-3 py-1 mr-3 active:bg-zinc-300 active:text-white">
          Login
        </button>
        <button className="text-md bg-zinc-100 rounded-lg px-3 py-1 active:bg-zinc-300 active:text-white">
          +
        </button>
      </div>
      {todoList.map(({ id, content, title }) => (
        <Todo key={id} content={content} title={title} labelId={id} text={"Bernard Shelton"} />
      ))}
    </div>
  );
};

export default List;
