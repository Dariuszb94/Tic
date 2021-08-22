import React, { useState, useEffect } from "react";
import Cell from "./GridComponents/Cell";

import "./Grid.scss";
function Grid({ player }) {
  const [board, boardSet] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
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
  useEffect(() => {
    XWin();
  }, [board]);
  const XWin = () => {
    let boardMapped = [];
    board.forEach((value, i) => {
      if (value === "X") boardMapped.push(i);
    });
    checkIfWinner(boardMapped);
  };
  const checkIfWinner = (boardMapped) => {
    const is = cellsFill.some((x) => {
      return x.join() == boardMapped.join();
    });
    console.log(is);
  };
  return (
    <section className="grid">
      {board &&
        board.map((el, index) => {
          return (
            <Cell
              player={player}
              index={index}
              boardSet={boardSet}
              board={board}
            ></Cell>
          );
        })}
    </section>
  );
}

export default Grid;
