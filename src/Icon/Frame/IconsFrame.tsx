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

import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import Typography from "../../Typography/Typography";
import Icon from "../Icon";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";

const IconsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("icons-frame-trmd3")
		.add("icons-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
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
			<Icon>hive</Icon>
			<CodeSnippet>{"<Icon>hive</Icon>"}</CodeSnippet>
			<Icon>spa</Icon>
			<CodeSnippet>{"<Icon>spa</Icon>"}</CodeSnippet>
			<Icon>air</Icon>
			<CodeSnippet>{"<Icon>air</Icon>"}</CodeSnippet>
			<Icon>water</Icon>
			<CodeSnippet>{"<Icon>water</Icon>"}</CodeSnippet>
		</div>
	);
};

export default IconsFrame;
