import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CurrencyConverter from './components/CurrencyConverter';
import "./styles/Custom.scss";

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
