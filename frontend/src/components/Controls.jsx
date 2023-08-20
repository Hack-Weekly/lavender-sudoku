import React from "react";
import { useMyContext } from "./SelectedCellContext";

const Controls = ({ setUserBoard }) => {
  const { selectedCell, dataArray, setDataArray } = useMyContext();
  const choices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const handleChoiceClick = (choice) => {
    if (selectedCell) {
      const newArray = [...dataArray];
      newArray[selectedCell.row][selectedCell.col] = {
        value: choice,
        isModifiable: true,
      };
      setDataArray(newArray);
      setUserBoard(newArray);
      localStorage.setItem("userProgress", JSON.stringify(newArray));
    }
  };
  return (
    <div className="p-2  bg-violet-500 rounded-lg">
      <div className="grid grid-cols-3 gap-2">
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => {
              handleChoiceClick(choice);
            }}
            className={`flex justify-center items-center p-4 bg-violet-50 h-14 w-14 font-semibold text-xl text-violet-950 hover:bg-violet-400 focus:bg-violet-400 transition duration-300 rounded-lg shadow-md`}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Controls;
