/*
The code defines a React functional component called CheckboxesFrame. This
component represents a frame that displays different types of checkboxes and
provides examples of their usage. The component includes HTML and CSS classes to
structure and style the checkboxes. The checkboxes are arranged in a flexbox
container with various CSS classes to define the layout and theme of the frame.
The checkboxes are constructed using the 'Checkbox' component imported from
another module. The Checkbox component is responsible for rendering the
checkboxes with the specified configuration and properties. The component uses
the 'useState' hook from React to manage the state of a checkbox. A boolean
state variable 'isChecked' is used to track whether the checkbox is checked or
unchecked. The component includes a set of <Typography> elements to display
section titles and labels for the different types of checkboxes. The first
example shows a default styled checkbox with the 'selected' prop set to true,
indicating that the checkbox is initially checked. The checkbox can be toggled
to change its state using the 'handleCheckboxChange' function. Below the
checkbox, there is a 'Button' component with an onClick handler that displays
an alert with the current value of 'isChecked'. The label "checked" or
"unchecked" is also displayed using the 'isChecked' state variable. The second
example demonstrates an error styled checkbox, which has a different
visual appearance from the default checkbox.
*/

import React from "react";
import { useState } from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import { getPreferredScheme } from "trmd3components/Themeing";
import { StringBuilder } from "trmd3components/StringBuilder";
import Typography from "trmd3components/Typography";
import Checkbox from "trmd3components/Checkbox";
import Button from "trmd3components/Button";

const CheckboxesFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("checkboxes-frame-trmd3")
		.add("checkboxes-frame-" + _theme + "-trmd3")
		.toString();

	const _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	const [isChecked, setIsChecked] = useState(true);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className={_computedFrameClassName}>
			{/* CHECKBOXES */}
			<Typography
				id="checkboxes-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				☑️
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%EF%B8%8F-checkbox">
				Checkboxes
			</ComponentFrameTitle>
			<CodeSnippet>
				{`
	const [isChecked, setIsChecked] = useState(true);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};
				`}
			</CodeSnippet>
			<Checkbox
				selected={true}
				onChange={handleCheckboxChange}
				configuration={"default"}
			/>
			<Button onClick={() => alert(isChecked)}>Query Value</Button>
			<Typography variant={"text-label-small"}>
				{isChecked ? "checked" : "unchecked"}
			</Typography>
			<CodeSnippet>
				{`
<Checkbox
	selected={true}
	onChange={handleCheckboxChange}
	configuration={"default"}
/>
<Button onClick={() => alert(isChecked)}>Query Value</Button>
<Typography variant={"text-label-small"}>
	{isChecked ? "checked" : "unchecked"}
</Typography>
				`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Error</Typography>
			<Checkbox selected={true} onChange={undefined} configuration={"error"} />
			<CodeSnippet>
				{`
<Checkbox 
	selected={true} 
	onChange={undefined} 
	configuration={"error"}
/>`}
			</CodeSnippet>
		</div>
	);
};

export default CheckboxesFrame;
