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

function App() {
	return (
		<div className="App">
			<Hero hasLogo={true} />

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
