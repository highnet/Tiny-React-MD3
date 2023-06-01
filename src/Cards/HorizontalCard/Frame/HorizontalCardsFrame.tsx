import React from "react";
import { getPreferredScheme } from "../../../Gizmos/Themeing";
import { StringBuilder } from "../../../Gizmos/StringBuilder";
import CodeSnippet from "../../../TRMD3/CodeSnippet/CodeSnippet";
import HorizontalCard from "../HorizontalCard";
import ComponentFrameTitle from "../../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";

const HorizontalCardsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("horizontal-cards-frame-trmd3")
		.add("horizontal-cards-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
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
