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
	icons = [{ name: "search", label: "", onClick: () => {} }],
	fab,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_icons] = useState(icons);
	const [_fab] = useState({
		onClick: fab?.onClick ?? (() => {}),
	});
	const [_fabIconName] = useState(fab?.fabIconName ?? "add");

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("bottom-app-bar")
		.add("bottom-app-bar-" + _theme)
		.add(_className)
		.toString();

	let _computedComponentIconClassName = new StringBuilder()
		.add("icon-on-bottom-app-bar")
		.add("icon-on-bottom-app-bar-" + _theme)
		.toString();

	let _computedComponentLabelClassName = new StringBuilder()
		.add("label-on-bottom-app-bar")
		.add("label-on-bottom-app-bar-" + _theme)
		.toString();

	const iconElements = _icons.map((icon, index) => (
		<div
			className={"icon-container-on-bottom-app-bar"}
			key={index}
			tabIndex={0}
		>
			<Icon className={_computedComponentIconClassName} onClick={icon.onClick}>
				{icon.name}
			</Icon>
			<Typography
				className={_computedComponentLabelClassName}
				variant="text-label-small"
			>
				{icon.label}
			</Typography>
		</div>
	));

	return (
		<div id={_id} className={_computedComponentClassName}>
			<div className="icons-on-bottom-app-bar">{iconElements}</div>
			{fab && fab.onClick && (
				<Fab
					configuration="secondary"
					size="medium"
					iconName={_fabIconName}
					onClick={_fab.onClick}
				/>
			)}
		</div>
	);
};

export default BottomAppBar;
