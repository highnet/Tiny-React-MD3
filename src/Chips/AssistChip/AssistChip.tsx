// Import React and some hooks from React library
import React, { useState } from "react";

import { IAssistChipProps } from "./IAssistChipProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";

const AssistChip: React.FC<IAssistChipProps> = ({
	id,
	className,
	children,
	onClick,
	label,
	selected,
	iconType,
	iconName,
	iconSrc,
	elevated,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_label] = useState(label || "Label");
	const [_selected, setSelected] = useState(selected || false);
	const [_iconType] = useState(iconType || undefined);
	const [_iconName] = useState(iconName || "local_taxi");
	const [_elevated] = useState(elevated || false);
	const [_iconSrc] = useState(() => {
		if (iconSrc) {
			return iconSrc;
		} else if (_iconType === "favicon") {
			return "../../public/Netflix_Symbol_RGB.png";
		} else if (_iconType === "branded") {
			return "../../public/Colourful_Logo.png";
		}
	});

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
		.add("assistchip")
		.add(_iconType ? "assistchip-" + _iconType : "")
		.add(_elevated ? "assistchip-elevated" : "")
		.add("assistchip-" + (_selected ? "selected" : "deselected"))
		.add("assistchip-" + _theme)
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
			{_iconType === "icon" ? (
				<span className="material-symbols-outlined icon-on-assistchip">
					{_iconName}
				</span>
			) : (
				""
			)}

			{_iconType === "favicon" || _iconType === "branded" ? (
				<img className={_iconType + "-on-assistchip"} src={_iconSrc}></img>
			) : (
				""
			)}

			<div className="text text-label text-label-large label-on-assistchip">
				{_label}
			</div>
			{children}
		</button>
	);
};

export default AssistChip;
