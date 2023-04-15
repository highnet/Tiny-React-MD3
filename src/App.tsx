import React, { useEffect, useState } from "react";

import ButtonsFrame from "./Button/Frame/ButtonsFrame";
import HorizontalDividersFrame from "./HorizontalDivider/Frame/HorizontalDividersFrame";
import Hero from "./TRMD3/Hero/Hero";
import VerticalDividersFrame from "./VerticalDivider/Frame/VerticalDividersFrame";
import RadioButtonsFrame from "./Radio Button/Frame/RadioButtonsFrame";
import BadgesFrame from "./Badge/Frame/BadgesFrame";
import CheckboxesFrame from "./Checkbox/Frame/CheckboxesFrame";
import SwitchesFrame from "./Switch/Frame/SwitchesFrame";
import TypographiesFrame from "./Typography/Frame/TypographiesFrame";
import ElevationsFrame from "./Elevation/Frame/ElevationsFrame";
import IconsFrame from "./Icon/Frame/IconsFrame";
import ThemeSwitcher from "./TRMD3/ThemeSwitcher/ThemeSwitcher";

import hljs from "highlight.js";
import "highlight.js/styles/base16/material-lighter.css";

function App() {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light-theme"
	);

	const toggleTheme = () => {
		if (theme === "light-theme") {
			setTheme("dark-theme");
		} else {
			setTheme("light-theme");
		}
		window.location.reload();
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

			<ThemeSwitcher toggleTheme={toggleTheme} />

			<div
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
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				Radio Buttons
			</div>
			<RadioButtonsFrame />

			<div
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				Badges
			</div>
			<BadgesFrame />

			<div
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				Checkboxes
			</div>
			<CheckboxesFrame />

			<div
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				Switches
			</div>
			<SwitchesFrame />

			<div
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				Buttons
			</div>
			<ButtonsFrame />

			<div
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				Typography
			</div>
			<TypographiesFrame />

			<div
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				Elevation
			</div>
			<ElevationsFrame />

			<div
				className={
					"text text-title text-title-large section-title-trmd3 section-title-" +
					theme +
					"-trmd3"
				}
			>
				Icons
			</div>
			<IconsFrame />
		</div>
	);
}

export default App;
