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

import React, { useState } from "react";
import { ICheckboxProps } from "./ICheckboxProps";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { getPreferredScheme } from "../Gizmos/Themeing";
import Icon from "../Icon/Icon";

const Checkbox: React.FC<ICheckboxProps> = ({
	disabled,
	id,
	className,
	configuration,
	onChange,
	selected,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
}) => {
	const [_disabled] = useState(disabled || false);
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");

	const [_config] = useState(configuration || "default");
	const [_selected, setSelected] = useState(selected || false);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const handleClick = () => {
		setSelected(!_selected);
	};

	let _computedComponentClassName = new StringBuilder()
		.add("checkbox")
		.add("checkbox-" + _config)
		.add("checkbox-" + _theme)
		.add(!_selected ? "checkbox-deselected" : "")
		.add(_disabled ? "checkbox-disabled" : "")
		.add(_className)
		.toString();

	let _computedComponentIconClassName = new StringBuilder()
		.add("icon-on-checkbox")
		.toString();

	let _computedComponentOverlayClassName = new StringBuilder()
		.add("checkbox-overlay")
		.toString();

	return (
		<div
			id={_id}
			className={_computedComponentClassName}
			onClick={(e) => {
				handleClick();
				onChange?.(e);
			}}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
		>
			{_selected && (
				<Icon className={_computedComponentIconClassName}>check</Icon>
			)}
			<div className={_computedComponentOverlayClassName}></div>
		</div>
	);
};

export default Checkbox;
