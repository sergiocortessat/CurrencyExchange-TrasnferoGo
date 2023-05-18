import React from "react";
import { MenuItem, Select as MaterialSelect } from "@material-ui/core";
import { currencyImages } from "../../data/currencies";

interface SelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  values: string[];
  className?: string;
  id?: string;
}

const Select: React.FC<SelectProps> = (props) => {
  const { value, onChange, values, className = "", id } = props;
  return (
    <MaterialSelect
      id={id}
      value={value}
      onChange={onChange}
      className={className}
    >
      {values.map((option) => (
        <MenuItem key={option} value={option}>
          <img src={currencyImages[option]} alt={option} />
          {option}
        </MenuItem>
      ))}
    </MaterialSelect>
  );
};

export default Select;
