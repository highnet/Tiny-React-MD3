import { getPreferredScheme } from "../../../Gizmos/Themeing";
import React from "react";
import { StringBuilder } from "../../../Gizmos/StringBuilder";
import Typography from "../../../Typography/Typography";
import CodeSnippet from "../../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Fab from "../Fab";

const FabsFrame: React.FC = () => {
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
