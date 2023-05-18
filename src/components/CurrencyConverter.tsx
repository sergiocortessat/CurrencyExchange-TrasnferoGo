import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFromCurrency,
  setToCurrency,
  setAmount,
  setConvertedAmount,
  setDisableButton,
} from "../redux/actions";
import { AppState } from "../redux/reducers";
import Button from "./UI/Button";
import FormControl from "./UI/FormControl";
import Select from "./UI//Select";
import TextField from "./UI//TextInput";
import DisplayConversionRate from "./DisplayConversionRate";
import InputLabel from "./UI//Input";
import TextBlock from "./UI//TextBlock";
import fetchConversion from "./FetchConversion";
import { SupportedCurrencies } from "../data/currencies";
import { SwapHoriz } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import "../Custom.scss";

const CurrencyConverter: React.FC = () => {
  const {
    fromCurrency,
    toCurrency,
    amount,
    convertedAmount,
    conversionRate,
    disableButton,
  } = useSelector((state: AppState) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchConversion(amount, fromCurrency, toCurrency, dispatch);
  }, [amount, fromCurrency, toCurrency, dispatch]);

  const handleConvert = () => {
    fetchConversion(amount, fromCurrency, toCurrency, dispatch);
    dispatch(setDisableButton(true));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;
    dispatch(setAmount(newAmount));
    if (newAmount === "") {
      dispatch(setConvertedAmount(""));
    } else if (conversionRate !== 0) {
      const converted = parseFloat(newAmount) * conversionRate;
      dispatch(setConvertedAmount(converted.toString()));
    }
  };

  const handleConvertedToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConvertedAmount = e.target.value;
    dispatch(setConvertedAmount(newConvertedAmount));
    if (newConvertedAmount === "") {
      dispatch(setAmount(""));
    } else if (conversionRate !== 0) {
      const amount = parseFloat(newConvertedAmount) / conversionRate;
      dispatch(setAmount(amount.toString()));
    }
  };

  const handleFromCurrencyChange = (
    e: React.ChangeEvent<{ value: unknown }>
  ) => {
    dispatch(setFromCurrency(e.target.value as string));
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setToCurrency(e.target.value as string));
  };

  const handleExchangeClick = () => {
    dispatch(setFromCurrency(toCurrency));
    dispatch(setToCurrency(fromCurrency));
    if (disableButton) {
      dispatch(setAmount(convertedAmount));
      dispatch(setConvertedAmount(amount));
    }
  };

  return (
    <div className="section">
      <div className="page">
        <div className="form-control">
          <FormControl className="form-control--from-currency-label">
            <InputLabel htmlFor="from-currency" className="from-currency-label">From</InputLabel>
            <Select
              id="from-currency"
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
              values={SupportedCurrencies}
              className="from-currency-select"
            />
          </FormControl>
          <div className="exchange-button-container">
            <IconButton
              className="exchange-button"
              onClick={handleExchangeClick}
            >
              <SwapHoriz />
            </IconButton>
          </div>
          <FormControl className="form-control--to-currency-label">
            <InputLabel htmlFor="to-currency" className="to-currency-label">To</InputLabel>
            <Select
              id="to-currency"
              value={toCurrency}
              onChange={handleToCurrencyChange}
              values={SupportedCurrencies}
              className="to-currency-select"
            />
          </FormControl>
        </div>
        <div className="text-input">
          <TextField
            id="amount"
            label="Amount"
            value={amount}
            onChange={handleAmountChange}
            className="text-input-amount"
            min={0}
            max={1000}
            adornments={true}
            currency={fromCurrency}
          />
          {disableButton && (
            <TextField
              id="converted-to"
              label="Converted to"
              value={convertedAmount}
              onChange={handleConvertedToChange}
              className="text-input-converted-amount"
              min={0}
              max={1000}
              adornments={true}
              currency={toCurrency}
            />
          )}
        </div>
        {disableButton && (
          <DisplayConversionRate
            conversionRate={conversionRate}
            className="text-field--rate"
            currencyFrom={fromCurrency}
            currencyTo={toCurrency}
          />
        )}
        {disableButton && (
          <TextBlock
            className="text-block"
            type="normal"
          >
            <span>All figures are live mid-market rates, wich are for information purposes only.</span>
            <br />
            <span>To see the rates for money transfer, please select money send options</span>
          </TextBlock>
        )}
        {!disableButton && (
          <div className="button-container">
            <Button
              variant="contained"
              color="primary"
              onClick={handleConvert}
              disabled={parseInt(amount) >= 1}
              className="full-width-button button"
            >
              Convert
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;

