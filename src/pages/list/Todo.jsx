import React from "react";
import { CiEdit, CiSquareRemove } from "react-icons/ci";

const Todo = ({ title, id, whichISelected, displayDetail }) => {
  const makeCollapsedTitle = (index) => {
    if (title.length < index) return title;

    const startIndex = title.substring(0, index);
    const concatedString = "...";
    const collapsedTitle = startIndex + concatedString;
    return collapsedTitle;
  };

  return (
    <div
      onClick={(e) => {
        whichISelected(e, id);
      }}
      className="flex items-center justify-between h-10 mb-5 group"
    >
      <div
        onClick={displayDetail}
        className="flex items-center w-full h-10 ml-5 py-5 border-2 rounded-lg border-emerald-200 active:bg-emerald-100"
      >
        <input type="checkbox" className="mx-5" />
        <p type="text" className=" focus:outline-none duration-150 focus:scale-110">
          {makeCollapsedTitle(20)}
        </p>
      </div>

      <div className=" flex items-center justify-center invisible group-hover:visible">
        <CiEdit className="duration-150 hover:scale-125 text-green-700 mr-3 " size="30px" />
        <CiSquareRemove className="duration-150 mr-5 hover:scale-125 text-red-700" size="30px" />
      </div>
    </div>
  );
};

export default Todo;
