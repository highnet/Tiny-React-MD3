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

	const handleClick1 = () => {
		console.log("search");
	};

	const handleClick2 = () => {
		console.log("hive");
	};

	const handleClick3 = () => {
		console.log("water");
	};

	const handleClick4 = () => {
		console.log("fab");
	};

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
				Bottom App Bars [light🚧 dark🚧]
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>
				1 Icon - no FAB [light🚧 dark🚧]
			</Typography>
			<BottomAppBar />
			<CodeSnippet>{`<BottomAppBar />`}</CodeSnippet>
			<BottomAppBar
				icons={[
					{ name: "search", label: "Search", onClick: undefined },
					{ name: "hive", label: "Hive", onClick: undefined },
					{ name: "water", label: "Water", onClick: undefined },
				]}
				fab={{ hasFab: true, onClick: undefined }}
			/>
			<CodeSnippet>{`<BottomAppBar
	icons={[
        { name: "search", onClick: undefined },
        { name: "hive", onClick: undefined },
        { name: "water", onClick: undefined },
      	]}
    	fab={{ hasFab: true, onClick: undefined }}
    />`}</CodeSnippet>
		</div>
	);
};
export default BottomAppBarsFrame;
