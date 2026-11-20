import { useState } from "react";
import { Routes, Route } from "react-router";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Game from "../components/Game.jsx";

function App() {
  const [operation, setOperation] = useState("x");
  const [maxNumber, setMaxNumber] = useState(10);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              operation={operation}
              setOperation={setOperation}
              maxNumber={maxNumber}
              setMaxNumber={setMaxNumber}
            />
          }
        />
        <Route
          path="/play"
          element={<Game operation={operation} maxNumber={maxNumber} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
