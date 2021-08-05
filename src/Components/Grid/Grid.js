import React, { useState } from "react";
import Cell from "./GridComponents/Cell";
import "./Grid.scss";
function Grid() {
  return (
    <section className="grid">
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </section>
  );
}

export default Grid;
