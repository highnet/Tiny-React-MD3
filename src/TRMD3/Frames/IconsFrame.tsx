/*
	1
	1682423199

	The code defines a React function component called IconsFrame.
	The component retrieves the preferred color scheme of the user from localStorage.
	The component returns a div with a combination of class names for styling.
	The div includes several child elements that represent icons.
	Each child element has a class name corresponding to a Material symbol.
	Each child element also has a code block displaying the HTML code used to create it
*/

import React from "react";
import Icon from "trmd3components/Icon";
import { StringBuilder } from "trmd3components/StringBuilder";
import { getPreferredScheme } from "trmd3components/Themeing";
import Typography from "trmd3components/Typography";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";

const IconsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("icons-frame-trmd3")
		.add("icons-frame-" + _theme + "-trmd3")
		.toString();

	const _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* ICONS */}
			<Typography
				id="icons-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				💟
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-icons">
				Icons
			</ComponentFrameTitle>
			<Typography
				variant="text-title-medium"
				className={
					"section-subtitle-trmd3 section-subtitle-" + _theme + "-trmd3"
				}
			>
				For a full list of all accepted icon strings, visit:{" "}
				<a
					className="subsection-link-trmd3"
					href="https://fonts.google.com/icons"
				>
					Material Symbols and Icons
				</a>
			</Typography>
			<Icon filled={true}>hive</Icon>
			<CodeSnippet>{"<Icon filled={true}>hive</Icon>"}</CodeSnippet>
			<Icon filled={true}>spa</Icon>
			<CodeSnippet>{"<Icon filled={true}>spa</Icon>"}</CodeSnippet>
			<Icon>air</Icon>
			<CodeSnippet>{"<Icon>air</Icon>"}</CodeSnippet>
			<Icon>water</Icon>
			<CodeSnippet>{"<Icon>water</Icon>"}</CodeSnippet>
		</div>
	);
};

export default IconsFrame;
