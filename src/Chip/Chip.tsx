// Import React and some hooks from React library
import React, { useState } from "react";
import { IChipProps } from "./IChipProps";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";

const Chip: React.FC<IChipProps> = ({
	id,
	configuration,
	className,
	children,
	onClick,
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
	const [_configuration] = useState(configuration || "input");

	const [_selected, setSelected] = useState(selected || false);

	const [_leadingIcon] = useState(leadingIcon || false);
	const [_leadingIconName] = useState(leadingIconName || undefined);

	const [_trailingIcon] = useState(trailingIcon || false);
	const [_trailingIconName] = useState(trailingIconName || undefined);

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
		.add("chip-" + _configuration)
		.add("chip-" + (_selected ? "selected" : "deselected"))
		.add("chip-" + _theme)
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
				<span className="material-symbols-outlined chip-avatar">
					{_selected ? _avatarIconNameSelected : _avatarIconNameDeselected}
				</span>
			) : (
				""
			)}

			{_leadingIcon && !_avatar ? (
				<span className="material-symbols-outlined chip-icon-leading">
					{_leadingIconName ? _leadingIconName : "local_taxi"}
				</span>
			) : (
				""
			)}

			<div className="text text-label text-label-large">Label</div>

			{_trailingIcon ? (
				<span className="material-symbols-outlined chip-icon-trailing">
					{_trailingIconName ? _trailingIcon : "close"}
				</span>
			) : (
				""
			)}
			{children}
		</button>
	);
};

export default Chip;
