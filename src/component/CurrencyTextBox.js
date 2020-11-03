import React, { Fragment } from "react";

const CurrencyTextBox = ({ inputType, inputValue, name, handleChange }) => {
  return (
    <Fragment>
      <div className="form-group">
        <input
          type={inputType}
          value={inputValue}
          name={name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    </Fragment>
  );
};
export default CurrencyTextBox;
