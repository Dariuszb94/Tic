import React, { useState, useContext, useEffect } from "react";
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../../Colors";

function Cell({ player, boardSet, board, index }) {
  const [filled, filledSet] = useState(null);
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [turn, turnSet] = useContext(ThemeContext);
  const fill = async () => {
    decidePlayer();
    turnSet((prev) => prev + 1);
  };
  useEffect(() => {
    updateBoard();
  }, [filled]);
  const updateBoard = () => {
    let boardUpdated = [...board];
    boardUpdated[index] = filled;
    boardSet(boardUpdated);
  };
  const decidePlayer = () => {
    switch (player) {
      case 1:
        filledSet("X");
        break;
      case 2:
        filledSet("O");
        break;
      default:
        console.log(`error player`);
    }
  };
  return (
    <div className="cell" onClick={fill}>
      {filled}
    </div>
  );
}

export default Cell;
