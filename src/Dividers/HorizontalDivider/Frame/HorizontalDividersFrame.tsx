import { StringBuilder } from "../../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../../Gizmos/Themeing";
import CodeSnippet from "../../../TRMD3/CodeSnippet/CodeSnippet";
import Typography from "../../../Typography/Typography";
import HorizontalDivider from "../HorizontalDivider";

/* 
	1
	1682423199

	The code creates a React functional component called HorizontalDividersFrame.
	The component gets the preferred color scheme of the user from localStorage.
	The component returns a div with a combination of class names for styling.
	The div includes several child elements that represent horizontal dividers.
	Each child element has a different inset value for positioning.
	Each child element has a prop for showing or hiding the insets.
	Each child element also has a code block displaying the HTML code used to create it.
*/

const HorizontalDividersFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("horizontaldividers-frame-trmd3")
		.add("horizontaldividers-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* HORIZONTAL DIVIDERS */}
			<div className="section-title-container-trmd3">
				<Typography
					id="horizontal-dividers-section"
					variant="text-title-large"
					className={_computedTrmd3SectionTitlesClassName}
				>
					➕ Dividers ➕
				</Typography>
			</div>
			<Typography variant={"text-title-large"}>Horizontal Dividers</Typography>
			<Typography variant={"text-label-small"}>Inset None</Typography>
			<HorizontalDivider inset={"none"} />
			<CodeSnippet>{"<HorizontalDivider inset={'none'} />"}</CodeSnippet>

			<Typography variant={"text-label-small"}>Inset Right</Typography>
			<HorizontalDivider inset={"right"} showInsets={true} />
			<CodeSnippet>
				{"<HorizontalDivider inset={'right'} showInsets={true} />"}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Inset Left</Typography>
			<HorizontalDivider inset={"left"} showInsets={true} />
			<CodeSnippet>
				{"<HorizontalDivider inset={'left'} showInsets={true} />"}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Inset Center</Typography>
			<HorizontalDivider inset={"center"} showInsets={true} />
			<CodeSnippet>
				{"<HorizontalDivider inset={'center'} showInsets={true} />"}
			</CodeSnippet>
		</div>
	);
};

export default HorizontalDividersFrame;
