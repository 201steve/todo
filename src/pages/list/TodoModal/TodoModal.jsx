import React, { useRef, useEffect, useState } from "react";
import { todoApi } from "services/todoApi";

const TodoModal = ({ toggleTodoModal, setTodoList }) => {
  const [todo, setTodo] = useState({ title: "", content: "" });

  const { title, content } = todo;

  const autoFocus = useRef(null);

  const getNewTodo = ({ target: { placeholder, value } }) => {
    setTodo({ ...todo, [placeholder]: value });
  };

  const createTodo = async (e) => {
    e.preventDefault();
    const response = await todoApi.createTodo(title, content);
    alert("todo가 생성되었습니다");
    toggleTodoModal();
    setTodoList((prev) => [...prev, response.data.data]);
  };

  useEffect(() => {
    autoFocus.current.focus();
  }, []);

  return (
    <div className="absolute w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-lg top-1/2 left-1/2 bg-red-50">
      <form
        onSubmit={createTodo}
        className="flex flex-col items-center justify-center px-3 rounded-lg"
      >
        <input
          onChange={getNewTodo}
          ref={autoFocus}
          value={title}
          placeholder="title"
          name="titleInput"
          className="w-full h-8 pl-3 my-3 rounded-lg"
        />
        <input
          onChange={getNewTodo}
          value={content}
          placeholder="content"
          name="detailInput"
          className="w-full h-8 pl-3 mb-3 rounded-lg"
        />
        <button
          onClick={createTodo}
          type="submit"
          className="w-1/4 py-1 mb-3 rounded-lg bg-emerald-100 "
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default TodoModal;
