import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import { Carousel } from "../Carousel";

const CarouselsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

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
			<ComponentFrameTitle link="">Carousels</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>
				Mobile (non-uniform layout)
			</Typography>
			<Carousel />
			<CodeSnippet>{"<Carousel />"}</CodeSnippet>
		</div>
	);
};
export default CarouselsFrame;
