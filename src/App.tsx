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
import { StringBuilder } from "./Gizmos/StringBuilder";

function App() {
	console.log(`	👋 Welcome to TRMD3! 👋	`);

	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || getPreferredScheme() + "-theme"
	);

	const handleToggleTheme = (): void => {
		toggleTheme(theme, setTheme);
	};

	const handleScrollToTop = (): void => {
		scrollToSection("tourguide-section", -60);
	};

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.body.className = "body-" + theme;
	}, [theme]);

	useEffect(() => {
		hljs.highlightAll();
	}, []);

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + theme + "-trmd3")
		.toString();

	return (
		<div className={"App"}>
			<Hero hasLogo={true} />
			<Cookietrail />
			<TourGuide />
			<StickyToolbar
				toggleTheme={handleToggleTheme}
				scrollToTop={handleScrollToTop}
			/>

			<Typography
				id="cards-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				💳 Cards 💳
			</Typography>
			<StackedCardsFrame />

			<Typography
				id="chips-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🍪 Chips 🍪
			</Typography>

			<InputChipsFrame />
			<AssistChipsFrame />
			<FilterChipsFrame />
			<SuggestionChipsFrame />

			<Typography
				id="horizontal-dividers-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				👉 Dividers 👆
			</Typography>

			<HorizontalDividersFrame />
			<VerticalDividersFrame />

			<Typography
				id="radio-buttons-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🔘 Radio Buttons 🔘
			</Typography>

			<RadioButtonsFrame />

			<Typography
				id="badges-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				📛 Badges 📛
			</Typography>

			<BadgesFrame />

			<Typography
				id="checkboxes-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				☑️ Checkboxes ☑️
			</Typography>

			<CheckboxesFrame />

			<Typography
				id="switches-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🔦 Switches 🔦
			</Typography>

			<SwitchesFrame />

			<Typography
				id="buttons-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🕹️ Buttons 🕹️
			</Typography>

			<ButtonsFrame />

			<Typography
				id="typography-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🔤 Typography 🔤
			</Typography>
			<TypographiesFrame />

			<Typography
				id="icons-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				💟 Icons 💟
			</Typography>

			<Typography
				variant="text-title-medium"
				className={
					"section-subtitle-trmd3 section-subtitle-" + theme + "-trmd3"
				}
			>
				For a full list of all accepted icon strings, visit:{" "}
				<a
					className="subsection-link-trmd3"
					href="https://fonts.google.com/icons"
				>
					Material Symbols and Icons
				</a>
			</Typography>

			<IconsFrame />
		</div>
	);
}

export default App;
