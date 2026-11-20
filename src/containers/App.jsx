import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Game from "../components/Game.jsx";
import { useState } from "react";

function App() {
  const [operation, setOperation] = useState("x");
  const [maxNumber, setMaxNumber] = useState(10);
  const date = new Date();
  const currentHour = date.getHours();
  let greeting;
  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  return (
    <>
      <Header />
      <h1 className="text-center">Mathificent</h1>
      <p className="text-center">{greeting}, ready to practice?</p>
      <p className="text-center">
        {currentHour < 18
          ? "Plenty of time to practice today!"
          : "One last round before bed?"}
      </p>
      <Main
        operation={operation}
        setOperation={setOperation}
        maxNumber={maxNumber}
        setMaxNumber={setMaxNumber}
      />
      <Game operation={operation} maxNumber={maxNumber} />
      <Footer />
    </>
  );
}

export default App;
