// Import React and some hooks from React library
import React, { useState } from "react";
import { IButtonProps } from "./IButtonProps";
import { StringBuilder } from "../TRMD3/Gizmos/StringBuilder";

/*
	1
	1682423199

	This code defines a React functional component called Button that takes in
	several props, including whether the button is disabled, its ID, a class name,
	an onClick function, and the button's configuration.

	State variables are used to set default values for the props. A string of class
	names is created based on the current configuration and whether the button has
	an icon.

	A click function logs a message to the console when the button is clicked. The
	component returns a button JSX element with the appropriate props and class
	names, including a span element with the icon's name if the button has an icon.
	The onClick function is set to execute the prop function and the click function.
*/

// Define a functional component for the button
const Button: React.FC<IButtonProps> = ({
	disabled,
	children,
	id,
	className,
	onClick,
	configuration,
	icon,
	iconName,
}) => {
	// Initialize state variables
	const [_disabled] = useState(disabled || false);
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_config] = useState(configuration || "filled");
	const [_icon] = useState(icon || false);
	const [_iconName] = useState(iconName || "search");

	let _computedComponentClassName = new StringBuilder()
		.add("btn")
		.add("btn-" + _config)
		.add("btn-" + (_icon ? "with" : "without") + "-icon")
		.add(_className)
		.toString();

	// Define click function
	const click = () => {
		console.log("Thanks for Using Tiny React MD3!");
	};

	// Return the JSX element for the button
	return (
		<button
			id={_id}
			// Set the class name based on the current configuration
			className={_computedComponentClassName}
			disabled={_disabled}
			// Set the onClick handler to execute the prop function
			onClick={(e) => {
				onClick?.(e);
				click();
			}}
		>
			{_icon ? (
				<span className="material-symbols-outlined">{_iconName}</span>
			) : (
				""
			)}
			{children}
		</button>
	);
};

// Export the button component as default
export default Button;
