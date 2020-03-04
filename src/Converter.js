import React from "react";
import "./App.css";

const Converter = ({
  currencies,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount
}) => {
  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select
        className="option"
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencies.map(currency => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Converter;
