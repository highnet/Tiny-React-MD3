import React, { useEffect, useState } from "react";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { ITopAppBarProps } from "./ITopAppBarProps";
import Typography from "../../Typography/Typography";
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";

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
			{
				name:
					_configuration === "small-centered"
						? "account_circle"
						: "attach_file",
				onClick: () => {
					alert("hi");
				},
			},
			{
				name: "today",
				onClick: () => {
					alert("hi");
				},
			},
			{
				name: "more_vert",
				onClick: () => {
					alert("hi");
				},
			},
		]
	);
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		function handleScroll() {
			setIsScrolling(true);
			const navigationRails = document.querySelectorAll(".top-app-bar");
			navigationRails.forEach((navigationRail) => {
				navigationRail.classList.add("top-app-bar-on-scroll");
			});
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				setIsScrolling(false);
				navigationRails.forEach((navigationRail) => {
					navigationRail.classList.remove("top-app-bar-on-scroll");
				});
			}, 1000);
		}

		let timeoutId: ReturnType<typeof setTimeout>;

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(timeoutId);
		};
	}, []);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("top-app-bar")
		.add("top-app-bar-" + _theme)
		.add("top-app-bar-" + _configuration)
		.add(_className)
		.toString();

	let iconElements = null;
	iconElements = _trailingIcons.map((icon, index) => (
		<IconButton key={index} onClick={icon.onClick}>
			{icon.name}
		</IconButton>
	));

	return (
		<div id={_id} className={_computedComponentClassName}>
			<div style={{ display: "flex", width: "100%" }}>
				<div className="left-container-on-top-app-bar">
					<IconButton onClick={leadingIcon.onClick}>
						{leadingIcon.name}
					</IconButton>

					<Typography
						variant="text-title-large"
						className="title-on-top-app-bar"
					>
						{((_configuration === "small" ||
							_configuration == "small-centered") &&
							_title) ||
							" "}
					</Typography>
				</div>
				<div className="right-container-on-top-app-bar">{iconElements}</div>
			</div>
			{(_configuration === "medium" || configuration === "large") && (
				<Typography variant="text-title-large" className="title-on-top-app-bar">
					{_title}
				</Typography>
			)}
		</div>
	);
};
export default TopAppBar;
