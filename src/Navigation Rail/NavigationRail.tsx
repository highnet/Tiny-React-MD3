import { useState } from "react";
import { INavigationRailProps } from "./INavigationRailProps";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import Fab from "../FABs/FAB/Fab";
import Icon from "../Icon/Icon";
import Typography from "../Typography/Typography";

const NavigationRail: React.FC<INavigationRailProps> = ({
	className,
	id,
	icons = [
		{
			name: "search",
			label: "Search",
			onClick: () => {
				alert("hi");
			},
		},
	],
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
		.add("navigation-rail")
		.add("navigation-rail-" + _theme)
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
			{fab && fab.onClick ? (
				<Fab
					configuration="secondary"
					size="medium"
					iconName="add"
					onClick={_fab.onClick}
				></Fab>
			) : null}
			<div className="icons-on-bottom-app-bar">{iconElements}</div>
		</div>
	);
};

export default NavigationRail;
