/* 
	1
	1682423199

	The code defines a functional component called ButtonsFrame. The component
	returns a collection of buttons with different configurations (filled, outlined,
	text, elevated, and tonal) and states (enabled or disabled) for each
	configuration.

	The component also allows the addition of icons to the buttons when desired.
	Each button has a label indicating whether it is enabled or disabled. The
	component uses the localStorage API to check for the theme preference set by
	the user and applies the corresponding CSS class to the button container.

	The code includes HTML and CSS classes that determine the layout and styling of
	the buttons. The HTML is wrapped in a div container with a flex display and
	several CSS classes that determine the layout and theme of the buttons.

	The button configurations and properties are passed as props to the Button
	component, which is imported from another module. The Button component is
	responsible for rendering each button with its respective configuration and
	properties. The button labels and icon names are passed as children props to
	the Button component.

	The code also includes a <pre> element containing a <code> element with the
	HTML code that should be used to create each button, which can be copied and
	pasted to use in other parts of the application.
*/

import Button from "../Button";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import React from "react";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import Typography from "../../Typography/Typography";

const ButtonsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme)
		.add("buttons-frame-trmd3")
		.add("buttons-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* BUTTONS */}
			<div className="section-title-container-trmd3">
				<Typography
					id="buttons-section"
					variant="text-title-large"
					className={_computedTrmd3SectionTitlesClassName}
				>
					🕹️ Buttons 🕹️
				</Typography>
			</div>
			<Typography variant={"text-title-large"}>Filled Buttons</Typography>
			<Typography variant={"text-label-small"}>No Icon</Typography>
			<Button configuration="filled" onClick={undefined}></Button>
			<pre>
				<code className="language-html">
					{" "}
					{'<Button configuration="filled" onClick={undefined}></Button>'}{" "}
				</code>
			</pre>
			<Typography variant={"text-label-small"}>With Icon</Typography>
			<Button
				configuration="filled"
				icon={true}
				iconName={"search"}
				onClick={undefined}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="filled" icon={true} iconName={"search"} onClick={undefined}></Button>'
					}{" "}
				</code>
			</pre>
			<Typography variant={"text-title-large"}>Outlined Buttons</Typography>
			<Typography variant={"text-label-small"}>No Icon</Typography>
			<Button configuration="outlined" onClick={undefined}></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="outlined" onClick={undefined}></Button>'
					}{" "}
				</code>
			</pre>
			<Typography variant={"text-label-small"}>With Icon</Typography>
			<Button
				configuration="outlined"
				onClick={undefined}
				icon={true}
				iconName={"search"}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="outlined" onClick={undefined} icon={true} iconName={"search"}></Button>'
					}{" "}
				</code>
			</pre>
			<Typography variant={"text-title-large"}>Text Buttons</Typography>
			<Typography variant={"text-label-small"}>No Icon</Typography>
			<Button configuration="text" onClick={undefined}></Button>
			<pre>
				<code className="language-html">
					{" "}
					{'<Button configuration="text" onClick={undefined}></Button>'}{" "}
				</code>
			</pre>
			<Typography variant={"text-label-small"}>With Icon</Typography>
			<Button
				configuration="text"
				onClick={undefined}
				icon={true}
				iconName={"search"}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="text" onClick={undefined} icon={true} iconName={"search"}></Button>'
					}{" "}
				</code>
			</pre>
			<Typography variant={"text-title-large"}>Elevated Buttons</Typography>
			<Typography variant={"text-label-small"}>No Icon</Typography>
			<Button configuration="elevated" onClick={undefined}></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="elevated" onClick={undefined}></Button>'
					}{" "}
				</code>
			</pre>
			<Typography variant={"text-label-small"}>With Icon</Typography>
			<Button
				configuration="elevated"
				onClick={undefined}
				icon={true}
				iconName={"search"}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="elevated" onClick={undefined} icon={true} iconName={"search"}></Button>'
					}{" "}
				</code>
			</pre>
			<Typography variant={"text-title-large"}>Tonal Buttons</Typography>
			<Typography variant={"text-label-small"}>No Icon</Typography>
			<Button configuration="tonal" onClick={undefined}></Button>
			<pre>
				<code className="language-html">
					{" "}
					{'<Button configuration="tonal" onClick={undefined}></Button>'}{" "}
				</code>
			</pre>
			<Typography variant={"text-label-small"}>With Icon</Typography>
			<Button
				configuration="tonal"
				onClick={undefined}
				icon={true}
				iconName={"search"}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="tonal" onClick={undefined} icon={true} iconName={"search"}></Button>'
					}{" "}
				</code>
			</pre>
		</div>
	);
};

export default ButtonsFrame;
