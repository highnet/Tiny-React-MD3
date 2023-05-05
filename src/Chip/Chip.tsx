// Import React and some hooks from React library
import React, { useState } from "react";
import { IChipProps } from "./IChipProps";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";

const Chip: React.FC<IChipProps> = ({
	disabled,
	children,
	id,
	className,
	onClick,
	configuration,
	selected,
	icon,
}) => {
	const [_disabled] = useState(disabled || false);
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_config] = useState(configuration || "label-only");
	const [_selected] = useState(selected || false);
	const [_icon] = useState(icon || false);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("chip")
		.add("chip-" + _config)
		.add("chip-" + (_icon ? "with" : "without") + "-icon")
		.add("chip-" + (_disabled ? "disabled" : "enabled"))
		.add("chip-" + _theme)
		.add(_className)
		.toString();

	// Define click function
	const click = () => {
		console.log("Thanks for Using Tiny React MD3!");
	};

	return (
		<button
			id={_id}
			className={_computedComponentClassName}
			disabled={_disabled}
			onClick={(e) => {
				onClick?.(e);
				click();
			}}
		>
			{children}
		</button>
	);
};

export default Chip;
