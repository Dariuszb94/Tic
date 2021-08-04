import "./App.css";
import Message from "./Components/Message/Message";
import Grid from "./Components/Grid/Grid";
import { useState } from "react";
function App() {
  const [player, playerSet] = useState(1);

  return (
    <div className="container">
      <Message player={player} />
      <Grid />
    </div>
  );
}

export default App;
