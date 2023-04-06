// Import React and some hooks from React library
import React, { useState } from "react";
import { ICheckboxProps } from "./ICheckboxProps";

// Define a functional component for the button
const Checkbox: React.FC<ICheckboxProps> = ({ disabled, children, id, className, configuration, onChange, selected }) => {
  const [_disabled] = useState(disabled || false); // State for the disabled property of the checkbox
  const [_id] = useState(id || undefined); // State for the ID of the checkbox
  const [_className] = useState(className || ""); // State for the class name of the checkbox

  const [_config] = useState(configuration || "default"); // State for the configuration of the checkbox
  const [_selected, setSelected] = useState(selected || false); // State for whether or not the checkbox is selected

  const click = () => {
    console.log("Thanks for Using Tiny React MD3!");
  }

  const handleClick = () => {
    click();
    setSelected(!_selected);
  }

  // Return the JSX element for the button
  return (
    <div
      id={_id}
      className={"checkbox " + "checkbox-" + _config + " " + "checkbox-" + (_selected ? "selected" : "deselected") + " " + "checkbox-" + (_disabled ? "disabled" : "enabled") + " " + _className}

      onClick={(e) => {
        onChange?.(e);
        handleClick();
      }}
    >
      <span className={"material-symbols-outlined checkbox-icon " + "checkbox-icon-" + (_selected ? "selected" : "deselected")}
      >
        check
      </span>
      <div className={"checkbox-overlay " + "checkbox-overlay-" + (_selected ? "selected" : "deselected") + " " + "checkbox-overlay-" + (_disabled ? "disabled" : "enabled")}>
      </div>

      {children}
    </div>
  );
};



// Export the button component as default
export default Checkbox;