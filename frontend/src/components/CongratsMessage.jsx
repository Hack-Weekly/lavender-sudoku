import React from "react";

export const CongratsMessage = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex boder-2 border-gray-500 items-center justify-center z-50">
      <div className="bg-violet-100 p-4 rounded-lg border-2 border-gray-400 border-opacity-60 shadow-md text-center">
        <h2 className="text-xl font-semibold ">Congratulations 🎉</h2>
        <p className="text-sm font-bold text-gray-700">You've successfully solved the Sudoku!</p>
        {/* <p className="mb-2 text-gray-500 font-bold">Well done, you're a Sudoku genius!</p> */}
        <div className="flex flex-row gap-1 items-center justify-center">
        <button
          onClick={onClose}
          className="bg-yellow-300 mt-2 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-800 transition duration-300 ease-in-out"
        >
          Keep playing
        </button>
        </div>
      </div>
    </div>
  );
};

