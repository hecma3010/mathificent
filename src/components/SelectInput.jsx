import { Fragment } from "react";
function SelectInput({ label, id, values }) {
  const selectOptions = values.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));
  return (
    <Fragment>
      <div>
        <div className="mb-3">
          <label htmlFor={id} className="form-label">
            {label}
          </label>
          <select id={id} className="form-select">
            {selectOptions}
          </select>
        </div>
      </div>
    </Fragment>
  );
}

export default SelectInput;
