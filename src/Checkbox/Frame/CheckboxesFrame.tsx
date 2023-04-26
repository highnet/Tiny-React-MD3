import { getPreferredScheme } from "../../Gizmos/Themeing";
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

function CheckboxesFrame() {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			className={
				"flex-trmd3 flex-column-trmd3 frame-trmd3 " +
				"checkboxes-frame-trmd3 " +
				"checkboxes-frame-" +
				_theme +
				"-trmd3"
			}
		>
			{/* CHECKBOXES */}
			<div className="text text-label text-label-small frame-label-trmd3">
				Default
			</div>
			<Checkbox selected={true} onChange={undefined} />
			<pre>
				<code className="language-html">
					{" "}
					{"<Checkbox selected={true} onChange={undefined} />"}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small frame-label-trmd3">
				Default (inactive)
			</div>
			<Checkbox
				selected={true}
				onChange={undefined}
				configuration={"default"}
				disabled={true}
			/>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Checkbox selected={true} onChange={undefined} configuration={"default"} disabled={true} />'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small frame-label-trmd3">
				Error
			</div>
			<Checkbox selected={true} onChange={undefined} configuration={"error"} />
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Checkbox selected={true} onChange={undefined} configuration={"error"} />'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small frame-label-trmd3">
				Error (inactive)
			</div>
			<Checkbox
				selected={true}
				onChange={undefined}
				configuration={"error"}
				disabled={true}
			/>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Checkbox selected={true} onChange={undefined} configuration={"error"} disabled={true} />'
					}{" "}
				</code>
			</pre>
		</div>
	);
}

export default CheckboxesFrame;
