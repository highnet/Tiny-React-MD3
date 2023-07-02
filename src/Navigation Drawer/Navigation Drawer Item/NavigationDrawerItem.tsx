import React, { useState } from "react";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { INavigationDrawerItemProps } from "./INavigationDrawerItemProps";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";
import HorizontalDivider from "../../Dividers/HorizontalDivider/HorizontalDivider";

const NavigationDrawerItem: React.FC<INavigationDrawerItemProps> = ({
	className,
	id,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	leadingIcon,
	label,
	trailingText,
	showDivider,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_leadingIcon] = useState(leadingIcon || undefined);
	const [_interactive] = useState(_leadingIcon || trailingText);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("navigation-drawer-item")
		.add("navigation-drawer-item-" + _theme)
		.add(
			_interactive
				? "navigation-drawer-item-interactive"
				: "navigation-drawer-item-noninteractive"
		)
		.add(showDivider ? "navigation-drawer-item-with-divider" : "")
		.add(_className)
		.toString();
	return (
		<li
			tabIndex={0}
			id={_id}
			className={_computedComponentClassName}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			onClick={onClick}
		>
			<div className="navigation-drawer-state-layer">
				{_leadingIcon && (
					<Icon className="icon-on-navigation-drawer" filled={true}>
						{_leadingIcon}
					</Icon>
				)}
				{label && (
					<Typography
						className="label-on-navigation-drawer"
						variant="text-label-large"
					>
						{label}
					</Typography>
				)}
				{trailingText && (
					<Typography
						className="trailing-text-on-navigation-drawer"
						variant="text-label-large"
					>
						{trailingText}
					</Typography>
				)}
			</div>
			{showDivider && (
				<HorizontalDivider className="divider-on-navigation-drawer" />
			)}
		</li>
	);
};

export default NavigationDrawerItem;
