/*  
	This React functional component, "BadgesFrame," renders a collection of badges
	of various configurations. It fetches the preferred theme from local storage
	or the user's system preferences and uses it to build class names for styling.
  The component displays a header with an emoji "📛" as a section title for the
	badges. It then displays three types of badges:
  	a) "Small" badge with a default configuration and positioned at the top-right
		with specified x and y offsets.
  	b) "Single-digit" badge with the value "3," positioned at the top-right
		with specific offsets.
  	c) "Multiple-digits" badge with the value "123," also positioned at the
		top-right with specific offsets.
	Each badge example is wrapped in a "Component" element for styling consistency.
	The HTML code for each badge example is displayed below it using the
	"CodeSnippet" component with "language-html" class. Note: The "Badge"
	component is imported and used to render the individual badges with 
	different configurations and positions. The "Typography" component is
	used for displaying section titles and label text. The "StringBuilder"
	class from "trmd3components" is utilized for creating dynamic class names.
*/

import React from "react";
import { getPreferredScheme } from "trmd3components/Themeing";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import { StringBuilder } from "trmd3components/StringBuilder";
import Typography from "trmd3components/Typography";
import Component from "trmd3components/Component";
import Badge from "trmd3components/Badge";

const BadgesFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("badges-frame-trmd3")
		.add("badges-frame-" + _theme + "-trmd3")
		.toString();

	const _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* BADGES */}
			<Typography
				id="badges-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				📛
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-badge">
				Badges
			</ComponentFrameTitle>

			<div className="badges-subframe-trmd3">
				<div>
					<Typography variant={"text-label-small"}>Small</Typography>
					<Component>
						<Badge
							configuration={"small"}
							anchor="top-right"
							xOffset={-0.4}
							yOffset={-0.1}
						/>
					</Component>
				</div>
				<CodeSnippet>
					{`
<Component>
	<Badge
		configuration={"small"}
		anchor="top-right"
		xOffset={-0.4}
		yOffset={-0.1}
	/>
</Component>
`}
				</CodeSnippet>
				<div>
					<Component>
						<Badge
							configuration={"single-digit"}
							anchor="top-right"
							xOffset={-2.5}
							yOffset={-0.5}
						>
							3
						</Badge>
					</Component>
				</div>
				<CodeSnippet>
					{`
<Component>
	<Badge 
		configuration={"single-digit"}
		anchor="top-right"
		xOffset={-2.5}
		yOffset={-0.5}
	>
			3
	</Badge>
</Component>
					`}
				</CodeSnippet>
				<div>
					<Typography variant={"text-label-small"}>Multiple Digits</Typography>
					<Component>
						<Badge
							configuration={"multiple-digits"}
							anchor="top-right"
							xOffset={-2.5}
							yOffset={-0.6}
						>
							123
						</Badge>
					</Component>
				</div>
				<CodeSnippet>
					{`
<Component>
	<Badge
		configuration={"multiple-digits"}
		anchor="top-right"
		xOffset={-2.5}
		yOffset={-0.6}
	>
		123
	</Badge>
</Component>	
					`}
				</CodeSnippet>
			</div>
		</div>
	);
};

export default BadgesFrame;
