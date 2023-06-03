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
				id="text-fields-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				📜
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-text-fields">
				Text Fields
			</ComponentFrameTitle>
            <Typography variant={"text-label-small"}>Input, Filled</Typography>
            <TextField configuration="filled" textConfiguration="input"></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="input"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>Label and Input, Filled</Typography>
            <TextField configuration="filled" textConfiguration="label-input"></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-input"
>
</TextField>
            `}</CodeSnippet>
            <Typography variant={"text-label-small"}>Label and Placeholder, Filled</Typography>
            <TextField configuration="filled" textConfiguration="label-placeholder" ></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-placeholder"
>
</TextField>
            `}</CodeSnippet>
             <Typography variant={"text-label-small"}>Input - Leading Icon, Filled</Typography>
            <TextField configuration="filled" textConfiguration="input" leadingIconName="Search"></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="input" 
    leadingIconName="Search
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>Label and Input - Leading Icon, Filled</Typography>
            <TextField configuration="filled" textConfiguration="label-input" leadingIconName="Search"></TextField>
			<CodeSnippet>{`
 <TextField
    configuration="filled"
    textConfiguration="label-input" 
    leadingIconName="Search"
>
</TextField>
            `}</CodeSnippet>
            <Typography variant={"text-label-small"}>Label and Placeholder - Leading Icon, Filled</Typography>
            <TextField configuration="filled" textConfiguration="label-placeholder" leadingIconName="Search"></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-placeholder
    leadingIconName="Search"
>
</TextField>
            `}</CodeSnippet>
		</div>
	);
};
export default ComponentsFrame;