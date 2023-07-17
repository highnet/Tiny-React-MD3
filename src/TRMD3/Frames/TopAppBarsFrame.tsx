import React from "react";
import { StringBuilder } from "trmd3components/StringBuilder";
import { getPreferredScheme } from "trmd3components/Themeing";
import TopAppBar from "trmd3components/TopAppBar";
import Typography from "trmd3components/Typography";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";

const TopAppBarsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("top-app-bars-frame-trmd3")
		.add("top-app-bars-frame-" + _theme + "-trmd3")
		.toString();

	const _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="top-app-bars-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				⏫
			</Typography>
			<ComponentFrameTitle link="https://www.highnet.xyz">
				Top App Bars
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>Small</Typography>
			<TopAppBar className="top-app-bar-on-frame-trmd3" configuration="small" />
			<CodeSnippet>{`
<TopAppBar 
	configuration="small" 
/>`}</CodeSnippet>
			<Typography variant={"text-label-small"}>Small-Centered</Typography>
			<TopAppBar
				className="top-app-bar-on-frame-trmd3"
				configuration="small-centered"
			/>
			<CodeSnippet>{`
<TopAppBar 
	configuration="small-centered" 
/>`}</CodeSnippet>
			<Typography variant={"text-label-small"}>Medium</Typography>
			<TopAppBar
				className="top-app-bar-on-frame-trmd3"
				configuration="medium"
			/>
			<CodeSnippet>{`
<TopAppBar 
	configuration="medium" 
/>`}</CodeSnippet>
			<Typography variant={"text-label-small"}>Large</Typography>
			<TopAppBar className="top-app-bar-on-frame-trmd3" configuration="large" />
			<CodeSnippet>{`
<TopAppBar 
	configuration="large" 
/>`}</CodeSnippet>
			<TopAppBar
				className="top-app-bar-on-frame-trmd3"
				configuration="small-centered"
				leadingIcon={{ name: "dark_mode", onClick: undefined }}
				trailingIcons={[{ name: "arrow_upward", onClick: undefined }]}
			/>
			<CodeSnippet>{`
<TopAppBar
	className="top-app-bar-on-frame-trmd3"
	configuration="small-centered"
	leadingIcon={{ name: "dark_mode", onClick: undefined }}
	trailingIcons={[{ name: "arrow_upward", onClick: undefined }]}
	/>
			`}</CodeSnippet>
		</div>
	);
};
export default TopAppBarsFrame;
