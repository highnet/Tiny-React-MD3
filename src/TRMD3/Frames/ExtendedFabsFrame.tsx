import React from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import { getPreferredScheme } from "trmd3components/Themeing";
import { StringBuilder } from "trmd3components/StringBuilder";
import Typography from "trmd3components/Typography";
import ExtendedFab from "trmd3components/ExtendedFab";

const ExtendedFabsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("extended-fabs-frame-trmd3")
		.add("extended-fabs-frame-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%EF%B8%8F-extended-fabs">
				Extended FABs (Floating Action Buttons)
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>Surface</Typography>
			<ExtendedFab onClick={undefined}></ExtendedFab>
			<CodeSnippet>{`
<ExtendedFab 
	onClick={undefined} 
/>`}</CodeSnippet>
			<Typography variant={"text-label-small"}>Primary</Typography>
			<ExtendedFab configuration="primary" onClick={undefined} />
			<CodeSnippet>
				{`
<ExtendedFab 
	configuration="primary" 
	onClick={undefined}
>
</ExtendedFab>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Secondary</Typography>
			<ExtendedFab configuration="secondary" onClick={undefined} />
			<CodeSnippet>
				{`
<ExtendedFab 
	configuration="secondary" 
	onClick={undefined}
>
</ExtendedFab>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Tertiary</Typography>
			<ExtendedFab configuration="tertiary" onClick={undefined} />
			<CodeSnippet>
				{`
<ExtendedFab 
	configuration="tertiary"
	onClick={undefined}
>
</ExtendedFab>`}
			</CodeSnippet>
		</div>
	);
};

export default ExtendedFabsFrame;
