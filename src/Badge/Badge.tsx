import React, { useState } from "react";
import { IBadgeProps } from "./IBadgeProps";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { getPreferredScheme } from "../Gizmos/Themeing";

/*  
	1
	1682360238

	This code defines a React functional component called "Badge". The component creates
	a badge element that can be customized with several props such as "children", "id",
	"className", "configuration", "xOffset", "yOffset", and "label".

	The useState hook is used to create several state variables that hold the values passed
	via the corresponding props. If no value is passed, a default value is used instead.

	The "_computedXOffset" and "_computedYOffset" variables calculate the final values
	for the X and Y offsets respectively. These values are computed based on the "xOffset"
	and "yOffset" values passed via props and converted to a string with a percent sign.

	The "_computedComponentClassName" and "_computedComponentLabelClassName" variables
	hold the CSS class names for the badge element and label element respectively. These
	class names are constructed using the StringBuilder class and concatenated with the
	configuration value passed via props.

	Finally, the JSX element for the badge is returned. It is a <div> element with an
	optional "id" and "className" attribute. The computed X and Y offsets are applied
	using the "style" attribute. The label and children (if any) are rendered within the
	<div> element.
*/

// Define a functional component for the badge
const Badge: React.FC<IBadgeProps> = ({
	children,
	id,
	className,
	configuration,
	xOffset,
	yOffset,
	label,
}) => {
	const [_id] = useState(id || undefined); // State for the ID of the badge
	const [_className] = useState(className || ""); // State for the class name of the badge
	const [_config] = useState(configuration || "small"); // State for the configuration of the badge
	const [_xOffset] = useState(xOffset || 0); // State for the x offset of the badge
	const [_yOffset] = useState(yOffset || 0); // State for the y offset of the badge
	const [_label] = useState(label || ""); // State for the label of the badge

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedXOffset: string = _xOffset.toString() + "%"; // Final x offset value
	let _computedYOffset: string = _yOffset.toString() + "%"; // Final y offset value

	let _computedComponentClassName = new StringBuilder()
		.add("badge")
		.add("badge-" + _config)
		.add("badge-" + _theme)
		.add(_className)
		.toString();

	let _computedComponentLabelClassName = new StringBuilder()
		.add("text")
		.add("text-label")
		.add("text-label-small")
		.add("badge-label-text")
		.add("badge-label-text-" + _config)
		.add("badge-label-text-" + _theme)
		.toString();

	// Return the JSX element for the badge
	return (
		<div
			id={_id}
			className={_computedComponentClassName}
			style={{ marginLeft: _computedXOffset, marginTop: _computedYOffset }}
		>
			<div className={_computedComponentLabelClassName}>{_label}</div>
			{children}
		</div>
	);
};

// Export the badge component as default
export default Badge;
