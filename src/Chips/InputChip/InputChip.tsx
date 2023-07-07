import React, { useState } from "react";
import { IChipProps as IInputChipProps } from "./IInputChipProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";

function computeNumberOfItems(
	leadingIconName: string | undefined,
	trailingIconName: string | undefined,
	avatar: string | undefined
): string {
	let computedNumberOfItems = 1;
	if (leadingIconName && !avatar) computedNumberOfItems++;
	if (trailingIconName) computedNumberOfItems++;
	if (avatar) computedNumberOfItems++;

	const numberToStringDictionary: { [name: number]: string } = {
		1: "one",
		2: "two",
		3: "three",
	};

	return numberToStringDictionary[computedNumberOfItems];
}

const InputChip: React.FC<IInputChipProps> = ({
	id,
	className,
	children,
	onClick,
	selected,
	leadingIconName,
	trailingIconName,
	avatarIconNameDeselected,
	avatarIconNameSelected,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_children] = useState(children || "Label");
	const [_selected, setSelected] = useState(selected || false);
	const [_leadingIconName] = useState(leadingIconName || undefined);
	const [_trailingIconName] = useState(trailingIconName || undefined);
	const [_avatarIconNameDeselected] = useState(
		avatarIconNameDeselected || undefined
	);
	const [_avatarIconNameSelected] = useState(
		avatarIconNameSelected || undefined
	);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const handleClick = () => {
		setSelected(!_selected);
	};

	let _computedComponentClassName = new StringBuilder()
		.add("chip")
		.add("inputchip")
		.add(
			"inputchip-" +
				computeNumberOfItems(
					_leadingIconName,
					_trailingIconName,
					_avatarIconNameDeselected && _avatarIconNameSelected
				) +
				"-items"
		)
		.add("inputchip-" + (_selected ? "selected" : "deselected"))
		.add(
			_avatarIconNameDeselected && _avatarIconNameSelected
				? "inputchip-avatar"
				: ""
		)
		.add("inputchip-" + _theme)
		.add(_className)
		.toString();

	return (
		<button
			id={_id}
			className={_computedComponentClassName}
			onClick={(e) => {
				onClick?.(e);
				handleClick();
			}}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
		>
			{_avatarIconNameDeselected && _avatarIconNameSelected && (
				<Icon className="avatar-on-inputchip">
					{_selected ? _avatarIconNameSelected : _avatarIconNameDeselected}
				</Icon>
			)}
			{_leadingIconName &&
				!(_avatarIconNameDeselected && _avatarIconNameSelected) && (
					<Icon className="inputchip-icon-leading">{_leadingIconName}</Icon>
				)}
			<Typography className="label-on-inputchip" variant="text-label-large">
				{_children}
			</Typography>
			{_trailingIconName && (
				<Icon className="inputchip-icon-trailing">{_trailingIconName}</Icon>
			)}
		</button>
	);
};

export default InputChip;
