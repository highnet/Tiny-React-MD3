import { useState, useEffect, useRef } from "react";
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

	const navigationRailRef = useRef<HTMLDivElement>(null);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

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
				className={`icon-container-on-navigation-rail icon-container-on-navigation-rail-${_theme} ${
					index === currentIndex
						? "active-icon-container-on-navigation-rail"
						: "inactive-icon-container-on-navigation-rail"
				} ${
					iconSize === "big"
						? "big-icon-container-on-navigation-rail"
						: "small-icon-container-on-navigation-rail"
				}`}
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
					className={`icon-on-navigation-rail icon-on-navigation-rail-${_theme} ${
						iconSize === "big"
							? "big-icon-on-navigation-rail"
							: "small-icon-on-navigation-rail"
					}`}
				>
					{icon.name}
				</Icon>

				{icon.label && (
					<Typography
						variant="text-label-medium"
						className={`label-on-navigation-rail label-on-navigation-rail-${_theme}`}
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

	useEffect(() => {
		const handleResize = () => {
			if (navigationRailRef.current) {
				navigationRailRef.current.classList.remove("navigation-rail-active");
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	let _computedComponentClassName = new StringBuilder()
		.add("navigation-rail")
		.add("navigation-rail-" + _theme)
		.add(_className)
		.toString();

	return (
		<div
			ref={navigationRailRef}
			id={_id}
			className={_computedComponentClassName}
		>
			<div className="navigation-rail-top">
				{fab && fab.onClick ? (
					<Fab
						configuration="tertiary"
						size="medium"
						iconName={_fabIconName}
						onClick={_fab.onClick}
					>
						<Typography
							variant="text-label-medium"
							className={`label-on-navigation-rail label-on-navigation-rail-${_theme}`}
						>
							{fab.label}
						</Typography>
					</Fab>
				) : null}
			</div>
			<div className={"icons-on-navigation-rail"}>{iconElements}</div>
		</div>
	);
};

export default NavigationRail;
