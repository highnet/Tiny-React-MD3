import { useState } from "react";
import TopAppBar from "../App Bars/Top App Bar/TopAppBar";
import { activateNavRailId } from "../Gizmos/Modals";
import { scrollToSection } from "../Gizmos/Scrolling";
import { getPreferredScheme, toggleTheme } from "../Gizmos/Themeing";

interface TRMD3TopBarProps {
	handleToggleTheme: () => void;
	handleScrollToTop: () => void;
}

const TRMD3TopBar: React.FC<TRMD3TopBarProps> = ({
	handleToggleTheme,
	handleScrollToTop,
}) => {
	return (
		<TopAppBar
			configuration="small-centered"
			leadingIcon={{
				name: "menu",
				onClick: () => {
					activateNavRailId("nav-rail-0");
				},
			}}
			trailingIcons={[
				{ name: "dark_mode", onClick: handleToggleTheme },
				{ name: "arrow_upward", onClick: handleScrollToTop },
			]}
		/>
	);
};

export default TRMD3TopBar;
