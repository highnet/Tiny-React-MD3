import { getPreferredScheme } from "../../../Gizmos/Themeing";
import React from "react";
import { StringBuilder } from "../../../Gizmos/StringBuilder";
import Typography from "../../../Typography/Typography";
import CodeSnippet from "../../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import ExtendedFab from "../ExtendedFab";

const ExtendedFabsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("buttons-frame-trmd3")
		.add("buttons-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography variant={"text-label-large"}>Large FABs [Light🚧-Dark🚧]</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%EF%B8%8F-extended-fabs">
				Extended FABs (Floating Action Buttons) [Light🚧-Dark🚧]
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>Surface [Light🚧-Dark🚧]</Typography>
			<ExtendedFab onClick={undefined} > TEST</ExtendedFab>
			<CodeSnippet>
				{`<ExtendedFab size="large" onClick={undefined} />`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Primary [Light🚧-Dark🚧]</Typography>
			<ExtendedFab configuration="primary" onClick={undefined} />
			<CodeSnippet>
				{`<ExtendedFab size="large" configuration="primary" onClick={undefined} />`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Secondary [Light🚧-Dark🚧]</Typography>
			<ExtendedFab configuration="secondary" onClick={undefined} />
			<CodeSnippet>
				{`<ExtendedFab size="large" configuration="secondary" onClick={undefined} />`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Tertiary [Light🚧-Dark🚧]</Typography>
			<ExtendedFab configuration="tertiary" onClick={undefined} />
			<CodeSnippet>
				{`<ExtendedFab size="large" configuration="tertiary" onClick={undefined} />`}
			</CodeSnippet>
		</div>
	);
};

export default ExtendedFabsFrame;
