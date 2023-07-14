import { getPreferredScheme } from "trmd3components/Themeing";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import { StringBuilder } from "trmd3components/StringBuilder";
import Typography from "trmd3components/Typography";
import Component from "trmd3components/Component";

const ComponentsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("component-frame-trmd3")
		.add("component-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="components-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				⏬
			</Typography>
			<ComponentFrameTitle link="https://www.highnet.xyz">
				Components
			</ComponentFrameTitle>
			<Typography variant={"text-label-small"}>Default</Typography>
			<Component>Component</Component>
			<CodeSnippet>{`<Component>Component</Component>`}</CodeSnippet>
		</div>
	);
};
export default ComponentsFrame;
