import { useState } from "react";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import Checkbox from "../Checkbox";
import Button from "../../Button/Button";

/* 
	1
	1682423199

	The code defines a function called CheckboxesFrame() that returns a div container with four different types
	of checkboxes inside it. The appearance of the container and checkboxes is determined by several CSS classes
	added to the className attribute of the div.

	Each checkbox is represented by a Checkbox component with various props, such as selected, onChange,
	configuration, and disabled. The props are used to specify the appearance and behavior of the checkboxes.

	The checkboxes are grouped into two categories: default and error. Each category has an active and an inactive
	checkbox. The text describing each checkbox is displayed in a div element with a label, and a pre element with
	a code example inside that shows how to create the checkbox using HTML.
*/

const CheckboxesFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("checkboxes-frame-trmd3")
		.add("checkboxes-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
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
	onChange={undefined}
	configuration={"default"}
/>
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
