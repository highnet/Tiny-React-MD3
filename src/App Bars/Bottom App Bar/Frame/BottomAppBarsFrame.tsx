import React from "react";
import { getPreferredScheme } from "../../../Gizmos/Themeing";
import { StringBuilder } from "../../../Gizmos/StringBuilder";
import Typography from "../../../Typography/Typography";
import ComponentFrameTitle from "../../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import CodeSnippet from "../../../TRMD3/CodeSnippet/CodeSnippet";
import BottomAppBar from "../BottomAppBar";

const BottomAppBarsFrame: React.FC = () => {
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
			<BottomAppBar className="bottom-app-bar-on-frame-trmd3"/>
			<CodeSnippet>{`<BottomAppBar />`}</CodeSnippet>
			<Typography variant={"text-label-small"}>N Icons - FAB</Typography>
			<BottomAppBar
				icons={[
					{ name: "search", label: "Search", onClick: undefined },
					{ name: "hive", label: "Hive", onClick: undefined },
					{ name: "water", label: "Water", onClick: undefined },
				]}
				fab={{
					onClick: () => {
						alert("FAB");
					},
				}}
				className="bottom-app-bar-on-frame-trmd3"
			/>
			<CodeSnippet>{`<BottomAppBar
	icons={[
        { name: "search", label: "Search", onClick: undefined },
        { name: "hive", label: "Hive", onClick: undefined },
        { name: "water", label: "Water", onClick: undefined },
      	]}
    	fab={{ onClick: () => { alert("FAB"); ] }}
    />`}</CodeSnippet>
		</div>
	);
};
export default BottomAppBarsFrame;
