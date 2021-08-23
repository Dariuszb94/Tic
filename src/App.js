import "./App.css";
import Message from "./Components/Message/Message";
import Grid from "./Components/Grid/Grid";
import { useState, useContext, useEffect } from "react";
import ThemeContext from "./Components/ThemeContext";
function App() {
  const [player, playerSet] = useState("X");
  const turnFunction = useState(1);
  const turn = turnFunction[0];
  useEffect(() => {
    if (turn % 2 === 0) playerSet("Y");
    else playerSet("X");
  }, [turnFunction]);

  return (
    <ThemeContext.Provider value={turnFunction}>
      <div className="container">
        <Message player={player} />
        <Grid player={player} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
