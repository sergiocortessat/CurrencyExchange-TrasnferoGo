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
  adornments?: boolean
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const { label, value, onChange, type = 'number', className = '', min = 1, max = 1000, currency, id, adornments = false } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(e.target.value);
    if ((!isNaN(min) && inputValue < min) || (!isNaN(max) && inputValue > max)) {
      return;
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
