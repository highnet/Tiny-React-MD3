import { useEffect, useState } from "react";
import Hero from "./TRMD3/Hero/Hero";
import ButtonsFrame from "./Button/Frame/ButtonsFrame";
import HorizontalDividersFrame from "./Dividers/HorizontalDivider/Frame/HorizontalDividersFrame";
import VerticalDividersFrame from "./Dividers/VerticalDivider/Frame/VerticalDividersFrame";
import RadioButtonsFrame from "./Radio Button/Frame/RadioButtonsFrame";
import BadgesFrame from "./Badge/Frame/BadgesFrame";
import CheckboxesFrame from "./Checkbox/Frame/CheckboxesFrame";
import SwitchesFrame from "./Switch/Frame/SwitchesFrame";
import TypographiesFrame from "./Typography/Frame/TypographiesFrame";
import IconsFrame from "./Icon/Frame/IconsFrame";
import hljs from "highlight.js";
import "highlight.js/styles/base16/material-lighter.css";
import Cookietrail from "./TRMD3/Cookietrail/Cookietrail";
import TourGuide from "./TRMD3/TourGuide/TourGuide";
import { getPreferredScheme, toggleTheme } from "./Gizmos/Themeing";
import { scrollToSection } from "./Gizmos/Scrolling";
import InputChipsFrame from "./Chips/InputChip/Frame/InputChipsFrame";
import AssistChipsFrame from "./Chips/AssistChip/Frame/AssistChipsFrame";
import StackedCardsFrame from "./Cards/StackedCard/Frame/StackedCardsFrame";
import HorizontalCardsFrame from "./Cards/HorizontalCard/Frame/HorizontalCardsFrame";
import FabsFrame from "./FABs/FAB/Frame/FabsFrame";
import ExtendedFabsFrame from "./FABs/Extended FAB/Frame/ExtendedFabsFrame";
import BottomAppBar from "./App Bars/Bottom App Bar/BottomAppBar";
import BottomAppBarsFrame from "./App Bars/Bottom App Bar/Frame/BottomAppBarsFrame";
import { openLinkInNewTab } from "./Gizmos/Redirection";
import CarouselsFrame from "./Carousel/Frame/CarouselsFrame";
import NavigationRail from "./Navigation Rail/NavigationRail";
import NavigationRailsFrame from "./Navigation Rail/Frame/NavigationRailsFrame";
import TopAppBar from "./App Bars/Top App Bar/TopAppBar";
import TopAppBarsFrame from "./App Bars/Top App Bar/Frame/TopAppBarsFrame";
import TooltipsFrame from "./Tooltip/Frame/TooltipsFrame";
import TextFieldsFrame from "./TextField/Frame/TextFieldsFrame";
import ListsFrame from "./Lists/Frame/ListsFrame";
import DialogsFrame from "./Dialogs/Frame/DialogsFrame";
import SideSheetsFrame from "./Sheets/Side Sheets/Frame/SideSheetsFrame";
import SlidersFrame from "./Sliders/Frame/SlidersFrame";
import SnackBarsFrame from "./SnackBars/Frame/SnackBarsFrame";
import IconButtonsFrame from "./IconButton/Frame/IconButtonsFrame";
import TRMD3NavRail from "./TRMD3/TRMD3NavRail/TRMD3NavRail";
import TRMD3SideSheet from "./TRMD3/TRMD3SideSheet/TRMD3SideSheet";
import TRMD3BotBar from "./TRMD3/TRMD3BotBar/TRMD3BotBar";
import MenusFrame from "./Menus/Frame/MenusFrame";
import { toggleMenuId, toggleNavRailId } from "./Gizmos/Modals";
import MenuItem from "./Menus/MenuItem/MenuItem";
import Menu from "./Menus/Menu";
import TRMD3Menu from "./TRMD3/TRMD3Menu";
import TRMD3TopBar from "./TRMD3/TRMD3TopBar";
import SegmentedButtonsFrame from "./Segmented Button/Frame/SegmentedButtonsFrame";
import NavigationDrawersFrame from "./Navigation Drawer/Frame/NavigationDrawersFrame";
import NavigationDrawerItem from "./Navigation Drawer/Navigation Drawer Item/NavigationDrawerItem";
import NavigationDrawer from "./Navigation Drawer/NavigationDrawer";

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
			<NavigationDrawer id="drawer-0">
				<NavigationDrawerItem label="Components" />
				<NavigationDrawerItem
					leadingIcon="joystick"
					label="Buttons"
					onClick={() => {scrollToSection("buttons-section", -60)}}
				/>
				<NavigationDrawerItem
					leadingIcon="pill"
					label="Segmented Buttons"
					onClick={() => {scrollToSection("segmented-buttons-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="cloud"
					label="FABs"
					onClick={() => {scrollToSection("fabs-section", -60)}}
				/>
				<NavigationDrawerItem
					leadingIcon="cookie"
					label="Chips"
					onClick={() => {scrollToSection("chips-section", -60)}}
				/>
				<NavigationDrawerItem
					leadingIcon="monetization_on"
					label="Icon Buttons"
					onClick={() => {scrollToSection("icon-buttons-section", -60)}}

				/>				
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Sliders"
					onClick={() => {scrollToSection("sliders-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Checkboxes"
					onClick={() => {scrollToSection("checkboxes-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Switches"
					onClick={() => {scrollToSection("switches-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Text Fields"
					onClick={() => {scrollToSection("text-fields-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Radio Buttons"
					onClick={() => {scrollToSection("radio-buttons-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Navigation Drawers"
					onClick={() => {scrollToSection("navigation-drawers-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Menus"
					onClick={() => {scrollToSection("menus-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Side Sheets"
					onClick={() => {scrollToSection("side-sheets-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Bottom Bars"
					onClick={() => {scrollToSection("bottom-app-bars-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Navigation Rails"
					onClick={() => {scrollToSection("navigation-rails-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Top Bars"
					onClick={() => {scrollToSection("top-app-bars-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Snackbars"
					onClick={() => {scrollToSection("snackbars-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Tooltips"
					onClick={() => {scrollToSection("tooltips-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Dialogs"
					onClick={() => {scrollToSection("dialogs-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Badges"
					onClick={() => {scrollToSection("badges-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Typography"
					onClick={() => {scrollToSection("typography-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Icons"
					onClick={() => {scrollToSection("icons-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Dividers"
					onClick={() => {scrollToSection("horizontal-dividers-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Cards"
					onClick={() => {scrollToSection("cards-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Carousels"
					onClick={() => {scrollToSection("carousels-section", -60)}}

				/>
				<NavigationDrawerItem
					leadingIcon="circle"
					label="Lists"
					onClick={() => {scrollToSection("lists-section", -60)}}

				/>
			</NavigationDrawer>
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
