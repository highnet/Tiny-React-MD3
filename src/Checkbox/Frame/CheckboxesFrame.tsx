import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import Typography from "../../Typography/Typography";
import Checkbox from "../Checkbox";

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
		.add("frame-" + _theme)
		.add("checkboxes-frame-trmd3")
		.add("checkboxes-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* CHECKBOXES */}
			<div className="section-title-container-trmd3">
				<Typography
					id="checkboxes-section"
					variant="text-title-large"
					className={_computedTrmd3SectionTitlesClassName}
				>
					☑️ Checkboxes ☑️
				</Typography>
			</div>
			<Typography variant={"text-title-large"}>Default</Typography>

			<Checkbox selected={true} onChange={undefined} />
			<pre>
				<code className="language-html">
					{" "}
					{"<Checkbox selected={true} onChange={undefined} />"}{" "}
				</code>
			</pre>
			<Typography variant={"text-label-small"}>Error</Typography>
			<Checkbox selected={true} onChange={undefined} configuration={"error"} />
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Checkbox selected={true} onChange={undefined} configuration={"error"} />'
					}{" "}
				</code>
			</pre>
		</div>
	);
};

export default CheckboxesFrame;
