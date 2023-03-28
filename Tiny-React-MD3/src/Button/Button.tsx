// Import React and some hooks from React library
import React, { useState } from "react";
import { IButtonProps } from "./IButtonProps";

// Define a functional component for the button
const Button: React.FC<IButtonProps> = ({ disabled, children, id, className, onClick, configuration, icon, iconName }) => {
  const [_disabled] = useState(disabled || false);
  const [_id] = useState(id || undefined);
  const [_className] = useState(className || "");

  const [_config] = useState(configuration || "filled");
  const [_icon] = useState(icon || false);
  const [_iconName] = useState(iconName || "search");

  const click = () => {
    console.log("Clicked", { disabled: _disabled, id: _id, className: _className, configuration: _config, icon: _icon, iconName: _iconName });
  }

  // Return the JSX element for the button
  return (
    <button
      id={_id}
      // Set the class name based on the current configuration
      className={"btn btn-" + _config + " " + "btn-" + (_icon ? "with" : "without") + "-icon" + " " + _className}
      disabled={_disabled}
      // Set the onClick handler to execute the prop function
      onClick={(e) => {
        onClick?.(e);
        click();
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