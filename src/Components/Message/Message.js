import React, { useContext, useEffect } from "react";
import ThemeContext from "../ThemeContext";

function Message({ player }) {
  const turn = useContext(ThemeContext)[0];

  return (
    <section>
      Player {player} turn ({turn})
    </section>
  );
}

export default Message;
