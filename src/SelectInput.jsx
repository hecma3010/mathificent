function SelectInput() {
  return (
    <>
      <div>
        <div className="mb-3">
          <label htmlFor="select" className="form-label">
            Select Label
          </label>
          <select id="select" className="form-select">
            <option value="Sample Value">Sample Value</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SelectInput;
