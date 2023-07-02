import React, { useState, useEffect } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { ISegmentedButtonProps } from "./ISegmentedButtonProps";
import Icon from "../Icon/Icon";
import Typography from "../Typography/Typography";

const SegmentedButton: React.FC<ISegmentedButtonProps> = ({
	className,
	id,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	position,
	icon,
	selected,
	label,
	value,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_children] = useState(label || "");
	const [_position] = useState(position || "center");
	const [_icon] = useState(icon || undefined);
	const [_value] = useState(value || undefined);

	const [_selected, setSelected] = useState(selected || false);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	useEffect(() => {
		setSelected(selected || false);
	}, [selected]);

	let _computedComponentClassName = new StringBuilder()
		.add("segmented-button")
		.add("segmented-button-" + _theme)
		.add("segmented-button-" + _position)
		.add("segmented-button-" + (_selected ? "selected" : "deselected"))
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
			<Typography variant="text-label-large">{_children}</Typography>
		</button>
	);
};

export default SegmentedButton;
