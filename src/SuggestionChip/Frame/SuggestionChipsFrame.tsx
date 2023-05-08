import { getPreferredScheme } from "../../Gizmos/Themeing";
import SuggestionChip from "../SuggestionChip";
import Inputchip from "../SuggestionChip";

/*

TODO: NEEDS DOCUMENTATION

*/

function SuggestionChipsFrame() {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			className={
				"flex-trmd3 flex-column-trmd3 frame-trmd3 chips-frame-trmd3 chips-frame-" +
				_theme +
				"-trmd3"
			}
		>
			<div className="text text-title text-title-large">Suggestion Chips</div>

			<div className="text text-label text-label-small">Outlined </div>
			<SuggestionChip></SuggestionChip>
			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">Elevated </div>
			<SuggestionChip></SuggestionChip>

			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Leading icon & label Outlined
			</div>
			<SuggestionChip></SuggestionChip>

			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Leading icon & label Elevated
			</div>
			<SuggestionChip></SuggestionChip>

			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
		</div>
	);
}
export default SuggestionChipsFrame;
