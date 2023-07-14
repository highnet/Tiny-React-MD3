import Button from "trmd3components/Button";
import { scrollToSection } from "trmd3components/Scrolling";
import { getPreferredScheme } from "trmd3components/Themeing";

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
					onClick={() => scrollToSection("navigation-drawers-section", -60)}
				>
					🗄️ Navigation Drawers 🗄️
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("menus-section", -60)}
				>
					📖 Menus 📖
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("segmented-buttons-section", -60)}
				>
					💊 Segmented Buttons 💊
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("icon-buttons-section", -60)}
				>
					🪙 Icon Buttons 🪙
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("snackbars-section", -60)}
				>
					🍦 Snackbars 🍦
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("sliders-section", -60)}
				>
					🎚️ Sliders 🎚️
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("side-sheets-section", -60)}
				>
					⬅️ Side Sheets ⬅️
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("cards-section", -60)}
				>
					💳 Cards 💳
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("chips-section", -60)}
				>
					🍪 Chips 🍪
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("horizontal-dividers-section", -60)}
				>
					➕ Dividers ➕
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("radio-buttons-section", -60)}
				>
					🔘 Radio Buttons 🔘
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("badges-section", -60)}
				>
					📛 Badges 📛
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("checkboxes-section", -60)}
				>
					☑️ Checkboxes ☑️
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("switches-section", -60)}
				>
					🔦 Switches 🔦
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("buttons-section", -60)}
				>
					🕹️ Buttons 🕹️
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("typography-section", -60)}
				>
					🔤 Typography 🔤
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("icons-section", -60)}
				>
					💟 Icons 💟
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("fabs-section", -60)}
				>
					☁️ FABs ☁️
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("bottom-app-bars-section", -60)}
				>
					⏬ Bottom Bars ⏬
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("carousels-section", -60)}
				>
					🎠 Carousels 🎠
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("navigation-rails-section", -60)}
				>
					🚈 Navigation Rails 🚈
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("top-app-bars-section", -60)}
				>
					⏫ Top Bars ⏫
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("tooltips-section", -60)}
				>
					🛠️ Tooltips 🛠️
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("text-fields-section", -60)}
				>
					📜 Text Fields 📜
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("lists-section", -60)}
				>
					📝 Lists 📝
				</Button>
				<Button
					className="tourguide-button"
					configuration="elevated"
					onClick={() => scrollToSection("dialogs-section", -60)}
				>
					💬 Dialogs 💬
				</Button>
			</div>
		</div>
	);
};

export default TourGuide;
