import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
// import ChaiPhoto from "./components/ChaiPhoto";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
  
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-orange-500 py-4">
        <h1 className="text-white text-center text-2xl font-semibold">
          Currency App
        </h1>
      </header>

      {/* Main */}
      <main className="flex flex-col lg:flex-row p-6 gap-6 max-w-7xl mx-auto flex-grow">
        {/* Left Panel */}
        



        {/* Right Panel */}
        <section className="flex-1 bg-black p-6 rounded-lg border-2 border-blue-900">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="bg-white p-6 rounded-md shadow-md flex flex-col gap-4"
          >
            {/* From Input */}
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(val) => setAmount(val)}
              selectCurrency={from}
            />

            {/* Swap Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={swap}
                className="px-4 py-2 bg-blue-200 rounded hover:bg-blue-300"
              >
                Swap
              </button>
            </div>

            {/* To Input */}
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />

            {/* Convert Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-orange-400 text-black rounded hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!from || !to || amount === 0}
              >
                {from && to
                  ? `Convert ${from.toUpperCase()} → ${to.toUpperCase()}`
                  : "Convert"}
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-500 py-4 mt-auto">
        <p className="text-white text-center text-lg font-semibold">
          copyright @{year}
        </p>
      </footer>
    </div>
  );
}


export default App;
