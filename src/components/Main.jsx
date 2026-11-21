import SelectInput from "./SelectInput.jsx";
import PlayButton from "./PlayButton.jsx";
import "./Main.css";

function Main({ operation, setOperation, maxNumber, setMaxNumber }) {
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
  const operations = ["+", "-", "x", "/"];
  const numbers = [];
  for (let i = 2; i <= 100; i++) {
    numbers.push(i);
  }
  return (
    <main>
      <h1 className="text-center">Mathificent</h1>
      <p className="text-center">{greeting}, ready to practice?</p>
      <p className="text-center">
        {currentHour < 18
          ? "Plenty of time to practice today!"
          : "One last round before bed?"}
      </p>
      <div className="row mx-1 my-3">
        <SelectInput
          label="Operation"
          id="operation"
          values={operations}
          currentValue={operation}
          setCurrentValue={setOperation}
        />
      </div>
      <div className="row mx-1 my-3">
        <SelectInput
          label="Maximum Number"
          id="max-number"
          values={numbers}
          currentValue={maxNumber}
          setCurrentValue={setMaxNumber}
        />
      </div>
      <div className="row mx-1 my-3">
        <PlayButton />
      </div>
    </main>
  );
}

export default Main;
