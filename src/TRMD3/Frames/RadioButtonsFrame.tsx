import { useState } from "react";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import RadioButton from "../../Radio Button/RadioButton";
import Button from "../../Button/Button";

/*
	1
	1682423199

	The code defines a React function component called RadioButtonsFrame. The
	component returns a div with a combination of class names for styling. The div
	includes several child elements that represent different radio buttons. Each
	radio button has a name and value props that are passed to it. The component also
	includes a label and a code block displaying the HTML code used to create it.
	The third radio button is disabled and has a default checked value. The color
	scheme of the component is determined by the user's preferred color scheme or
	theme, which is obtained using localStorage.
*/

const RadioButtonsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("radio-buttons-frame-trmd3")
		.add("radio-buttons-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	const [selectedOption, setSelectedOption] = useState("option-2");

	const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div className={_computedFrameClassName}>
			{/* RADIO BUTTONS */}
			<Typography
				id="radio-buttons-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🔘
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-radio-button">
				Radio Buttons
			</ComponentFrameTitle>
			<CodeSnippet>
				{`
const [selectedOption, setSelectedOption] = useState("option-2");

const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	setSelectedOption(event.target.value);
};
				`}
			</CodeSnippet>
			<Typography variant="text-label-small">Option 1</Typography>
			<RadioButton
				name={"trmd3"}
				value={"option-1"}
				onChange={handleOptionChange}
			/>
			<CodeSnippet>
				{`
<RadioButton 
	name={'trmd3'} 
	value={'option-1'} 
/>`}
			</CodeSnippet>
			<Typography variant="text-label-small">Option 2</Typography>
			<RadioButton
				name={"trmd3"}
				value={"option-2"}
				defaultChecked={true}
				onChange={handleOptionChange}
			/>
			<Button
				onClick={() => {
					alert(selectedOption);
				}}
			>
				Query Value
			</Button>
			<Typography variant="text-label-small">
				Selected option: {selectedOption}
			</Typography>
			<CodeSnippet>
				{`
<RadioButton
	name={"trmd3"}
	value={"option-2"}
	defaultChecked={true}
	onChange={handleOptionChange}
/>
<Button
	onClick={() => {
		alert(selectedOption);
	}}
>
	Query Value
</Button>
<Typography variant="text-label-small">
		Selected option: {selectedOption}
</Typography>`}
			</CodeSnippet>
		</div>
	);
};

export default RadioButtonsFrame;
