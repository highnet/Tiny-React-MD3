import { scrollToSection } from "../../Gizmos/Scrolling";
import NavigationDrawerItem from "../../Navigation Drawer/Navigation Drawer Item/NavigationDrawerItem";
import NavigationDrawer from "../../Navigation Drawer/NavigationDrawer";

const TRMD3NavDrawer: React.FC = () => {
	return (
		<NavigationDrawer id="drawer-0">
			<NavigationDrawerItem label="Components" />
			<NavigationDrawerItem label="Action" />

			<NavigationDrawerItem
				leadingIcon="joystick"
				label="Buttons"
				onClick={() => {
					scrollToSection("buttons-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="pill"
				label="Segmented Buttons"
				onClick={() => {
					scrollToSection("segmented-buttons-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="cloud"
				label="FABs"
				onClick={() => {
					scrollToSection("fabs-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="cookie"
				label="Chips"
				onClick={() => {
					scrollToSection("chips-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="monetization_on"
				label="Icon Buttons"
				onClick={() => {
					scrollToSection("icon-buttons-section", -60);
				}}
			/>
			<NavigationDrawerItem label="Input" />

			<NavigationDrawerItem
				leadingIcon="sliders"
				label="Sliders"
				onClick={() => {
					scrollToSection("sliders-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="check_box"
				label="Checkboxes"
				onClick={() => {
					scrollToSection("checkboxes-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="toggle_on"
				label="Switches"
				onClick={() => {
					scrollToSection("switches-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="text_fields"
				label="Text Fields"
				onClick={() => {
					scrollToSection("text-fields-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="radio_button_checked"
				label="Radio Buttons"
				onClick={() => {
					scrollToSection("radio-buttons-section", -60);
				}}
			/>
			<NavigationDrawerItem label="Navigation" />
			<NavigationDrawerItem
				leadingIcon="chevron_right"
				label="Navigation Drawers"
				onClick={() => {
					scrollToSection("navigation-drawers-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="import_contacts"
				label="Menus"
				onClick={() => {
					scrollToSection("menus-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="arrow_back"
				label="Side Sheets"
				onClick={() => {
					scrollToSection("side-sheets-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="dock_to_bottom"
				label="Bottom Bars"
				onClick={() => {
					scrollToSection("bottom-app-bars-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="train"
				label="Navigation Rails"
				onClick={() => {
					scrollToSection("navigation-rails-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="web_asset"
				label="Top Bars"
				onClick={() => {
					scrollToSection("top-app-bars-section", -60);
				}}
			/>
			<NavigationDrawerItem label="Feedback" />

			<NavigationDrawerItem
				leadingIcon="icecream"
				label="Snackbars"
				onClick={() => {
					scrollToSection("snackbars-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="construction"
				label="Tooltips"
				onClick={() => {
					scrollToSection("tooltips-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="chat_bubble"
				label="Dialogs"
				onClick={() => {
					scrollToSection("dialogs-section", -60);
				}}
			/>
			<NavigationDrawerItem label="Presentation" />

			<NavigationDrawerItem
				leadingIcon="verified"
				label="Badges"
				onClick={() => {
					scrollToSection("badges-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="abc"
				label="Typography"
				onClick={() => {
					scrollToSection("typography-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="favorite"
				label="Icons"
				onClick={() => {
					scrollToSection("icons-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="add"
				label="Dividers"
				onClick={() => {
					scrollToSection("horizontal-dividers-section", -60);
				}}
			/>
			<NavigationDrawerItem label="Content" />

			<NavigationDrawerItem
				leadingIcon="credit_card"
				label="Cards"
				onClick={() => {
					scrollToSection("cards-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="view_carousel"
				label="Carousels"
				onClick={() => {
					scrollToSection("carousels-section", -60);
				}}
			/>
			<NavigationDrawerItem
				leadingIcon="format_list_bulleted"
				label="Lists"
				onClick={() => {
					scrollToSection("lists-section", -60);
				}}
			/>
		</NavigationDrawer>
	);
};

export default TRMD3NavDrawer;
