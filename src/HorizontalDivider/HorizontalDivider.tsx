// Import React and some hooks from React library
import React, { useState } from "react";
import { IHorizontalDividerProps } from "./IHorizontalDividerProps";
import { getPreferredScheme } from "../TRMD3/Gizmos/Themeing";
import { StringBuilder } from "../TRMD3/Gizmos/StringBuilder";

/*
  This code is used to create a custom horizontal divider component for React.
  It uses the IHorizontalDividerProps interface to define the props for the divider,
  such as id, className, height, width, inset, insetRightWidth, insetLeftWidth, and showInsets.
  The divider component can render different styles of dividers based on the inset prop, which determines
  how much space is left on the left and right sides of the divider. The inset prop can be either “none”, “right”,
  “left”, or “center”. The divider component also has a showInsets prop that controls whether or not to show the inset
  spaces with a different color. The code uses React hooks to initialize and manage the state variables for the divider props.
  The code returns a JSX element for the divider with the appropriate styles and class names. 
*/

// Define a functional component for the horizontal divider
const HorizontalDivider: React.FC<IHorizontalDividerProps> = ({
	id,
	className,
	height,
	width,
	inset,
	insetRightWidth,
	insetLeftWidth,
	showInsets,
}) => {
	// Initialize state variables
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_height] = useState(height || 1);
	const [_width] = useState(width || 288);
	const [_inset] = useState(inset || "none");
	const [_insetRightWidth] = useState(insetRightWidth || 16);
	const [_insetLeftWidth] = useState(insetLeftWidth || 16);
	const [_showInsets] = useState(showInsets || false);

	let _computedHeight: string = _height.toString() + "px"; // Final height value
	let _computedWidth: string = _width.toString() + "px"; // Final width value
	let _computedInsetRightWidth: string = _insetRightWidth + "px"; // Final inset right width value
	let _computedInsetLeftWidth: string = _insetLeftWidth + "px"; // Final inset left width value
	let _computedInsetColor: string = _showInsets ? "red" : "transparent"; // Final inset color

	let _computedComponentClassName = new StringBuilder()
		.add("horizontal-divider")
		.add(_className)
		.toString();

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	// Return the JSX element for the horizontal divider
	return (
		<div id={_id} className={_computedComponentClassName}>
			{_inset == "right" || _inset == "center" ? (
				<div
					className={"horizontal-divider-inset-right"}
					style={{
						height: _computedHeight,
						width: _computedInsetRightWidth,
						backgroundColor: _computedInsetColor,
					}}
				></div>
			) : (
				""
			)}

			<div
				className={"horizontal-divider-bar-" + _theme}
				style={{
					width: _computedWidth,
					height: _computedHeight,
				}}
			></div>

			{_inset == "left" || _inset == "center" ? (
				<div
					className={"horizontal-divider-inset-left"}
					style={{
						height: _computedHeight,
						width: _computedInsetLeftWidth,
						backgroundColor: _computedInsetColor,
					}}
				></div>
			) : (
				""
			)}
		</div>
	);
};

// Export the horizontal divider component as default
export default HorizontalDivider;
