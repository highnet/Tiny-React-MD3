/*
  Each icon is a span element with a class name of “material-symbols-outlined”, which uses a custom font to render the icons.
  The icons are specified by the text content of the span elements, such as “search”, “home”, “air”,
  “water”, or “check”. The code demonstrates how to use the material symbols font to create icons with
  different names and styles. 
*/

import { getPreferredScheme } from "../../TRMD3/Gizmos/Themeing";

function IconsFrame() {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			className={
				"flex-trmd3 flex-column-trmd3 frame-trmd3 icons-frame-trmd3 icons-frame-" +
				_theme +
				"-trmd3"
			}
		>
			{/* ICONS */}
			<span className="material-symbols-outlined">hive</span>
			<pre>
				<code className="language-html">
					{" "}
					{'<span className="material-symbols-outlined">hive</span>'}{" "}
				</code>
			</pre>
			<span className="material-symbols-outlined">spa</span>
			<pre>
				<code className="language-html">
					{" "}
					{'<span className="material-symbols-outlined">spa</span>'}{" "}
				</code>
			</pre>
			<span className="material-symbols-outlined">air</span>
			<pre>
				<code className="language-html">
					{" "}
					{'<span className="material-symbols-outlined">air</span>'}{" "}
				</code>
			</pre>
			<span className="material-symbols-outlined">water</span>
			<pre>
				<code className="language-html">
					{" "}
					{'<span className="material-symbols-outlined">water</span>'}{" "}
				</code>
			</pre>
		</div>
	);
}

export default IconsFrame;
