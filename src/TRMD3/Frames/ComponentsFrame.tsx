/*
This ComponentsFrame is used to display a frame containing components and code
snippets. It includes a ComponentFrameTitle with a link to
"https://www.highnet.xyz" and the title "Components". Inside the frame,
it shows a default Component, and its corresponding CodeSnippet. The frame's
className is dynamically computed using a StringBuilder, adding CSS classes
for flexbox layout, theming, and component styling based on the current theme
obtained from local storage or the preferred scheme from 
trmd3components/Themeing". The ComponentsFrame also includes a Typography 
component with the "⏬" character, which might represent a down arrow or an 
icon indicating a collapsible section. This section title also receives a 
className based on the current theme, similar to the frame's className. The 
component follows a column flexbox layout, presenting the content in a 
vertical arrangement.
*/

import React from "react";
import { getPreferredScheme } from "trmd3components/Themeing";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import { StringBuilder } from "trmd3components/StringBuilder";
import Typography from "trmd3components/Typography";
import Component from "trmd3components/Component";

const ComponentsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("component-frame-trmd3")
		.add("component-frame-" + _theme + "-trmd3")
		.toString();

	const _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="components-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				⏬
			</Typography>
			<ComponentFrameTitle link="https://www.highnet.xyz">
				Components
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>Default</Typography>
			<Component>Component</Component>
			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
		</div>
	);
};
export default ComponentsFrame;
