import React, { useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { ITooltipProps } from "./ITooltipProps";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

const Tooltip: React.FC<ITooltipProps> = ({
	className,
	id,
	children,
	configuration,
	title,
	buttons,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_children] = useState(
		children ||
			"Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
	);
	const [_configuration] = useState(configuration || "rich");
	const [_title] = useState(title || "Title");
	const [_buttons] = useState(buttons || undefined);
	const [_showActions] = useState(!!_buttons);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("tooltip")
		.add("tooltip-" + _theme)
		.add("tooltip-" + _configuration)
		.add(_showActions ? "tooltip-with-action-buttons" : "")
		.add(
			_configuration === "plain-multiline" ||
				_configuration === "plain-singleline"
				? "tooltip-plain"
				: ""
		)
		.add(_className)
		.toString();

	const actionButtons = _showActions && (
		<div className="tooltip-actions">
			{_buttons?.map((button, index) => (
				<Button key={index} onClick={button.onClick} configuration="text">
					{button.label || "Action"}
				</Button>
			))}
		</div>
	);

	const titleComponent = _configuration === "rich" && (
		<Typography className="title-on-tooltip" variant="text-title-small">
			{_title}
		</Typography>
	);

	return (
		<div id={_id} className={_computedComponentClassName}>
			<div className="tooltip-content">
				{titleComponent}
				<Typography
					className="supporting-text-on-tooltip"
					variant={
						_configuration === "plain-multiline" ||
						_configuration === "plain-singleline"
							? "text-body-small"
							: "text-body-medium"
					}
				>
					{_children}
				</Typography>
			</div>
			{actionButtons}
		</div>
	);
};

export default Tooltip;
