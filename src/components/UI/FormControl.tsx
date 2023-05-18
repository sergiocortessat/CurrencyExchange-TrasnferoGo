import React from 'react';
import { FormControl as MaterialFormControl } from '@material-ui/core';

interface FormControlProps {
  className?: string;
  children: React.ReactNode;
}

const FormControl: React.FC<FormControlProps> = (props) => {
  const { children, className = "" } = props;
  return (
    <MaterialFormControl className={className}>
      {children}
    </MaterialFormControl>
  );
};

export default FormControl;
