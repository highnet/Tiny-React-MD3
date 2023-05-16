// Import React and some hooks from React library
import React, { useState } from "react";

import { IAssistChipProps } from "./IAssistChipProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";

const AssistChip: React.FC<IAssistChipProps> = ({
	id,
	className,
	disabled,
	children,
	onClick,
	iconType,
	iconName,
	iconSrc,
	elevated,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_disabled] = useState(disabled || false);
	const [_children] = useState(children || "Label");
	const [_iconType] = useState(iconType || undefined);
	const [_iconName] = useState(iconName || "local_taxi");
	const [_elevated] = useState(elevated || false);
	const [_iconSrc] = useState(() => {
		if (iconSrc) {
			return iconSrc;
		} else if (_iconType === "favicon") {
			return "../../Netflix_Symbol_RGB.png";
		} else if (_iconType === "branded") {
			return "../../Colourful_Logo.png";
		}
	});

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const click = () => {
		console.log("Thank you for using Tiny React MD3!");
	};

	const handleClick = () => {
		click();
	};

	let _computedComponentClassName = new StringBuilder()
		.add("chip")
		.add("assistchip")
		.add(_disabled ? "assistchip-disabled" : "")
		.add(_iconType ? "assistchip-" + _iconType : "")
		.add(_iconType ? "assistchip-with-icon" : "")
		.add(_elevated ? "assistchip-elevated" : "")
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
				<Icon className="icon-on-assistchip">{_iconName}</Icon>
			) : (
				""
			)}

			{_iconType === "favicon" || _iconType === "branded" ? (
				<img className={_iconType + "-on-assistchip"} src={_iconSrc}></img>
			) : (
				""
			)}

			<Typography variant={"text-label-large"} className="text-on-assistchip">
				{_children}
			</Typography>
		</button>
	);
};

export default AssistChip;
