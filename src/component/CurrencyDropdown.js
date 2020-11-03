import React, { Fragment } from "react";

const CurrencyDropdown = ({
  currencyTypes,
  handleChange,
  name,
  currencyValue,
}) => {
  return (
    <Fragment>
      <div className="form-group">
        <label>
          <select
            name={name}
            value={currencyValue}
            onChange={handleChange}
            className="form-control"
          >
            {currencyTypes.map((type, index) => {
              return (
                <option key={index} value={type == "SELECT" ? "" : type}>
                  {type}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    </Fragment>
  );
};
export default CurrencyDropdown;
