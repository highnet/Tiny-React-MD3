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

	const navDrawerScrollRef = useRef<HTMLDivElement>(null);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	useEffect(() => {
		const handleResize = () => {
			if (navDrawerScrollRef.current) {
				navDrawerScrollRef.current.classList.remove("navigation-drawer-active");
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
				navDrawerScrollRef.current.classList.remove("navigation-drawer-active");
			}
		}, 100);
	};

	let _computedComponentClassName = new StringBuilder()
		.add("navigation-drawer")
		.add("navigation-drawer-" + _theme)
		.add(_className)
		.toString();

	return (
		<div
			id={_id}
			className={_computedComponentClassName}
			ref={navDrawerScrollRef}
			onClick={handleNavDrawerClick}
		>
			<ul
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
