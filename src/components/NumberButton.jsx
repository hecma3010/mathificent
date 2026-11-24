function NumberButton({ value, handleClick }) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );
}

export default NumberButton;
