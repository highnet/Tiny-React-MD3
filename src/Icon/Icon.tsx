import React, { useState } from "react";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { IIconProps } from "./IIconProps";

const Icon: React.FC<IIconProps> = ({
	children = "search",
	id,
	className,
	onClick,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("material-symbols-outlined")
		.add("icon")
		.add("icon-" + _theme)
		.add(_className)
		.toString();

	const click = () => {
		console.log("Thanks for Using Tiny React MD3!");
	};

	return (
		<div
			onClick={(e) => {
				onClick?.(e);
				click();
			}}
		>
			<span id={_id} className={_computedComponentClassName}>
				{children}
			</span>
		</div>
	);
};

export default Icon;
