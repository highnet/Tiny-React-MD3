import { useState } from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import Button from "trmd3components/Button";
import SegmentedButton from "trmd3components/SegmentedButton";
import SegmentedButtonGroup from "trmd3components/SegmentedButtonGroup";
import { StringBuilder } from "trmd3components/StringBuilder";
import { getPreferredScheme } from "trmd3components/Themeing";
import Typography from "trmd3components/Typography";

const SegmentedButtonsFrame: React.FC = () => {
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

	const [segmentedButtonGroupValue, setSegmentedButtonGroupValue] = useState<
		string | undefined
	>(undefined);

	const handleSegmentedButtonGroupValueChange = (value: string | undefined) => {
		setSegmentedButtonGroupValue(value);
	};

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
			<div
				className={
					"segmented-buttons-subframe-trmd3 segmented-buttons-subframe-" +
					_theme +
					"-trmd3"
				}
			>
				<Typography variant={"text-label-small"}>
					Standalone Segmented Buttons
				</Typography>
				<Typography variant={"text-label-small"}>
					Label & Icon, Center
				</Typography>
				<SegmentedButton icon="check" label="Label" position="center" />
				<CodeSnippet>{`
<SegmentedButton 
	icon="check"
	label="Label" 
	position="center" 
/>
				`}</CodeSnippet>
				<Typography variant={"text-label-small"}>Label & Icon, Left</Typography>
				<SegmentedButton icon="check" label="Label" position="left" />
				<CodeSnippet>{`
<SegmentedButton 
	icon="check" 
	label="Label" 
	position="left" 
/>
				`}</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Label & Icon, Right
				</Typography>
				<SegmentedButton icon="check" label="Label" position="right" />
				<CodeSnippet>{`
<SegmentedButton
	icon="check"
	label="Label"
	position="right"
/>
				`}</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Segmented Button Group
				</Typography>
				<CodeSnippet>{`
const [segmentedButtonGroupValue,
	setSegmentedButtonGroupValue] =
		useState<string | undefined>(undefined);

const handleSegmentedButtonGroupValueChange =
	(value: string | undefined) => {
		setSegmentedButtonGroupValue(value);
};
`}</CodeSnippet>
				<SegmentedButtonGroup
					defaultSelectedButtonIndex={-1}
					onSelectedValueChange={handleSegmentedButtonGroupValueChange}
				>
					<SegmentedButton
						icon="check"
						onClick={() => {
							alert("1");
						}}
						value="alpha"
					/>
					<SegmentedButton
						icon="check"
						label="Label"
						onClick={() => {
							alert("2");
						}}
						value="beta"
					/>
					<SegmentedButton
						label="Label"
						onClick={() => {
							alert("3");
						}}
						value="charlie"
					/>
				</SegmentedButtonGroup>
				<Button onClick={() => alert(segmentedButtonGroupValue)}>
					Query Value
				</Button>
				<Typography variant="text-label-small">
					Selected value:{" "}
					{segmentedButtonGroupValue ? segmentedButtonGroupValue : "undefined"}
				</Typography>
				<CodeSnippet>{`
<SegmentedButtonGroup
	defaultSelectedButtonIndex={-1}
	onSelectedValueChange={handleSegmentedButtonGroupValueChange}
>
	<SegmentedButton
		icon="check"
		value="alpha"
		onClick={() => {
			alert("1");
		}}
	/>
	<SegmentedButton
		icon="check"
		label="Label"
		value="beta"
		onClick={() => {
			alert("2");
			}}
		
	/>
	<SegmentedButton
		label="Label"
		value="charlie"
		onClick={() => {
			alert("3");
		}}
		
	/>
</SegmentedButtonGroup>
<Button onClick={() => alert(segmentedButtonGroupValue)}>
	Query Value
</Button>
<Typography variant="text-label-small">
	Selected value:{" "}
	{segmentedButtonGroupValue ? segmentedButtonGroupValue : "undefined"}
</Typography>
				`}</CodeSnippet>
			</div>
		</div>
	);
};
export default SegmentedButtonsFrame;
