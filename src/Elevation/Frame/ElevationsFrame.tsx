/* 
1
1682423199

The code defines a React functional component called ElevationsFrame.
The component uses localStorage to get the theme or preferred color scheme of the user.
The returned JSX element is a div with class names for styling.
The div contains child elements representing different elevations.
Each child element has a class name corresponding to its elevation level.
Each child element has inline styles defining its width, height, and border radius.
Each child element has a code block displaying the HTML code used to create it.
*/

import { getPreferredScheme } from "../../Gizmos/Themeing";

function ElevationsFrame() {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			className={
				"flex-trmd3 flex-column-trmd3 frame-trmd3 elevations-frame-trmd3 buttons-frame-" +
				_theme +
				"-trmd3"
			}
		>
			{/* ELEVATION */}
			<div
				className="elevation-1"
				style={{ width: "80px", height: "80px", borderRadius: "16px" }}
			/>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<div className="elevation-1" style={{ width: "80px", height: "80px", borderRadius: "16px" }} />'
					}{" "}
				</code>
			</pre>
			<div
				className="elevation-2"
				style={{ width: "80px", height: "80px", borderRadius: "16px" }}
			/>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<div className="elevation-2" style={{ width: "80px", height: "80px", borderRadius: "16px" }} />'
					}{" "}
				</code>
			</pre>
			<div
				className="elevation-3"
				style={{ width: "80px", height: "80px", borderRadius: "16px" }}
			/>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<div className="elevation-3" style={{ width: "80px", height: "80px", borderRadius: "16px" }} />'
					}{" "}
				</code>
			</pre>
			<div
				className="elevation-4"
				style={{ width: "80px", height: "80px", borderRadius: "16px" }}
			/>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<div className="elevation-4" style={{ width: "80px", height: "80px", borderRadius: "16px" }} />'
					}{" "}
				</code>
			</pre>
			<div
				className="elevation-5"
				style={{ width: "80px", height: "80px", borderRadius: "16px" }}
			/>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<div className="elevation-5" style={{ width: "80px", height: "80px", borderRadius: "16px" }} />'
					}{" "}
				</code>
			</pre>
		</div>
	);
}

export default ElevationsFrame;
