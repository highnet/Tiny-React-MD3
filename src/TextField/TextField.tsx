import React, { useEffect, useRef, useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { ITextFieldProps } from "./ITextFieldProps";
import Typography from "../Typography/Typography";
import Icon from "../Icon/Icon";

const TextField: React.FC<ITextFieldProps> = ({
	disabled,
	className,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	configuration = "filled",
	textConfiguration = "label-input",
	leadingIconName,
	trailingIcon = true,
	label = "Label",
	placeholder = textConfiguration === "label-placeholder" ? "Placeholder" : "",
	input = textConfiguration !== "label-placeholder" ? "Input" : "",
	validRegex = "^*$",
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const componentRef = useRef<HTMLDivElement>(null);

	const [_disabled] = useState(disabled || false);
	const [_className] = useState(className || "");
	const [_configuration] = useState(configuration);
	const [_textConfiguration] = useState(textConfiguration);
	const [_leadingIconName] = useState(leadingIconName || undefined);
	const [_trailingIcon] = useState(trailingIcon);
	const [_label] = useState(label);
	const [_placeholder] = useState(placeholder);
	const [_input] = useState(input);
	const [_defaultValueResetted, setDefaultValueReseted] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [isValidInput, setIsValidInput] = useState(true);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("text-field")
		.add("text-field-" + _theme)
		.add(_disabled ? "text-field-disabled" : "")
		.add("text-field-" + _configuration)
		.add("text-field-with-" + _textConfiguration)
		.add(_leadingIconName ? "text-field-with-leading-icon" : "")
		.add(_className)
		.toString();

	const handleResetTextFieldValue = () => {
		if (inputRef.current) {
			inputRef.current.value = "";
		}
	};

	const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		if (!_defaultValueResetted) {
			handleResetTextFieldValue();
			setDefaultValueReseted(true);
		}
		setIsFocused(true);
		componentRef.current?.classList.add("text-field-active");
	};

	const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		setIsFocused(false);
		componentRef.current?.classList.remove("text-field-active");
		const isValidInput = validateInput(event.target.value, validRegex);
		setIsValidInput(isValidInput);
		componentRef.current?.classList.toggle("text-field-error", !isValidInput);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			inputRef.current?.blur();
		}
	};

	const validateInput = (value: string, regex: string): boolean => {
		const pattern = new RegExp(regex);
		return pattern.test(value);
	};

	return (
		<div>
			<div
				ref={componentRef}
				className={_computedComponentClassName}
				onKeyDown={handleKeyDown}
			>
				{_configuration === "outlined" &&
					(_textConfiguration === "label-input" ||
						_textConfiguration === "label-placeholder") && (
						<Typography
							variant="text-body-small"
							className={"label-on-text-field label-on-text-field-outlined"}
						>
							{_textConfiguration === "label-input" ||
							_textConfiguration === "label-placeholder"
								? _label
								: ""}
						</Typography>
					)}
				<div className="text-field-container">
					{leadingIconName && (
						<div>
							<Icon
								className="icon-on-text-field"
								onClick={handleResetTextFieldValue}
							>
								{_leadingIconName}
							</Icon>
						</div>
					)}
					<div className="text-field-content">
						{_configuration === "filled" &&
							(_textConfiguration === "label-input" ||
								_textConfiguration === "label-placeholder") && (
								<Typography
									variant="text-body-small"
									className={"label-on-text-field label-on-text-field-filled"}
								>
									{_textConfiguration === "label-input" ||
									_textConfiguration === "label-placeholder"
										? _label
										: ""}
								</Typography>
							)}
						<input
							className="text-field-input"
							ref={inputRef}
							onMouseEnter={onMouseEnter}
							onMouseLeave={onMouseLeave}
							onMouseMove={onMouseMove}
							onClick={onClick}
							defaultValue={_input}
							placeholder={_placeholder}
							onFocus={handleFocus}
							onBlur={handleBlur}
						></input>
					</div>
					{trailingIcon && (
						<div>
							<Icon
								className="icon-on-text-field trailing-icon-on-text-field"
								onClick={handleResetTextFieldValue}
							>
								{!isValidInput ? "error" : "cancel"}
							</Icon>
						</div>
					)}
				</div>
			</div>
			{_configuration == "filled" && (
				<div
					className={
						"text-field-active-indicator" +
						(isFocused ? " text-field-active-indicator-active" : "") +
						" " +
						("text-field-active-indicator-" + _theme) +
						(!isValidInput ? " " + "text-field-active-indicator-error" : "")
					}
				></div>
			)}
			<Typography
				className={
					"text-field-supporting-text text-field-supporting-text-" + _theme
				}
				variant="text-body-small"
			>
				{children}
			</Typography>
		</div>
	);
};

export default TextField;
