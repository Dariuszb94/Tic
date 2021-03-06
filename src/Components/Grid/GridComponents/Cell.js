import React, { useState, useContext, useEffect } from "react";
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../../Colors";

function Cell({ player, boardSet, board, index, winner }) {
  const [filled, filledSet] = useState(null);
  const theme = useContext(ThemeContext)[0];
  //const currentTheme = AppTheme[theme];
  const [turn, turnSet] = useContext(ThemeContext);
  const fill = async () => {
    if (filled != null) return;
    decidePlayer();
    turnSet((prev) => prev + 1);
  };
  useEffect(() => {
    updateBoard();
  }, [filled]);
  useEffect(() => {}, [filled]);
  const updateBoard = () => {
    let boardUpdated = [...board];
    boardUpdated[index] = filled;
    boardSet(boardUpdated);
  };
  useEffect(() => {
    filledSet(board[index]);
  }, [board]);
  const decidePlayer = () => {
    switch (player) {
      case "X":
        filledSet("X");
        break;
      case "O":
        filledSet("O");
        break;
      default:
        console.log(`error player`);
    }
  };
  return (
    <div className={`cell${winner || filled ? "--filled" : ""}`} onClick={fill}>
      {filled}
    </div>
  );
}

export default Cell;
