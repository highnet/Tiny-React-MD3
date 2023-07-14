import Menu from "trmd3components/Menu";
import MenuItem from "trmd3components/MenuItem";
import { scrollToSection } from "trmd3components/Scrolling";

const TRMD3Menu: React.FC = () => {
	return (
		<Menu className="menu-parent components-menu-trmd3" id="menu-0">
			<MenuItem
				trailingIcon="chevron_right"
				leadingIcon="joystick"
				label="Action"
				showDivider={true}
			>
				<Menu>
					<MenuItem
						leadingIcon="joystick"
						label="Buttons"
						showDivider={true}
						onClick={() => {
							scrollToSection("buttons-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="pill"
						label="Segmented Buttons"
						showDivider={true}
						onClick={() => {
							scrollToSection("segmented-buttons-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="monetization_on"
						label="Icon Buttons"
						showDivider={true}
						onClick={() => {
							scrollToSection("icon-buttons-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="cloud"
						label="FABs"
						showDivider={true}
						onClick={() => {
							scrollToSection("fabs-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="cookie"
						label="Chips"
						showDivider={true}
						onClick={() => {
							scrollToSection("chips-section", -60);
						}}
					/>
				</Menu>
			</MenuItem>

			<MenuItem
				trailingIcon="chevron_right"
				leadingIcon="forms_add_on"
				label="Input"
				showDivider={true}
			>
				<Menu>
					<MenuItem
						leadingIcon="sliders"
						label="Sliders"
						showDivider={true}
						onClick={() => {
							scrollToSection("sliders-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="check_box"
						label="Checkboxes"
						showDivider={true}
						onClick={() => {
							scrollToSection("checkboxes-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="toggle_on"
						label="Switches"
						showDivider={true}
						onClick={() => {
							scrollToSection("switches-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="text_fields"
						label="Text Fields"
						showDivider={true}
						onClick={() => {
							scrollToSection("text-fields-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="radio_button_checked"
						label="Radio Buttons"
						showDivider={true}
						onClick={() => {
							scrollToSection("radio-buttons-section", -60);
						}}
					/>
				</Menu>
			</MenuItem>

			<MenuItem
				trailingIcon="chevron_right"
				leadingIcon="space_dashboard"
				label="Navigation"
				showDivider={true}
			>
				<Menu>
					<MenuItem
						leadingIcon="home_storage"
						label="Navigation Drawers"
						showDivider={true}
						onClick={() => {
							scrollToSection("navigation-drawers-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="import_contacts"
						label="Menus"
						showDivider={true}
						onClick={() => {
							scrollToSection("menus-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="arrow_back"
						label="Side Sheets"
						showDivider={true}
						onClick={() => {
							scrollToSection("side-sheets-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="dock_to_bottom"
						label="Bottom Bars"
						showDivider={true}
						onClick={() => {
							scrollToSection("bottom-app-bars-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="train"
						label="Navigation Rails"
						showDivider={true}
						onClick={() => {
							scrollToSection("navigation-rails-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="web_asset"
						label="Top Bars"
						showDivider={true}
						onClick={() => {
							scrollToSection("top-app-bars-section", -60);
						}}
					/>
				</Menu>
			</MenuItem>

			<MenuItem
				trailingIcon="chevron_right"
				leadingIcon="auto_fix"
				label="Feedback"
				showDivider={true}
			>
				<Menu>
					<MenuItem
						leadingIcon="icecream"
						label="Snackbars"
						showDivider={true}
						onClick={() => {
							scrollToSection("snackbars-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="construction"
						label="Tooltips"
						showDivider={true}
						onClick={() => {
							scrollToSection("tooltips-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="chat_bubble"
						label="Dialogs"
						showDivider={true}
						onClick={() => {
							scrollToSection("dialogs-section", -60);
						}}
					/>
				</Menu>
			</MenuItem>

			<MenuItem
				trailingIcon="chevron_right"
				leadingIcon="format_paint"
				label="Presentation"
				showDivider={true}
			>
				<Menu>
					<MenuItem
						leadingIcon="verified"
						label="Badges"
						showDivider={true}
						onClick={() => {
							scrollToSection("badges-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="abc"
						label="Typography"
						showDivider={true}
						onClick={() => {
							scrollToSection("typography-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="favorite"
						label="Icons"
						showDivider={true}
						onClick={() => {
							scrollToSection("icons-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="add"
						label="Dividers"
						showDivider={true}
						onClick={() => {
							scrollToSection("horizontal-dividers-section", -60);
						}}
					/>
				</Menu>
			</MenuItem>

			<MenuItem
				trailingIcon="chevron_right"
				leadingIcon="handyman"
				label="Content"
				showDivider={true}
			>
				<Menu>
					<MenuItem
						leadingIcon="credit_card"
						label="Cards"
						showDivider={true}
						onClick={() => {
							scrollToSection("cards-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="view_carousel"
						label="Carousels"
						showDivider={true}
						onClick={() => {
							scrollToSection("carousels-section", -60);
						}}
					/>
					<MenuItem
						leadingIcon="format_list_bulleted"
						label="Lists"
						showDivider={true}
						onClick={() => {
							scrollToSection("lists-section", -60);
						}}
					/>
				</Menu>
			</MenuItem>
		</Menu>
	);
};

export default TRMD3Menu;
