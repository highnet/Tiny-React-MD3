import { StringBuilder } from "../../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../../Gizmos/Themeing";
import CodeSnippet from "../../../TRMD3/CodeSnippet/CodeSnippet";
import Typography from "../../../Typography/Typography";
import SuggestionChip from "../SuggestionChip";

const SuggestionChipsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("chips-frame-trmd3")
		.add("chips-frame-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography variant={"text-title-large"}>Suggestion Chips</Typography>

			<Typography variant={"text-label-small"}>Outlined</Typography>
			<SuggestionChip></SuggestionChip>
			<CodeSnippet>{"<SuggestionChip></SuggestionChip>"}</CodeSnippet>
		</div>
	);
};
export default SuggestionChipsFrame;
