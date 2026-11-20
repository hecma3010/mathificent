function SelectInput({ label, id, values, currentValue, setCurrentValue }) {
  const selectOptions = values.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        id={id}
        className="form-select"
        defaultValue={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      >
        {selectOptions}
      </select>
    </div>
  );
}

export default SelectInput;
