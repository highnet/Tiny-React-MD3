/*
	1
	1682360238

	The SwitchesFrame function returns a set of four switches in a frame. Each switch can be
	toggled on and off by the user, and may or may not include an icon. The theme of the
	switches is determined by the user's preferred scheme, which is obtained from local
	storage.

	The first switch has no icon and is labeled "No Icon." The second switch also has no
	icon, but is labeled "No Icon (Inactive)" and cannot be toggled because it is disabled.
	The third switch has an icon and is labeled "With Icon." The icon changes depending on
	whether the switch is on or off, and the available icons are "warning" and "house".
	The fourth switch is similar to the second one, but also includes an icon and is labeled
	"With Icon (Inactive)."
*/

import { useState } from "react";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import Switch from "../Switch";
import Button from "../../Button/Button";

const SwitchesFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("switches-frame-trmd3")
		.add("switches-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	const [isSelected, setIsSelected] = useState(true);

	const handleSwitchChange = () => {
		setIsSelected(!isSelected);
	};

	return (
		<div className={_computedFrameClassName}>
			{/* SWITCHES */}
			<Typography
				id="switches-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🔦
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-switch">
				Switches
			</ComponentFrameTitle>
			<Typography variant="text-label-small">No Icon</Typography>
			<CodeSnippet>
				{`
const [isSelected, setIsSelected] = useState(true);

const handleSwitchChange = () => {
	setIsSelected(!isSelected);
};
				`}
			</CodeSnippet>
			<Switch selected={true} onChange={handleSwitchChange} />
			<Button
				onClick={() => {
					alert(isSelected);
				}}
			>
				Query Value
			</Button>
			<Typography variant="text-label-small">
				{"Selected: "} {isSelected ? "true" : "false"}
			</Typography>
			<CodeSnippet>
				{`
<Switch 
	selected={true} 
	onChange={undefined} 
/>`}
			</CodeSnippet>
			<Typography variant="text-label-small">With Icon</Typography>
			<Switch
				selected={true}
				onChange={undefined}
				icon={true}
				iconNameSelected={"warning"}
				iconNameDeselected={"house"}
			/>
			<CodeSnippet>
				{`
<Switch 
	selected={true} 
	onChange={undefined} 
	icon={true} 
	iconNameSelected={"warning"} 
	iconNameDeselected={"house"} 
/>`}
			</CodeSnippet>
		</div>
	);
};

export default SwitchesFrame;
