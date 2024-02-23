// Settings.js
import React, { useState } from 'react';
import { useCrypto } from '../CryptoContext';
import './../assets/css/Settings.css'

const Settings = () => {
  const { cryptos } = useCrypto();
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
    // Update user settings or context with the new currency
  };

  return (
    <div>
      <h2>Settings</h2>
      <label>Select Currency:</label>
      <select value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        {/* Add more currency options as needed */}
      </select>
    </div>
  );
};

export default Settings;
