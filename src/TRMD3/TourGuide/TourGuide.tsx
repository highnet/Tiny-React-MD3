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
					disabled={false}
					onClick={() => scrollToSection("chips-section", -60)}
				>
					<div className="text text-label text-label-small">🍪 Chips 🍪</div>
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("horizontal-dividers-section", -60)}
				>
					<div className="text text-label text-label-small">
						👉 Horizontal Dividers 👉
					</div>
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("vertical-dividers-section", -60)}
				>
					<div className="text text-label text-label-small">
						👆 Vertical Dividers 👆
					</div>
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("radio-buttons-section", -60)}
				>
					<div className="text text-label text-label-small">
						🔘 Radio Buttons 🔘
					</div>
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("badges-section", -60)}
				>
					<div className="text text-label text-label-small">📛 Badges 📛</div>
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("checkboxes-section", -60)}
				>
					<div className="text text-label text-label-small">
						☑️ Checkboxes ☑️
					</div>
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("switches-section", -60)}
				>
					<div className="text text-label text-label-small">🔦 Switches 🔦</div>
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("buttons-section", -60)}
				>
					<div className="text text-label text-label-small">🕹️ Buttons 🕹️</div>
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("typography-section", -60)}
				>
					<div className="text text-label text-label-small">
						🔤 Typography 🔤
					</div>
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					disabled={false}
					onClick={() => scrollToSection("icons-section", -60)}
				>
					<div className="text text-label text-label-small">💟 Icons 💟</div>
				</Button>{" "}
			</div>
		</div>
	);
};

export default TourGuide;
