import React from 'react';
import { TextField as MaterialTextField, InputAdornment } from '@material-ui/core';

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  min?: number;
  max?: number;
  currency?: string;
  id?: string;
  adornments?: boolean;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const { label, value, onChange, type = 'number', className = '', min = 1, max = 10000, currency, id, adornments = false } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(e.target.value);
    const isAmountField = label.toLowerCase() === 'amount'; // Check if the label is "amount"
    const isSendingCurrency = currency && currency !== ''; // Check if it's a sending currency
    const sendingCurrencyLimits: { [key: string]: number } = {
      PLN: 20000,
      EUR: 5000,
      GBP: 1000,
      UAH: 50000,
    };

    if (isAmountField && isSendingCurrency && ((!isNaN(min) && inputValue < min) || (!isNaN(sendingCurrencyLimits[currency as string]) && inputValue > sendingCurrencyLimits[currency as string]))) {
      return; // Do not call onChange if the input is outside the provided min/max range for the "amount" field
    }


    if (!isAmountField && ((!isNaN(min) && inputValue < min) || (!isNaN(max) && inputValue > max))) {
      return; // Do not call onChange if the input is outside the provided min/max range
    }

    onChange(e);
  };


  return (
    <MaterialTextField
      id={id}
      label={label}
      value={value}
      onChange={handleInputChange}
      type={type}
      className={className}
      InputProps={adornments ? { endAdornment: <InputAdornment position="end">{currency}</InputAdornment> } : {}}
    />
  );
};

export default TextField;
