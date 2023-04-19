import React, { useState } from "react";
import { CiEdit, CiSquareRemove } from "react-icons/ci";

const Todo = ({ title, id, whichISelected, displayDetail, deleteTodo }) => {
  const [isEdit, setIsEdit] = useState(false);

  const makeCollapsedTitle = (index) => {
    if (title.length < index) return title;

    const startIndex = title.substring(0, index);
    const concatedString = "...";
    const collapsedTitle = startIndex + concatedString;
    return collapsedTitle;
  };

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const selectTodo = (e) => {
    whichISelected(e, id);
  };

  return (
    <div onClick={selectTodo} className="flex items-center justify-between h-10 mb-5 group">
      <div
        onClick={displayDetail}
        className="flex items-center w-full h-10 ml-5 py-5 border-2 rounded-lg border-emerald-200 active:bg-emerald-100"
      >
        <input type="checkbox" className="mx-5" />
        <p type="text" className=" focus:outline-none duration-150 focus:scale-110">
          {makeCollapsedTitle(20)}
        </p>
      </div>
      <div className=" flex items-center justify-center ">
        <CiEdit
          onClick={toggleEdit}
          className="duration-150 hover:scale-125 text-green-700 mr-3 "
          size="30px"
        />
        {isEdit && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-center bg-zinc-500/70 w-full h-full ">
            <div>
              <input
                placeholder="title"
                className=" border-2 border-emerald-200 rounded-lg mb-10 h-14 w-3/4"
              />
              <input
                placeholder="detail"
                className=" border-2 border-emerald-200 rounded-lg h-14 w-3/4"
              />
            </div>
            <button className="bg-zinc-100">닫기</button>
          </div>
        )}

        <CiSquareRemove
          onClick={(e) => deleteTodo(e, id)}
          className="duration-150 mr-5 hover:scale-125 text-red-700"
          size="30px"
        />
      </div>
    </div>
  );
};

export default Todo;
