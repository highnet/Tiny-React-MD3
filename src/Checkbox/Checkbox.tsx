// Import React and some hooks from React library
import React, { useState } from "react";
import { ICheckboxProps } from "./ICheckboxProps";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { getPreferredScheme } from "../Gizmos/Themeing";

/* 
	1
	1682423199

	This code is a functional component called Checkbox that creates a checkbox
	element in React.

	The component uses states for disabled, id, className, configuration, and
	selected, which can be initialized with provided props or default values.

	The component has two functions: click that logs a message to the console, and
	handleClick that updates the selected state and triggers the click function.

	The component uses a StringBuilder to build class names for the different
	components of the checkbox based on the states and props.

	The returned JSX element includes an icon and overlay element, and any child
	elements provided.

	The onChange prop is called when the checkbox is clicked, and the handleClick
	function updates the selected state and triggers the click function.
*/

// Define a functional component for the checkbox
const Checkbox: React.FC<ICheckboxProps> = ({
	disabled,
	children,
	id,
	className,
	configuration,
	onChange,
	selected,
}) => {
	const [_disabled] = useState(disabled || false); // State for the disabled property of the checkbox
	const [_id] = useState(id || undefined); // State for the ID of the checkbox
	const [_className] = useState(className || ""); // State for the class name of the checkbox

	const [_config] = useState(configuration || "default"); // State for the configuration of the checkbox
	const [_selected, setSelected] = useState(selected || false); // State for whether or not the checkbox is selected

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const click = () => {
		console.log("Thanks for Using Tiny React MD3!");
	};

	const handleClick = () => {
		click();
		setSelected(!_selected);
	};

	let _computedComponentClassName = new StringBuilder()
		.add("checkbox")
		.add("checkbox-" + _config)
		.add("checkbox-" + (_selected ? "selected" : "deselected"))
		.add("checkbox-" + (_disabled ? "disabled" : "enabled"))
		.add("checkbox-" + _theme)
		.add(_className)
		.toString();

	let _computedComponentIconClassName = new StringBuilder()
		.add("material-symbols-outlined")
		.add("checkbox-icon")
		.add("checkbox-icon-" + (_selected ? "selected" : "deselected"))
		.toString();

	let _computedComponentOverlayClassName = new StringBuilder()
		.add("checkbox-overlay")
		.add("checkbox-overlay-" + (_selected ? "selected" : "deselected"))
		.add("checkbox-overlay-" + (_disabled ? "disabled" : "enabled"))
		.toString();

	// Return the JSX element for the checkbox
	return (
		<div
			id={_id}
			className={_computedComponentClassName}
			onClick={(e) => {
				onChange?.(e);
				handleClick();
			}}
		>
			<span className={_computedComponentIconClassName}>check</span>
			<div className={_computedComponentOverlayClassName}></div>

			{children}
		</div>
	);
};

// Export the checkbox component as default
export default Checkbox;
