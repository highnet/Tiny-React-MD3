// Import React and some hooks from React library
import React, { useState } from "react";
import { IRadioButtonProps } from "./IRadioButtonProps";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";

/* 
	1
	1682423199

	The code defines a React function component called RadioButton, which receives
	a series of properties through an interface called IRadioButtonProps. These
	properties include the disabled, children, id, className, onClick, name, value,
	and defaultChecked props. The component initializes state variables to manage
	these properties. The component also defines a function called click that logs a
	message to the console when the radio button is clicked. The component uses the
	localStorage API to determine the user's preferred color scheme and applies
	appropriate class names for styling. Finally, the component returns a JSX
	element for the radio button, which includes an input element and the children
	of the component. The onClick function passed as a prop is called when the radio
	button is clicked, followed by the click function defined in the component.
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

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("radio-button")
		.add("radio-button-" + (_disabled ? "disabled" : "enabled"))
		.add("radio-button-" + _theme)
		.add(_className)
		.toString();

	let _computedComponentInputClassName = new StringBuilder()
		.add("radio-button-input")
		.add("radio-button-input-" + (_disabled ? "disabled" : "enabled"))
		.add("radio-button-input-" + _theme)
		.toString();

	// Return the JSX element for the radio button
	return (
		<div
			className={_computedComponentClassName}
			id={_id}
			onClick={(e) => {
				onClick?.(e);
				click();
			}}
		>
			<input
				className={_computedComponentInputClassName}
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
