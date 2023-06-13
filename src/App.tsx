import { useEffect, useState, useRef } from "react";

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
import StickyToolbar from "./TRMD3/StickyToolbar/StickyToolbar";
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
import Tooltip from "./Tooltip/Tooltip";
import TooltipsFrame from "./Tooltip/Frame/TooltipsFrame";
import TextField from "./TextField/TextField";
import TextFieldsFrame from "./TextField/Frame/TextFieldsFrame";
import ListsFrame from "./Lists/Frame/ListsFrame";
import DialogsFrame from "./Dialogs/Frame/DialogsFrame";
import SideSheet from "./Sheets/Side Sheets/SideSheet";
import List from "./Lists/List";
import ListItem from "./Lists/List Items/ListItem";
import Typography from "./Typography/Typography";
import SideSheetsFrame from "./Sheets/Side Sheets/Frame/SideSheetsFrame";
import SlidersFrame from "./Sliders/Frame/SlidersFrame";

function App() {
	console.log(`	👋 Welcome to TRMD3! 👋	`);

	const [_theme, setTheme] = useState(
		localStorage.getItem("theme") || getPreferredScheme() + "-theme"
	);

	const handleToggleTheme = (): void => {
		toggleTheme(_theme, setTheme);
	};

	const handleScrollToTop = (): void => {
		scrollToSection("tourguide-section", -60);
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
			<TopAppBar
				configuration="small-centered"
				leadingIcon={{ name: "dark_mode", onClick: handleToggleTheme }}
				trailingIcons={[
					{ name: "arrow_upward", onClick: () => handleScrollToTop() },
				]}
			/>
			<NavigationRail
				className={"main-navigation-rail-trmd3"}
				fab={{
					onClick: () => {
						handleScrollToTop();
					},
					fabIconName: "home",
				}}
				icons={[
					{
						name: "bookmark",
						onClick: () => {
							openLinkInNewTab(
								"https://github.com/highnet/Tiny-React-MD3#----trmd3-tiny-react-material-design-3-"
							);
						},
					},
					{
						name: "menu_book",
						onClick: () => {
							openLinkInNewTab(
								"https://github.com/highnet/Tiny-React-MD3/tree/master/src#-tiny-react-md-3-documentation"
							);
						},
					},
					{
						name: "code",
						onClick: () => {
							openLinkInNewTab(
								"https://github.com/highnet/Tiny-React-MD3/tree/master/src"
							);
						},
					},
					{
						name: "sliders",
						label: "Sliders",
						onClick: () => {
							scrollToSection("sliders-section", -60);
						},
					},
					{
						name: "arrow_back",
						label: "Side Sheets",
						onClick: () => {
							scrollToSection("side-sheets-section", -60);
						},
					},
					{
						name: "credit_card",
						label: "Cards",
						onClick: () => {
							scrollToSection("cards-section", -60);
						},
					},
					{
						name: "cookie",
						label: "Chips",
						onClick: () => {
							scrollToSection("chips-section", -60);
						},
					},
					{
						name: "add",
						label: "Dividers",
						onClick: () => {
							scrollToSection("horizontal-dividers-section", -60);
						},
					},
					{
						name: "radio_button_checked",
						label: "Radio Buttons",
						onClick: () => {
							scrollToSection("radio-buttons-section", -60);
						},
					},
					{
						name: "verified",
						label: "Badges",
						onClick: () => {
							scrollToSection("badges-section", -60);
						},
					},
					{
						name: "check_box",
						label: "Checkboxes",
						onClick: () => {
							scrollToSection("checkboxes-section", -60);
						},
					},
					{
						name: "toggle_on",
						label: "Switches",
						onClick: () => {
							scrollToSection("switches-section", -60);
						},
					},
					{
						name: "joystick",
						label: "Buttons",
						onClick: () => {
							scrollToSection("buttons-section", -60);
						},
					},
					{
						name: "abc",
						label: "Typography",
						onClick: () => {
							scrollToSection("typography-section", -60);
						},
					},
					{
						name: "favorite",
						label: "Icons",
						onClick: () => {
							scrollToSection("icons-section", -60);
						},
					},
					{
						name: "cloud",
						label: "FABs",
						onClick: () => {
							scrollToSection("fabs-section", -60);
						},
					},
					{
						name: "dock_to_bottom",
						label: "Bottom Bars",
						onClick: () => {
							scrollToSection("bottom-app-bars-section", -60);
						},
					},
					{
						name: "view_carousel",
						label: "Carousels",
						onClick: () => {
							scrollToSection("carousels-section", -60);
						},
					},
					{
						name: "train",
						label: "Nav Rails",
						onClick: () => {
							scrollToSection("navigation-rails-section", -60);
						},
					},
					{
						name: "web_asset",
						label: "Top Bars",
						onClick: () => {
							scrollToSection("top-app-bars-section", -60);
						},
					},
					{
						name: "construction",
						label: "Tooltips",
						onClick: () => {
							scrollToSection("tooltips-section", -60);
						},
					},
					{
						name: "text_fields",
						label: "Text Fields",
						onClick: () => {
							scrollToSection("text-fields-section", -60);
						},
					},
					{
						name: "format_list_bulleted",
						label: "Lists",
						onClick: () => {
							scrollToSection("lists-section", -60);
						},
					},
					{
						name: "chat_bubble",
						label: "Dialogs",
						onClick: () => {
							scrollToSection("dialogs-section", -60);
						},
					},
				]}
			/>
			<SideSheet
				title="Tiny React MD3"
				content={
					<>
						<Typography variant="text-body-medium">
							Quickly transform your design kit prototypes into stunning and
							modern web applications A set of easy-to-use, high-performance and
							customizable components that follow the Material Design 3
							principles and aesthetics Developer handoffs made easy with
							ensured parity between the Figma material Design 3 Kit and React
						</Typography>
					</>
				}
				buttons={[
					{ onClick: () => alert("hi") },
					{ onClick: () => alert("hi") },
				]}
			></SideSheet>

			<div id="section-0-trmd3" className="section-trmd3">
				<Hero hasLogo={true} />
				<Cookietrail />
				<TourGuide />
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
			<BottomAppBar
				icons={[
					{
						name: "code",
						label: "Code",
						onClick: () =>
							openLinkInNewTab(
								"https://github.com/highnet/Tiny-React-MD3/tree/master/src"
							),
					},
					{
						name: "menu_book",
						label: "Docs",
						onClick: () =>
							openLinkInNewTab(
								"https://github.com/highnet/Tiny-React-MD3/tree/master/src#-tiny-react-md-3-documentation"
							),
					},
					{
						name: "bookmark",
						label: "Readme",
						onClick: () =>
							openLinkInNewTab(
								"https://github.com/highnet/Tiny-React-MD3#----trmd3-tiny-react-material-design-3-"
							),
					},
					{ name: "home", label: "Home", onClick: handleScrollToTop },
				]}
				fab={{ onClick: undefined }}
			/>
		</div>
	);
}
export default App;
