import { StringBuilder } from "../../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../../Gizmos/Themeing";
import CodeSnippet from "../../../TRMD3/CodeSnippet";
import Typography from "../../../Typography/Typography";
import VerticalDivider from "../VerticalDivider";

/*
  Dividers have an inset prop that determines how much space is left on the left and right sides of the divider. The inset prop can be either
  “none”, “top”, “bottom”, or “center”. The dividers also have a showInsets prop that controls whether
  or not to show the inset spaces with a different color.
*/

const VerticalDividersFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("verticaldividers-frame-trmd3")
		.add("verticaldividers-frame-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* VERTICAL DIVIDERS */}
			<Typography variant="text-title-large">Vertical Dividers</Typography>
			<Typography variant="text-label-small">Inset None</Typography>
			<VerticalDivider inset={"none"} />
			<CodeSnippet>{"<VerticalDivider inset={'none'} />"}</CodeSnippet>
			<Typography variant="text-label-small">Inset Top</Typography>
			<VerticalDivider inset={"top"} showInsets={true} insetTopHeight={50} />
			<CodeSnippet>
				{
					"<VerticalDivider inset={'top'} showInsets={true} insetTopHeight={50} />"
				}
			</CodeSnippet>
			<Typography variant="text-label-small">Inset Bottom</Typography>
			<VerticalDivider
				inset={"bottom"}
				insetBottomHeight={50}
				showInsets={true}
			/>
			<CodeSnippet>
				{
					'<VerticalDivider inset={"bottom"} insetBottomHeight={50} showInsets={true} />'
				}
			</CodeSnippet>
			<Typography variant="text-label-small">Inset Center</Typography>
			<VerticalDivider
				inset={"center"}
				insetBottomHeight={50}
				insetTopHeight={50}
				showInsets={true}
			/>
			<CodeSnippet>
				{
					'<VerticalDivider inset={"center"} insetBottomHeight={50} insetTopHeight={50} showInsets={true} />'
				}
			</CodeSnippet>
		</div>
	);
};

export default VerticalDividersFrame;
