/*
This is a React functional component called "InputChipsFrame" that represents a
frame containing examples of the "InputChip" component. The component
demonstrates different use cases of the "InputChip" component with various
configurations. The frame contains multiple sections, each showcasing different
variations of the "InputChip" component. Each section displays a code snippet
alongside the rendered "InputChip" component with specific props. The frame's
styling is determined based on the preferred theme, which is retrieved from
local storage or defaults to a predefined theme. The frame is divided into
sections, and each section demonstrates a different scenario for using the
"InputChip" component: "Label Only" - A basic "InputChip" with only a label and
the ability to toggle its selection state. "Label & trailing icon" - An
"InputChip" with a label and a trailing icon. "Leading icon & label" - An
"InputChip" with a leading icon and a label. "Leading icon, label & trailing
icon" - An "InputChip" with both leading and trailing icons along with a label.
"Label & avatar" - An "InputChip" with a label and an avatar icon that changes
based on the selection state. "Label, avatar & trailing icon" - An "InputChip"
with a label, an avatar icon, and a trailing icon. The "InputChipsFrame"
component provides a convenient way to visualize and test different
configurations of the "InputChip" component, making it easier for developers to
understand and integrate the "InputChip" in their applications.
*/

import React from "react";
import { useState } from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import Button from "trmd3components/Button";
import InputChip from "trmd3components/InputChip";
import { StringBuilder } from "trmd3components/StringBuilder";
import { getPreferredScheme } from "trmd3components/Themeing";
import Typography from "trmd3components/Typography";

const InputChipsFrame: React.FC = () => {
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

	const _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	const [toggled, setToggled] = useState(true);

	const handleToggled = () => {
		setToggled(!toggled);
	};

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="chips-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🍪
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-input-chip">
				Input Chips
			</ComponentFrameTitle>
			<div
				className={
					"input-chips-subframe-trmd3 input-chips-subframe-" + _theme + "-trmd3"
				}
			>
				<Typography variant={"text-label-small"}>Label Only</Typography>
				<CodeSnippet>{`
const [toggled, setToggled] = useState(true);

const handleToggled = () => {
	setToggled(!toggled);
};
	`}</CodeSnippet>
				<InputChip selected={true} onClick={handleToggled}></InputChip>
				<Typography variant={"text-label-small"}>
					{"Toggled: "}
					{toggled ? "On" : "Off"}
				</Typography>
				<Button
					onClick={() => {
						alert(toggled);
					}}
				>
					Query Value
				</Button>
				<CodeSnippet>{`
<InputChip selected={true} onClick={handleToggled}></InputChip>
<Typography variant={"text-label-small"}>
	{"Toggled: "}
	{toggled ? "On" : "Off"}
</Typography>
<Button
	onClick={() => {
		alert(toggled);
	}}
>
	Query Value
</Button>
	`}</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Label & trailing icon
				</Typography>
				<InputChip
					selected={true}
					trailingIconName="close"
					onClick={undefined}
				></InputChip>
				<CodeSnippet>
					{`
<InputChip
	selected={true}
	trailingIconName="close" 
	onClick={undefined}>
</InputChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"} className={"text-label-small"}>
					Leading icon & label
				</Typography>
				<InputChip
					selected={true}
					leadingIconName="search"
					onClick={undefined}
				></InputChip>
				<CodeSnippet>
					{`
<InputChip
	selected={true}
	leadingIconName="search"
	trailingIconName="close"
	onClick={undefined}>
</InputChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"} className={"text-label-small"}>
					Leading icon, label & trailing icon
				</Typography>
				<InputChip
					selected={true}
					leadingIconName="search"
					trailingIconName="close"
					onClick={undefined}
				></InputChip>
				<CodeSnippet>
					{`
<InputChip
	selected={true}
	leadingIconName="search"
	trailingIconName="close"
	onClick={undefined}>
</InputChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"} className={"text-label-small"}>
					Label & avatar
				</Typography>
				<InputChip
					selected={true}
					avatarIconNameDeselected="account_circle"
					avatarIconNameSelected="check_circle"
					onClick={undefined}
				></InputChip>
				<CodeSnippet>
					{`
<InputChip
	selected={true}
	avatarIconNameDeselected="account_circle"
	avatarIconNameSelected="check_circle"
	onClick={undefined}>
</InputChip>`}
				</CodeSnippet>
				<Typography variant={"text-label-small"} className={"text-label-small"}>
					Label, avatar & trailing icon
				</Typography>
				<InputChip
					selected={true}
					avatarIconNameDeselected="account_circle"
					avatarIconNameSelected="check_circle"
					trailingIconName="close"
					onClick={undefined}
				></InputChip>
				<CodeSnippet>
					{`
<InputChip
	selected={true}
	avatarIconNameDeselected="account_circle"
	avatarIconNameSelected="check_circle"
	trailingIconName="close"
	onClick={undefined}>
</InputChip>`}
				</CodeSnippet>
			</div>
		</div>
	);
};

export default InputChipsFrame;
