import React, { useRef, useEffect, useState } from "react";
import { client } from "api/client";

const TodoModal = ({ setTodoModalIsOpend, setTodoList }) => {
  const [todo, setTodo] = useState({ title: "", content: "" });

  const { title, content } = todo;

  const modalRef = useRef(null);

  const getNewTodo = ({ target: { placeholder, value } }) => {
    console.log("aaa");
    setTodo({ ...todo, [placeholder]: value });
  };

  const createTodo = async (e) => {
    e.preventDefault();
    const response = await client.createTodo(title, content);
    alert("todo가 생성되었습니다");
    setTodoModalIsOpend((prev) => !prev);
    setTodoList((prev) => [...prev, response.data.data]);
  };

  useEffect(() => {
    modalRef.current.focus();
  }, []);

  return (
    <div className="absolute w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-lg top-1/2 left-1/2 bg-red-50">
      <form
        onSubmit={createTodo}
        className="flex flex-col items-center justify-center px-3 rounded-lg"
      >
        <input
          onChange={getNewTodo}
          ref={modalRef}
          value={title}
          placeholder="title"
          className="w-full h-8 pl-3 my-3 rounded-lg"
        />
        <input
          onChange={getNewTodo}
          value={content}
          placeholder="content"
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
