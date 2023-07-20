/* 
The code defines a React functional component called ButtonsFrame. This
component represents a frame that displays different types of buttons 
with various configurations and states. The frame is divided into sections,
each containing a type of button (filled, outlined, text, elevated, and tonal).
The buttons can have an icon associated with them. The component uses the
localStorage API to check for the user's preferred theme and applies
corresponding CSS classes to the button container to style the buttons
accordingly. Each button is constructed using the 'Button' component
imported from another module. The Button component is responsible for
rendering the buttons with the specified configuration and properties. The code
includes a set of HTML and CSS classes that determine the layout and styling
of the buttons. The buttons are wrapped in a flexbox container with various
CSS classes to arrange them in a specific manner. Each button's configuration,
icon name, and click event are passed as props to the Button component,
and the button labels and icon names are provided as children props. The code
also includes a <pre> element with a <code> element inside it, 
containing the HTML code snippets for each button configuration.
These code snippets can be copied and pasted to use in other parts of the
application.
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

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("buttons-frame-trmd3")
		.add("buttons-frame-" + _theme + "-trmd3")
		.toString();

	const _computedTrmd3SectionTitlesClassName = new StringBuilder()
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
