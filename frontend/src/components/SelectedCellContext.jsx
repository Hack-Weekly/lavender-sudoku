import { createContext, useContext, useState, useEffect } from "react";

const MyContext = createContext();

function replaceZeros(sudokuString) {
  const rowsString = sudokuString.substring(1, sudokuString.length - 1);
  const rows = rowsString.split("], [");
  const sudokuArray = rows.map(row => row.split(", ").map(cell => (cell === '0' ? '' : parseInt(cell))));

  const firstValue = parseInt(sudokuString[2]);
  const lastValue = parseInt(sudokuString[sudokuString.length - 3]);

  sudokuArray[0][0] = firstValue;
  sudokuArray[8][8] = lastValue;

  const newGrid = sudokuArray.map(row => row.map(cell => (cell === 0 ? '' : cell)));
  return newGrid;
}


export const MyContextProvider = ({ children, grid }) => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    if (grid) {
      const processedGrid = replaceZeros(grid);
      setDataArray(processedGrid);
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
