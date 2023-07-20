/*
This component represents a frame containing examples of horizontal cards. It
displays a set of HorizontalCard components with different configurations and
images. The component imports various dependencies, including React and several
 ustom components such as CodeSnippet and ComponentFrameTitle, as well as the
HorizontalCard component from the "trmd3components" library. The frame's class
name is dynamically generated using the StringBuilder utility from
"trmd3components." It combines multiple CSS class names for styling, including
those related to flex layout, frame appearance, and specific styles based on the
chosen theme, retrieved from localStorage or using the preferred scheme.
Within the component's render, it displays several HorizontalCard components
with different props for "imageSrc" and "configuration." The ComponentFrameTitle
component acts as a title for the section, providing a link to the corresponding
GitHub documentation.
*/

import React from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import HorizontalCard from "trmd3components/HorizontalCard";
import { StringBuilder } from "trmd3components/StringBuilder";
import { getPreferredScheme } from "trmd3components/Themeing";

const HorizontalCardsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("horizontal-cards-frame-trmd3")
		.add("horizontal-cards-frame-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* HORIZONTAL CARDS */}
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-horizontal-card">
				Horizontal Cards
			</ComponentFrameTitle>
			<HorizontalCard imageSrc="4.png" />
			<CodeSnippet>{`
<HorizontalCard 
	imageSrc="4.png"
/>`}</CodeSnippet>
			<HorizontalCard imageSrc="5.png" configuration="elevated" />
			<CodeSnippet>
				{`
<HorizontalCard 
	imageSrc="5.png" 
	configuration="elevated" 
/>`}
			</CodeSnippet>
			<HorizontalCard imageSrc="6.png" configuration="filled" />
			<CodeSnippet>
				{`
<HorizontalCard 
	imageSrc="6.png"
	configuration="filled" 
/>`}
			</CodeSnippet>
		</div>
	);
};

export default HorizontalCardsFrame;
