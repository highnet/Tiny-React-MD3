/*
	1
	1682423199

	The code defines a React function component called HorizontalDivider that accepts props.
	The props include optional values for ID, class name, height, width, inset, insetRightWidth, insetLeftWidth, and showInsets.
	The component initializes state variables for each of the props.
	The component calculates various styles based on the props and state variables.
	The component uses StringBuilder to build a class name for the component.
	The component returns a div element that includes one or two inset divs and a horizontal bar div.
	The horizontal bar div has a class name based on the theme, and its width and height are based on the props and state variables.
	The inset divs, if present, have their width, height, and color based on the props and state variables
*/

import React, { useState } from "react";
import { IHorizontalDividerProps } from "./IHorizontalDividerProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";

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
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_height] = useState(height || 1);
	const [_width] = useState(width || 288);
	const [_inset] = useState(inset || "none");
	const [_insetRightWidth] = useState(insetRightWidth || 16);
	const [_insetLeftWidth] = useState(insetLeftWidth || 16);
	const [_showInsets] = useState(showInsets || false);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedHeight: string = _height.toString() + "px";
	let _computedWidth: string = _width.toString() + "px";
	let _computedInsetRightWidth: string = _insetRightWidth + "px";
	let _computedInsetLeftWidth: string = _insetLeftWidth + "px";
	let _computedInsetColor: string = _showInsets ? "red" : "transparent";

	let _computedComponentClassName = new StringBuilder()
		.add("horizontaldivider")
		.add("horizontaldivider-" + _theme)
		.add(_className)
		.toString();

	let _computedComponentInsetRightClassName = new StringBuilder()
		.add("horizontaldivider-inset-right")
		.add("horizontaldivider-inset-right-" + _theme)
		.toString();

	let _computedComponentBarClassName = new StringBuilder()
		.add("horizontaldivider-bar")
		.add("horizontaldivider-bar-" + _theme)
		.toString();

	let _computedComponentInsetLeftClassName = new StringBuilder()
		.add("horizontaldivider-inset-left")
		.add("horizontaldivider-inset-left-" + _theme)
		.toString();

	return (
		<div id={_id} className={_computedComponentClassName}>
			{_inset == "right" || _inset == "center" ? (
				<div
					className={_computedComponentInsetRightClassName}
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
				className={_computedComponentBarClassName}
				style={{
					width: _computedWidth,
					height: _computedHeight,
				}}
			></div>

			{_inset == "left" || _inset == "center" ? (
				<div
					className={_computedComponentInsetLeftClassName}
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

export default HorizontalDivider;
