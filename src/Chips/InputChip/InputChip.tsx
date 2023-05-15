// Import React and some hooks from React library
import React, { useState } from "react";
import { IChipProps as IInputChipProps } from "./IInputChipProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import Icon from "../../Icon/Icon";

function computeNumberOfItems(
	leadingIcon: boolean,
	trailingIcon: boolean,
	avatar: boolean
): string {
	let computedNumberOfItems = 1;
	if (leadingIcon && !avatar) computedNumberOfItems++;
	if (trailingIcon) computedNumberOfItems++;
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
	label,
	selected,
	leadingIcon,
	leadingIconName,
	trailingIcon,
	trailingIconName,
	avatar,
	avatarIconNameDeselected,
	avatarIconNameSelected,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_label] = useState(label || "Label");
	const [_selected, setSelected] = useState(selected || false);
	const [_leadingIcon] = useState(leadingIcon || false);
	const [_leadingIconName] = useState(leadingIconName || "local_taxi");
	const [_trailingIcon] = useState(trailingIcon || false);
	const [_trailingIconName] = useState(trailingIconName || "close");
	const [_avatar] = useState(avatar || false);
	const [_avatarIconNameDeselected] = useState(
		avatarIconNameDeselected || "person"
	);
	const [_avatarIconNameSelected] = useState(avatarIconNameSelected || "check");

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const click = () => {
		console.log("Thank you for using Tiny React MD3!");
	};

	const handleClick = () => {
		setSelected(!_selected);
		click();
	};

	let _computedComponentClassName = new StringBuilder()
		.add("chip")
		.add("inputchip")
		.add(
			"inputchip-" +
				computeNumberOfItems(_leadingIcon, _trailingIcon, _avatar) +
				"-items"
		)
		.add("inputchip-" + (_selected ? "selected" : "deselected"))
		.add(_avatar ? "inputchip-avatar" : "")
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
		>
			{_avatar ? (
				<Icon className="avatar-on-inputchip">
					{_selected ? _avatarIconNameSelected : _avatarIconNameDeselected}
				</Icon>
			) : (
				""
			)}
			{_leadingIcon && !_avatar ? (
				<Icon className="inputchip-icon-leading">{_leadingIconName}</Icon>
			) : (
				""
			)}
			<div className="text text-label text-label-large label-on-inputchip">
				{_label}
			</div>
			{_trailingIcon ? (
				<Icon className="inputchip-icon-trailing">{_trailingIconName}</Icon>
			) : (
				""
			)}
			{children}
		</button>
	);
};

export default InputChip;
