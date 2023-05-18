import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CurrencyConverter />
      </div>
    </Provider>
  );
}

export default App;
