/*

TODO: NEEDS DOCUMENTATION

*/

import { getPreferredScheme } from "../../../Gizmos/Themeing";
import AssistChip from "../AssistChip";

function AssistChipsFrame() {
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
			<div className="text text-title text-title-large">Assist Chips</div>

			<div className="text text-label text-label-small">Label Only</div>
			<AssistChip></AssistChip>

			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Label only - elevated
			</div>
			<AssistChip></AssistChip>

			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">Label & icon</div>
			<AssistChip></AssistChip>

			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Label & icon - elevated
			</div>
			<AssistChip></AssistChip>

			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">Label & icon</div>

			<div className="text text-title text-title-large">Filter Chips</div>
			<AssistChip></AssistChip>

			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">Label & favicon</div>
			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Label & favicon - elevated
			</div>
			<AssistChip></AssistChip>

			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Label & branded icon
			</div>
			<AssistChip></AssistChip>

			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Label & branded icon - elevated
			</div>
			<AssistChip></AssistChip>

			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
		</div>
	);
}
export default AssistChipsFrame;
