// Import React and some hooks from React library
import React, { useState } from "react";
import { IButtonProps } from "./IButtonProps";

/*
  The button component can render different styles of buttons based on the configuration prop, which can be either “filled”
  or “outlined”. It can also render an optional icon inside the button text based on the icon and iconName props. The button
  component also has a default click function that logs a message to the console. The code uses React hooks to initialize
  and manage the state variables for the button props.
*/

// Define a functional component for the button
const Button: React.FC<IButtonProps> = ({ disabled, children, id, className, onClick, configuration, icon, iconName }) => {
  // Initialize state variables
  const [_disabled] = useState(disabled || false);
  const [_id] = useState(id || undefined);
  const [_className] = useState(className || "");
  const [_config] = useState(configuration || "filled");
  const [_icon] = useState(icon || false);
  const [_iconName] = useState(iconName || "search");

  // Define click function
  const click = () => {
    console.log("Thanks for Using Tiny React MD3!");
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