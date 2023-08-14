import React from "react";
import Cell from "./Cell";

const Grid = () => {
  let grid = [];
  for (let i = 0; i < 81; i++) {
    grid.push("");
  }
  return (
    <div className="grid grid-cols-9 w-fit gap-1 p-1 bg-violet-950">
      {grid.map((content, index) => (
        <Cell key={index} content={content} cellId={index}></Cell>
      ))}
    </div>
  );
};

export default Grid;
