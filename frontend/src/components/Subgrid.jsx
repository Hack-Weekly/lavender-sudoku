import React from "react";
import Cell from "./Cell";

const Subgrid = ({ cells, SubgridId }) => {
  return (
    <div className="group grid grid-cols-3 bg-violet-700 gap-0.5">
      {cells.map((content, index) => (
        <Cell key={index} content={content} cellId={[SubgridId, index]}></Cell>
      ))}
    </div>
  );
};

export default Subgrid;
