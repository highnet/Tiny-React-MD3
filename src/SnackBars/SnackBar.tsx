import React, { useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { ISnackBarProps } from "./ISnackBarProps";

const SnackBar: React.FC<ISnackBarProps> = ({
	className,
	id,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	configuration,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_configuration] = useState(configuration || "one-line");

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("snackbar")
		.add("snackbar-" + _theme)
		.add("snackbar-" + _configuration)
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
		></div>
	);
};

export default SnackBar;
