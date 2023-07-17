import React from "react";
import hljs from "highlight.js";
import "highlight.js/styles/base16/material-lighter.css";
import "trmd3components/trmd3.css";
import { scrollToSection } from "trmd3components/Scrolling";
import { getPreferredScheme, toggleTheme } from "trmd3components/Themeing";
import { useState, useEffect } from "react";
import Cookietrail from "./TRMD3/Cookietrail/Cookietrail.tsx";
import AssistChipsFrame from "./TRMD3/Frames/AssistChipsFrame.tsx";
import BadgesFrame from "./TRMD3/Frames/BadgesFrame.tsx";
import BottomAppBarsFrame from "./TRMD3/Frames/BottomAppBarsFrame.tsx";
import ButtonsFrame from "./TRMD3/Frames/ButtonsFrame.tsx";
import CarouselsFrame from "./TRMD3/Frames/CarouselsFrame.tsx";
import CheckboxesFrame from "./TRMD3/Frames/CheckboxesFrame.tsx";
import DialogsFrame from "./TRMD3/Frames/DialogsFrame.tsx";
import ExtendedFabsFrame from "./TRMD3/Frames/ExtendedFabsFrame.tsx";
import FabsFrame from "./TRMD3/Frames/FabsFrame.tsx";
import HorizontalCardsFrame from "./TRMD3/Frames/HorizontalCardsFrame.tsx";
import HorizontalDividersFrame from "./TRMD3/Frames/HorizontalDividersFrame.tsx";
import IconButtonsFrame from "./TRMD3/Frames/IconButtonsFrame.tsx";
import IconsFrame from "./TRMD3/Frames/IconsFrame.tsx";
import InputChipsFrame from "./TRMD3/Frames/InputChipsFrame.tsx";
import ListsFrame from "./TRMD3/Frames/ListsFrame.tsx";
import MenusFrame from "./TRMD3/Frames/MenusFrame.tsx";
import NavigationDrawersFrame from "./TRMD3/Frames/NavigationDrawersFrame.tsx";
import NavigationRailsFrame from "./TRMD3/Frames/NavigationRailsFrame.tsx";
import RadioButtonsFrame from "./TRMD3/Frames/RadioButtonsFrame.tsx";
import SegmentedButtonsFrame from "./TRMD3/Frames/SegmentedButtonsFrame.tsx";
import SideSheetsFrame from "./TRMD3/Frames/SideSheetsFrame.tsx";
import SlidersFrame from "./TRMD3/Frames/SlidersFrame.tsx";
import SnackBarsFrame from "./TRMD3/Frames/SnackBarsFrame.tsx";
import StackedCardsFrame from "./TRMD3/Frames/StackedCardsFrame.tsx";
import SwitchesFrame from "./TRMD3/Frames/SwitchesFrame.tsx";
import TextFieldsFrame from "./TRMD3/Frames/TextFieldsFrame.tsx";
import TooltipsFrame from "./TRMD3/Frames/TooltipsFrame.tsx";
import TopAppBarsFrame from "./TRMD3/Frames/TopAppBarsFrame.tsx";
import TypographiesFrame from "./TRMD3/Frames/TypographiesFrame.tsx";
import VerticalDividersFrame from "./TRMD3/Frames/VerticalDividersFrame.tsx";
import Hero from "./TRMD3/Hero/Hero.tsx";
import TRMD3BotBar from "./TRMD3/TRMD3BotBar/TRMD3BotBar.tsx";
import TRMD3Menu from "./TRMD3/TRMD3Menu.tsx";
import TRMD3NavDrawer from "./TRMD3/TRMD3NavDrawer/TRMD3NavDrawer.tsx";
import TRMD3NavRail from "./TRMD3/TRMD3NavRail/TRMD3NavRail.tsx";
import TRMD3SideSheet from "./TRMD3/TRMD3SideSheet/TRMD3SideSheet.tsx";
import TRMD3TopBar from "./TRMD3/TRMD3TopBar.tsx";
import TourGuide from "./TRMD3/TourGuide/TourGuide.tsx";

