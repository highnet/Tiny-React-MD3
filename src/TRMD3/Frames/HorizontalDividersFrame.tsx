/* 
This code defines a React functional component named HorizontalDividersFrame.
It is responsible for rendering a frame containing various horizontal
dividers with different insets and styles. The component imports several
utility components from "trmd3components" and uses them to build the frame's
layout and style. The _theme variable is determined based on the localStorage
"theme" value or a default value if not present. The _computedFrameClassName
variable is constructed using the StringBuilder utility, combining multiple
class names to style the frame based on the selected theme. 
The _computedTrmd3SectionTitlesClassName variable is constructed similarly to
style the section titles within the frame. The JSX output of this
component is a div with a class name based on the computed frame class name.
It contains multiple instances of the HorizontalDivider component with
different insets and their corresponding code snippets. Each divider is
displayed with a section title, a link to its GitHub page, and the code
snippet for rendering that specific divider with its props. The component
serves as a showcase of different horizontal dividers with different inset
options and how they can be used in the application.
*/

import React from "react";
import HorizontalDivider from "trmd3components/HorizontalDivider";
import { StringBuilder } from "trmd3components/StringBuilder";
import { getPreferredScheme } from "trmd3components/Themeing";
import Typography from "trmd3components/Typography";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";

const HorizontalDividersFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("horizontaldividers-frame-trmd3")
		.add("horizontaldividers-frame-" + _theme + "-trmd3")
		.toString();

	const _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* HORIZONTAL DIVIDERS */}
			<Typography
				id="horizontal-dividers-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				➕
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-horizontal-divider">
				Horizontal Dividers
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>Inset None</Typography>
			<HorizontalDivider inset={"none"} />
			<CodeSnippet>
				{`
<HorizontalDivider 
	inset={'none'} 
/>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Inset Right</Typography>
			<HorizontalDivider inset={"right"} showInsets={true} />
			<CodeSnippet>
				{`
<HorizontalDivider 
	inset={'right'} 
	showInsets={true} 
/>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Inset Left</Typography>
			<HorizontalDivider inset={"left"} showInsets={true} />
			<CodeSnippet>
				{`
<HorizontalDivider 
	inset={'left'} 
	showInsets={true} 
/>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Inset Center</Typography>
			<HorizontalDivider inset={"center"} showInsets={true} />
			<CodeSnippet>
				{`
<HorizontalDivider 
	inset={'center'} 
	showInsets={true} 
/>`}
			</CodeSnippet>
		</div>
	);
};

export default HorizontalDividersFrame;
