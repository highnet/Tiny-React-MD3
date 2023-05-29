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
				id="navigation-rails-section"
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
				icons={[
					{
						name: "hive",
						onClick: undefined,
						label: "Hive",
					},
					{
						name: "water",
						onClick: undefined,
					},
				]}
				fab={{
					onClick: () => {
						alert("FAB clicked!");
					},
					fabIconName: "warning",
				}}
			/>
			<CodeSnippet>
				{`
<NavigationRail
	icons={[
	{
		name: "hive",
		onClick: undefined,
		label: "Hive",
	},
	{
		name: "water",
		onClick: undefined,
	},
		]}
	fab={{
		fabIconName: "warning",
        onClick: () => {
			alert("FAB clicked!");
			}
		}}
			/>`}
			</CodeSnippet>
		</div>
	);
};
export default NavigationRailsFrame;
