import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [rate1, setRate1] = useState('');
  const [rate2, setRate2] = useState('');
  const [exchangeRate, setExchangeRate] = useState('1 USD = 74.85 INR 💱');

  const fetchExchangeRate = async () => {
    try {
      let res = await fetch(
        'https://v6.exchangerate-api.com/v6/09379841b1f04e05f265154b/latest/USD'
      );
      if (!res.ok) throw new Error('Network response was not ok');
      let data = await res.json();
      return data.conversion_rates;
    } catch (error) {
      alert('Failed to fetch exchange rates. Please try again later.');
      console.error(error);
    }
  };

  const searchHandler = async () => {
    const rates = await fetchExchangeRate();
    const currency1 = document.getElementById('currency1').value;
    const currency2 = document.getElementById('currency2').value;
    const rate1Value = parseFloat(rate1) || 1;
    const rate2Value = parseFloat(rate2) || 1;

    if (rates && currency1 && currency2) {
      if (rate1 && rate2) {
        const rate = (rates[currency2] / rates[currency1]) * rate1Value * rate2Value;
        setExchangeRate(`Exchange Rate: ${rate.toFixed(2)} 💱`);
      } else if (rate1) {
        const rate = (rates[currency2] / rates[currency1]) * rate1Value;
        setExchangeRate(`Exchange Rate: ${rate.toFixed(2)} 💱`);
      } else if (rate2) {
        const rate = (rates[currency2] / rates[currency1]) * rate2Value;
        setExchangeRate(`Exchange Rate: ${rate.toFixed(2)} 💱`);
      } else {
        setExchangeRate('Exchange Rate: 1 USD = 74.85 INR 💱');
      }
    }
  };

  const clearHandler = () => {
    setRate1('');
    setRate2('');
    setExchangeRate('1 USD = 74.85 INR 💱');
    document.getElementById('currency1').selectedIndex = 0;
    document.getElementById('currency2').selectedIndex = 0;
  };

  return (
    <div className="app">
      <div className="title">💱 Exchange Rate 💱</div>
      <div className="main">
        <div className="input-group">
          <div className="left">
            <input
              value={rate1}
              onChange={(e) => setRate1(e.target.value)}
              placeholder="Enter rate 🔢"
              type="number"
            />
            <select id="currency1">
              <option value="USD">USD 🇺🇸</option>
              <option value="EUR">EUR 🇪🇺</option>
              <option value="JPY">JPY 🇯🇵</option>
            </select>
          </div>

          <div className="left">
            <input
              value={rate2}
              onChange={(e) => setRate2(e.target.value)}
              placeholder="Enter rate 🔢"
              type="number"
            />
            <select id="currency2">
              <option value="INR">INR 🇮🇳</option>
              <option value="GBP">GBP 🇬🇧</option>
              <option value="AUD">AUD 🇦🇺</option>
            </select>
          </div>
        </div>

        <div className="exchange-rate" id="exchangeRateDisplay">
          {exchangeRate}
        </div>

        <button className="search-btn" onClick={searchHandler}>
          🔍 Search
        </button>
        <button className="clear-btn" onClick={clearHandler}>
          🗑️ Clear
        </button>
      </div>
    </div>
  );
};

export default App;
