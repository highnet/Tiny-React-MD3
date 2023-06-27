import React, { useEffect, useState, useRef } from "react";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import Typography from "../../Typography/Typography";
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import { IMenuItemProps } from "./IMenuItemProps";

const MenuItem: React.FC<IMenuItemProps> = ({
	label,
	className,
	id,
	children,
	onMouseMove,
	onClick,
	leadingIcon,
	showDivider,
	trailingIcon,
	onTrailingIconClick,
	disabled,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_label] = useState(label || "Menu Item");
	const [_showDivider] = useState(showDivider || false);
	const [_leadingIcon] = useState(leadingIcon || "");
	const [_trailingIcon] = useState(trailingIcon || "");
	const [_disabled] = useState(disabled || false);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const [showSubMenu, setShowSubMenu] = useState(false);

	const handleMouseEnter = () => {
		setShowSubMenu(true);
		const innerCircle = innerCircleRef.current;
		if (innerCircle) {
			innerCircle.style.display = "block";
		}
	};

	const handleMouseLeave = () => {
		setShowSubMenu(false);
		const innerCircle = innerCircleRef.current;
		if (innerCircle) {
			innerCircle.style.display = "none";
		}
	};

	let _computedComponentClassName = new StringBuilder()
		.add("menu-item")
		.add("menu-item-" + _theme)
		.add(_showDivider ? "menu-item-with-divider" : "")
		.add(_disabled ? "menu-item-disabled" : "")
		.add(_className)
		.toString();

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
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseMove={onMouseMove}
			onClick={onClick}
			ref={boxRef}
		>
			<div className="menu-item-state-layer">
				{_leadingIcon && (
					<div className="menu-item-leading-icon">
						<Icon>{_leadingIcon}</Icon>
					</div>
				)}
				<div className="menu-item-content">
					<Typography variant="text-body-large" className="label-on-menu-item">
						{_label}
					</Typography>
				</div>
				{_trailingIcon && (
					<div className="menu-item-trailing-icon">
						<IconButton onClick={onTrailingIconClick}>
							{_trailingIcon}
						</IconButton>
					</div>
				)}
			</div>
			<span className="menu-item-inner-circle" ref={innerCircleRef}></span>
			{showSubMenu && children}
		</li>
	);
};

export default MenuItem;
