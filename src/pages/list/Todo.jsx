import React from "react";
import { CiEdit, CiSquareRemove } from "react-icons/ci";

const Todo = ({ title, id, whichISelected, selectOrNot }) => {
  return (
    <div
      onClick={(e) => {
        whichISelected(e, id);
      }}
      className="flex items-center justify-center h-10 mb-5 group"
    >
      <label htmlFor={id} className="w-full h-10 ml-5">
        <div className="flex items-center h-10 py-5 border-2 border-emerald-200 duration-150 active:scale-105 ">
          <input id={id} type="checkbox" className="mx-5" onChange={selectOrNot} />
          <p type="text" className=" focus:outline-none duration-150 focus:scale-110">
            {title}
          </p>
        </div>
      </label>
      <div className=" flex items-center justify-center invisible group-hover:visible">
        <CiEdit className="duration-150 hover:scale-125 text-green-700 mr-3 " size="30px" />
        <CiSquareRemove className="duration-150 mr-5 hover:scale-125 text-red-700" size="30px" />
      </div>
    </div>
  );
};

export default Todo;
