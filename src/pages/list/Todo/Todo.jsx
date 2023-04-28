import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit, CiSquareRemove } from "react-icons/ci";
import { api } from "../../../api/api";
import EditTodoForm from "./EditTodoForm/EditTodoForm";

const Todo = ({ id, title, displayDetail, deleteTodo, content, todoList, setTodoList }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ id: "", title: "", content: "" });
  const navigate = useNavigate();

  const getEditedTodo = (e) => {
    const { name, value } = e.target;
    setEditedTodo({ ...editedTodo, [name]: value });
  };

  const toggleEdit = (e, selectedId) => {
    setEditedTodo({ ...editedTodo, id: selectedId });
    setIsEdit((prev) => !prev);
  };

  const selectTodo = (e) => {
    navigate(`/${id}`);
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
    const response = await fetch(`${api.updateTodo(id)}`, {
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
            <EditTodoForm
              submitEditedTodo={submitEditedTodo}
              title={title}
              getEditedTodo={getEditedTodo}
              content={content}
              submitEditedTo
              closeModal={closeModal}
            />
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
