import React, { useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { ISnackBarProps } from "./ISnackBarProps";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const SnackBar: React.FC<ISnackBarProps> = ({
	className,
	id,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	configuration,
	message,
	dismissable,
	action,
	actionLabel,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_configuration] = useState(configuration || "one-line");
	const [_message] = useState(message || "Default message");
	const [_dismissable] = useState(dismissable || false);
	const [_actionLabel] = useState(actionLabel || "Action");

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
		>
			<Typography className="message-on-snackbar">{_message}</Typography>
			<div className="actions-on-snackbar">
				{action && (
					<Button
						onClick={action}
						className="button-on-snackbar"
						configuration="text"
					>
						{_actionLabel}
					</Button>
				)}

				{_dismissable && (
					<div className="icon-container-on-snackbar">
						<Icon className="icon-on-snackbar">close</Icon>{" "}
					</div>
				)}
			</div>
		</div>
	);
};

export default SnackBar;
