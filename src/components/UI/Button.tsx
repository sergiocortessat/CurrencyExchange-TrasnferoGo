import React from 'react';

interface ButtonProps {
  variant: 'contained' | 'outlined' | 'text';
  color: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
  disabled: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { variant, color, onClick, disabled, children, className = "btn" } = props;
  return (
    <button
      className={`custom-button ${variant} ${color}-color ${className} custom-button--${!disabled}`}
      onClick={onClick}
      disabled={!disabled}
    >
      {children}
    </button>
  );
};

export default Button;
