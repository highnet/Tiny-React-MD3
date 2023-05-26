import React, { useState } from "react";
import { IBottomAppBarProps } from "./IBottomAppBarProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import Icon from "../../Icon/Icon";
import Fab from "../../FABs/FAB/Fab";
import Typography from "../../Typography/Typography";

const BottomAppBar: React.FC<IBottomAppBarProps> = ({
	className,
	id,
	icons = [{ name: "search", onClick: () => {} }],
	fab,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_icons] = useState(icons);
	const [_fab] = useState({
		onClick: fab?.onClick ?? (() => {}),
	});
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("bottom-app-bar")
		.add("bottom-app-bar-" + _theme)
		.add(_className)
		.toString();

	const iconElements = _icons.map((icon, index) => (
		<div
			className={
				"container-on-icon-on-bottom-app-bar container-on-icon-on-bottom-app-bar-" +
				_theme
			}
			key={index}
			tabIndex={0}
		>
			<Icon
				className={"icon-on-bottom-app-bar icon-on-bottom-app-bar-" + _theme}
				onClick={icon.onClick}
			>
				{icon.name}
			</Icon>
			<Typography
				variant="text-label-small"
				className={"label-on-bottom-app-bar label-on-bottom-app-bar-" + _theme}
			>
				{icon.label}
			</Typography>
		</div>
	));

	return (
		<div id={_id} className={_computedComponentClassName}>
			<div className="icons-on-bottom-app-bar">{iconElements}</div>
			{fab && fab.onClick ? (
				<Fab
					configuration="secondary"
					size="medium"
					iconName="add"
					onClick={_fab.onClick}
				></Fab>
			) : null}
		</div>
	);
};

export default BottomAppBar;
