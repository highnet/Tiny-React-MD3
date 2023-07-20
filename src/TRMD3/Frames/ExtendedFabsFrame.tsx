/*
The code imports required modules and components from various files to use in
the ExtendedFabsFrame component. The main component is defined as a functional
component named ExtendedFabsFrame. It doesn't take any props and is responsible
for rendering different examples of ExtendedFab buttons. The component retrieves
the preferred theme from local storage or uses a default theme and creates CSS
class names for the frame based on the theme. The JSX code renders the component
frame, displaying ExtendedFab buttons with different configurations
(surface, primary, secondary, and tertiary) and their corresponding code snippets.
The component demonstrates four examples of ExtendedFab buttons, each with a
different configuration (color scheme) – surface, primary, secondary, and tertiary.
*/

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
