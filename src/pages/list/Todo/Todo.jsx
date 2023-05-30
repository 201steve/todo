import React, { useState } from "react";
import { CiEdit, CiSquareRemove } from "react-icons/ci";
import EditTodoForm from "./EditTodoForm/EditTodoForm";
import { todoApi } from "services/todoApi";

const Todo = ({ id, title, deleteTodo, content, selectTodo, setTodoList }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ id: "", title: "", content: "" });

  const getEditedTodo = (e) => {
    const { name, value } = e.target;
    setEditedTodo({ ...editedTodo, [name]: value });
  };

  const toggleEdit = (selectedId) => {
    setEditedTodo({ ...editedTodo, id: selectedId });
    setIsEdit((prev) => !prev);
  };

  const closeModal = () => {
    setIsEdit(false);
  };

  const updateElement = (updatedTodo) => {
    setTodoList((prevTodoList) => {
      const matchedTodo = prevTodoList.find((todo) => todo.id === updatedTodo.id);
      if (matchedTodo) {
        const updatedTodoList = prevTodoList.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
        return updatedTodoList;
      } else {
        return prevTodoList;
      }
    });
  };

  const submitEditedTodo = async (e) => {
    e.preventDefault();
    const response = await todoApi.updateTodo(editedTodo.id, editedTodo.title, editedTodo.content);
    updateElement(response.data.data);
    setIsEdit((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between h-10 mb-5 group">
      <div
        onClick={() => selectTodo(id)}
        className="flex items-center w-full h-10 py-5 ml-5 border-2 rounded-lg border-emerald-200 active:bg-emerald-100"
      >
        <input name="completionStatus" type="checkbox" className="mx-5" />
        <p type="text" className="duration-150 focus:outline-none focus:scale-110">
          {title}
        </p>
      </div>
      <div className="flex items-center justify-center ">
        <CiEdit
          onClick={() => toggleEdit(id)}
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
          onClick={() => deleteTodo(id)}
          className="mr-5 text-red-700 duration-150 hover:scale-125"
          size="30px"
        />
      </div>
    </div>
  );
};

export default Todo;
