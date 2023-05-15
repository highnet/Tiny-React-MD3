import React, { useState } from "react";
import { ITypographyProps } from "./ITypographyProps";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { getPreferredScheme } from "../Gizmos/Themeing";

function splitProps(props: string): string[] {
	// split the props by hyphen
	let parts = props.split("-");
	// initialize an empty array to store the output
	let output: string[] = [];
	// loop through the parts and concatenate them with hyphen
	for (let i = 0; i < parts.length; i++) {
		// if this is the first part, just add it to the output
		if (i === 0) {
			output.push(parts[i]);
		} else {
			// otherwise, add the previous output and the current part with a hyphen
			output.push(output[i - 1] + "-" + parts[i]);
		}
	}
	// return the output array
	return output;
}

const Typography: React.FC<ITypographyProps> = ({
	id,
	className,
	variant,
	children,
}) => {
	const [_id] = useState(id || undefined); // State for the ID of the badge
	const [_className] = useState(className || ""); // State for the class name of the badge
	const [_variant] = useState(variant || "text-body-small"); // State for the variant of the badge

	let _computedSplitProps = splitProps(_variant);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add(_computedSplitProps[0])
		.add(_computedSplitProps[1])
		.add(_computedSplitProps[2])
		.add("typography")
		.add("typography-" + _theme)
		.add(_className)
		.toString();

	// Return the JSX element for the badge
	return (
		<div id={_id} className={_computedComponentClassName}>
			{children}
		</div>
	);
};

// Export the badge component as default
export default Typography;
