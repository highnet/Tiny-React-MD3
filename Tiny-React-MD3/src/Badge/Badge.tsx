import React, { useState } from "react";
import { IBadgeProps } from "./IBadgeProps";

/*  
	This code defines a Badge component that renders a small circular indicator that can be used to show counts, 
	statuses or notifications on other elements. The component takes props for the id, className, configuration,
	xOffset, yOffset and label of the badge. The configuration prop determines the size of the badge (small, single-digit or multiple-digits). 
	The xOffset and yOffset props adjust the position of the badge relative to its parent element. The label prop displays a number on the badge
	if provided. The component also accepts children elements that can be rendered inside the badge. The component uses React hooks to store the
	props in state variables and applies some styles to the badge element based on the configuration and offsets.
*/

// Define a functional component for the badge
const Badge: React.FC<IBadgeProps> = ({ children, id, className, configuration, xOffset, yOffset, label }) => {
	const [_id] = useState(id || undefined); // State for the ID of the badge
	const [_className] = useState(className || ""); // State for the class name of the badge
	const [_config] = useState(configuration || "small"); // State for the configuration of the badge
	const [_xOffset] = useState(xOffset || 0); // State for the x offset of the badge
	const [_yOffset] = useState(yOffset || 0); // State for the y offset of the badge
	const [_label] = useState(label || ""); // State for the label of the badge

	let _finalXOffset: string = _xOffset.toString() + "%"; // Final x offset value
	let _finalYOffset: string = _yOffset.toString() + "%"; // Final y offset value

	// Return the JSX element for the badge
	return (
		<div
			id={_id}
			className={"badge badge-" + _config}
			style={{ marginLeft: _finalXOffset, marginTop: _finalYOffset }}
		>
			<div style={{ paddingLeft: "4px", paddingRight: "4px", margin: "0 auto" }} className="text text-label text-label-small">{_label}</div>
			{children}
		</div>
	);
};

// Export the badge component as default
export default Badge;