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

import React, { useState } from "react";
import { IRadioButtonProps } from "./IRadioButtonProps";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";

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
	const [_disabled] = useState(disabled || false);
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_name] = useState(name || "radio");
	const [_value] = useState(value || "radio");
	const [_defaultChecked] = useState(defaultChecked || false);

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

export default RadioButton;
