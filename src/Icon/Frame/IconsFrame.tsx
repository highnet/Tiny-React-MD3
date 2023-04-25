/*
	1
	1682423199

	The code defines a React function component called IconsFrame.
	The component retrieves the preferred color scheme of the user from localStorage.
	The component returns a div with a combination of class names for styling.
	The div includes several child elements that represent icons.
	Each child element has a class name corresponding to a Material symbol.
	Each child element also has a code block displaying the HTML code used to create it
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
