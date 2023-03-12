import React, { MouseEvent } from "react";

export interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const buttonStyle = {
  background: "#007bff",
  border: "none",
  color: "white",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "16px",
  borderRadius: "5px",
};

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return <button style={buttonStyle} onClick={onClick}>{children}</button>;
};

export default Button;