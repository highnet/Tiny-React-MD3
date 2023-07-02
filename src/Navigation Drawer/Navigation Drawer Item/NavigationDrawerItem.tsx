import React, { useState } from "react";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { INavigationDrawerItemProps } from "./INavigationDrawerItemProps";

const NavigationDrawerItem: React.FC<INavigationDrawerItemProps> = ({
	className,
	id,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("navigation-drawer-item")
		.add("navigation-drawer-item-" + _theme)
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
			{children}
		</div>
	);
};

export default NavigationDrawerItem;
