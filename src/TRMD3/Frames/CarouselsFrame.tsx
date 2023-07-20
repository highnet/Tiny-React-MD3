/*
The code defines a React functional component called CarouselsFrame.
This component represents a frame that displays multiple carousels,
each with a different layout and content. The component includes HTML
and CSS classes to structure and style the carousels. The carousels are
arranged in a flexbox container with various CSS classes to define the layout
and theme of the frame. The carousels are constructed using the 'Carousel'
component imported from another module. The Carousel component is responsible
for rendering the carousels with the specified images and layout configuration.
The carousels can have two different layouts: non-uniform and uniform. The
non-uniform layout allows images of different widths to be displayed, while
the uniform layout ensures that all images have the same width. Each carousel
is provided with an array of image objects, each containing an 'imageSource',
'label', and 'supportingText'. The images can be associated with labels and
supporting text. The code includes a set of <Typography> elements to display
section titles and labels for the different carousels. Additionally, the 
component uses the 'getPreferredScheme' function from "trmd3components/Themeing"
to determine the theme preference and applies corresponding CSS classes to the
frame.
*/

import React from "react";
import { getPreferredScheme } from "trmd3components/Themeing";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import { StringBuilder } from "trmd3components/StringBuilder";
import Typography from "trmd3components/Typography";
import Carousel from "trmd3components/Carousel";

const CarouselsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("carousels-frame-trmd3")
		.add("carousels-frame-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="carousels-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🎠
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-carousel">
				Carousels
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>Non-uniform Layout</Typography>
			<Carousel
				images={[
					{
						imageSource: "1.png",
						label: "Chilly Bits",
						supportingText: "www.chillybitsnft.com",
					},
					{
						imageSource: "2.png",
					},
					{
						imageSource: "3.png",
					},
					{
						imageSource: "4.png",
					},
					{
						imageSource: "5.png",
					},
				]}
			/>
			<CodeSnippet>
				{`<Carousel
	images={[
		{imageSource: "1.png", 
		label: "Chilly Bits", 
		supportingText: "www.chillybitsnft.com"},
		{imageSource: "2.png"},
		{imageSource: "3.png"},
		{imageSource: "4.png"},
		{imageSource: "5.png"},
		]}
	/>`}
			</CodeSnippet>
			<Typography variant={"text-label-small"}>Uniform Layout</Typography>
			<Carousel uniformWidths={true} />
			<CodeSnippet>{"<Carousel uniformWidths={true} />"}</CodeSnippet>
		</div>
	);
};
export default CarouselsFrame;
