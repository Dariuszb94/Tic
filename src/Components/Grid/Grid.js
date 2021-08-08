import React, { useState, useEffect } from "react";
import Cell from "./GridComponents/Cell";
import "./Grid.scss";
function Grid({ player }) {
  return (
    <section className="grid">
      <Cell player={player} />
      <Cell player={player} />
      <Cell player={player} />
      <Cell player={player} />
      <Cell player={player} />
      <Cell player={player} />
      <Cell player={player} />
      <Cell player={player} />
      <Cell player={player} />
    </section>
  );
}

export default Grid;
