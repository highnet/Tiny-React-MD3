import React, { MouseEvent } from "react";

export interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;