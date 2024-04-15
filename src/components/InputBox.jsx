import { useId } from "react";

const InputBox = ({
  label,
  amount = 0,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  selectCurrency = "INR",
  amountDisable = false,
  currencyDisable = false,
  className = ''
}) => {

  const amountInputId = useId();

  return (
    <div className={`bg-white p-4 text-lg rounded-lg flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="inline-block text-black/40 mb-2">{label}</label>
        <input 
          type="number"
          value={amount} 
          className="outline-none p-1.5 w-full border border-black/50 rounded-lg"
          placeholder="Amount"
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
          id={amountInputId} 
          disabled={amountDisable}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end">
        <label htmlFor="currencySelect" className="inline-block text-black/40 w-full text-right mb-2">Currency Type</label>
        <select id="currencySelect"
          value={selectCurrency} 
          className="rounded-lg p-1 outline-none cursor-pointer bg-gray-100"
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} 
          disabled={currencyDisable}>
          {currencyOptions && currencyOptions.map((curr) => (
            <option key={curr} value={curr}>{curr}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox;
