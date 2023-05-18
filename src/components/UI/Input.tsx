import React from "react";
import { InputLabel as MaterialInputLabel } from "@material-ui/core";

interface InputLabelProps {
  className?: string;
  children: React.ReactNode;
  htmlFor?: string;
}

const FormControl: React.FC<InputLabelProps> = (props) => {
  const { children, className = "", htmlFor = "" } = props;
  return (
    <MaterialInputLabel className={className} htmlFor={htmlFor}>
      {children}
    </MaterialInputLabel>
  );
};

export default FormControl;
