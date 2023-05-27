import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import { Carousel } from "../Carousel";

const CarouselsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	let _computedFrameClassName = new StringBuilder()
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
			<Carousel />
			<CodeSnippet>{"<Carousel />"}</CodeSnippet>
			<Typography variant={"text-label-small"}>Uniform Layout</Typography>
			<Carousel uniformWidths={true} />
			<CodeSnippet>{"<Carousel uniformWidths={true} />"}</CodeSnippet>
		</div>
	);
};
export default CarouselsFrame;
