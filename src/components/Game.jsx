import Equation from "./Equation.jsx";
import Score from "./Score.jsx";
import Timer from "./Timer.jsx";
import NumberButton from "./NumberButton.jsx";
import ClearButton from "./ClearButton.jsx";
import "./Game.css";

function Game({ operation, maxNumber }) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const numberButtons = numbers.map((number) => (
    <NumberButton key={number} value={number} />
  ));
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
          {numberButtons}
          <ClearButton />
        </div>
      </div>
    </main>
  );
}

export default Game;
