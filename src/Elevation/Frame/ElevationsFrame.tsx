/* 
  The elevation styles are defined by the class names of the div elements, such as
  “elevation-light-1” or “elevation-light-5”. The elevation styles create a visual effect
  of depth and shadow for the div elements.
*/

import { getPreferredScheme } from "../../TRMD3/Gizmos/Themeing";

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
