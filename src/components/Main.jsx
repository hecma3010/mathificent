import SelectInput from "./SelectInput.jsx";
import PlayButton from "./PlayButton.jsx";

function Main() {
  const operations = ["+", "-", "x", "/"];
  const numbers = [];
  for (let i = 2; i <= 100; i++) {
    numbers.push(i);
  }
  return (
    <>
      <main>
        <SelectInput label="Operation" id="operation" values={operations} />
        <SelectInput label="Maximum Number" id="max-number" values={numbers} />
        <PlayButton />
      </main>
    </>
  );
}

export default Main;
