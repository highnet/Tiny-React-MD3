// Import React and some hooks from React library
import React, { useState } from "react";
import { IRadioButtonProps } from "./IRadioButtonProps";

// Define a functional component for the button
const RadioButton: React.FC<IRadioButtonProps> = ({ disabled, children, id, className, onClick, name, value, defaultChecked }) => {
    const [_disabled] = useState(disabled || false);
    const [_id] = useState(id || undefined);
    const [_className] = useState(className || "");
    const [_name] = useState(name || "radio");
    const [_value] = useState(value || "radio");
    const [_defaultChecked] = useState(defaultChecked || false);

    const click = () => {
        console.log("Clicked", { disabled: _disabled, id: _id, className: _className });
    }

    // Return the JSX element for the button
    return (
        <div
            className={"radio-button radio-button-" + (_disabled ? "disabled" : "enabled") + " " + _className}
            id={_id}
            onClick={(e) => {
                onClick?.(e);
                click();
            }}
        >

            <input
                className={"radio-button-input radio-button-input-" + (_disabled ? "disabled" : "enabled")}
                type="radio"
                name={_name}
                value={_value}
                defaultChecked={_defaultChecked}
            />

            {children}
        </div>
    );
};



// Export the button component as default
export default RadioButton;