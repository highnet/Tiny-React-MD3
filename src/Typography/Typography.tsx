import React, { useState } from "react";
import { ITypographyProps } from "./ITypographyProps";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { getPreferredScheme } from "../Gizmos/Themeing";

function splitProps(props: string): string[] {
	let parts = props.split("-");
	let output: string[] = [];
	for (let i = 0; i < parts.length; i++) {
		if (i === 0) {
			output.push(parts[i]);
		} else {
			output.push(output[i - 1] + "-" + parts[i]);
		}
	}
	return output;
}

const Typography: React.FC<ITypographyProps> = ({
	id,
	className,
	variant,
	children,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_variant] = useState(variant || "text-body-small");

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

	return (
		<div id={_id} className={_computedComponentClassName}>
			{children}
		</div>
	);
};

export default Typography;
