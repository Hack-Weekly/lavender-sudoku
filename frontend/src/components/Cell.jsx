import React from "react";

const Cell = ({ content, cellId }) => {
  return (
    <button
      onClick={() => {
        console.log(cellId);
      }}
      className="flex justify-center items-center bg-violet-50 h-12 w-12 font-semibold text-2xl pb-1 text-violet-950 group-hover:bg-violet-200 hover:!bg-violet-400 focus:!bg-violet-400 group-focus-within:bg-violet-200"
    >
      {content}
    </button>
  );
};

export default Cell;
