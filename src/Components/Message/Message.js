import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Message() {
  const turn = useContext(ThemeContext)[0];
  return <section>Player {turn}turn</section>;
}

export default Message;
