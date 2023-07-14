import { useEffect, useState } from "react";
import TRMD3TopBar from "./TRMD3/TRMD3TopBar";
import Cookietrail from "./TRMD3/Cookietrail/Cookietrail";
import AssistChipsFrame from "./TRMD3/Frames/AssistChipsFrame";
import BadgesFrame from "./TRMD3/Frames/BadgesFrame";
import BottomAppBarsFrame from "./TRMD3/Frames/BottomAppBarsFrame";
import ButtonsFrame from "./TRMD3/Frames/ButtonsFrame";
import CarouselsFrame from "./TRMD3/Frames/CarouselsFrame";
import CheckboxesFrame from "./TRMD3/Frames/CheckboxesFrame";
import DialogsFrame from "./TRMD3/Frames/DialogsFrame";
import ExtendedFabsFrame from "./TRMD3/Frames/ExtendedFabsFrame";
import FabsFrame from "./TRMD3/Frames/FabsFrame";
import HorizontalCardsFrame from "./TRMD3/Frames/HorizontalCardsFrame";
import HorizontalDividersFrame from "./TRMD3/Frames/HorizontalDividersFrame";
import IconButtonsFrame from "./TRMD3/Frames/IconButtonsFrame";
import IconsFrame from "./TRMD3/Frames/IconsFrame";
import InputChipsFrame from "./TRMD3/Frames/InputChipsFrame";
import ListsFrame from "./TRMD3/Frames/ListsFrame";
import MenusFrame from "./TRMD3/Frames/MenusFrame";
import NavigationDrawersFrame from "./TRMD3/Frames/NavigationDrawersFrame";
import NavigationRailsFrame from "./TRMD3/Frames/NavigationRailsFrame";
import RadioButtonsFrame from "./TRMD3/Frames/RadioButtonsFrame";
import SegmentedButtonsFrame from "./TRMD3/Frames/SegmentedButtonsFrame";
import SideSheetsFrame from "./TRMD3/Frames/SideSheetsFrame";
import SlidersFrame from "./TRMD3/Frames/SlidersFrame";
import SnackBarsFrame from "./TRMD3/Frames/SnackBarsFrame";
import StackedCardsFrame from "./TRMD3/Frames/StackedCardsFrame";
import SwitchesFrame from "./TRMD3/Frames/SwitchesFrame";
import TextFieldsFrame from "./TRMD3/Frames/TextFieldsFrame";
import TooltipsFrame from "./TRMD3/Frames/TooltipsFrame";
import TopAppBarsFrame from "./TRMD3/Frames/TopAppBarsFrame";
import TypographiesFrame from "./TRMD3/Frames/TypographiesFrame";
import VerticalDividersFrame from "./TRMD3/Frames/VerticalDividersFrame";
import Hero from "./TRMD3/Hero/Hero";
import TRMD3BotBar from "./TRMD3/TRMD3BotBar/TRMD3BotBar";
import TRMD3Menu from "./TRMD3/TRMD3Menu";
import TRMD3NavDrawer from "./TRMD3/TRMD3NavDrawer/TRMD3NavDrawer";
import TRMD3NavRail from "./TRMD3/TRMD3NavRail/TRMD3NavRail";
import TRMD3SideSheet from "./TRMD3/TRMD3SideSheet/TRMD3SideSheet";
import TourGuide from "./TRMD3/TourGuide/TourGuide";
import hljs from "highlight.js";
import "highlight.js/styles/base16/material-lighter.css";

import "trmd3components/trmd3.css";
import { scrollToSection } from "trmd3components/Scrolling";
import { getPreferredScheme, toggleTheme } from "trmd3components/Themeing";

function App() {
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
			<div id="section-21-trmd3" className="section-trmd3">
				<NavigationDrawersFrame />
			</div>
			<div id="section-20-trmd3" className="section-trmd3">
				<MenusFrame />
			</div>
			<div id="section-19-trmd3" className="section-trmd3">
				<SegmentedButtonsFrame />
			</div>
			<div id="section-18-trmd3" className="section-trmd3">
				<IconButtonsFrame />
			</div>
			<div id="section-17-trmd3" className="section-trmd3">
				<SnackBarsFrame />
			</div>
			<div id="section-16-trmd3" className="section-trmd3">
				<SlidersFrame />
			</div>
			<div id="section-15-trmd3" className="section-trmd3">
				<SideSheetsFrame />
			</div>
			<div id="section-1-trmd3" className="section-trmd3">
				<StackedCardsFrame />
				<HorizontalCardsFrame />
			</div>
			<div id="section-2-trmd3" className="section-trmd3">
				<InputChipsFrame />
				<AssistChipsFrame />
			</div>
			<div id="section-3-trmd3" className="section-trmd3">
				<HorizontalDividersFrame />
				<VerticalDividersFrame />
			</div>
			<div id="section-4-trmd3" className="section-trmd3">
				<RadioButtonsFrame />
				<BadgesFrame />
				<CheckboxesFrame />
			</div>
			<div id="section-5-trmd3" className="section-trmd3">
				<SwitchesFrame />
				<ButtonsFrame />
			</div>
			<div id="section-6-trmd3" className="section-trmd3">
				<TypographiesFrame />
				<IconsFrame />
			</div>
			<div id="section-7-trmd3" className="section-trmd3">
				<FabsFrame />
				<ExtendedFabsFrame />
			</div>
			<div id="section-8-trmd3" className="section-trmd3">
				<BottomAppBarsFrame />
			</div>
			<div id="section-9-trmd3" className="section-trmd3">
				<CarouselsFrame />
			</div>
			<div id="section-10-trmd3" className="section-trmd3">
				<NavigationRailsFrame />
			</div>
			<div id="section-11-trmd3" className="section-trmd3">
				<TopAppBarsFrame />
			</div>
			<div id="section-11-trmd3" className="section-trmd3">
				<TooltipsFrame />
			</div>
			<div id="section-12-trmd3" className="section-trmd3">
				<TextFieldsFrame />
			</div>
			<div id="section-13-trmd3" className="section-trmd3">
				<ListsFrame />
			</div>
			<div id="section-14-trmd3" className="section-trmd3">
				<DialogsFrame />
			</div>
			<TRMD3BotBar />
		</div>
	);
}
export default App;
