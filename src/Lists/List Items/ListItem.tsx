import React, { useEffect, useState, useRef } from "react";
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
	size,
	leadingElement,
	leadingElementId,
	showDivider,
	leadingMonogramInitial,
	imageSrc,
	radioButtonGroupName,
	radioButtonValue,
	trailingElementId,
	trailingElement,
	iconName,
	elementSelected,
	checkboxConfiguration,
	onElementChange,
	onTrailingIconClick,
	switchIconNameSelected,
	switchIconNameDeselected,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_size] = useState(size || "3-line");
	const [_title] = useState(title || "List Item");
	const [_showDivider] = useState(showDivider || false);
	const [_leadingElement] = useState(leadingElement || undefined);
	const [_trailingElement] = useState(trailingElement || undefined);
	const [_leadingMonogramInitial] = useState(
		leadingMonogramInitial?.charAt(0) || "A"
	);
	const [_leadingIconName] = useState(iconName || "account_circle");
	const [_trailingIconName] = useState(iconName || "chevron_right");
	const [_imageSrc] = useState(imageSrc || "default-media-small.png");

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("list-item")
		.add("list-item-" + _theme)
		.add("list-item-" + _size)
		.add(_showDivider ? "list-item-with-divider" : "")
		.add(_className)
		.toString();

	const _leadingElementComponent = (
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
						onChange={onElementChange}
						selected={elementSelected}
						configuration={checkboxConfiguration}
					/>
				</div>
			)}
			{_leadingElement === "radio" && (
				<div className="list-item-leading-element-radio">
					<RadioButton
						id={leadingElementId}
						onChange={onElementChange}
						name={radioButtonGroupName}
						value={radioButtonValue}
						defaultChecked={elementSelected}
					></RadioButton>
				</div>
			)}
			{_leadingElement === "switch" && (
				<div className="list-item-leading-element-switch">
					<Switch
						id={leadingElementId}
						onChange={onElementChange}
						selected={elementSelected}
						icon={true}
						iconNameSelected={switchIconNameSelected}
						iconNameDeselected={switchIconNameDeselected}
					></Switch>
				</div>
			)}
		</div>
	);

	const _trailingElementComponent = (
		<div className="list-item-trailing-element-element">
			{_trailingElement === "icon" && (
				<div
					className={`list-item-trailing-element-icon ${
						onTrailingIconClick
							? "list-item-trailing-element-icon-interactable"
							: ""
					}`}
					onClick={onTrailingIconClick}
				>
					<Icon id={trailingElementId}>{_trailingIconName}</Icon>
				</div>
			)}

			{_trailingElement === "checkbox" &&
				(_leadingElement === undefined ||
					_leadingElement === "monogram" ||
					_leadingElement === "icon" ||
					_leadingElement === "image-small" ||
					_leadingElement === "image-big") && (
					<div className="list-item-trailing-element-checkbox">
						<Checkbox
							id={trailingElementId}
							onChange={onElementChange}
							selected={elementSelected}
							configuration={checkboxConfiguration}
						/>
					</div>
				)}
		</div>
	);

	const boxRef = useRef<HTMLLIElement>(null);
	const innerCircleRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const box = boxRef.current;
		const innerCircle = innerCircleRef.current;

		const handleMouseMove = (e: MouseEvent) => {
			if (innerCircle && box) {
				const boxRect = box.getBoundingClientRect();
				const offsetX = e.clientX - boxRect.left;
				const offsetY = e.clientY - boxRect.top;
				innerCircle.style.left = `${offsetX / 10}rem`;
				innerCircle.style.top = `${offsetY / 10}rem`;
			}
		};

		if (box && innerCircle) {
			box.addEventListener("mousemove", handleMouseMove);
		}

		return () => {
			if (box && innerCircle) {
				box.removeEventListener("mousemove", handleMouseMove);
			}
		};
	}, [boxRef, innerCircleRef]);

	return (
		<li
			tabIndex={0}
			id={_id}
			className={_computedComponentClassName}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			onClick={onClick}
			ref={boxRef}
		>
			<div className="list-item-state-layer">
				<div className="list-item-leading-element">
					{_leadingElementComponent}
				</div>
				<div className="list-item-content">
					<Typography variant="text-body-large" className="title-on-list-item">
						{_title}
					</Typography>
					{_size !== "1-line" && (
						<Typography
							variant="text-body-medium"
							className="supporting-text-on-list-item"
						>
							{children}
						</Typography>
					)}
				</div>
				<div className="list-item-trailing-element">
					{_trailingElementComponent}
				</div>
			</div>
			<span className="list-item-inner-circle" ref={innerCircleRef}></span>
		</li>
	);
};

export default ListItem;
