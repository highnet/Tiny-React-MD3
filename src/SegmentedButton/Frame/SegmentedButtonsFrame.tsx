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
				<Typography variant={"text-label-small"}>Label & Icon, Center</Typography>
				<SegmentedButton icon="check" label="Label" position="center"></SegmentedButton>
				<CodeSnippet>{`
<SegmentedButton 
    icon="check"
	position="center"
>
    
</SegmentedButton>
`}</CodeSnippet>
				<Typography variant={"text-label-small"}>Label Only, Center</Typography>
				<SegmentedButton label="Label" position="center"></SegmentedButton>
				<CodeSnippet>{`
<SegmentedButton
	label="Label"
	position="center"
>
    
</SegmentedButton>
`}</CodeSnippet>
				<Typography variant={"text-label-small"}>Icon Only, Center</Typography>
				<SegmentedButton icon="check" position="center"></SegmentedButton>
				<CodeSnippet>{`
<SegmentedButton
	icon="check"
	position="center"
>
    
</SegmentedButton>
`}</CodeSnippet>
<Typography variant={"text-label-small"}>Label & Icon, Left</Typography>
				<SegmentedButton icon="check" label="Label" position="left"></SegmentedButton>
				<CodeSnippet>{`
<SegmentedButton 
    icon="left"
	position="center"
>
    
</SegmentedButton>
`}</CodeSnippet>
				<Typography variant={"text-label-small"}>Label Only, Left</Typography>
				<SegmentedButton label="Label" position="left"></SegmentedButton>
				<CodeSnippet>{`
<SegmentedButton
	label="Label"
	position="left"
>
    
</SegmentedButton>
`}</CodeSnippet>
				<Typography variant={"text-label-small"}>Icon Only, Left</Typography>
				<SegmentedButton icon="check" position="left"></SegmentedButton>
				<CodeSnippet>{`
<SegmentedButton
	icon="check"
	position="left"
>
    
</SegmentedButton>
`}</CodeSnippet>
<Typography variant={"text-label-small"}>Label & Icon, Right</Typography>
				<SegmentedButton icon="check" label="Label" position="right"></SegmentedButton>
				<CodeSnippet>{`
<SegmentedButton 
    icon="check"
	position="right"
>
    
</SegmentedButton>
`}</CodeSnippet>
				<Typography variant={"text-label-small"}>Label Only, Right</Typography>
				<SegmentedButton label="Label" position="right"></SegmentedButton>
				<CodeSnippet>{`
<SegmentedButton
	label="Label"
	position="right"
>
    
</SegmentedButton>
`}</CodeSnippet>
				<Typography variant={"text-label-small"}>Icon Only, Right</Typography>
				<SegmentedButton icon="check" position="right"></SegmentedButton>
				<CodeSnippet>{`
<SegmentedButton
	icon="check"
	position="right"
>
    
</SegmentedButton>
`}</CodeSnippet>
			</div>
		</div>
	);
};
export default ComponentsFrame;
