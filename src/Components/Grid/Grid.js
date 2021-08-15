import React, { useState, useEffect } from "react";
import Cell from "./GridComponents/Cell";
import "./Grid.scss";
function Grid({ player }) {
  const [cell1Fill, cell1FillSet] = useState("");
  const [cell2Fill, cell2FillSet] = useState("");
  const [cell3Fill, cell3FillSet] = useState("");
  const [cell4Fill, cell4FillSet] = useState("");
  const [cell5Fill, cell5FillSet] = useState("");
  const [cell6Fill, cell6FillSet] = useState("");
  const [cell7Fill, cell7FillSet] = useState("");
  const [cell8Fill, cell8FillSet] = useState("");
  const [cell9Fill, cell9FillSet] = useState("");
  useEffect(() => {
    if (
      cell1Fill === cell2Fill &&
      cell1Fill === cell3Fill &&
      cell2Fill === cell3Fill &&
      cell1Fill != null &&
      cell2Fill != null &&
      cell3Fill != null
    )
      console.log(cell1Fill);
  }, [
    cell1Fill,
    cell2Fill,
    cell3Fill,
    cell4Fill,
    cell5Fill,
    cell6Fill,
    cell7Fill,
    cell8Fill,
    cell9Fill,
  ]);
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
