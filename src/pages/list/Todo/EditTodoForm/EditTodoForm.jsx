import React from "react";

const EditTodoForm = ({ submitEditedTodo, title, content, getEditedTodo, closeModal }) => {
  return (
    <form onSubmit={submitEditedTodo} className="flex flex-col mb-5">
      <input
        placeholder={title}
        name="title"
        className="pl-3 mb-3 border-2 rounded-lg h-14 border-emerald-200"
        onChange={getEditedTodo}
      />
      <input
        placeholder={content}
        name="content"
        className="pl-3 border-2 rounded-lg h-14 border-emerald-200 "
        onChange={getEditedTodo}
      />
      <div className="items-center justify-center w-full text-center">
        <button
          onClick={submitEditedTodo}
          type="submit"
          className="w-20 h-8 mr-10 rounded-lg bg-zinc-100"
        >
          수정하기
        </button>
        <button onClick={closeModal} type="button" className="w-20 h-8 rounded-lg bg-zinc-100">
          닫기
        </button>
      </div>
    </form>
  );
};

export default EditTodoForm;
