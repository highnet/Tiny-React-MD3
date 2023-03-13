// Import React and some hooks from React library
import React, { MouseEvent, useState } from "react";

// Define an interface for the button props
export interface IButtonProps {
  // The content of the button
  children?: React.ReactNode;
  // The function to execute when the button is clicked
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  // The configuration of the button style, either "filled" or "outlined"
  configuration?: string;
  // A flag to indicate if the button has an icon
  icon?: boolean;

  iconName?: string;

  disabled?: boolean;
}

// Define a functional component for the button
const Button: React.FC<IButtonProps> = ({ children, onClick, configuration, icon, iconName, disabled }) => {
  // Use a state hook to store the current configuration of the button
  const [_config] = useState(configuration || "filled");
  const [_icon] = useState(icon || false);
  const [_iconName] = useState(iconName || "search");
  const [_disabled] = useState(disabled || false);

  // Return the JSX element for the button
  return (
    <button
      // Set the class name based on the current configuration
      className={"btn btn-" + _config}
      disabled={_disabled}
      // Set the onClick handler to execute the prop function
      onClick={(e) => {
        onClick?.(e);
      }}

    >
      {_icon ?
        <span className="material-symbols-outlined">
          {_iconName}
        </span> : ""
      }


      {children}
    </button>
  );
};

// Export the button component as default
export default Button;