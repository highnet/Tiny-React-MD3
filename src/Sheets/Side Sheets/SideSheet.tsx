import React, { useState, useRef, useEffect } from "react";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { IComponentProps } from "../../Component/IComponentProps";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";
import { ISideSheetProps } from "./ISideSheetProps";
import Button from "../../Button/Button";
import { toggleSideSheet } from "../../Gizmos/Modals";

const SideSheet: React.FC<ISideSheetProps> = ({
	className,
	id,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onMouseDown,
	onMouseUp,
	onClick,
	title,
	trailingIcon,
	leadingIcon,
	content,
	buttons,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [isActive, setisActive] = useState(false);
	const [_title] = useState(title || "Title");
	const [_buttons] = useState(buttons || undefined);
	const [_showActions] = useState(!!_buttons);
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const sideSheetRef = useRef<HTMLDivElement>(null);

	let _computedComponentClassName = new StringBuilder()
		.add("side-sheet")
		.add("side-sheet-" + _theme)
		.add(_className)
		.toString();

		const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
			const { clientX } = event;
			const sideSheetRect = sideSheetRef.current?.getBoundingClientRect();
			const sideSheetLeft = sideSheetRect?.left || 0;
			const sideSheetWidth = sideSheetRect?.width || 0;
			const horizontalPercentage =
			  ((clientX - sideSheetLeft) / sideSheetWidth) * 100;
			if (horizontalPercentage < 7) {
				toggleSideSheet(sideSheetRef, isActive, setisActive);
			}
		  };

		const handleToggleSideSheet = () => {
			toggleSideSheet(sideSheetRef, isActive, setisActive);
		};
		

	const actionButtons = _showActions && (
		<div className="dialog-actions">
			{_buttons?.map((button, index) => (
				<Button key={index} onClick={button.onClick} configuration={"filled"}>
					{button.label || "Action " + index}
				</Button>
			))}
		</div>
	);

	return (
		<div
			ref={sideSheetRef}
			id={_id}
			className={_computedComponentClassName}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			onClick={handleClick}
		>
			{isActive && <Icon className="arrow-on-side-sheet">arrow_right</Icon>}
			{!isActive && <Icon className="arrow-on-side-sheet">arrow_left</Icon>}
			<div className="side-sheet-header">
				{leadingIcon && (
					<div className="side-sheet-icon-container">
						<Icon className="side-sheet-icon" onClick={leadingIcon.onClick}>
							{leadingIcon.name}
						</Icon>
					</div>
				)}
				<Typography variant="text-title-large" className="title-on-side-sheet">
					{_title}
				</Typography>
				{trailingIcon && (
					<div className="side-sheet-icon-container">
						<Icon className="side-sheet-icon" onClick={trailingIcon.onClick}>
							{trailingIcon.name}
						</Icon>
					</div>
				)}
			</div>
			<div className="side-sheet-content">{content}</div>
			<div className="side-sheet-actions">{actionButtons}</div>
		</div>
	);
};

export default SideSheet;
