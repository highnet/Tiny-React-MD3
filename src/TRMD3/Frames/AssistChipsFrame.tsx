/*
This code represents a React functional component called AssistChip, which is
used to render a chip with an optional icon and label text. The component accepts
various props to customize its behavior and appearance. The component imports
necessary modules such as React, useState, Icon, and Typography. It also imports
a TypeScript interface called IAssistChipProps, which defines the types of the
props expected by the component. Inside the component, the props are destructured
to access their values. The component uses the useState hook to define state
variables for each prop, initializing them with the provided values or default
values if not provided. The _id, _className, _disabled, _children, _iconType,
_iconName, _elevated, and _iconSrc variables store the values of the corresponding props or default values. The _iconSrc variable is determined based on the _iconType prop, with fallback values for different scenarios.
The _theme variable is set to the chosen theme stored in the browser's local
storage or the preferred scheme. It is used to apply a specific CSS class
to the component based on the theme. The _computedComponentClassName variable
is created using a StringBuilder utility class. It builds a string of CSS
classes based on the component's state and props. The component's return 
statement renders a button element with the provided or default id and 
computed CSS class name. Event handlers are assigned to the respective events.
Inside the button element, there are conditional renderings based on the
_iconType. If the _iconType is "icon", an Icon component is rendered with
the _iconName as its content. If the _iconType is "favicon" or "branded",
an img element is rendered with the _iconSrc as its source. Finally,
a Typography component is rendered with the _children as the label text. Overall,
this code represents a reusable chip component with customizable props for
styling, icon display, and event handling. It dynamically applies CSS
classes based on props and state variables to achieve the desired appearance
and behavior.
*/

import React from "react";
import AssistChip from "trmd3components/AssistChip";
import { StringBuilder } from "trmd3components/StringBuilder";
import { getPreferredScheme } from "trmd3components/Themeing";
import Typography from "trmd3components/Typography";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";

const AssistChipsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("chips-frame-trmd3")
		.add("chips-frame-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%E2%84%B9%EF%B8%8F-assist-chip">
				Assist Chips
			</ComponentFrameTitle>
			<div
				className={
					"assist-chips-subframe-trmd3 assist-chips-subframe-" +
					_theme +
					"-trmd3"
				}
			>
				<Typography variant={"text-label-small"}>Label Only</Typography>
				<AssistChip onClick={undefined}></AssistChip>
				<CodeSnippet>
					{`<AssistChip onClick={undefined}></AssistChip>`}
				</CodeSnippet>

				<Typography variant={"text-label-small"}>
					Label only - elevated
				</Typography>
				<AssistChip elevated={true} onClick={undefined}></AssistChip>
				<CodeSnippet>
					{`<AssistChip elevated={true} onClick={undefined}></AssistChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>Label & icon</Typography>
				<AssistChip iconType="icon" onClick={undefined}></AssistChip>
				<CodeSnippet>
					{`<AssistChip iconType="icon" onClick={undefined}></AssistChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Label & icon - elevated
				</Typography>
				<AssistChip
					iconType="icon"
					elevated={true}
					onClick={undefined}
				></AssistChip>
				<CodeSnippet>
					{`<AssistChip iconType="icon" elevated={true} onClick={undefined}></AssistChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>Label & favicon</Typography>
				<AssistChip iconType="favicon" onClick={undefined}></AssistChip>
				<CodeSnippet>
					{`
<AssistChip 
	iconType="favicon" 
	onClick={undefined}>
</AssistChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Label & favicon - elevated
				</Typography>
				<AssistChip
					iconType="favicon"
					elevated={true}
					onClick={undefined}
				></AssistChip>
				<CodeSnippet>
					{`
<AssistChip 
	iconType="favicon" 
	elevated={true} 
	onClick={undefined}>
</AssistChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Label & branded icon
				</Typography>
				<AssistChip iconType="branded" onClick={undefined}></AssistChip>
				<CodeSnippet>
					{`
<AssistChip 
	iconType="branded" 
	onClick={undefined}>
</AssistChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Label & branded icon - elevated
				</Typography>
				<AssistChip
					iconType="branded"
					elevated={true}
					onClick={undefined}
				></AssistChip>
				<CodeSnippet>
					{`
<AssistChip 
	iconType="branded" 
	elevated={true} 
	onClick={undefined}>
</AssistChip>`}
				</CodeSnippet>
			</div>
		</div>
	);
};
export default AssistChipsFrame;
