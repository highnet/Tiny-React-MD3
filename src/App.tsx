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
import Button from "./Button/Button";

function App() {
	// localStorage.clear();

	const [theme, setTheme] = useState(
		// TODO: NEEDS DOCUMENTATION
		localStorage.getItem("theme") || "light-theme"
	);

	const toggleTheme = () => {
		// TODO: NEEDS DOCUMENTATION
		if (theme === "light-theme") {
			setTheme("dark-theme");
		} else {
			setTheme("light-theme");
		}
		window.location.reload();
	};

	useEffect(() => {
		// TODO: NEEDS DOCUMENTATION
		localStorage.setItem("theme", theme);
		document.body.className = "body-" + theme;
	}, [theme]);

	return (
		<div className={"App"}>
			<Hero hasLogo={true} />

			<Button
				configuration="filled"
				disabled={false}
				onClick={toggleTheme}
				className="theme-toggler-trmd3"
			>
				<div className="text text-label text-label-small">Toggle Theme</div>
			</Button>

			<div className="text text-title text-title-large title-trmd3">
				Horizontal Dividers
			</div>

			<HorizontalDividersFrame />

			<div className="text text-title text-title-large">Vertical Dividers</div>
			<VerticalDividersFrame />

			<div className="text text-title text-title-large">Radio Buttons</div>
			<RadioButtonsFrame />

			<div className="text text-title text-title-large">Badges</div>
			<BadgesFrame />

			<div className="text text-title text-title-large">Checkboxes</div>
			<CheckboxesFrame />

			<div className="text text-title text-title-large">Switches</div>
			<SwitchesFrame />

			<ButtonsFrame />

			<div className="text text-title text-title-medium">Typography</div>
			<TypographiesFrame />

			<div className="text text-title text-title-large">Elevation</div>
			<ElevationsFrame />

			<div className="text text-title text-title-large">Icons</div>
			<IconsFrame />
		</div>
	);
}

export default App;
