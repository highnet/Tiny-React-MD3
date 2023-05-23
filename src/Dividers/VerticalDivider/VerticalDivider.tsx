/* 
  This code defines a React component for a vertical divider that can be used to separate two sections of content vertically. 
  The component takes some props that customize its appearance and behavior, such as:
  - id: a string value that identifies the divider element
  - className: a string value that adds additional CSS classes to the divider element
  - width: a number value that specifies the width of the divider in pixels
  - height: a number value that specifies the height of the divider in pixels
  - inset: a string value that specifies the inset configuration of the divider, such as "top", "bottom", "center", or "none"
  - insetTopHeight: a number value that specifies the height of the top inset in pixels
  - insetBottomHeight: a number value that specifies the height of the bottom inset in pixels
  - showInsets: a boolean value that indicates whether to show or hide the insets

  The component uses some state variables to store the props values and updates them accordingly. 
  It also defines some local variables to store the final values of the width, height, inset heights, and inset color. 
  The component returns a JSX element that renders the divider and its insets using HTML div elements. 
  The component uses some inline styles and CSS classes to style the divider and its insets based on its state and props. 
  The component is exported as default so it can be imported and used in other files.
*/

import React, { useState } from "react";
import { IVerticalDividerProps } from "./IVerticalDividerProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";

const VerticalDivider: React.FC<IVerticalDividerProps> = ({
	id,
	className,
	height,
	width,
	inset,
	insetTopHeight,
	insetBottomHeight,
	showInsets,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_width] = useState(width || 1);
	const [_height] = useState(height || 288);
	const [_inset] = useState(inset || "none");
	const [_insetTopHeight] = useState(insetTopHeight || 16);
	const [_insetBottomHeight] = useState(insetBottomHeight || 16);
	const [_showInsets] = useState(showInsets || false);

	const REM_BASE = 10; // 1 rem = 10px

	let _finalWidth: string = `${_width / REM_BASE}rem`;
	let _finalHeight: string = `${_height / REM_BASE}rem`;
	let _finalInsetTopHeight = `${_insetTopHeight / REM_BASE}rem`;
	let _finalInsetBottomHeight = `${_insetBottomHeight / REM_BASE}rem`;
	let _finalInsetColor: string = _showInsets ? "red" : "transparent";

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("divider")
		.add("verticaldivider")
		.add("verticaldivider-" + _theme)
		.add(_className)
		.toString();

	let _computedComponentInsetTopClassName = new StringBuilder()
		.add("verticaldivider-inset-top")
		.add("verticaldivider-inset-top-" + _theme)
		.toString();

	let _computedComponentBarClassName = new StringBuilder()
		.add("verticaldivider-bar")
		.add("verticaldivider-bar-" + _theme)
		.toString();

	let _computedComponentInsetBottomClassName = new StringBuilder()
		.add("verticaldivider-inset-bottom")
		.add("verticaldivider-inset-bottom-" + _theme)
		.toString();

	return (
		<div id={_id} className={_computedComponentClassName}>
			{_inset == "top" || _inset == "center" ? (
				<div
					className={_computedComponentInsetTopClassName}
					style={{
						width: _finalWidth,
						height: _finalInsetTopHeight,
						color: _finalInsetColor,
					}}
				></div>
			) : (
				""
			)}

			<div
				className={_computedComponentBarClassName}
				style={{
					width: _finalWidth,
					height: _finalHeight,
				}}
			></div>

			{_inset == "bottom" || _inset == "center" ? (
				<div
					className={_computedComponentInsetBottomClassName}
					style={{
						width: _finalWidth,
						height: _finalInsetBottomHeight,
						color: _finalInsetColor,
					}}
				></div>
			) : (
				""
			)}
		</div>
	);
};

export default VerticalDivider;
