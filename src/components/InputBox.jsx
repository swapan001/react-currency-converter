import React from 'react';
import { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`flex flex-col md:flex-row gap-4 p-4 bg-white rounded-xl shadow-md ${className}`}>
      {/* Amount Input */}
      <div className="w-full md:w-1/2 flex flex-col">
        <label htmlFor={amountInputId} className="text-sm font-semibold text-gray-700 mb-1">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder="Enter amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
        />
      </div>

      {/* Currency Selector */}
      <div className="w-full md:w-1/2 flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-1">Currency Type</label>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
