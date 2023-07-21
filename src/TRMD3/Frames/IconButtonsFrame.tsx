/*
This code defines a React functional component named IconButtonsFrame.
The component is used to showcase various types of IconButtons with
different configurations and interactions. The IconButtonsFrame component
contains multiple instances of IconButton components with different
configurations, such as standard, filled, tonal, and outlined. Each
IconButton represents an interactive button with an icon and is displayed
in a specific section of the webpage. The component uses React's useState
hook to manage the 'toggled' state, representing whether the toggleAble
IconButton is currently selected or not. The JSX output of this component
displays a set of IconButton examples, each with different configurations
and interactions. The buttons can be standard, filled, tonal, or outlined,
and some of them are toggleable, allowing users to switch between the
selected and deselected states. In addition to the IconButton components,
the component also displays Button and Typography components to indicate
the current state of the toggleable IconButton and provide a "Query Value"
button to alert the current toggled state.
*/

import React, { useState } from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import Button from "trmd3components/Button";
import IconButton from "trmd3components/IconButton";
import { StringBuilder } from "trmd3components/StringBuilder";
import { getPreferredScheme } from "trmd3components/Themeing";
import Typography from "trmd3components/Typography";

const IconButtonsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("icon-button-frame-trmd3")
		.add("icon-button-frame-" + _theme + "-trmd3")
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
				id="icon-buttons-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🪙
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-icon-buttons">
				Icon Buttons
			</ComponentFrameTitle>
			<div
				className={
					"icon-buttons-subframe-trmd3 icon-buttons-subframe-" +
					_theme +
					"-trmd3"
				}
			>
				<Typography variant={"text-label-small"}>Standard</Typography>
				<IconButton configuration="standard" onClick={undefined}>
					hive
				</IconButton>
				<CodeSnippet>
					{`
<IconButton
    configuration="standard"
    onClick={undefined}
>
    hive
</IconButton>
`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>Filled</Typography>
				<IconButton configuration="filled" onClick={undefined}>
					hive
				</IconButton>
				<CodeSnippet>{`
<IconButton 
    configuration="filled"

    onClick={undefined}
>
    hive
</IconButton>
`}</CodeSnippet>
				<Typography variant={"text-label-small"}>Tonal</Typography>
				<IconButton configuration="tonal" onClick={undefined}>
					hive
				</IconButton>
				<CodeSnippet>
					{`
<IconButton 
    configuration="tonal"

    onClick={undefined}
>
    hive
</IconButton>
`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>Outlined</Typography>
				<IconButton configuration="outlined" onClick={undefined}>
					hive
				</IconButton>
				<CodeSnippet>
					{`
<IconButton 
    configuration="outlined"

    onClick={undefined}
>
    hive
</IconButton>
`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Standard, Toggleable
				</Typography>
				<CodeSnippet>
					{`
const [toggled, setToggled] = useState(true);

const handleToggled = () => {
	setToggled(!toggled);
};
`}
				</CodeSnippet>
				<IconButton
					configuration="standard"
					onClick={undefined}
					toggleAble={true}
					selected={true}
					onValueChange={handleToggled}
				>
					hive
				</IconButton>
				<Button
					onClick={() => {
						alert(toggled);
					}}
				>
					Query Value
				</Button>
				<Typography variant={"text-label-small"}>
					{"Toggled: "}
					{toggled ? "On" : "Off"}
				</Typography>
				<CodeSnippet>
					{`
<IconButton
	configuration="standard"
	onClick={undefined}
	toggleAble={true}
	selected={true}
	onValueChange={handleToggled}
>
	hive
</IconButton>
<Button
	onClick={() => {
		alert(toggled);
	}}
>
	Query Value
</Button>
<Typography variant={"text-label-small"}>
	{"Toggled: "}
	{toggled ? "On" : "Off"}
</Typography>
`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>Filled, Toggleable</Typography>
				<IconButton
					configuration="filled"
					onClick={undefined}
					toggleAble={true}
					selected={true}
				>
					hive
				</IconButton>
				<CodeSnippet>
					{`
<IconButton 
    configuration="filled"
	onClick={undefined}
	toggleAble={true}
	selected={true}
>
    hive
</IconButton>
`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>Tonal, Toggleable</Typography>
				<IconButton
					configuration="tonal"
					onClick={undefined}
					toggleAble={true}
					selected={true}
				>
					hive
				</IconButton>
				<CodeSnippet>
					{`
<IconButton 
    configuration="tonal"
	onClick={undefined}
	toggleAble={true}
	selected={true}
>
    hive
</IconButton>
`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>
					Outlined, Toggleable
				</Typography>
				<IconButton
					configuration="outlined"
					onClick={undefined}
					toggleAble={true}
					selected={true}
				>
					hive
				</IconButton>
				<CodeSnippet>
					{`
<IconButton 
    configuration="outlined"
	onClick={undefined}
	toggleAble={true}
	selected={true}
>
    hive
</IconButton>
`}
				</CodeSnippet>
			</div>
		</div>
	);
};
export default IconButtonsFrame;
