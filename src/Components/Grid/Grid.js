import React, { useState, useEffect } from "react";
import Cell from "./GridComponents/Cell";

import "./Grid.scss";
function Grid({ player }) {
  const [board, boardSet] = useState([11, 2, 3]);
  const [cellsFill, cellsFillSet] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ]);

  return (
    <section className="grid">
      {board &&
        board.map((el, index) => {
          console.log(el);
          return <Cell player={player} cellFillSet={boardSet}></Cell>;
        })}
    </section>
  );
}

export default Grid;
