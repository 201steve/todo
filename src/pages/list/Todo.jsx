import React, { useState } from "react";
import { CiEdit, CiSquareRemove } from "react-icons/ci";
import { api } from "../../api/api";

const Todo = ({
  id,
  title,
  whichISelected,
  displayDetail,
  deleteTodo,
  content,
  todoList,
  setTodoList,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ id: "", title: "", content: "" });

  const getEditedTodo = (e) => {
    const { name, value } = e.target;
    setEditedTodo({ ...editedTodo, [name]: value });
  };

  const toggleEdit = (e, selectedId) => {
    setEditedTodo({ ...editedTodo, id: selectedId });
    setIsEdit((prev) => !prev);
  };

  const selectTodo = (e) => {
    whichISelected(e, id);
  };

  const closeModal = () => {
    setIsEdit((prev) => !prev);
  };

  const updateElement = (updatedTodo) => {
    const editedIndex = todoList.findIndex(({ id }) => id === updatedTodo.data.id);
    if (editedIndex !== -1) {
      const updatedTodoList = [...todoList];
      updatedTodoList[editedIndex] = updatedTodo.data;
      setTodoList(updatedTodoList);
    }
  };

  const submitEditedTodo = async (e) => {
    e.preventDefault();
    const response = await fetch(`${api.updateTodo}${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("todo-token"),
      },
      body: JSON.stringify({ title: editedTodo.title, content: editedTodo.content }),
    });
    const updatedTodo = await response.json();
    updateElement(updatedTodo);

    setIsEdit((prev) => !prev);
  };

  return (
    <div onClick={selectTodo} className="flex items-center justify-between h-10 mb-5 group">
      <div
        onClick={displayDetail}
        className="flex items-center w-full h-10 py-5 ml-5 border-2 rounded-lg border-emerald-200 active:bg-emerald-100"
      >
        <input type="checkbox" className="mx-5" />
        <p type="text" className="duration-150 focus:outline-none focus:scale-110">
          {title}
        </p>
      </div>
      <div className="flex items-center justify-center ">
        <CiEdit
          onClick={(e) => toggleEdit(e, id)}
          className="mr-3 text-green-700 duration-150 hover:scale-125 "
          size="30px"
        />
        {isEdit && (
          <div className="absolute items-center justify-center w-full h-full px-20 py-12 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-zinc-500/70">
            <span className="inline-block h-5 mb-5 font-bold text-white rounded-lg">
              todo 수정하기
            </span>
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
                <button
                  onClick={closeModal}
                  type="button"
                  className="w-20 h-8 rounded-lg bg-zinc-100"
                >
                  닫기
                </button>
              </div>
            </form>
          </div>
        )}

        <CiSquareRemove
          onClick={(e) => deleteTodo(e, id)}
          className="mr-5 text-red-700 duration-150 hover:scale-125"
          size="30px"
        />
      </div>
    </div>
  );
};

export default Todo;
