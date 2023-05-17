/*
 */

import React from "react";
import { getPreferredScheme } from "../../../Gizmos/Themeing";
import { StringBuilder } from "../../../Gizmos/StringBuilder";
import StackedCard from "../StackedCard";
import CodeSnippet from "../../../TRMD3/CodeSnippet";

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

	return (
		<div className={_computedFrameClassName}>
			{/* STACKED CARDS */}
			<StackedCard></StackedCard>
			<CodeSnippet>{"<StackedCard></StackedCard>"}</CodeSnippet>
		</div>
	);
};

export default StackedCardsFrame;
