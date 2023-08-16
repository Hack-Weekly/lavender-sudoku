import React from "react";
import Cell from "./Cell";
import Row from './Row';
import { useMyContext } from "./SelectedCellContext";

const Grid = () => {
  const { dataArray } = useMyContext();
  return (
    <div className="grid grid-cols-9 w-fit gap-1 p-1 bg-violet-950">
      {dataArray.map((content, rowIndex) => (
        <Row key={rowIndex} rowArray={content} rowId={rowIndex}></Row>
        // <Cell key={index} content={content} cellId={index}></Cell>
      ))}
    </div>
  );
};

export default Grid;
