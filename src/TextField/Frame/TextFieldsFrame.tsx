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
			<Typography variant={"text-label-small"}>
				Input, Filled, No Trailing Icon
			</Typography>
			<TextField
				configuration="filled"
				textConfiguration="input"
				trailingIcon={false}
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="input"
	trailingIcon={false}
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Input, Filled
			</Typography>
			<TextField
				configuration="filled"
				textConfiguration="label-input"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-input"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Input, Filled, No Trailing Icon
			</Typography>
			<TextField
				configuration="filled"
				textConfiguration="label-input"
				trailingIcon={false}
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-input"
	trailingIcon={false}
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Placeholder, Filled
			</Typography>
			<TextField
				configuration="filled"
				textConfiguration="label-placeholder"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-placeholder"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Placeholder, Filled, No Trailing Icon
			</Typography>
			<TextField
				configuration="filled"
				textConfiguration="label-placeholder"
				trailingIcon={false}
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-placeholder"
	trailingIcon={false}
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Input - Leading Icon, Filled
			</Typography>
			<TextField
				configuration="filled"
				textConfiguration="input"
				leadingIconName="search"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="input" 
    leadingIconName="search"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Input - Leading Icon, Filled, No Trailing Icon
			</Typography>
			<TextField
				configuration="filled"
				textConfiguration="input"
				leadingIconName="search"
				trailingIcon={false}
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="input" 
    leadingIconName="search"
	trailingIcon={false}
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Input - Leading Icon, Filled
			</Typography>
			<TextField
				configuration="filled"
				textConfiguration="label-input"
				leadingIconName="search"
			></TextField>
			<CodeSnippet>{`
 <TextField
    configuration="filled"
    textConfiguration="label-input" 
    leadingIconName="search"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Input - Leading Icon, Filled, No Trailing Icon
			</Typography>
			<TextField
				configuration="filled"
				textConfiguration="label-input"
				leadingIconName="search"
				trailingIcon={false}
			></TextField>
			<CodeSnippet>{`
 <TextField
    configuration="filled"
    textConfiguration="label-input" 
    leadingIconName="search"
	trailingIcon={false}
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Placeholder - Leading Icon, Filled
			</Typography>
			<TextField
				configuration="filled"
				textConfiguration="label-placeholder"
				leadingIconName="search"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-placeholder"
    leadingIconName="search"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Placeholder - Leading Icon, Filled, No Trailing Icon
			</Typography>
			<TextField
				configuration="filled"
				textConfiguration="label-placeholder"
				leadingIconName="search"
				trailingIcon={false}
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-placeholder"
    leadingIconName="search"
	trailingIcon={false}
	>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>Input, Outlined</Typography>
			<TextField configuration="outlined" textConfiguration="input"></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="input"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Input, Outlined, No Trailing Icon
			</Typography>
			<TextField
				configuration="outlined"
				textConfiguration="input"
				trailingIcon={false}
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="input"
	trailingIcon={false}
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Input, Outlined
			</Typography>
			<TextField
				configuration="outlined"
				textConfiguration="label-input"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="label-input"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Input, Outlined, No Trailing Icon
			</Typography>
			<TextField
				configuration="outlined"
				textConfiguration="label-input"
				trailingIcon={false}
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="label-input"
	trailingIcon={false}
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Placeholder, Outlined
			</Typography>
			<TextField
				configuration="outlined"
				textConfiguration="label-placeholder"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="label-placeholder"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Placeholder, Outlined, No Trailing Icon
			</Typography>
			<TextField
				configuration="outlined"
				textConfiguration="label-placeholder"
				trailingIcon={false}
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="label-placeholder"
	trailingIcon={false}
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Input - Leading Icon, Outlined
			</Typography>
			<TextField
				configuration="outlined"
				textConfiguration="input"
				leadingIconName="search"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="Outlined"
    textConfiguration="input" 
    leadingIconName="search"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Input - Leading Icon, Outlined, No Trailing Icon
			</Typography>
			<TextField
				configuration="outlined"
				textConfiguration="input"
				leadingIconName="search"
				trailingIcon={false}
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="Outlined"
    textConfiguration="input" 
    leadingIconName="search"
	trailingIcon={false}
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Input - Leading Icon, Outlined
			</Typography>
			<TextField
				configuration="outlined"
				textConfiguration="label-input"
				leadingIconName="search"
			></TextField>
			<CodeSnippet>{`
 <TextField
    configuration="outlined"
    textConfiguration="label-input" 
    leadingIconName="search"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Input - Leading Icon, Outlined, No Trailing Icon
			</Typography>
			<TextField
				configuration="outlined"
				textConfiguration="label-input"
				leadingIconName="search"
				trailingIcon={false}
			></TextField>
			<CodeSnippet>{`
 <TextField
    configuration="outlined"
    textConfiguration="label-input" 
    leadingIconName="search"
	trailingIcon={false}
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Placeholder - Leading Icon, Outlined
			</Typography>
			<TextField
				configuration="outlined"
				textConfiguration="label-placeholder"
				leadingIconName="search"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="label-placeholder"
    leadingIconName="search"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Placeholder - Leading Icon, Outlined, No Trailing Icon
			</Typography>
			<TextField
				configuration="outlined"
				textConfiguration="label-placeholder"
				leadingIconName="search"
				trailingIcon={false}
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="label-placeholder"
    leadingIconName="search"
	trailingIcon={false}
>
</TextField>
            `}</CodeSnippet>
		</div>
	);
};
export default ComponentsFrame;
