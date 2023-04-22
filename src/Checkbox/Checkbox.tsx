// Import React and some hooks from React library
import React, { useState } from "react";
import { ICheckboxProps } from "./ICheckboxProps";
import { StringBuilder } from "../TRMD3/Gizmos/StringBuilder";

/* 
  This code is used to create a custom checkbox component for React. It uses the ICheckboxProps interface to define the props
  for the checkbox, such as disabled, id, className, configuration, onChange, and selected. The checkbox component can render
  different styles of checkboxes based on the configuration prop, which can be either “default” or “error”. It can also render
  an optional text after the checkbox icon based on the children prop. The checkbox component also has a default click function
  that logs a message to the console. The code uses React hooks to initialize and manage the state variables for the checkbox props
  and the selected state. The code returns a JSX element for the checkbox with the appropriate class names and event handlers.
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
