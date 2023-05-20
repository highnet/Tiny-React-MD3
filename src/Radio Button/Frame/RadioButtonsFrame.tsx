import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet";
import Typography from "../../Typography/Typography";
import RadioButton from "../RadioButton";

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

	return (
		<div className={_computedFrameClassName}>
			{/* RADIO BUTTONS */}
			<div className="section-title-container-trmd3">
				<Typography
					id="radio-buttons-section"
					variant="text-title-large"
					className={_computedTrmd3SectionTitlesClassName}
				>
					🔘 Radio Buttons 🔘
				</Typography>
			</div>
			<RadioButton name={"trmd3"} value={"option-1"} />
			<Typography variant="text-label-small">Option 1</Typography>
			<CodeSnippet>
				{"<RadioButton name={'trmd3'} value={'option-1'} />"}
			</CodeSnippet>
			<RadioButton name={"trmd3"} value={"option-2"} defaultChecked={true} />
			<Typography variant="text-label-small">Option 2</Typography>
			<CodeSnippet>
				{
					"<RadioButton name={'trmd3'} value={'option-2'} defaultChecked={true} />"
				}
			</CodeSnippet>
		</div>
	);
};

export default RadioButtonsFrame;
