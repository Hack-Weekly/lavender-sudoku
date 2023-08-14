import React from "react";
import Subgrid from "./Subgrid";

const Grid = () => {
  let grid = [
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
  ];
  return (
    <div className="grid grid-cols-3 w-fit gap-1 p-1 bg-violet-950">
      {grid.map((cells, index) => (
        <Subgrid key={index} cells={cells} SubgridId={index}></Subgrid>
      ))}
    </div>
  );
};

export default Grid;
