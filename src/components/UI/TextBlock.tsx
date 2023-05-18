import React from 'react';
import { Typography } from '@material-ui/core';

interface TextBlockProps {
  className?: string;
  children?: React.ReactNode;
  type?: "bold" | "normal";
}

const TextBlock: React.FC<TextBlockProps> = (props) => {
  const { children, type = "normal", className = "" } = props;
  return (
    <Typography className={`${className} font-style--${type}`}>
      {children}
    </Typography>
  );
};

export default TextBlock;
