import React, { useState } from "react";
import { IListItemProps } from "./IlistItemProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import Typography from "../../Typography/Typography";
import Icon from "../../Icon/Icon";
import Checkbox from "../../Checkbox/Checkbox";
import Switch from "../../Switch/Switch";
import RadioButton from "../../Radio Button/RadioButton";

const ListItem: React.FC<IListItemProps> = ({
	title,
	className,
	id,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	leadingElement,
	trailingElement,
	size,
	showDivider,
	leadingMonogramInitial,
	leadingIconName,
	imageSrc,
	leadingElementId,
	trailingElementId,
	onLeadingElementChange,
	radioButtonGroupName,
	radioButtonValue,
	checkboxSelected,
	checkboxConfiguration,
	radioButtonSelected,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_size] = useState(size || "3-line");
	const [_title] = useState(title || "List Item");
	const [_showDivider] = useState(showDivider || false);
	const [_leadingElement] = useState(leadingElement || undefined);
	const [_leadingMonogramInitial] = useState(
		leadingMonogramInitial?.charAt(0) || "A"
	);
	const [_leadingIconName] = useState(leadingIconName || "account_circle");
	const [_imageSrc] = useState(imageSrc || "default-media-small.png");

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("list-item")
		.add("list-item-" + _theme)
		.add("list-item-" + _size)
		.add(_className)
		.toString();

	const leadingElementComponent = (
		<div className="list-item-leading-element-element">
			{_leadingElement === "monogram" && (
				<div className="list-item-leading-element-monogram">
					<Typography variant="text-title-medium" id={leadingElementId}>
						{_leadingMonogramInitial}
					</Typography>
				</div>
			)}
			{_leadingElement === "icon" && (
				<div className="list-item-leading-element-icon">
					<Icon id={leadingElementId}>{_leadingIconName}</Icon>
				</div>
			)}
			{_leadingElement === "image-small" && (
				<div className="list-item-leading-element-image-small">
					<img id={leadingElementId} src={_imageSrc} />
				</div>
			)}
			{_leadingElement === "image-big" && (
				<div className="list-item-leading-element-image-big">
					<img id={leadingElementId} src={_imageSrc} />
				</div>
			)}
			{_leadingElement === "checkbox" && (
				<div className="list-item-leading-element-checkbox">
					<Checkbox
						id={leadingElementId}
						onChange={onLeadingElementChange}
						selected={checkboxSelected}
						configuration={checkboxConfiguration}
					/>
				</div>
			)}
			{_leadingElement === "radio" && (
				<div className="list-item-leading-element-radio">
					<RadioButton
						id={leadingElementId}
						onChange={onLeadingElementChange}
						name={radioButtonGroupName}
						value={radioButtonValue}
						defaultChecked={radioButtonSelected}
					></RadioButton>
				</div>
			)}
			{_leadingElement === "switch" && (
				<div className="list-item-leading-element-switch">
					<Switch
						id={leadingElementId}
						onChange={onLeadingElementChange}
					></Switch>
				</div>
			)}
		</div>
	);

	return (
		<li
			id={_id}
			className={_computedComponentClassName}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			onClick={onClick}
		>
			<div className="list-item-state-layer">
				<div className="list-item-leading-element">
					{leadingElementComponent}
				</div>
				<div className="list-item-content">
					<Typography variant="text-body-large">{_title}</Typography>
					{_size !== "1-line" && (
						<Typography variant="text-body-medium">{children}</Typography>
					)}
				</div>
				<div className="list-item-trailing-element">
					<div className="list-item-trailing-element-element"></div>
				</div>
			</div>
			{_showDivider && <div className="list-item-divider"></div>}
		</li>
	);
};

export default ListItem;
