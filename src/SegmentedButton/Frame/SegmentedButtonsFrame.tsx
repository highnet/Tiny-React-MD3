import { useState } from "react";
import Button from "../../Button/Button";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import SegmentedButton from "../SegmentedButton";
import SegmentedButtonGroup from "../SegmentedButtonGroup";

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
			<div className="segmented-buttons-subframe-trmd3">
				<Typography variant={"text-label-small"}>
					Standalone Segmented Buttons
				</Typography>
				<Typography variant={"text-label-small"}>
					Label & Icon, Center
				</Typography>
				<SegmentedButton
					icon="check"
					label="Label"
					position="center"
				></SegmentedButton>
				<CodeSnippet>{`<SegmentedButton
					icon="check"
					label="Label"
					position="center"
				></SegmentedButton>`}</CodeSnippet>
				<Typography variant={"text-label-small"}>Label & Icon, Left</Typography>
				<SegmentedButton
					icon="check"
					label="Label"
					position="left"
				></SegmentedButton>
				<CodeSnippet>{`				<SegmentedButton
					icon="check"
					label="Label"
					position="left"
				></SegmentedButton>`}</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Label & Icon, Right
				</Typography>
				<SegmentedButton
					icon="check"
					label="Label"
					position="right"
				></SegmentedButton>
				<CodeSnippet>{`				<SegmentedButton
					icon="check"
					label="Label"
					position="right"
				></SegmentedButton>`}</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Segmented Button Group
				</Typography>
				<CodeSnippet>{`
	const [segmentedButtonGroupValue, setSegmentedButtonGroupValue] = useState<
		string | undefined
	>(undefined);

	const handleSegmentedButtonGroupValueChange = (value: string | undefined) => {
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
							console.log("0");
						}}
						value="alpha"
					/>
					<SegmentedButton
						icon="check"
						label="Label"
						onClick={() => {
							console.log("1");
						}}
						value="beta"
					/>
					<SegmentedButton
						label="Label"
						onClick={() => {
							console.log("2");
						}}
						value="charlie"
					/>
				</SegmentedButtonGroup>
				<Button onClick={() => console.log(segmentedButtonGroupValue)}>
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
						onClick={() => {
							console.log("0");
						}}
						value="alpha"
					/>
					<SegmentedButton
						icon="check"
						label="Label"
						onClick={() => {
							console.log("1");
						}}
						value="beta"
					/>
					<SegmentedButton
						label="Label"
						onClick={() => {
							console.log("2");
						}}
						value="charlie"
					/>
				</SegmentedButtonGroup>
				<Button onClick={() => console.log(segmentedButtonGroupValue)}>
					Query Value
				</Button>
				<Typography variant="text-label-small">
					Selected value:{" "}
					{segmentedButtonGroupValue ? segmentedButtonGroupValue : "undefined"}
				</Typography>`}</CodeSnippet>
			</div>
		</div>
	);
};
export default SegmentedButtonsFrame;
