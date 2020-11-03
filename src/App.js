import React, { Component, Fragment } from "react";
import axios from "axios";
import CurrencyConverter from "./component/Currency-Converter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: 0,
      inputCurrencyType: "",
      outputValue: 0,
      outputCurrencyType: "",
      currencyTypes: [
        "SELECT",
        "AUD",
        "BGN",
        "BRL",
        "CAD",
        "CHF",
        "CNY",
        "CZK",
        "DKK",
        "EUR",
        "GBP",
        "HKD",
        "HRK",
        "HUF",
        "IDR",
        "ILS",
        "INR",
        "ISK",
        "JPY",
        "KRW",
        "MXN",
        "MYR",
        "NOK",
        "NZD",
        "PHP",
        "PLN",
        "RON",
        "RUB",
        "SEK",
        "SGD",
        "THB",
        "TRY",
        "USD",
        "ZAR",
      ],
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleConvert = () => {
    const { inputValue, inputCurrencyType, outputCurrencyType } = this.state;
    axios
      .get(
        `https://api.frankfurter.app/latest?amount=${inputValue}&from=${inputCurrencyType}&to=${outputCurrencyType}`
      )
      .then((response) => {
        this.setState({
          outputValue: response.data.rates[outputCurrencyType],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const {
      currencyTypes,
      inputValue,
      inputCurrencyType,
      outputValue,
      outputCurrencyType,
    } = this.state;
    return (
      <Fragment>
        <CurrencyConverter
          currencyTypes={currencyTypes}
          inputValue={inputValue}
          inputCurrencyType={inputCurrencyType}
          outputValue={outputValue}
          outputCurrencyType={outputCurrencyType}
          handleChange={this.handleChange}
          handleConvert={this.handleConvert}
        />
      </Fragment>
    );
  }
}

export default App;
