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

import React, { useState } from "react";
import { IButtonProps } from "./IButtonProps";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { getPreferredScheme } from "../Gizmos/Themeing";
import Icon from "../Icon/Icon";
import Typography from "../Typography/Typography";

const Button: React.FC<IButtonProps> = ({
	disabled,
	children,
	id,
	className,
	onClick,
	configuration,
	icon,
	iconName,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
}) => {
	const [_disabled] = useState(disabled || false);
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_config] = useState(configuration || "filled");
	const [_icon] = useState(icon || false);
	const [_iconName] = useState(iconName || "search");
	const [_children] = useState(
		children || (_disabled ? "Disabled" : "Enabled")
	);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("btn")
		.add("btn-" + _config)
		.add("btn-" + (_icon ? "with" : "without") + "-icon")
		.add("btn-" + (_disabled ? "disabled" : "enabled"))
		.add("btn-" + _theme)
		.add(_className)
		.toString();

	const click = () => {};

	return (
		<button
			id={_id}
			className={_computedComponentClassName}
			disabled={_disabled}
			onClick={(e) => {
				onClick?.(e);
			}}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
		>
			{_icon ? (
				<Icon className={"element-on-button-" + _theme}>{_iconName}</Icon>
			) : (
				""
			)}
			<Typography variant="text-label-large">{_children}</Typography>
		</button>
	);
};

export default Button;
