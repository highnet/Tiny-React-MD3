import React, { useState } from "react";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { ITopAppBarProps } from "./ITopAppBarProps";
import Typography from "../../Typography/Typography";
import Icon from "../../Icon/Icon";

const TopAppBar: React.FC<ITopAppBarProps> = ({
	className,
	id,
	configuration,
	title,
	leadingIcon = {
		name: "arrow_back",
		onClick: () => {
			alert("hi");
		},
	},
	trailingIcons,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_configuration] = useState(configuration || "small");
	const [_title] = useState(title || "TRMD3");
	const [_trailingIcons] = useState(
		trailingIcons || [
			{ name: "attach_file", onClick: () => {} },
			{ name: "today", onClick: () => {} },
			{ name: "more_vert", onClick: () => {} },
		]
	);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("top-app-bar")
		.add("top-app-bar-" + _theme)
		.add(_className)
		.toString();

	console.log(leadingIcon.name);

	return (
		<div id={id} className={_computedComponentClassName}>
			<div
				className="icon-container-on-top-app-bar"
				onClick={leadingIcon.onClick}
			>
				<Icon>{leadingIcon.name}</Icon>
			</div>
			<Typography variant="text-title-large" className="title-on-top-app-bar">
				{_title}
			</Typography>
		</div>
	);
};

export default TopAppBar;
