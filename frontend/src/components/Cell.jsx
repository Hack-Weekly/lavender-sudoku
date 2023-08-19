import React from "react";
import { useMyContext } from "./SelectedCellContext";

const Cell = ({ content, rowId, columnId }) => {
  const { setSelectedCell } = useMyContext();

  const textColor = content.isModifiable ? "text-gray-600" : "text-gray-800";

  // Determine the alternating color for the 3x3 grids based on row and column indices
  const alternatingColor = getAlternatingColor(rowId, columnId);

  return (
    <button
      onClick={() => {
        if (content.isModifiable) {
          const cell = { row: rowId, col: columnId };
          setSelectedCell(cell);
        }
      }}
      className={`flex justify-center items-center ${alternatingColor} ${textColor} h-12 w-12 font-semibold text-2xl pb-1 ${
        content.isModifiable && "hover:bg-purple-800 hover:text-white focus:bg-purple-800"
      } rounded-lg shadow-md transition duration-300`}
    >
      {content.value}
    </button>
  );
};

// Function to determine the alternating color based on row and column indices
function getAlternatingColor(rowId, columnId) {
  // Define the two alternating colors based on your LandingPage colors
  const color1 = "bg-purple-200";
  const color2 = "bg-purple-300";
  const gridRowIndex = Math.floor(rowId / 3);
  const gridColumnIndex = Math.floor(columnId / 3);
  const gridIndex = gridRowIndex * 3 + gridColumnIndex;

  return gridIndex % 2 === 0 ? color1 : color2;
}

export default Cell;
