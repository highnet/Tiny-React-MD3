import { useState } from "react";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import TextField from "../TextField";
import Button from "../../Button/Button";

const ComponentsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("text-fields-frame-trmd3")
		.add("text-fields-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	const [textFieldValue, setTextFieldValue] = useState("");
	const [isValidInput, setIsValidInput] = useState(true);

	function handleTextFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
		setTextFieldValue(event.target.value);
		const isValid = /^$|^[0-9]+$/.test(textFieldValue);
		setIsValidInput(isValid);
	}

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
			<CodeSnippet>
				{`
const [textFieldValue, setTextFieldValue] = useState("");

function handleTextFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
	setTextFieldValue(event.target.value);
}
            `}
			</CodeSnippet>
			<TextField
				configuration="filled"
				textConfiguration="input"
				validRegex="^$|^[0-9]+$"
				onChange={handleTextFieldChange}
			>
				Please Enter a Number.
			</TextField>
			<Button
				onClick={() => {
					alert(textFieldValue);
				}}
			>
				Query Value
			</Button>
			<Typography variant={"text-label-small"}>
				{"Value: "} {textFieldValue}
			</Typography>
			<Typography variant={"text-label-small"}>
				{" "}
				{"Valid Input: "} {isValidInput ? "True" : "False"}
			</Typography>

			<CodeSnippet>
				{`
<TextField
    configuration="filled"
    textConfiguration="input"
	validRegex="[0-9]+"
>
</TextField>
            `}
			</CodeSnippet>

			<Typography variant={"text-label-small"}>
				Label and Input, Filled
			</Typography>
			<TextField
				configuration="filled"
				textConfiguration="label-input"
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-input"
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-input"
	trailingIcon={false}
	validRegex="^$|^[0-9]+$"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Placeholder, Filled
			</Typography>
			<TextField
				configuration="filled"
				textConfiguration="label-placeholder"
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-placeholder"
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-placeholder"
	trailingIcon={false}
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="input" 
    leadingIconName="search"
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
 <TextField
    configuration="filled"
    textConfiguration="label-input" 
    leadingIconName="search"
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
 <TextField
    configuration="filled"
    textConfiguration="label-input" 
    leadingIconName="search"
	trailingIcon={false}
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-placeholder"
    leadingIconName="search"
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="filled"
    textConfiguration="label-placeholder"
    leadingIconName="search"
	trailingIcon={false}
	validRegex="^$|^[0-9]+$"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>Input, Outlined</Typography>
			<TextField
				configuration="outlined"
				textConfiguration="input"
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="input"
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="input"
	trailingIcon={false}
	validRegex="^$|^[0-9]+$"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Input, Outlined
			</Typography>
			<TextField
				configuration="outlined"
				textConfiguration="label-input"
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="label-input"
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="label-input"
	trailingIcon={false}
	validRegex="^$|^[0-9]+$"
>
</TextField>
            `}</CodeSnippet>
			<Typography variant={"text-label-small"}>
				Label and Placeholder, Outlined
			</Typography>
			<TextField
				configuration="outlined"
				textConfiguration="label-placeholder"
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="label-placeholder"
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="label-placeholder"
	trailingIcon={false}
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="Outlined"
    textConfiguration="input" 
    leadingIconName="search"
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="Outlined"
    textConfiguration="input" 
    leadingIconName="search"
	trailingIcon={false}
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
 <TextField
    configuration="outlined"
    textConfiguration="label-input" 
    leadingIconName="search"
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
 <TextField
    configuration="outlined"
    textConfiguration="label-input" 
    leadingIconName="search"
	trailingIcon={false}
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="label-placeholder"
    leadingIconName="search"
	validRegex="^$|^[0-9]+$"
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
				validRegex="^$|^[0-9]+$"
			></TextField>
			<CodeSnippet>{`
<TextField
    configuration="outlined"
    textConfiguration="label-placeholder"
    leadingIconName="search"
	trailingIcon={false}
	validRegex="^$|^[0-9]+$"
>
</TextField>
            `}</CodeSnippet>
		</div>
	);
};
export default ComponentsFrame;
