import React, { Fragment } from "react";
import "./currency-converter.css";
import CurrencyDropdown from "./CurrencyDropdown";
import CurrencyTextBox from "./CurrencyTextBox";
const CurrencyConverter = ({
  currencyTypes,
  inputValue,
  inputCurrencyType,
  outputCurrencyType,
  outputValue,
  handleChange,
  handleConvert,
}) => {
  const btnDisabled =
    inputValue != 0 &&
    inputCurrencyType.length &&
    outputCurrencyType.length &&
    inputCurrencyType != outputCurrencyType
      ? false
      : true;
  return (
    <Fragment>
      <div className="container">
        <div className="row input-container">
          <div className="col-md-4 offset-md-1">
            <div className="input-amount">
              <p>Input Amount</p>
              <CurrencyTextBox
                inputType="number"
                inputValue={inputValue}
                name="inputValue"
                handleChange={handleChange}
              />
              <CurrencyDropdown
                currencyTypes={currencyTypes}
                handleChange={handleChange}
                name="inputCurrencyType"
                currencyValue={inputCurrencyType}
              />
            </div>
          </div>
          <div className="col-md-2 text-center">
            <button
              onClick={handleConvert}
              disabled={btnDisabled}
              className="convert"
            >
              Convert
            </button>
          </div>
          <div className="col-md-4">
            <div className="output-amount">
              <p>Output Amount</p>
              <CurrencyTextBox
                inputType="number"
                inputValue={outputValue}
                name="outputValue"
                handleChange={handleChange}
              />
              <CurrencyDropdown
                currencyTypes={currencyTypes}
                handleChange={handleChange}
                name="outputCurrencyType"
                currencyValue={outputCurrencyType}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CurrencyConverter;
