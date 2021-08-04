import React, { useState } from "react";

function Cell({ turnSet }) {
  const [filled, filledSet] = useState(null);
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
