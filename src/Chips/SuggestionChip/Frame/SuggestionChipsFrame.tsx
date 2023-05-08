/*

TODO: NEEDS DOCUMENTATION

*/

import { StringBuilder } from "../../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../../Gizmos/Themeing";
import SuggestionChip from "../SuggestionChip";

const SuggestionChipsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme)
		.add("chips-frame-trmd3")
		.add("chips-frame-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<div className="text text-title text-title-large">Suggestion Chips</div>

			<div className="text text-label text-label-small">Outlined </div>
			<SuggestionChip></SuggestionChip>
			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
		</div>
	);
};
export default SuggestionChipsFrame;
