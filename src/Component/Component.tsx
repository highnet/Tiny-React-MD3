import React, { useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { IComponentProps } from "./IComponentProps";

const Component: React.FC<IComponentProps> = ({
	className,
	id,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("component")
		.add("component-" + _theme)
		.add(_className)
		.toString();

	return (
		<div
			id={_id}
			className={_computedComponentClassName}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default Component;
