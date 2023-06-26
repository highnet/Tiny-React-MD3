import { activateMenuId } from "../../Gizmos/Modals";
import { openLinkInNewTab } from "../../Gizmos/Redirection";
import { scrollToSection } from "../../Gizmos/Scrolling";
import NavigationRail from "../../Navigation Rail/NavigationRail";

const TRMD3NavRail: React.FC = () => {
	const handleScrollToTop = (): void => {
		scrollToSection("tourguide-section", -60);
	};

	return (
		<NavigationRail
			className={"main-navigation-rail-trmd3"}
			fab={{
				onClick: () => {
					handleScrollToTop();
				},
				fabIconName: "arrow_upward",
			}}
			icons={[
				{
					name: "build",
					label: "Components",
					onClick: () => {
						activateMenuId("menu-0");
					},
				},
				{
					name: "bookmark",
					onClick: () => {
						openLinkInNewTab(
							"https://github.com/highnet/Tiny-React-MD3#----trmd3-tiny-react-material-design-3-"
						);
					},
				},
				{
					name: "menu_book",
					onClick: () => {
						openLinkInNewTab(
							"https://github.com/highnet/Tiny-React-MD3/tree/master/src#-tiny-react-md-3-documentation"
						);
					},
				},
				{
					name: "code",
					onClick: () => {
						openLinkInNewTab(
							"https://github.com/highnet/Tiny-React-MD3/tree/master/src"
						);
					},
				},
				{
					name: "pill",
					label: "Seg. Buttons",
					onClick: () => {
						scrollToSection("segmented-buttons-section", -60);
					},
				},
				{
					name: "monetization_on",
					label: "Icon Buttons",
					onClick: () => {
						scrollToSection("icon-buttons-section", -60);
					},
				},
				{
					name: "icecream",
					label: "Snackbars",
					onClick: () => {
						scrollToSection("snackbars-section", -60);
					},
				},
				{
					name: "sliders",
					label: "Sliders",
					onClick: () => {
						scrollToSection("sliders-section", -60);
					},
				},
				{
					name: "arrow_back",
					label: "Side Sheets",
					onClick: () => {
						scrollToSection("side-sheets-section", -60);
					},
				},
				{
					name: "credit_card",
					label: "Cards",
					onClick: () => {
						scrollToSection("cards-section", -60);
					},
				},
				{
					name: "cookie",
					label: "Chips",
					onClick: () => {
						scrollToSection("chips-section", -60);
					},
				},
				{
					name: "add",
					label: "Dividers",
					onClick: () => {
						scrollToSection("horizontal-dividers-section", -60);
					},
				},
				{
					name: "radio_button_checked",
					label: "Radio Btns",
					onClick: () => {
						scrollToSection("radio-buttons-section", -60);
					},
				},
				{
					name: "verified",
					label: "Badges",
					onClick: () => {
						scrollToSection("badges-section", -60);
					},
				},
				{
					name: "check_box",
					label: "Checkboxes",
					onClick: () => {
						scrollToSection("checkboxes-section", -60);
					},
				},
				{
					name: "toggle_on",
					label: "Switches",
					onClick: () => {
						scrollToSection("switches-section", -60);
					},
				},
				{
					name: "joystick",
					label: "Buttons",
					onClick: () => {
						scrollToSection("buttons-section", -60);
					},
				},
				{
					name: "abc",
					label: "Typography",
					onClick: () => {
						scrollToSection("typography-section", -60);
					},
				},
				{
					name: "favorite",
					label: "Icons",
					onClick: () => {
						scrollToSection("icons-section", -60);
					},
				},
				{
					name: "cloud",
					label: "FABs",
					onClick: () => {
						scrollToSection("fabs-section", -60);
					},
				},
				{
					name: "dock_to_bottom",
					label: "Bottom Bars",
					onClick: () => {
						scrollToSection("bottom-app-bars-section", -60);
					},
				},
				{
					name: "view_carousel",
					label: "Carousels",
					onClick: () => {
						scrollToSection("carousels-section", -60);
					},
				},
				{
					name: "train",
					label: "Nav Rails",
					onClick: () => {
						scrollToSection("navigation-rails-section", -60);
					},
				},
				{
					name: "web_asset",
					label: "Top Bars",
					onClick: () => {
						scrollToSection("top-app-bars-section", -60);
					},
				},
				{
					name: "construction",
					label: "Tooltips",
					onClick: () => {
						scrollToSection("tooltips-section", -60);
					},
				},
				{
					name: "text_fields",
					label: "Text Fields",
					onClick: () => {
						scrollToSection("text-fields-section", -60);
					},
				},
				{
					name: "format_list_bulleted",
					label: "Lists",
					onClick: () => {
						scrollToSection("lists-section", -60);
					},
				},
				{
					name: "chat_bubble",
					label: "Dialogs",
					onClick: () => {
						scrollToSection("dialogs-section", -60);
					},
				},
			]}
		/>
	);
};

export default TRMD3NavRail;
