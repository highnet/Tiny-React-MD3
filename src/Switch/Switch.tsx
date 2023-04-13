// Import React and some hooks from React library
import React, { useState } from "react";
import { ISwitchProps } from "./ISwitchProps";

/* 
  This code defines a React component for a switch that can be used to toggle between two states, such as on and off. 
  The component takes some props that customize its appearance and behavior, such as:
  - disabled: a boolean value that indicates whether the switch is disabled or not
  - children: the content to be displayed next to the switch, such as a label or an icon
  - id: a string value that identifies the switch element
  - className: a string value that adds additional CSS classes to the switch element
  - selected: a boolean value that indicates whether the switch is selected or not
  - onChange: a function that is executed when the switch is changed by the user
  - icon: a boolean value that indicates whether to display an icon in the switch or not
  - iconNameSelected: a string value that specifies the name of the icon to display when the switch is selected
  - iconNameDeselected: a string value that specifies the name of the icon to display when the switch is deselected

  The component uses some state variables to store the props values and updates them accordingly. 
  It also defines a click function that logs a message to the console when the switch is clicked. 
  It also defines a handleClick function that toggles the selected state of the switch and calls the click function. 
  The component returns a JSX element that renders the switch and its content using HTML div and span elements. 
  The component uses some CSS classes to style the switch based on its state and props. 
  The component is exported as default so it can be imported and used in other files.
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

	// Return the JSX element for the switch
	return (
		<div
			onClick={(e) => {
				onChange?.(e);
				handleClick();
			}}
			id={_id}
			className={
				"switch" +
				" " +
				"switch-" +
				(_selected ? "selected" : "deselected") +
				" " +
				"switch-" +
				(_disabled ? "disabled" : "enabled") +
				" " +
				"switch-" +
				(_icon ? "with" : "without") +
				"-icon" +
				" " +
				_className
			}
		>
			<div
				className={
					"switch-track switch-track-" +
					(_selected ? "selected" : "deselected") +
					" " +
					"switch-track-" +
					(_disabled ? "disabled" : "enabled") +
					" " +
					"switch-track-" +
					(_icon ? "with" : "without") +
					"-icon"
				}
			>
				<div
					className={
						"switch-handle switch-handle-" +
						(_selected ? "selected" : "deselected") +
						" " +
						"switch-handle-" +
						(_disabled ? "disabled" : "enabled") +
						" " +
						"switch-handle-" +
						(_icon ? "with" : "without") +
						"-icon"
					}
				>
					<div className={"switch-handle-overlay"}>
						{_icon ? (
							<span
								className={
									"material-symbols-outlined" +
									" " +
									"switch-icon" +
									" " +
									"switch-icon-" +
									(_selected ? "selected" : "deselected") +
									" " +
									"switch-icon-" +
									(_disabled ? "disabled" : "enabled")
								}
							>
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
