// Import React and some hooks from React library
import React, { useState } from "react";
import { ICheckboxProps } from "./ICheckboxProps";

// Define a functional component for the button
const Checkbox: React.FC<ICheckboxProps> = ({ disabled, children, id, className, configuration, onChange, selected }) => {
  const [_disabled] = useState(disabled || false);
  const [_id] = useState(id || undefined);
  const [_className] = useState(className || "");

  const [_config] = useState(configuration || "default");
  const [_selected, setSelected] = useState(selected || false);

  const click = () => {
    console.log("Clicked", { disabled: _disabled, id: _id, className: _className, configuration: _config });
  }

  const handleClick = () => {
    click();
    setSelected(!_selected);

  }

  // Return the JSX element for the button
  return (
    <div
    id={_id}
    className={"checkbox " + "checkbox-" + _config + " " + "checkbox-" + (_selected ? "selected": "deselected") + " " + "checkbox-" + (_disabled ? "disabled":"enabled")}

    onClick={(e) => {
      onChange?.(e);
      handleClick();
    }}
    >
      <span className={"material-symbols-outlined checkbox-icon " + "checkbox-icon-" + (_selected ? "selected" : "deselected")}
      >
        check
      </span>
      <div className={"checkbox-overlay " + "checkbox-overlay-" + (_selected ? "selected": "deselected") + " " + "checkbox-overlay-" + (_disabled ? "disabled":"enabled")}>      
      </div>

    {children}
    </div>
  );
};



// Export the button component as default
export default Checkbox;