import React from "react";
import { getPreferredScheme } from "../../../Gizmos/Themeing";
import { StringBuilder } from "../../../Gizmos/StringBuilder";
import StackedCard from "../StackedCard";
import CodeSnippet from "../../../TRMD3/CodeSnippet";
import Typography from "../../../Typography/Typography";

const StackedCardsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme)
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
			<div className="section-title-container-trmd3">
				<Typography
					id="cards-section"
					variant="text-title-large"
					className={_computedTrmd3SectionTitlesClassName}
				>
					💳 Cards 💳
				</Typography>
			</div>
			<StackedCard />
			<CodeSnippet>{"<StackedCard></StackedCard>"}</CodeSnippet>
		</div>
	);
};

export default StackedCardsFrame;
