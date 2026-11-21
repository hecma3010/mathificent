function SelectInput({ label, id, values, currentValue, setCurrentValue }) {
  const selectOptions = values.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));
  return (
    <div className="row">
      <>
        <label htmlFor={id} className="col fw-bold">
          {label}
        </label>
        <select
          id={id}
          className="col form-select"
          defaultValue={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        >
          {selectOptions}
        </select>
      </>
    </div>
  );
}

export default SelectInput;
