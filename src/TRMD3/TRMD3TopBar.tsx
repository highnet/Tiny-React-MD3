import { useState, useEffect } from "react";
import { toggleDrawerId, toggleNavRailId } from "trmd3components/Modals";
import TopAppBar from "trmd3components/TopAppBar";

interface TRMD3TopBarProps {
	handleToggleTheme: () => void;
	handleScrollToTop: () => void;
}

const TRMD3TopBar: React.FC<TRMD3TopBarProps> = ({
	handleToggleTheme,
	handleScrollToTop,
}) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const onClickFunction =
		screenWidth < 768
			? () => toggleDrawerId("drawer-0")
			: () => toggleNavRailId("nav-rail-0");

	return (
		<TopAppBar
			configuration="small-centered"
			leadingIcon={{
				name: "menu",
				onClick: () => {
					onClickFunction();
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
