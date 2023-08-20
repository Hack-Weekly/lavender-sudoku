import React from "react";

export const FailMessage = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-red-200 p-4 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-2">No More Tries</h2>
        <p className="text-lg mb-2">You've used all your tries. Better luck next time!</p>

        <div className="flex flex-row gap-1 items-center justify-center">
        <button
          onClick={onClose}
          className="bg-blue-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-800 transition duration-300 ease-in-out"
        >
          New game
        </button>
        </div>
      </div>
    </div>
  );
};

