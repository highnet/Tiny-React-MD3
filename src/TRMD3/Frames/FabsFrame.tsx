/*
This component renders a frame containing Floating Action Buttons (FABs).
It provides options for small, medium, and large size FABs in various
configurations (primary, secondary, and tertiary). The appearance of the FABs
is determined based on the current theme stored in the localStorage or the
preferred scheme. The component uses the trmd3components library for Typography,
CodeSnippet, and Fab components.
 */

import React from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import { getPreferredScheme } from "trmd3components/Themeing";
import { StringBuilder } from "trmd3components/StringBuilder";
import Typography from "trmd3components/Typography";
import Fab from "trmd3components/Fab";

const FabsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("buttons-frame-trmd3")
		.add("buttons-frame-" + _theme + "-trmd3")
		.toString();

	const _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* BUTTONS */}
			<Typography
				id="fabs-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				☁️
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%EF%B8%8F-fabs">
				FABs (Floating Action Buttons)
			</ComponentFrameTitle>
			<Typography variant={"text-label-large"}>Small FABs</Typography>
			<Typography variant={"text-label-small"}>Surface</Typography>
			<Fab onClick={undefined} />
			<CodeSnippet>
				{`
<Fab 
	onClick={undefined} 
/>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Primary</Typography>
			<Fab configuration="primary" onClick={undefined} />
			<CodeSnippet>
				{`
<Fab 
	configuration="primary" 
	onClick={undefined} 
/>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Secondary</Typography>
			<Fab configuration="secondary" onClick={undefined} />
			<CodeSnippet>
				{`
<Fab 
	configuration="secondary" 
	onClick={undefined} 
/>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Tertiary</Typography>
			<Fab configuration="tertiary" onClick={undefined} />
			<CodeSnippet>
				{`
<Fab 
	configuration="tertiary" 
	onClick={undefined} 
/>`}
			</CodeSnippet>
			<Typography variant={"text-label-large"}>FABs</Typography>
			<Typography variant={"text-label-small"}>Surface</Typography>
			<Fab size="medium" onClick={undefined} />
			<CodeSnippet>
				{`
<Fab 
	size="medium" 
	onClick={undefined} 
/>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Primary</Typography>
			<Fab size="medium" configuration="primary" onClick={undefined} />
			<CodeSnippet>
				{`
<Fab 
	size="medium"
	configuration="primary" 
	onClick={undefined} 
/>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Secondary</Typography>
			<Fab size="medium" configuration="secondary" onClick={undefined} />
			<CodeSnippet>
				{`
<Fab 
	size="medium" 
	configuration="secondary" 
	onClick={undefined} 
/>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Tertiary</Typography>
			<Fab size="medium" configuration="tertiary" onClick={undefined} />
			<CodeSnippet>
				{`
<Fab 
	size="medium" 
	configuration="tertiary" 
	onClick={undefined} 
/>`}
			</CodeSnippet>
			<Typography variant={"text-label-large"}>Large FABs</Typography>
			<Typography variant={"text-label-small"}>Surface</Typography>
			<Fab size="large" onClick={undefined} />
			<CodeSnippet>
				{`
<Fab 
	size="large" 
	onClick={undefined} 
/>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Primary</Typography>
			<Fab size="large" configuration="primary" onClick={undefined} />
			<CodeSnippet>
				{`
<Fab 
	size="large" 
	configuration="primary" 
	onClick={undefined} 
/>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Secondary</Typography>
			<Fab size="large" configuration="secondary" onClick={undefined} />
			<CodeSnippet>
				{`
<Fab 
	size="large" 
	configuration="secondary" 
	onClick={undefined} 
/>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Tertiary</Typography>
			<Fab size="large" configuration="tertiary" onClick={undefined} />
			<CodeSnippet>
				{`
<Fab 
	size="large" 
	configuration="tertiary" 
	onClick={undefined} 
/>`}
			</CodeSnippet>
		</div>
	);
};

export default FabsFrame;
