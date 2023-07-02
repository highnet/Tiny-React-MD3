import React, { useState } from "react";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { IIconProps } from "./IIconProps";

const Icon: React.FC<IIconProps> = ({
	children = "search",
	id,
	className,
	onClick,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	filled,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("material-symbols")
		.add("material-symbols-outlined")
		.add(filled ? "material-symbols-filled" : "")
		.add("icon")
		.add("icon-" + _theme)
		.add(_className)
		.toString();

	return (
		<div
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			onClick={onClick}
			className="icon-wrapper"
		>
			<span id={_id} className={_computedComponentClassName}>
				{children}
			</span>
		</div>
	);
};

export default Icon;
