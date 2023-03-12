import React, { MouseEvent, useState } from "react";

export interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  configuration?: string;
  icon?: boolean;

}

const Button: React.FC<IButtonProps> = ({ children, onClick, configuration }) => {

  const [_config, setConfig] = useState(configuration || "outlined");

  const toggleConfig = () => {
    setConfig(_config === "filled" ? "outlined" : "filled");
  };

  return (
    <button
      className={"btn btn-" + _config}
      onClick={(e) => {
        onClick?.(e);
        toggleConfig();
      }}
    >
      {children}
    </button>
  );
};

export default Button;