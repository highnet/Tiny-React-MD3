import React, { MouseEvent } from "react";

export interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  configuration: string;
}

const Button: React.FC<IButtonProps> = ({ children, onClick, configuration }) => {
  
  var btn = <button className={"btn btn-" + configuration} onClick={onClick}>{children}</button>;
  return btn;
};

export default Button;