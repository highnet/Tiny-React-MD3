import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import AssistChip from "../../Chips/AssistChip/AssistChip";

const AssistChipsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("chips-frame-trmd3")
		.add("chips-frame-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%E2%84%B9%EF%B8%8F-assist-chip">
				Assist Chips
			</ComponentFrameTitle>
			<div
				className={
					"assist-chips-subframe-trmd3 assist-chips-subframe-" +
					_theme +
					"-trmd3"
				}
			>
				<Typography variant={"text-label-small"}>Label Only</Typography>
				<AssistChip onClick={undefined}></AssistChip>
				<CodeSnippet>
					{`<AssistChip onClick={undefined}></AssistChip>`}
				</CodeSnippet>

				<Typography variant={"text-label-small"}>
					Label only - elevated
				</Typography>
				<AssistChip elevated={true} onClick={undefined}></AssistChip>
				<CodeSnippet>
					{`<AssistChip elevated={true} onClick={undefined}></AssistChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>Label & icon</Typography>
				<AssistChip iconType="icon" onClick={undefined}></AssistChip>
				<CodeSnippet>
					{`<AssistChip iconType="icon" onClick={undefined}></AssistChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Label & icon - elevated
				</Typography>
				<AssistChip
					iconType="icon"
					elevated={true}
					onClick={undefined}
				></AssistChip>
				<CodeSnippet>
					{`<AssistChip iconType="icon" elevated={true} onClick={undefined}></AssistChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>Label & favicon</Typography>
				<AssistChip iconType="favicon" onClick={undefined}></AssistChip>
				<CodeSnippet>
					{`
<AssistChip 
	iconType="favicon" 
	onClick={undefined}>
</AssistChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Label & favicon - elevated
				</Typography>
				<AssistChip
					iconType="favicon"
					elevated={true}
					onClick={undefined}
				></AssistChip>
				<CodeSnippet>
					{`
<AssistChip 
	iconType="favicon" 
	elevated={true} 
	onClick={undefined}>
</AssistChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Label & branded icon
				</Typography>
				<AssistChip iconType="branded" onClick={undefined}></AssistChip>
				<CodeSnippet>
					{`
<AssistChip 
	iconType="branded" 
	onClick={undefined}>
</AssistChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Label & branded icon - elevated
				</Typography>
				<AssistChip
					iconType="branded"
					elevated={true}
					onClick={undefined}
				></AssistChip>
				<CodeSnippet>
					{`
<AssistChip 
	iconType="branded" 
	elevated={true} 
	onClick={undefined}>
</AssistChip>`}
				</CodeSnippet>
			</div>
		</div>
	);
};
export default AssistChipsFrame;
