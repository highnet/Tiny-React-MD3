import Button from "../../Button/Button";
import { scrollToSection } from "../../Gizmos/Scrolling";
import { getPreferredScheme } from "../../Gizmos/Themeing";

const TourGuide: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			id="tourguide-section"
			className={
				"tourguide-section-trmd3 tourguide-section-" + _theme + "-trmd3"
			}
		>
			<div className="tourguide-buttons">
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("cards-section", -60)}
				>
					💳 Cards 💳
				</Button>

				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("chips-section", -60)}
				>
					🍪 Chips 🍪
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("horizontal-dividers-section", -60)}
				>
					➕ Dividers ➕
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("radio-buttons-section", -60)}
				>
					🔘 Radio Buttons 🔘
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("badges-section", -60)}
				>
					📛 Badges 📛
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("checkboxes-section", -60)}
				>
					☑️ Checkboxes ☑️
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("switches-section", -60)}
				>
					🔦 Switches 🔦
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("buttons-section", -60)}
				>
					🕹️ Buttons 🕹️
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("typography-section", -60)}
				>
					🔤 Typography 🔤
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("icons-section", -60)}
				>
					💟 Icons 💟
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("fabs-section", -60)}
				>
					☁️ FABs ☁️
				</Button>
				
			</div>
		</div>
	);
};

export default TourGuide;
