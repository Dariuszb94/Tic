import React, { useState, useEffect } from "react";
import Cell from "./GridComponents/Cell";
import Winner from "./GridComponents/Winner";
import "./Grid.scss";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
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
  const [history, historySet] = useState([]);
  const [winner, winnerSet] = useState(null);
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
  const db = new Dexie("test");
  db.version(1).stores({
    friends: "++id",
  });
  useEffect(() => {
    mapBoard("X");
    mapBoard("O");
  }, [board]);
  const mapBoard = (xOrY) => {
    let boardMapped = [];
    board.forEach((value, i) => {
      if (value === xOrY) boardMapped.push(i);
    });
    checkIfWinner(boardMapped);
  };
  useEffect(() => {
    if (!JSON.stringify(history).includes(JSON.stringify(board)))
      historySet((prev) => [...prev, board]);
  }, [board]);
  const checkIfWinner = (boardMapped) => {
    const is = cellsFill.some((x) => {
      return x.join() == boardMapped.join();
    });
    cellsFill.forEach((value, i) => {
      if (value.join() === boardMapped.join()) {
        winnerSet(board[boardMapped[0]]);
      }
    });
  };
  const rewindMove = () => {
    const historyCopy = [...history];
    boardSet(historyCopy[historyCopy.length - 2]);
    historyCopy.pop();
    const historyCopyPoped = historyCopy.slice(0, -1);
    historySet(historyCopyPoped);
  };
  useEffect(() => {
    //db.friends.clear();
    db.friends.put({ history: history.join() });
  }, [history]);
  return (
    <section className="grid">
      <div className="grid__inner">
        {board &&
          board.map((_, index) => {
            return (
              <Cell
                player={player}
                index={index}
                boardSet={boardSet}
                board={board}
                winner={winner}
              ></Cell>
            );
          })}
      </div>
      <button type="button" onClick={rewindMove}>
        Back
      </button>
      {winner && <Winner winner={winner} />}
    </section>
  );
}

export default Grid;
