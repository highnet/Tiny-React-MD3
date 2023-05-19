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
import StickyToolbar from "./TRMD3/StickyToolbar/StickyToolbar";

import hljs from "highlight.js";
import "highlight.js/styles/base16/material-lighter.css";
import Cookietrail from "./TRMD3/Cookietrail/Cookietrail";
import TourGuide from "./TRMD3/TourGuide/TourGuide";
import { getPreferredScheme, toggleTheme } from "./Gizmos/Themeing";
import { scrollToSection } from "./Gizmos/Scrolling";
import InputChipsFrame from "./Chips/InputChip/Frame/InputChipsFrame";
import AssistChipsFrame from "./Chips/AssistChip/Frame/AssistChipsFrame";
import FilterChipsFrame from "./Chips/FilterChip/Frame/FilterChipsFrame";
import SuggestionChipsFrame from "./Chips/SuggestionChip/Frame/SuggestionChipsFrame";
import StackedCardsFrame from "./Cards/StackedCard/Frame/StackedCardsFrame";
import Typography from "./Typography/Typography";

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
		hljs.highlightAll();
	}, []);

	return (
		<div className={"App"}>
			<StickyToolbar
				toggleTheme={handleToggleTheme}
				scrollToTop={handleScrollToTop}
			/>
			<div id="section-0-trmd3" className="section-trmd3">
				<Hero hasLogo={false} />
				<Cookietrail />
				<TourGuide />
			</div>
			<div id="section-1-trmd3" className="section-trmd3">
				<StackedCardsFrame />
				<InputChipsFrame />
			</div>
			<div id="section-2-trmd3" className="section-trmd3">
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
			<div onClick={handleScrollToTop} className="black-bottom-bar-trmd3">
				<Typography
					variant="text-display-medium"
					className="black-bottom-bar-text-trmd3"
				>
					TRMD3
				</Typography>
			</div>
		</div>
	);
}

export default App;
