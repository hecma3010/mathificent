function ClearButton({ handleClick }) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      style={{ width: "4.2em" }}
      onClick={() => handleClick("")}
    >
      Clear
    </button>
  );
}

export default ClearButton;
