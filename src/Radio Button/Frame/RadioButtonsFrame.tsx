import { getPreferredScheme } from "../../Gizmos/Themeing";
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

function RadioButtonsFrame() {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			className={
				"flex-trmd3 flex-column-trmd3 frame-trmd3 radio-buttons-frame-trmd3 radio-buttons-frame-" +
				_theme +
				"-trmd3"
			}
		>
			{/* RADIO BUTTONS */}
			<RadioButton name={"trmd3"} value={"option-1"} />
			<div className="text text-label text-label-small frame-label-trmd3">
				Option 1
			</div>
			<pre>
				<code className="language-html">
					{" "}
					{'<RadioButton name={"trmd3"} value={"option-1"} />'}{" "}
				</code>
			</pre>
			<RadioButton name={"trmd3"} value={"option-2"} />
			<div className="text text-label text-label-small frame-label-trmd3">
				Option 2
			</div>
			<pre>
				<code className="language-html">
					{" "}
					{'<RadioButton name={"trmd3"} value={"option-2"} />'}{" "}
				</code>
			</pre>
			<RadioButton
				name={"trmd3"}
				value={"option-4"}
				disabled={true}
				defaultChecked={true}
			/>
			<div className="text text-label text-label-small frame-label-trmd3">
				Option 4 (Inactive)
			</div>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<RadioButton name={"trmd3"} value={"option-4"} disabled={true} defaultChecked={true} />'
					}{" "}
				</code>
			</pre>
		</div>
	);
}

export default RadioButtonsFrame;
