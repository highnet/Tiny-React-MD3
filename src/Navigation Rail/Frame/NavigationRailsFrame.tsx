import React from "react";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import Typography from "../../Typography/Typography";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import NavigationRail from "../NavigationRail";
import { scrollToSection } from "../../Gizmos/Scrolling";
import { openLinkInNewTab } from "../../Gizmos/Redirection";

const NavigationRailsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("bottom-app-bars-frame-trmd3")
		.add("bottom-app-bars-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	function handleScrollToTop() {
		throw new Error("Function not implemented.");
	}

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="bottom-app-bars-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🚈
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-bottom-app-bar">
				Navigation Rails
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>1 Icon - no FAB</Typography>
			<NavigationRail
				className={"navigation-rail-on-frame-trmd3"}
				fab={{
					onClick: () => {
						handleScrollToTop();
					},
					fabIconName: "home",
				}}
				icons={[
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
						label: "Radio Buttons",
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
						label: "Bottom App Bars",
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
				]}
			/>{" "}
			<CodeSnippet>{`<NavigationRail />`}</CodeSnippet>
		</div>
	);
};
export default NavigationRailsFrame;
