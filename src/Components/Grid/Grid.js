import React, { useState, useEffect } from "react";
import Cell from "./GridComponents/Cell";
import "./Grid.scss";
function Grid({ player }) {
  const [cell1Fill, cell1FillSet] = useState("1");
  const [cell2Fill, cell2FillSet] = useState("2");
  const [cell3Fill, cell3FillSet] = useState("3");
  const [cell4Fill, cell4FillSet] = useState("");
  const [cell5Fill, cell5FillSet] = useState("");
  const [cell6Fill, cell6FillSet] = useState("");
  const [cell7Fill, cell7FillSet] = useState("");
  const [cell8Fill, cell8FillSet] = useState("");
  const [cell9Fill, cell9FillSet] = useState("");

  return (
    <section className="grid">
      <Cell player={player} cellFillSet={cell1FillSet} />
      <Cell player={player} cellFillSet={cell2FillSet} />
      <Cell player={player} cellFillSet={cell3FillSet} />
      <Cell player={player} cellFillSet={cell4FillSet} />
      <Cell player={player} cellFillSet={cell5FillSet} />
      <Cell player={player} cellFillSet={cell6FillSet} />
      <Cell player={player} cellFillSet={cell7FillSet} />
      <Cell player={player} cellFillSet={cell8FillSet} />
      <Cell player={player} cellFillSet={cell9FillSet} />
    </section>
  );
}

export default Grid;
