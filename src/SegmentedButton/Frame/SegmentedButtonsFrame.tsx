import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import SegmentedButton from "../SegmentedButton";

const ComponentsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("segmented-buttons-frame-trmd3")
		.add("segmented-buttons-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="segmented-buttons-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				💊
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-segmented-buttons">
				Segmented Buttons
			</ComponentFrameTitle>
			<div className="segmented-buttons-subframe-trmd3">
				<Typography variant={"text-label-small"}>Label & Icon</Typography>
				<SegmentedButton icon="check" label="Label"></SegmentedButton>
				<CodeSnippet>{`
<SegmentedButton 
    icon="check"
>
    
</SegmentedButton>
`}</CodeSnippet>
				<Typography variant={"text-label-small"}>Label Only</Typography>
				<SegmentedButton label="Label"></SegmentedButton>
				<CodeSnippet>{`
<SegmentedButton
	label="Label"
>
    
</SegmentedButton>
`}</CodeSnippet>
				<Typography variant={"text-label-small"}>Icon Only</Typography>
				<SegmentedButton icon="check"></SegmentedButton>
				<CodeSnippet>{`
<SegmentedButton
	icon="check"
>
    
</SegmentedButton>
`}</CodeSnippet>
			</div>

		</div>
	);
};
export default ComponentsFrame;
