import { StringBuilder } from "../../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../../Gizmos/Themeing";
import CodeSnippet from "../../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../../Typography/Typography";
import InputChip from "../InputChip";

const InputChipsFrame: React.FC = () => {
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

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="chips-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🍪
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-input-chip">
				Input Chips
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>Label Only</Typography>
			<InputChip onClick={undefined}></InputChip>
			<CodeSnippet>{`
<InputChip 
	onClick={undefined}>
</InputChip>
	`}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label & trailing icon
			</Typography>
			<InputChip trailingIcon={true} onClick={undefined}></InputChip>
			<CodeSnippet>
				{`
<InputChip 
	trailingIcon={true} 
	onClick={undefined}>
</InputChip>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"} className={"text-label-small"}>
				Leading icon & label
			</Typography>
			<InputChip leadingIcon={true} onClick={undefined}></InputChip>
			<CodeSnippet>
				{`
<InputChip 
	leadingIcon={true} 
	onClick={undefined}>
</InputChip>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"} className={"text-label-small"}>
				Leading icon, label & trailing icon
			</Typography>
			<InputChip
				leadingIcon={true}
				trailingIcon={true}
				onClick={undefined}
			></InputChip>
			<CodeSnippet>
				{`
<InputChip 
	leadingIcon={true} 
	trailingIcon={true} 
	onClick={undefined}>
</InputChip>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"} className={"text-label-small"}>
				Label & avatar
			</Typography>
			<InputChip avatar={true} onClick={undefined}></InputChip>
			<CodeSnippet>
				{`
<InputChip 
	avatar={true} 
	onClick={undefined}>
</InputChip>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"} className={"text-label-small"}>
				Label, avatar & trailing icon
			</Typography>
			<InputChip
				avatar={true}
				trailingIcon={true}
				onClick={undefined}
			></InputChip>
			<CodeSnippet>
				{`
<InputChip 
	avatar={true} 
	trailingIcon={true} 
	onClick={undefined}>
</InputChip>`}
			</CodeSnippet>
		</div>
	);
};

export default InputChipsFrame;
