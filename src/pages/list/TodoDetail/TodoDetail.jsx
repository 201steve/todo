import React from "react";
import { useParams } from "react-router-dom";

const TodoDetail = ({ todoList, hiddenDetail }) => {
  const { id } = useParams();
  const selectedTodo = todoList.find((list) => list.id === id);
  return (
    <div className="flex items-start justify-between p-3 mx-5 rounded-lg bg-emerald-50">
      <p className="w-full p-3 text-sm break-words border-2 rounded-lg">
        {selectedTodo?.content || "todoDetail입니다"}
      </p>
      <button
        onClick={hiddenDetail}
        className="w-1/6 h-10 ml-5 text-sm rounded-lg bg-zinc-100 active:bg-zinc-300 active:text-white"
      >
        닫기
      </button>
    </div>
  );
};

export default TodoDetail;
