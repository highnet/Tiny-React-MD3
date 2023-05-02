import { useEffect, useState } from "react";

import Hero from "./TRMD3/Hero/Hero";
import ButtonsFrame from "./Button/Frame/ButtonsFrame";
import HorizontalDividersFrame from "./HorizontalDivider/Frame/HorizontalDividersFrame";
import VerticalDividersFrame from "./VerticalDivider/Frame/VerticalDividersFrame";
import RadioButtonsFrame from "./Radio Button/Frame/RadioButtonsFrame";
import BadgesFrame from "./Badge/Frame/BadgesFrame";
import CheckboxesFrame from "./Checkbox/Frame/CheckboxesFrame";
import SwitchesFrame from "./Switch/Frame/SwitchesFrame";
import TypographiesFrame from "./Typography/Frame/TypographiesFrame";
import IconsFrame from "./Icon/Frame/IconsFrame";
import ThemeSwitcher from "./TRMD3/ThemeSwitcher/ThemeSwitcher";

import hljs from "highlight.js";
import "highlight.js/styles/base16/material-lighter.css";
import Cookietrail from "./TRMD3/Cookietrail/Cookietrail";
import TourGuide from "./TRMD3/TourGuide/TourGuide";
import { getPreferredScheme, toggleTheme } from "./Gizmos/Themeing";

function App() {
	console.log(`	👋 Welcome to TRMD3! 👋	`);

	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || getPreferredScheme() + "-theme"
	);

	const handleToggleTheme = (): void => {
		toggleTheme(theme, setTheme);
	};

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.body.className = "body-" + theme;
	}, [theme]);

	useEffect(() => {
		hljs.highlightAll();
	}, []);

	return (
		<div className={"App"}>
			<Hero hasLogo={true} />
			<iframe
				className="video-trmd3"
				width="560"
				height="315"
				src="https://www.youtube-nocookie.com/embed/yIQd2Ya0Ziw"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
			<Cookietrail />
			<TourGuide />
			<ThemeSwitcher toggleTheme={handleToggleTheme} />
			<div
				id="horizontal-dividers-section"
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				👉 Horizontal Dividers 👉
			</div>
			<HorizontalDividersFrame />
			<div
				id="vertical-dividers-section"
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				👆 Vertical Dividers 👆
			</div>
			<VerticalDividersFrame />
			<div
				id="radio-buttons-section"
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				🔘 Radio Buttons 🔘
			</div>
			<RadioButtonsFrame />
			<div
				id="badges-section"
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				📛 Badges 📛
			</div>
			<BadgesFrame />
			<div
				id="checkboxes-section"
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				☑️ Checkboxes ☑️
			</div>
			<CheckboxesFrame />
			<div
				id="switches-section"
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				🔦 Switches 🔦
			</div>
			<SwitchesFrame />
			<div
				id="buttons-section"
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				🕹️ Buttons 🕹️
			</div>
			<ButtonsFrame />
			<div
				id="typography-section"
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				🔤 Typography 🔤
			</div>
			<TypographiesFrame />
			<div
				id="elevation-section"
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				💟 Icons 💟
			</div>
			<div
				className={
					"text text-title text-title-medium section-subtitle-trmd3 section-subtitle-" +
					theme +
					"-trmd3"
				}
			>
				For a full list of all accepted icon strings, visit:{" "}
				<a href="https://fonts.google.com/icons">Material Symbols and Icons</a>
			</div>
			<IconsFrame />
		</div>
	);
}

export default App;
