import React from "react";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import Slider from "../Slider";
import Button from "../../Button/Button";

const SlidersFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("sliders-frame-trmd3")
		.add("sliders-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	const [sliderValue, setSliderValue] = React.useState(80);
	const handleSliderValueChange = (e: number) => {
		setSliderValue(e);
	};

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="sliders-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🎚️
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%EF%B8%8F-sliders">
				Sliders
			</ComponentFrameTitle>
			<div
				className={
					"sliders-subframe-trmd3 sliders-subframe-" + _theme + "-trmd3"
				}
			>
				<CodeSnippet>
					{`
const [sliderValue, setSliderValue] = React.useState(80);
const handleSliderValueChange = (e: number) => {
	setSliderValue(e);
};
`}
				</CodeSnippet>
				<Slider
					onValueChange={(e) => {
						alert(e);
						handleSliderValueChange(e);
					}}
					value={80}
				/>
				<Button
					onClick={() => {
						alert(sliderValue);
					}}
				>
					Query Value
				</Button>
				<Typography variant="text-label-small">
					{"Slider Value: "} {sliderValue}
				</Typography>
				<CodeSnippet>
					{`
<Slider
	onValueChange={(e) => {
		alert(e);
		handleSliderValueChange(e);
	}}
	value={80}
/>
<Button
	onClick={() => {
		alert(sliderValue);
	}}
>
	Query Value
</Button>
<Typography variant="text-label-small">
	{"Slider Value: "} {sliderValue}
</Typography>
`}
				</CodeSnippet>
				<Slider step={5} min={50} max={150} value={100} />
				<CodeSnippet>{`<Slider step={5} min={50} max={150} value={100} />`}</CodeSnippet>
				<Slider min={-100} max={100} value={-60} />
				<CodeSnippet>{`<Slider min={-100} max={100} value={-60} />`}</CodeSnippet>
			</div>
		</div>
	);
};
export default SlidersFrame;
