// Import React and some hooks from React library
import React, { useState } from "react";
import { ISwitchProps } from "./ISwitchProps";
import { StringBuilder } from "../Gizmos/StringBuilder";

/* 
	1
	1682360238
	
	This code defines a React functional component called "Switch", which is a UI
	element used for toggling on and off a selection. The component takes in several
	props, such as whether the switch is disabled, its ID, and its class name.

	The component also takes in props for the switch's appearance, such as whether an
	icon is displayed, and the names of the icons to use for the selected and
	deselected states.

	The component sets default values for some of these props using the useState
	hook. It also defines methods for handling the click and change events of the
	switch.

	The component dynamically calculates class names based on the state of the
	switch and its appearance. It then returns a JSX element that renders the
	switch, including its track, handle, and optional icon.
*/

// Define a functional component for the switch
const Switch: React.FC<ISwitchProps> = ({
	disabled,
	children,
	id,
	className,
	selected,
	onChange,
	icon,
	iconNameSelected,
	iconNameDeselected,
}) => {
	const [_disabled] = useState(disabled || false);
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");

	const [_icon] = useState(icon || false);
	const [_iconNameSelected] = useState(iconNameSelected || "check");
	const [_iconNameDeselected] = useState(iconNameDeselected || "close");

	const [_selected, setSelected] = useState(selected || false);

	const click = () => {
		console.log("Thank you for using Tiny React MD3!");
	};

	const handleClick = () => {
		setSelected(!_selected);
		click();
	};

	let _computedComponentClassName = new StringBuilder()
		.add("switch")
		.add("switch-" + (_selected ? "selected" : "deselected"))
		.add("switch-" + (_disabled ? "disabled" : "enabled"))
		.add("switch-" + (_icon ? "with" : "without") + "-icon")
		.add(_className)
		.toString();

	let _computedComponentTrackClassName = new StringBuilder()
		.add("switch-track")
		.add("switch-track-" + (_selected ? "selected" : "deselected"))
		.add("switch-track-" + (_disabled ? "disabled" : "enabled"))
		.add("switch-track-" + (_icon ? "with" : "without") + "-icon")
		.toString();

	let _computedComponentHandleClassName = new StringBuilder()
		.add("switch-handle")
		.add("switch-handle-" + (_selected ? "selected" : "deselected"))
		.add("switch-handle-" + (_disabled ? "disabled" : "enabled"))
		.add("switch-handle-" + (_icon ? "with" : "without") + "-icon")
		.toString();

	let _computedComponentIconClassName = new StringBuilder()
		.add("material-symbols-outlined")
		.add("switch-icon")
		.add("switch-icon-" + (_selected ? "selected" : "deselected"))
		.add("switch-icon-" + (_disabled ? "disabled" : "enabled"))
		.toString();

	// Return the JSX element for the switch
	return (
		<div
			onClick={(e) => {
				onChange?.(e);
				handleClick();
			}}
			id={_id}
			className={_computedComponentClassName}
		>
			<div className={_computedComponentTrackClassName}>
				<div className={_computedComponentHandleClassName}>
					<div className={"switch-handle-overlay"}>
						{_icon ? (
							<span className={_computedComponentIconClassName}>
								{" "}
								{_selected ? _iconNameSelected : _iconNameDeselected}{" "}
							</span>
						) : (
							""
						)}
					</div>
				</div>
			</div>
			{children}
		</div>
	);
};

// Export the switch component as default
export default Switch;
