import { useState } from "react";
import "./App.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function App() {
  const [outputString, setOutputString] = useState("");

  const handleClick = (letter) => {
    let newOutputString = outputString + letter;

    newOutputString = newOutputString.replace(/([A-Z])\1{2,}/g, "_");

    setOutputString(newOutputString);
  };

  return (
    <div className="App">
      <h1>Alphabet Tile Interaction</h1>
      <div className="tile-grid">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className="tile"
            onClick={() => handleClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div id="outputString">{outputString}</div>
    </div>
  );
}

export default App;