const App: React.FC = () => {
	console.log(`👋 Welcome to TRMD3! 👋`);

	const [_theme, setTheme] = useState(
		localStorage.getItem("theme") || getPreferredScheme() + "-theme"
	);

	const handleScrollToTop = (): void => {
		scrollToSection("tourguide-section", -60);
	};

	const handleToggleTheme = (): void => {
		toggleTheme(_theme, setTheme);
	};

	useEffect(() => {
		localStorage.setItem("theme", _theme);
		document.body.className = "body-" + _theme;
	}, [_theme]);

	useEffect(() => {
		hljs.configure({
			ignoreUnescapedHTML: true,
		});

		hljs.highlightAll();
	}, []);

	return (
		<div className={"App"}>
			<TRMD3TopBar
				handleToggleTheme={handleToggleTheme}
				handleScrollToTop={handleScrollToTop}
			/>
			<TRMD3NavRail />
			<TRMD3Menu />
			<TRMD3NavDrawer />

			<TRMD3SideSheet />
			<div id="section-0-trmd3" className="section-trmd3">
				<Hero hasLogo={true} />
				<Cookietrail />
				<TourGuide />
			</div>
			<div id="section-1-trmd3" className="section-trmd3">
				<NavigationDrawersFrame />
			</div>
			<div id="section-2-trmd3" className="section-trmd3">
				<MenusFrame />
			</div>
			<div id="section-3-trmd3" className="section-trmd3">
				<SegmentedButtonsFrame />
			</div>
			<div id="section-4-trmd3" className="section-trmd3">
				<IconButtonsFrame />
			</div>
			<div id="section-5-trmd3" className="section-trmd3">
				<SnackBarsFrame />
			</div>
			<div id="section-6-trmd3" className="section-trmd3">
				<SlidersFrame />
			</div>
			<div id="section-7-trmd3" className="section-trmd3">
				<SideSheetsFrame />
			</div>
			<div id="section-8-trmd3" className="section-trmd3">
				<StackedCardsFrame />
				<HorizontalCardsFrame />
			</div>
			<div id="section-9-trmd3" className="section-trmd3">
				<InputChipsFrame />
				<AssistChipsFrame />
			</div>
			<div id="section-10-trmd3" className="section-trmd3">
				<HorizontalDividersFrame />
				<VerticalDividersFrame />
			</div>
			<div id="section-11-trmd3" className="section-trmd3">
				<RadioButtonsFrame />
				<BadgesFrame />
				<CheckboxesFrame />
			</div>
			<div id="section-12-trmd3" className="section-trmd3">
				<SwitchesFrame />
				<ButtonsFrame />
			</div>
			<div id="section-13-trmd3" className="section-trmd3">
				<TypographiesFrame />
				<IconsFrame />
			</div>
			<div id="section-14-trmd3" className="section-trmd3">
				<FabsFrame />
				<ExtendedFabsFrame />
			</div>
			<div id="section-15-trmd3" className="section-trmd3">
				<BottomAppBarsFrame />
			</div>
			<div id="section-16-trmd3" className="section-trmd3">
				<CarouselsFrame />
			</div>
			<div id="section-17-trmd3" className="section-trmd3">
				<NavigationRailsFrame />
			</div>
			<div id="section-18-trmd3" className="section-trmd3">
				<TopAppBarsFrame />
			</div>
			<div id="section-19-trmd3" className="section-trmd3">
				<TooltipsFrame />
			</div>
			<div id="section-20-trmd3" className="section-trmd3">
				<TextFieldsFrame />
			</div>
			<div id="section-21-trmd3" className="section-trmd3">
				<ListsFrame />
			</div>
			<div id="section-22-trmd3" className="section-trmd3">
				<DialogsFrame />
			</div>
			<TRMD3BotBar />
		</div>
	);
};
export default App;
