import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import TextField from "../TextField";


const ComponentsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("component-frame-trmd3")
		.add("component-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="components-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				⏬
			</Typography>
			<ComponentFrameTitle link="https://www.highnet.xyz">
				Components
			</ComponentFrameTitle>
            <Typography variant={"text-label-small"}>Input</Typography>
            <TextField textConfiguration="input"></TextField>
			<CodeSnippet>{`
<TextField 
    textConfiguration="input"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>Label and Input</Typography>
            <TextField textConfiguration="label-input"></TextField>
			<CodeSnippet>{`
<TextField 
    textConfiguration="label-input"
>
</TextField>
            `}</CodeSnippet>
            <Typography variant={"text-label-small"}>Label and Placeholder</Typography>
            <TextField textConfiguration="label-placeholder" ></TextField>
			<CodeSnippet>{`
<TextField
    textConfiguration="label-placeholder"
>
</TextField>
            `}</CodeSnippet>
             <Typography variant={"text-label-small"}>Input - Leading Icon</Typography>
            <TextField textConfiguration="input" leadingIconName="Search"></TextField>
			<CodeSnippet>{`
<TextField
    textConfiguration="input" 
    leadingIconName="Search
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>Label and Input - Leading Icon</Typography>
            <TextField textConfiguration="label-input" leadingIconName="Search"></TextField>
			<CodeSnippet>{`
 <TextField
    textConfiguration="label-input" 
    leadingIconName="Search"
>
</TextField>
            `}</CodeSnippet>
            <Typography variant={"text-label-small"}>Label and Placeholder - Leading Icon</Typography>
            <TextField textConfiguration="label-placeholder" leadingIconName="Search"></TextField>
			<CodeSnippet>{`
<TextField 
    textConfiguration="label-placeholder
    leadingIconName="Search"
>
</TextField>
            `}</CodeSnippet>
		</div>
	);
};
export default ComponentsFrame;
