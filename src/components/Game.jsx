import Equation from "./Equation.jsx";
import Score from "./Score.jsx";
import Timer from "./Timer.jsx";
import NumberButton from "./NumberButton.jsx";
import ClearButton from "./ClearButton.jsx";
import "./Game.css";

function Game({ operation, maxNumber }) {
  return (
    <main className="text-center" id="game-container">
      <div className="row border-bottom" style={{ fontSize: "1.5em" }}>
        <div className="col px-3 text-start">
          <Score score="0" />
        </div>
        <div className="col px-3 text-end">
          <Timer timeLeft="60" />
        </div>
      </div>
      <div className="row text-secondary my-2" id="equation">
        <Equation question="1 + 1" answer="2" />
      </div>
      <div className="row" id="buttons">
        <div className="col">
          <NumberButton value="1" />
          <NumberButton value="2" />
          <NumberButton value="3" />
          <NumberButton value="4" />
          <NumberButton value="5" />
          <NumberButton value="6" />
          <NumberButton value="7" />
          <NumberButton value="8" />
          <NumberButton value="9" />
          <NumberButton value="0" />
          <ClearButton />
        </div>
      </div>
    </main>
  );
}

export default Game;
