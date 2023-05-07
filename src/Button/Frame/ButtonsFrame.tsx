import Button from "../Button";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import React from "react";

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

const ButtonsFrame = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			className={
				"flex-trmd3 flex-column-trmd3 frame-trmd3 buttons-frame-trmd3 buttons-frame-" +
				_theme +
				"-trmd3"
			}
		>
			{/* BUTTONS */}
			<div className="text text-title text-title-large">Filled Buttons</div>
			<div className="text text-label text-label-small">No Icon</div>
			<Button
				configuration="filled"
				disabled={false}
				onClick={undefined}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="filled" disabled={false} onClick={undefined}></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">No Icon (inactive)</div>
			<Button
				configuration="filled"
				disabled={true}
				onClick={undefined}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="filled" disabled={true} onClick={undefined}><div className="text text-label text-label-small">Disabled</div></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">With Icon</div>
			<Button
				configuration="filled"
				disabled={false}
				icon={true}
				iconName={"search"}
				onClick={undefined}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="filled" disabled={false} icon={true} iconName={"search"} onClick={undefined}></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">
				With Icon (inactive)
			</div>
			<Button
				configuration="filled"
				disabled={true}
				icon={true}
				iconName={"search"}
				onClick={undefined}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="filled" disabled={true} icon={true} iconName={"search"} onClick={undefined}><div className="text text-label text-label-small">Disabled</div></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-title text-title-large">Outlined Buttons</div>
			<div className="text text-label text-label-small">No Icon</div>
			<Button
				configuration="outlined"
				disabled={false}
				onClick={undefined}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="outlined" disabled={false} onClick={undefined}></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">No Icon (inactive)</div>
			<Button
				configuration="outlined"
				disabled={true}
				onClick={undefined}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="outlined" disabled={true} onClick={undefined}><div className="text text-label text-label-small">Disabled</div></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">With Icon</div>
			<Button
				configuration="outlined"
				disabled={false}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="outlined" disabled={false} onClick={undefined} icon={true} iconName={"search"}></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">
				With Icon (inactive)
			</div>
			<Button
				configuration="outlined"
				disabled={true}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="outlined" disabled={true} onClick={undefined} icon={true} iconName={"search"}><div className="text text-label text-label-small">Disabled</div></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-title text-title-large">Text Buttons</div>
			<div className="text text-label text-label-small">No Icon</div>
			<Button
				configuration="text"
				disabled={false}
				onClick={undefined}
			></Button>

			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="text" disabled={false} onClick={undefined}></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">No Icon (inactive)</div>
			<Button configuration="text" disabled={true} onClick={undefined}></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="text" disabled={true} onClick={undefined}></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">With Icon</div>
			<Button
				configuration="text"
				disabled={false}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="text" disabled={false} onClick={undefined} icon={true} iconName={"search"}></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">
				With Icon (inactive)
			</div>
			<Button
				configuration="text"
				disabled={true}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="text" disabled={true} onClick={undefined} icon={true} iconName={"search"}><div className="text text-label text-label-small">Disabled</div></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-title text-title-large">Elevated Buttons</div>
			<div className="text text-label text-label-small">No Icon</div>
			<Button
				configuration="elevated"
				disabled={false}
				onClick={undefined}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="elevated" disabled={false} onClick={undefined}></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">No Icon (inactive)</div>
			<Button
				configuration="elevated"
				disabled={true}
				onClick={undefined}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="elevated" disabled={true} onClick={undefined}></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">With Icon</div>
			<Button
				configuration="elevated"
				disabled={false}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="elevated" disabled={false} onClick={undefined} icon={true} iconName={"search"}></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">
				With Icon (inactive)
			</div>
			<Button
				configuration="elevated"
				disabled={true}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="elevated" disabled={true} onClick={undefined} icon={true} iconName={"search"}><div className="text text-label text-label-small">Disabled</div></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-title text-title-large">Tonal Buttons</div>
			<div className="text text-label text-label-small">No Icon</div>
			<Button
				configuration="tonal"
				disabled={false}
				onClick={undefined}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="tonal" disabled={false} onClick={undefined}></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">No Icon (inactive)</div>
			<Button
				configuration="tonal"
				disabled={true}
				onClick={undefined}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="tonal" disabled={true} onClick={undefined}><div className="text text-label text-label-small">Disabled</div></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">With Icon</div>
			<Button
				configuration="tonal"
				disabled={false}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="tonal" disabled={false} onClick={undefined} icon={true} iconName={"search"}></Button>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">
				With Icon (inactive)
			</div>
			<Button
				configuration="tonal"
				disabled={true}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			></Button>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Button configuration="tonal" disabled={true} onClick={undefined} icon={true} iconName={"search"}><div className="text text-label text-label-small">Disabled</div></Button>'
					}{" "}
				</code>
			</pre>
		</div>
	);
};

export default ButtonsFrame;
