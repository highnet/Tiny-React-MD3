// Import React and some hooks from React library
import React, { useState } from "react";
import { IRadioButtonProps } from "./IRadioButtonProps";

/* 
  This code defines a React component for a radio button that can be used in a form or a survey. 
  A radio button is a graphical user interface element that allows the user to choose one option from a set of mutually exclusive options. 
  The component takes some props that customize its appearance and behavior, such as:
  - disabled: a boolean value that indicates whether the button is disabled or not
  - children: the content to be displayed next to the button, such as a label or an icon
  - id: a string value that identifies the button element
  - className: a string value that adds additional CSS classes to the button element
  - onClick: a function that is executed when the button is clicked
  - name: a string value that groups the radio buttons with the same name together
  - value: a string value that represents the value of the button
  - defaultChecked: a boolean value that indicates whether the button is checked by default or not

  The component uses some state variables to store the props values and updates them accordingly. 
  It also defines a click function that logs a message to the console when the button is clicked. 
  The component returns a JSX element that renders the button and its content using HTML input and div elements. 
  The component uses some CSS classes to style the button based on its state and props. 
  The component is exported as default so it can be imported and used in other files.
*/

// Define a functional component for the radio button
const RadioButton: React.FC<IRadioButtonProps> = ({
	disabled,
	children,
	id,
	className,
	onClick,
	name,
	value,
	defaultChecked,
}) => {
	const [_disabled] = useState(disabled || false); // State for whether or not the button is disabled
	const [_id] = useState(id || undefined); // State for the ID of the button
	const [_className] = useState(className || ""); // State for the class name of the button
	const [_name] = useState(name || "radio"); // State for the name of the radio button
	const [_value] = useState(value || "radio"); // State for the value of the radio button
	const [_defaultChecked] = useState(defaultChecked || false); // State for whether or not the radio button is checked by default

	const click = () => {
		console.log("Thank you for using Tiny React MD3!");
	};

	const getPreferredScheme = () => {
		window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches
			? "dark"
			: "light";
	};

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	// Return the JSX element for the radio button
	return (
		<div
			className={
				"radio-button radio-button-" +
				(_disabled ? "disabled" : "enabled") +
				" " +
				"radio-button-" +
				_theme +
				" " +
				_className
			}
			id={_id}
			onClick={(e) => {
				onClick?.(e);
				click();
			}}
		>
			<input
				className={
					"radio-button-input radio-button-input-" +
					(_disabled ? "disabled" : "enabled") +
					" " +
					"radio-button-input-" +
					_theme
				}
				type="radio"
				name={_name}
				value={_value}
				defaultChecked={_defaultChecked}
			/>

			{children}
		</div>
	);
};

// Export the radio button component as default
export default RadioButton;
