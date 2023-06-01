import React, { useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { ITextFieldProps } from "./ITextFieldProps";
import Typography from "../Typography/Typography";
import Icon from "../Icon/Icon";

const TextField: React.FC<ITextFieldProps> = ({
	className,
	id,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	configuration,
	textConfiguration,
	leadingIconName,
	trailingIcon,
	label,
	placeholder,
	input,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_configuration] = useState(configuration || "filled");
	const [_textConfiguration] = useState(textConfiguration || "label-input");
	const [_leadingIconName] = useState(leadingIconName || undefined);
	const [_trailingIcon] = useState(trailingIcon || true);
	const [_label] = useState(label || "Label");
	const [_placeholder] = useState(placeholder || undefined);
	const [_input] = useState(
		input || _textConfiguration === "label-input" ? "Input" : "Label"
	);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("text-field")
		.add("text-field-" + _theme)
		.add(_className)
		.toString();

	// <>&nbsp;</>
	return (
		<div className={_computedComponentClassName}>
			<div className="text-field-container">
				<div className="text-field-content">
					<Typography variant="text-body-small">
						{_textConfiguration === "label-input" ? _label : ""}
					</Typography>
					<input
						className="text-field-input"
						id={_id}
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						onMouseMove={onMouseMove}
						onClick={onClick}
						defaultValue={_input}
					>
						{children}
					</input>
				</div>
				<div>
					<Icon className="icon-on-text-field">cancel</Icon>
				</div>
			</div>
			<div className="text-field-"></div>
		</div>
	);
};

export default TextField;
