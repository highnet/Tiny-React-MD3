import React, { useState } from "react";
import { IBottomAppBarProps } from "./IBottomAppBarProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import Icon from "../../Icon/Icon";

const BottomAppBar: React.FC<IBottomAppBarProps> = ({
	className,
	id,
	icons = [{ name: "search", onClick: () => {} }],
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_icons] = useState(icons);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("bottom-app-bar")
		.add("bottom-app-bar-" + _theme)
		.add(_className)
		.toString();

	const iconElements = _icons.map((icon, index) => (
		<div className="container-on-icon-on-bottom-app-bar" key={index}>
			<Icon
				className={"icon-on-bottom-app-bar icon-on-bottom-app-bar-" + _theme}
				onClick={icon.onClick}
			>
				{icon.name}
			</Icon>
		</div>
	));

	return (
		<div id={_id} className={_computedComponentClassName}>
			{iconElements}
		</div>
	);
};
export default BottomAppBar;
