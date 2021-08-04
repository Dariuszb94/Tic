import React, { useState } from "react";
import Cell from "./GridComponents/Cell";
import "./Grid.scss";
function Grid() {
  const [turn, turnSet] = useState(0);

  return (
    <section className="grid">
      <Cell turnSet={turnSet} />
      <Cell turnSet={turnSet} />
      <Cell turnSet={turnSet} />
      <Cell turnSet={turnSet} />
      <Cell turnSet={turnSet} />
      <Cell turnSet={turnSet} />
      <Cell turnSet={turnSet} />
      <Cell turnSet={turnSet} />
      <Cell turnSet={turnSet} />
      {turn}
    </section>
  );
}

export default Grid;
