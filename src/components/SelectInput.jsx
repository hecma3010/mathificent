import { Fragment } from "react";
function SelectInput(props) {
  const selectOptions = props.values.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));
  return (
    <Fragment>
      <div>
        <div className="mb-3">
          <label htmlFor={props.id} className="form-label">
            {props.label}
          </label>
          <select id={props.id} className="form-select">
            {selectOptions}
          </select>
        </div>
      </div>
    </Fragment>
  );
}

export default SelectInput;
