import React from "react";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import StackedCard from "../../Cards/StackedCard/StackedCard";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import Typography from "../../Typography/Typography";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";

const StackedCardsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("stacked-cards-frame-trmd3")
		.add("stacked-cards-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* STACKED CARDS */}
			<Typography
				id="cards-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				💳
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-stacked-card">
				Stacked Cards
			</ComponentFrameTitle>
			<StackedCard imageSrc="1.png" />
			<CodeSnippet>
				{`
<StackedCard 
	imageSrc="1.png"
/>`}
			</CodeSnippet>
			<StackedCard imageSrc="2.png" configuration="elevated" />
			<CodeSnippet>
				{`
<StackedCard 
	imageSrc="2.png" 
	configuration="elevated" 
/>`}
			</CodeSnippet>
			<StackedCard configuration="filled" imageSrc="3.png" />
			<CodeSnippet>
				{`
<StackedCard 
	imageSrc="3.png" 
	configuration="filled" 
/>`}
			</CodeSnippet>
		</div>
	);
};

export default StackedCardsFrame;
