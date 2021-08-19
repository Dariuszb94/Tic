import React, { useState, useEffect } from "react";
import Cell from "./GridComponents/Cell";
import "./Grid.scss";
function Grid({ player }) {
  const [board, boardSet] = useState([11, 2, 3]);

  return (
    <section className="grid">
      {board &&
        board.map((el) => {
          return (
            <div>
              aaa
              <Cell player={player} cellFillSet={boardSet} />
            </div>
          );
        })}
    </section>
  );
}

export default Grid;
