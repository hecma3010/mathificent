function Game({ operation, maxNumber }) {
  return (
    <div>
      <p>
        Operation is <strong>{operation}</strong>.
      </p>
      <p>
        Maximum number is <strong>{maxNumber}</strong>.
      </p>
    </div>
  );
}
export default Game;
