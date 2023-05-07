import Button from "../../Button/Button";
import { scrollToSection } from "../../Gizmos/Scrolling";
import { getPreferredScheme } from "../../Gizmos/Themeing";

interface ITourGuide {}

const TourGuide: React.FC<ITourGuide> = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			className={
				"tourguide-section-trmd3 tourguide-section-" + _theme + "-trmd3"
			}
		>
			<div className="tourguide-buttons">
				<Button
					className="tourguide-button"
					configuration="elevated"
					label="🍪 Chips 🍪"
					disabled={false}
					onClick={() => scrollToSection("chips-section", -60)}
				></Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					label="👉 Horizontal Dividers 👉"
					disabled={false}
					onClick={() => scrollToSection("horizontal-dividers-section", -60)}
				></Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					label="👆 Vertical Dividers 👆"
					disabled={false}
					onClick={() => scrollToSection("vertical-dividers-section", -60)}
				></Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					label="🔘 Radio Buttons 🔘"
					disabled={false}
					onClick={() => scrollToSection("radio-buttons-section", -60)}
				></Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					label="📛 Badges 📛"
					disabled={false}
					onClick={() => scrollToSection("badges-section", -60)}
				></Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					label="☑️ Checkboxes ☑️"
					disabled={false}
					onClick={() => scrollToSection("checkboxes-section", -60)}
				></Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					label="🔦 Switches 🔦"
					disabled={false}
					onClick={() => scrollToSection("switches-section", -60)}
				></Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					label="🕹️ Buttons 🕹️"
					disabled={false}
					onClick={() => scrollToSection("buttons-section", -60)}
				></Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					label="🔤 Typography 🔤"
					disabled={false}
					onClick={() => scrollToSection("typography-section", -60)}
				></Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					label="💟 Icons 💟"
					disabled={false}
					onClick={() => scrollToSection("icons-section", -60)}
				></Button>
			</div>
		</div>
	);
};

export default TourGuide;
