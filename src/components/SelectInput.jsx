function SelectInput({ label, id, values, currentValue, setCurrentValue }) {
  const selectOptions = values.map((value) => (
    <option key={value[0]} value={value[1]}>
      {value[0]}
    </option>
  ));
  return (
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
  );
}

export default SelectInput;
