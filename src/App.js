import "./App.css";
import Message from "./Components/Message/Message";
import Grid from "./Components/Grid/Grid";
import { useState, useContext, useEffect } from "react";
import ThemeContext from "./Components/ThemeContext";
function App() {
  const [player, playerSet] = useState(1);
  const turn = useState(1);

  return (
    <ThemeContext.Provider value={turn}>
      <div className="container">
        <Message player={player} />
        <Grid />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
