import React, { useState } from "react";
import { IBadgeProps } from "./IBadgeProps";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { getPreferredScheme } from "../Gizmos/Themeing";
import Typography from "../Typography/Typography";

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

const Badge: React.FC<IBadgeProps> = ({
	children,
	id,
	className,
	configuration,
	xOffset,
	yOffset,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_config] = useState(configuration || "small");
	const [_xOffset] = useState(xOffset || 0);
	const [_yOffset] = useState(yOffset || 0);
	const [_children] = useState(children || "");
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedXOffset: string = _xOffset.toString() + "%";
	let _computedYOffset: string = _yOffset.toString() + "%";

	let _computedComponentClassName = new StringBuilder()
		.add("badge")
		.add("badge-" + _config)
		.add("badge-" + _theme)
		.add(_className)
		.toString();

	let _computedComponentLabelClassName = new StringBuilder()
		.add("badge-label-text")
		.add("badge-label-text-" + _config)
		.add("badge-label-text-" + _theme)
		.toString();

	return (
		<div
			id={_id}
			className={_computedComponentClassName}
			style={{ marginLeft: _computedXOffset, marginTop: _computedYOffset }}
		>
			<Typography
				variant="text-label-small"
				className={_computedComponentLabelClassName}
			>
				{_children}
			</Typography>
		</div>
	);
};

export default Badge;
