import React, { useState, useContext } from "react";
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../../Colors";

function Cell() {
  const [filled, filledSet] = useState(null);
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [turn, turnSet] = useContext(ThemeContext);
  const fill = () => {
    filledSet("X");
    turnSet((prev) => prev + 1);
  };
  return (
    <div className="cell" onClick={fill}>
      {filled}
    </div>
  );
}

export default Cell;
