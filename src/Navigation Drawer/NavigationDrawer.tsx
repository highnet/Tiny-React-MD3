import React, { useEffect, useRef, useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { INavigationDrawerProps } from "./INavigationDrawerProps";

const NavigationDrawer: React.FC<INavigationDrawerProps> = ({
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
		.add("navigation-drawer")
		.add("navigation-drawer-" + _theme)
		.add(_className)
		.toString();

	const navDrawerScrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleResize = () => {
			if (navDrawerScrollRef.current) {
				navDrawerScrollRef.current.classList.remove("nav-drawer-scroll-active");
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleNavDrawerClick = () => {
		setTimeout(() => {
			if (navDrawerScrollRef.current) {
				navDrawerScrollRef.current.classList.remove("nav-drawer-scroll-active");
			}
		}, 100);
	};

	return (
		<div
			id={_id}
			className="nav-drawer-scroll"
			ref={navDrawerScrollRef}
			onClick={handleNavDrawerClick}
		>
			<ul
				className={_computedComponentClassName}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onMouseMove={onMouseMove}
				onClick={onClick}
			>
				{children}
			</ul>
		</div>
	);
};

export default NavigationDrawer;
