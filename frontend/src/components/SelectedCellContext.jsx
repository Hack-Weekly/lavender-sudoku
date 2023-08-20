import { createContext, useContext, useState, useEffect } from "react";

const MyContext = createContext();

function replaceZeros(sudokuArray) {
  const newGrid = sudokuArray.map((row) =>
    row.map((cell) =>
      cell === "" || cell === 0
        ? { value: "", isModifiable: true }
        : { value: cell, isModifiable: false }
    )
  );
  return newGrid;
}

export const MyContextProvider = ({ children, grid }) => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    if (grid) {
      let processedGrid = grid;
      if (typeof processedGrid[0][0] === "number") processedGrid = replaceZeros(grid);
      setDataArray(processedGrid);
      setSelectedCell(null);
    }
  }, [grid]);

  return (
    <MyContext.Provider
      value={{ selectedCell, setSelectedCell, dataArray, setDataArray }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
