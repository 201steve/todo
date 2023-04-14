import React, { useRef, useEffect, useState } from "react";
import { api } from "../../../api/api";

const TodoModal = ({ setIsOpend }) => {
  const [todo, setTodo] = useState({ title: "", content: "" });
  const { title, content } = todo;

  const modalRef = useRef(null);

  const getNewTodo = ({ target: { placeholder, value } }) => {
    setTodo({ ...todo, [placeholder]: value });
  };

  const createTodo = async () => {
    const res = await fetch(api.createTodo, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
        Authorization: localStorage.getItem("todo-token"),
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
    if (!res.ok) return alert("다시 시도해 주세요");

    alert("todo가 생성되었습니다");
  };

  const submitTodo = (e) => {
    e.preventDefault();
    createTodo();
    setIsOpend(false);
  };

  useEffect(() => {
    modalRef.current.focus();
  }, []);
  return (
    <div className="absolute top-1/2 left-1/2 w-3/4  bg-red-50 -translate-x-1/2 -translate-y-1/2 rounded-lg">
      <form
        onSubmit={submitTodo}
        className="flex flex-col items-center justify-center px-3 rounded-lg"
      >
        <input
          onChange={getNewTodo}
          ref={modalRef}
          value={title}
          placeholder="title"
          className="pl-3 h-8 w-full my-3 rounded-lg"
        />
        <input
          onChange={getNewTodo}
          value={content}
          placeholder="content"
          className="pl-3 h-8 w-full mb-3 rounded-lg"
        />
        <button
          onClick={submitTodo}
          type="submit"
          className="w-1/4 mb-3 py-1 bg-emerald-100 rounded-lg "
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default TodoModal;
