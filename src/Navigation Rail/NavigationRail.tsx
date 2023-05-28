import { useEffect, useState } from "react";
import { INavigationRailProps } from "./INavigationRailProps";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import Fab from "../FABs/FAB/Fab";
import Icon from "../Icon/Icon";
import Typography from "../Typography/Typography";
import { scrollToSection } from "../Gizmos/Scrolling";

const NavigationRail: React.FC<INavigationRailProps> = ({
	className,
	id,
	icons = [
		{
			name: "credit_card",
			label: "Cards",
			onClick: () => {
				scrollToSection("cards-section", -60);
			},
		},
		{
			name: "cookie",
			label: "Chips",
			onClick: () => {
				scrollToSection("chips-section", -60);
			},
		},
		{
			name: "add",
			label: "Dividers",
			onClick: () => {
				scrollToSection("horizontal-dividers-section", -60);
			},
		},
		{
			name: "radio_button_checked",
			label: "Radio Buttons",
			onClick: () => {
				scrollToSection("radio-buttons-section", -60);
			},
		},
		{
			name: "verified",
			label: "Badges",
			onClick: () => {
				scrollToSection("badges-section", -60);
			},
		},
		{
			name: "check_box",
			label: "Checkboxes",
			onClick: () => {
				scrollToSection("checkboxes-section", -60);
			},
		},
		{
			name: "toggle_on",
			label: "Switches",
			onClick: () => {
				scrollToSection("switches-section", -60);
			},
		},
		{
			name: "joystick",
			label: "Buttons",
			onClick: () => {
				scrollToSection("buttons-section", -60);
			},
		},
		{
			name: "abc",
			label: "Typography",
			onClick: () => {
				scrollToSection("typography-section", -60);
			},
		},
		{
			name: "favorite",
			label: "Icons",
			onClick: () => {
				scrollToSection("icons-section", -60);
			},
		},
		{
			name: "cloud",
			label: "FABs",
			onClick: () => {
				scrollToSection("fabs-section", -60);
			},
		},
		{
			name: "dock_to_bottom",
			label: "Bottom App Bars",
			onClick: () => {
				scrollToSection("bottom-app-bars-section", -60);
			},
		},
		{
			name: "view_carousel",
			label: "Carousels",
			onClick: () => {
				scrollToSection("carousels-section", -60);
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

	function toggleMenu() {
		const menu = document.querySelector(".hamburger-menu");
		const icons = document.querySelector(
			".navigation-rail .icons-on-navigation-rail"
		);

		menu?.classList.toggle("active");
		icons?.classList.toggle("hidden-on-navigation-rail");
	}

	let _computedComponentClassName = new StringBuilder()
		.add("navigation-rail")
		.add("navigation-rail-" + _theme)
		.add(_className)
		.toString();

	const iconElements = _icons.map((icon, index) => (
		<div
			className={
				"container-on-icon-on-navigation-rail container-on-icon-on-navigation-rail-" +
				_theme
			}
			key={index}
			tabIndex={0}
		>
			<Icon
				className={"icon-on-navigation-rail icon-on-navigation-rail-" + _theme}
				onClick={icon.onClick}
			>
				{icon.name}
			</Icon>
			<Typography
				variant="text-label-small"
				className={
					"label-on-navigation-rail label-on-navigation-rail-" + _theme
				}
			>
				{icon.label}
			</Typography>
		</div>
	));

	return (
		<div id={_id} className={_computedComponentClassName}>
			<div className="hamburger-menu" onClick={() => toggleMenu()}></div>
			{fab && fab.onClick ? (
				<Fab
					configuration="secondary"
					size="medium"
					iconName="add"
					onClick={_fab.onClick}
				></Fab>
			) : null}
			<div className={"icons-on-navigation-rail hidden-on-navigation-rail"}>
				{iconElements}
			</div>
		</div>
	);
};

export default NavigationRail;
