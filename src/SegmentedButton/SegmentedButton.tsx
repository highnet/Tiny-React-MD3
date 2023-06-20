import React, { useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { ISegmentedButtonProps } from "./ISegmentedButtonProps";
import Icon from "../Icon/Icon";

const SegmentedButton: React.FC<ISegmentedButtonProps> = ({
	className,
	id,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	position,
	icon,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_children] = useState(children || "Label");
	const [_position] = useState(position || "center");
	const [_icon] = useState(icon || undefined);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("segmented-button")
		.add("segmented-button-" + _theme)
		.add("segmented-button-" + _position)
		.add(_className)
		.toString();

	return (
		<button
			id={_id}
			className={_computedComponentClassName}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			onClick={onClick}
		>
			{icon && <Icon>{_icon}</Icon>}
			{_children}
		</button>
	);
};

export default SegmentedButton;
