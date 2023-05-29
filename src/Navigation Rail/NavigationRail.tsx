import { useState } from "react";
import { INavigationRailProps } from "./INavigationRailProps";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import Fab from "../FABs/FAB/Fab";
import Icon from "../Icon/Icon";
import Typography from "../Typography/Typography";
import Badge from "../Badge/Badge";

const NavigationRail: React.FC<INavigationRailProps> = ({
	className,
	id,
	icons,
	fab,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_icons] = useState(icons || []);
	const [_fab] = useState({
		onClick: fab?.onClick ?? (() => {}),
	});
	const [_fabIconName] = useState(fab?.fabIconName ?? "edit");
	const [currentIndex, setCurrentIndex] = useState(-1);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	function toggleMenu() {
		const menu = document.querySelectorAll(
			".navigation-rail-hamburger-menu-container"
		);
		const icons = document.querySelectorAll(
			".navigation-rail .icons-on-navigation-rail"
		);
		const hamburgerElements = document.querySelectorAll(
			".navigation-rail-hamburger-menu-element"
		);
		const navigationRailTop = document.querySelectorAll(".navigation-rail-top");

		navigationRailTop.forEach((rail) => {
			rail.classList.toggle("active");
		});

		menu.forEach((menu) => {
			menu.classList.toggle("active");
		});

		icons.forEach((icon) => {
			icon.classList.toggle("hidden-on-navigation-rail");
		});

		hamburgerElements.forEach((element) => {
			element.classList.toggle("active");
		});
	}

	let _computedComponentClassName = new StringBuilder()
		.add("navigation-rail")
		.add("navigation-rail-" + _theme)
		.add(_className)
		.toString();

	interface BadgeOffsets {
		[key: string]: {
			[key: string]: { xOffset: number; yOffset: number };
		};
	}

	const badgeOffsets: BadgeOffsets = {
		big: {
			small: { xOffset: 1, yOffset: -4 },
			singledigit: { xOffset: 1, yOffset: -4 },
			multipledigits: { xOffset: 1.5, yOffset: -4 },
		},
		small: {
			small: { xOffset: 1, yOffset: -4.5 },
			singledigit: { xOffset: 1, yOffset: -4.5 },
			multipledigits: { xOffset: 1.5, yOffset: -4.5 },
		},
	};

	const iconElements = _icons.map((icon, index) => {
		let iconSize = icon.label ? "small" : "big";
		if (iconSize === "big" && icon.label) {
			iconSize = "small";
		}
		const badgeConfigurationMap: { [key: string]: string } = {
			small: "small",
			"single-digit": "singledigit",
			"multiple-digits": "multipledigits",
		};

		const badgeConfiguration =
			badgeConfigurationMap[icon.badge?.configuration ?? "small"];

		const { xOffset: badgeXOffset, yOffset: badgeYOffset } =
			badgeOffsets[iconSize][badgeConfiguration];

		return (
			<div
				className={`
        icon-container-on-navigation-rail
        icon-container-on-navigation-rail-${_theme}
        ${
					index === currentIndex
						? "active-icon-container-on-navigation-rail"
						: "inactive-icon-container-on-navigation-rail"
				}
        ${
					iconSize === "big"
						? "big-icon-container-on-navigation-rail"
						: "small-icon-container-on-navigation-rail"
				}
      `}
				key={index}
				tabIndex={0}
				onClick={() => {
					setCurrentIndex(index);
					if (icon && icon.onClick) {
						icon.onClick();
					}
				}}
			>
				<Icon
					className={`
          icon-on-navigation-rail
          icon-on-navigation-rail-${_theme}

${
	iconSize === "big"
		? "big-icon-on-navigation-rail"
		: "small-icon-on-navigation-rail"
}
        `}
				>
					{icon.name}
				</Icon>

				{icon.label && (
					<Typography
						variant="text-label-medium"
						className={`
            label-on-navigation-rail
            label-on-navigation-rail-${_theme}
          `}
					>
						{icon.label}
					</Typography>
				)}
				{icon.badge?.configuration && (
					<Badge
						configuration={icon.badge.configuration}
						xOffset={badgeXOffset}
						yOffset={badgeYOffset}
					>
						{icon.badge.value}
					</Badge>
				)}
			</div>
		);
	});

	return (
		<div id={_id} className={_computedComponentClassName}>
			<div className="navigation-rail-top">
				<div
					className="navigation-rail-hamburger-menu-container"
					onClick={() => toggleMenu()}
				>
					<div
						className={`navigation-rail-hamburger-menu-element navigation-rail-hamburger-menu-element-${_theme}`}
					></div>
					<div
						className={`navigation-rail-hamburger-menu-element navigation-rail-hamburger-menu-element-${_theme}`}
					></div>
					<div
						className={`navigation-rail-hamburger-menu-element navigation-rail-hamburger-menu-element-${_theme}`}
					></div>
					<div
						className={`navigation-rail-hamburger-menu-element navigation-rail-hamburger-menu-element-${_theme}`}
					></div>
					<div
						className={`navigation-rail-hamburger-menu-element navigation-rail-hamburger-menu-element-${_theme}`}
					></div>
					<div
						className={`navigation-rail-hamburger-menu-element navigation-rail-hamburger-menu-element-${_theme}`}
					></div>
				</div>
				{fab && fab.onClick ? (
					<Fab
						configuration="tertiary"
						size="medium"
						iconName={_fabIconName}
						onClick={_fab.onClick}
					></Fab>
				) : null}
			</div>
			<div className={"icons-on-navigation-rail hidden-on-navigation-rail"}>
				{iconElements}
			</div>
		</div>
	);
};

export default NavigationRail;
