import { getPreferredScheme } from "../../../Gizmos/Themeing";
import FilterChip from "../FilterChip";

/*

TODO: NEEDS DOCUMENTATION

*/

function FilterChipsFrame() {
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
			<div className="text text-title text-title-large">Filter Chips</div>
			<FilterChip></FilterChip>

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
			<FilterChip></FilterChip>

			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Label & branded icon
			</div>
			<FilterChip></FilterChip>

			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Label & branded icon - elevated
			</div>
			<FilterChip></FilterChip>

			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
		</div>
	);
}
export default FilterChipsFrame;
