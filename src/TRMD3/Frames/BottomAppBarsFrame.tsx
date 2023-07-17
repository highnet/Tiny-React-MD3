import React from "react";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import { getPreferredScheme } from "trmd3components/Themeing";
import { StringBuilder } from "trmd3components/StringBuilder";
import Typography from "trmd3components/Typography";
import BottomAppBar from "trmd3components/BottomAppBar";

const BottomAppBarsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("bottom-app-bars-frame-trmd3")
		.add("bottom-app-bars-frame-" + _theme + "-trmd3")
		.toString();

	const _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="bottom-app-bars-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				⏬
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-bottom-app-bar">
				Bottom App Bars
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>1 Icon - no FAB</Typography>
			<BottomAppBar className="bottom-app-bar-on-frame-trmd3" />
			<CodeSnippet>{`<BottomAppBar />`}</CodeSnippet>
			<Typography variant={"text-label-small"}>N Icons - FAB</Typography>
			<BottomAppBar
				className="bottom-app-bar-on-frame-trmd3"
				icons={[
					{ name: "hive", label: "Hive", onClick: undefined },
					{ name: "water", onClick: undefined },
				]}
				fab={{
					onClick: () => {
						alert("FAB Clicked!");
					},
					fabIconName: "hive",
				}}
			/>
			<CodeSnippet>{`
<BottomAppBar
	className="bottom-app-bar-on-frame-trmd3"
	icons={[
		{ name: "hive", label: "Hive", onClick: undefined },
		{ name: "water", onClick: undefined },
	]}
	fab={{
		onClick: () => {
			alert("FAB Clicked!");
		},
		fabIconName: "hive",
	}}
/>
		`}</CodeSnippet>
		</div>
	);
};
export default BottomAppBarsFrame;
