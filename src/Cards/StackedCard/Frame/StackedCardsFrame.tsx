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

import React from "react";
import { getPreferredScheme } from "../../../Gizmos/Themeing";
import { StringBuilder } from "../../../Gizmos/StringBuilder";
import StackedCard from "../StackedCard";

const StackedCardsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme)
		.add("stacked-cards-frame-trmd3")
		.add("stacked-cards-frame-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* STACKED CARDS */}
			<StackedCard></StackedCard>
			<pre>
				<code className="language-html"> {"<StackedCard></StackedCard>"} </code>
			</pre>
		</div>
	);
};

export default StackedCardsFrame;
