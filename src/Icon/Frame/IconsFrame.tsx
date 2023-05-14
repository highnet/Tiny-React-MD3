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

import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import Icon from "../Icon";

const IconsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme)
		.add("icons-frame-trmd3")
		.add("icons-frame-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* ICONS */}
			<Icon iconName="hive"></Icon>
			<pre>
				<code className="language-html">
					{" "}
					{'<Icon iconName="hive"></Icon>'}{" "}
				</code>
			</pre>
			<Icon iconName="spa"></Icon>
			<pre>
				<code className="language-html">
					{" "}
					{'<Icon iconName="spa"></Icon>'}{" "}
				</code>
			</pre>
			<Icon iconName="air"></Icon>{" "}
			<pre>
				<code className="language-html">
					{" "}
					{'<Icon iconName="air"></Icon>'}{" "}
				</code>
			</pre>
			<Icon iconName="water"></Icon>
			<pre>
				<code className="language-html">
					{" "}
					{'<Icon iconName="water"></Icon>'}{" "}
				</code>
			</pre>
		</div>
	);
};

export default IconsFrame;
