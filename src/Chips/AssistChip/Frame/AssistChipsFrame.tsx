/*

TODO: NEEDS DOCUMENTATION

*/

import { StringBuilder } from "../../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../../Gizmos/Themeing";
import AssistChip from "../AssistChip";

const AssistChipsFrame: React.FC = () => {
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
			<div className="text text-title text-title-large">Assist Chips</div>

			<div className="text text-label text-label-small">Label Only</div>
			<AssistChip onClick={undefined}></AssistChip>

			<pre>
				<code className="language-html">
					{" "}
					{"<AssistChip onClick={undefined}></AssistChip>"}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">
				Label only - elevated
			</div>
			<AssistChip elevated={true} onClick={undefined}></AssistChip>

			<pre>
				<code className="language-html">
					{" "}
					{"<AssistChip elevated={true} onClick={undefined}></AssistChip>"}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">Label & icon</div>
			<AssistChip iconType="icon" onClick={undefined}></AssistChip>

			<pre>
				<code className="language-html">
					{" "}
					{'<AssistChip iconType="icon" onClick={undefined}></AssistChip>'}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">
				Label & icon - elevated
			</div>
			<AssistChip
				iconType="icon"
				elevated={true}
				onClick={undefined}
			></AssistChip>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<AssistChip iconType="icon" elevated={true} onClick={undefined}></AssistChip>'
					}{" "}
				</code>
			</pre>

			<div className="text text-label text-label-small">Label & favicon</div>
			<AssistChip iconType="favicon" onClick={undefined}></AssistChip>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<AssistChip iconType="favicon" onClick={undefined}></AssistChip>'
					}{" "}
				</code>
			</pre>

			<div className="text text-label text-label-small">
				Label & favicon - elevated
			</div>
			<AssistChip
				iconType="favicon"
				elevated={true}
				onClick={undefined}
			></AssistChip>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<AssistChip iconType="favicon" elevated={true} onClick={undefined} ></AssistChip>'
					}{" "}
				</code>
			</pre>

			<div className="text text-label text-label-small">
				Label & branded icon
			</div>
			<AssistChip iconType="branded" onClick={undefined}></AssistChip>

			<pre>
				<code className="language-html">
					{" "}
					{
						'<AssistChip iconType="branded" onClick={undefined}></AssistChip>'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">
				Label & branded icon - elevated
			</div>
			<AssistChip
				iconType="branded"
				elevated={true}
				onClick={undefined}
			></AssistChip>

			<pre>
				<code className="language-html">
					{" "}
					{
						'<AssistChip iconType="branded" elevated={true} onClick={undefined}></AssistChip>'
					}{" "}
				</code>
			</pre>
		</div>
	);
};
export default AssistChipsFrame;
