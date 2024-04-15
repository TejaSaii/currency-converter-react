import './App.css'
import {useState} from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const currencyInfo = useCurrencyInfo();

  const options = Object.keys(currencyInfo);

  const convert = () => {
    const fromValue = currencyInfo[fromCurrency].value;
    const toValue = currencyInfo[toCurrency].value;

    const exchangeRate = toValue/fromValue;
    setConvertedAmount((exchangeRate * amount).toFixed(2));
  }

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }


  return <>
    <div className='h-screen flex justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    }}>
      <div className='w-full'>
        <div className='relative w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 bg-white/60 backdrop-blur-sm '>
          <form onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}>
            <InputBox label="From"
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)} 
              currencyOptions={options} 
              onCurrencyChange={(currency) => setFromCurrency(currency)}
              selectCurrency={fromCurrency} 
              className='mb-3'
            /> 
            <button type='button'
              className='absolute left-1/2 top-1/3 translate-y-1/2 -translate-x-1/2 border-2 border-white rounded-md text-white bg-blue-500 hover:bg-blue-700 transition-all duration-300 hover:scale-105 px-4 py-1'
              onClick={swap}
            >Swap</button>
            <InputBox label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setToCurrency(currency)}
              selectCurrency={toCurrency} 
              className='mb-3'
              amountDisable
            />
            <button type='submit' className='w-full rounded-lg bg-blue-500 text-white px-4 py-2 text-lg'>
              Convert {fromCurrency} to {toCurrency}
            </button>
          </form>
        </div>
      </div> 
    </div>
    </>
}

export default App
