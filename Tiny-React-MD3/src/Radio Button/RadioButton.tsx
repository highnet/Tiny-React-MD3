// Import React and some hooks from React library
import React, { useState } from "react";
import { IRadioButtonProps } from "./IRadioButtonProps";

// Define a functional component for the button
const RadioButton: React.FC<IRadioButtonProps> = ({ disabled, children, id, className, onClick, name, value, defaultChecked }) => {
    const [_disabled] = useState(disabled || false); // State for whether or not the button is disabled
    const [_id] = useState(id || undefined); // State for the ID of the button
    const [_className] = useState(className || ""); // State for the class name of the button
    const [_name] = useState(name || "radio"); // State for the name of the radio button
    const [_value] = useState(value || "radio"); // State for the value of the radio button
    const [_defaultChecked] = useState(defaultChecked || false); // State for whether or not the radio button is checked by default

    const click = () => {
        console.log("Thank you for using Tiny React MD3!");
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