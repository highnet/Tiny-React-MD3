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
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import { getPreferredScheme } from "trmd3components/Themeing";
import { StringBuilder } from "trmd3components/StringBuilder";
import Typography from "trmd3components/Typography";
import Button from "trmd3components/Button";

const ButtonsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
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
			<Typography
				id="buttons-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🕹️
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%EF%B8%8F-buttons">
				Filled Buttons
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>No Icon</Typography>
			<Button configuration="filled" onClick={undefined}></Button>
			<CodeSnippet>
				{`
<Button 
	configuration="filled" 
	onClick={undefined}
>
</Button>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>With Icon</Typography>
			<Button
				configuration="filled"
				iconName={"search"}
				onClick={undefined}
			></Button>
			<CodeSnippet>
				{`
<Button 
	configuration="filled" 
	icon={true} 
	iconName={"search"} 
	onClick={undefined}
>
</Button>`}
			</CodeSnippet>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%EF%B8%8F-buttons">
				Outlined Buttons
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>No Icon</Typography>
			<Button configuration="outlined" onClick={undefined}></Button>
			<CodeSnippet>
				{`
<Button 
	configuration="outlined" 
	onClick={undefined}
>
</Button>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>With Icon</Typography>
			<Button
				configuration="outlined"
				onClick={undefined}
				iconName={"search"}
			></Button>
			<CodeSnippet>
				{`
<Button 
	configuration="outlined"
	onClick={undefined} 
	icon={true} 
	iconName={"search"}
>
</Button>`}
			</CodeSnippet>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%EF%B8%8F-buttons">
				Text Buttons
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>No Icon</Typography>
			<Button configuration="text" onClick={undefined}></Button>
			<CodeSnippet>
				{`
<Button 
	configuration="text" 
	onClick={undefined}
>
</Button>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>With Icon</Typography>
			<Button
				configuration="text"
				onClick={undefined}
				iconName={"search"}
			></Button>
			<CodeSnippet>
				{`
<Button 
	configuration="text" 
	onClick={undefined} 
	icon={true} 
	iconName={"search"}
>
</Button>`}
			</CodeSnippet>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%EF%B8%8F-buttons">
				Elevated Buttons
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>No Icon</Typography>
			<Button configuration="elevated" onClick={undefined}></Button>
			<CodeSnippet>
				{`
<Button 
	configuration="elevated" 
	onClick={undefined}
>
</Button>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>With Icon</Typography>
			<Button
				configuration="elevated"
				onClick={undefined}
				iconName={"search"}
			></Button>
			<CodeSnippet>
				{`
<Button
	configuration="elevated" 
	onClick={undefined} 
	icon={true} 
	iconName={"search"}
>
</Button>`}
			</CodeSnippet>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%EF%B8%8F-buttons">
				Tonal Buttons
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>No Icon</Typography>
			<Button configuration="tonal" onClick={undefined}></Button>
			<CodeSnippet>
				{`
<Button 
	configuration="tonal" 
	onClick={undefined}
>
</Button>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>With Icon</Typography>
			<Button
				configuration="tonal"
				onClick={undefined}
				iconName={"search"}
			></Button>
			<CodeSnippet>
				{`
<Button
	configuration="tonal" 
	onClick={undefined} 
	icon={true} 
	iconName={"search"}
>
</Button>`}
			</CodeSnippet>
		</div>
	);
};

export default ButtonsFrame;
