import React, { useEffect, useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { IIconButtonProps } from "./IIconButtonProps";
import Icon from "../Icon/Icon";

const IconButton: React.FC<IIconButtonProps> = ({
	className,
	id,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	configuration,
	disabled,
	toggleAble,
	selected,
	onValueChange,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_configuration] = useState(configuration || "standard");
	const [_toggleAble] = useState(toggleAble || false);
	const [_selected, setSelected] = useState(selected || false);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("icon-button")
		.add("icon-button-" + _theme)
		.add("icon-button-" + _configuration)
		.add(_toggleAble && _selected ? "icon-button-selected" : "")
		.add(_toggleAble && !_selected ? "icon-button-deselected" : "")
		.add(disabled ? "icon-button-disabled" : "")
		.add(_className)
		.toString();

	const handleClick = () => {
		if (_toggleAble) {
			setSelected(!_selected);
			if (onValueChange) {
				onValueChange(_selected);
			}
		}
	};

	return (
		<div
			id={_id}
			tabIndex={0}
			className={_computedComponentClassName}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			onClick={(e) => {
				onClick?.(e);
				handleClick();
			}}
		>
			{!_selected && <Icon>{children}</Icon>}
			{_selected && <Icon filled={true}>{children}</Icon>}
		</div>
	);
};

export default IconButton;
