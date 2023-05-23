import React from "react";
import { getPreferredScheme } from "../../../Gizmos/Themeing";
import { StringBuilder } from "../../../Gizmos/StringBuilder";
import CodeSnippet from "../../../TRMD3/CodeSnippet/CodeSnippet";
import Typography from "../../../Typography/Typography";
import HorizontalCard from "../HorizontalCard";

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
			<div className="section-title-container-trmd3">
				<Typography variant={"text-title-large"}>Horizontal Cards</Typography>
			</div>
			<HorizontalCard initial={"X"} imageSrc="chilly-bit.png" />
			<CodeSnippet>{'<HorizontalCard imageSrc="chilly-bit.png"/>'}</CodeSnippet>
			<HorizontalCard configuration="elevated" />
			<CodeSnippet>{'<HorizontalCard configuration="elevated" />'}</CodeSnippet>
			<HorizontalCard configuration="filled" />
			<CodeSnippet>{'<HorizontalCard configuration="filled" />'}</CodeSnippet>
		</div>
	);
};

export default HorizontalCardsFrame;
