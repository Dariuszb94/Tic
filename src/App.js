import "./App.css";
import Message from "./Components/Message/Message";
import Grid from "./Components/Grid/Grid";
import { useState, useContext, useEffect } from "react";
import ThemeContext from "./Components/ThemeContext";
function App() {
  const [player, playerSet] = useState(1);
  const turnFunction = useState(1);
  const turn = turnFunction[0];
  useEffect(() => {
    console.log(turn);
    if (turn % 2 === 0) playerSet(2);
    else playerSet(1);
  }, [turnFunction]);
  return (
    <ThemeContext.Provider value={turnFunction}>
      <div className="container">
        <Message player={player} />
        <Grid />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
