import { getPreferredScheme } from "../../Gizmos/Themeing";
import Chip from "../Chip";

/*

TODO: NEEDS DOCUMENTATION

*/

function ChipsFrame() {
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
			<div className="text text-title text-title-large">Input Chips</div>

			<div className="text text-label text-label-small">Label Only</div>
			<Chip onClick={undefined}></Chip>
			<pre>
				<code className="language-html">
					{" "}
					{"<Chip onClick={undefined}></Chip>"}{" "}
				</code>
			</pre>

			<div className="text text-label text-label-small">
				Label & trailing icon
			</div>
			<Chip trailingIcon={true} onClick={undefined}></Chip>
			<pre>
				<code className="language-html">
					{" "}
					{"<Chip trailingIcon={true} onClick={undefined}></Chip>"}{" "}
				</code>
			</pre>

			<div className="text text-label text-label-small">
				Leading icon & label
			</div>
			<Chip leadingIcon={true} onClick={undefined}></Chip>
			<pre>
				<code className="language-html">
					{" "}
					{"<Chip leadingIcon={true} onClick={undefined}></Chip>"}{" "}
				</code>
			</pre>

			<div className="text text-label text-label-small">
				Leading icon, label & trailing icon
			</div>
			<Chip leadingIcon={true} trailingIcon={true} onClick={undefined}></Chip>
			<pre>
				<code className="language-html">
					{" "}
					{
						"<Chip leadingIcon={true} trailingIcon={true} onClick={undefined}></Chip>"
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">Label & avatar</div>
			<Chip avatar={true} onClick={undefined}></Chip>

			<pre>
				<code className="language-html">
					{" "}
					{"<Chip avatar={true} onClick={undefined}></Chip>"}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">
				Label, avatar & trailing icon
			</div>
			<Chip avatar={true} trailingIcon={true} onClick={undefined}></Chip>

			<pre>
				<code className="language-html">
					{" "}
					{
						"<Chip avatar={true} trailingIcon={true} onClick={undefined}></Chip>"
					}{" "}
				</code>
			</pre>

			<div className="text text-title text-title-large">Assist Chips</div>

			<div className="text text-label text-label-small">Label Only</div>
			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Label only - elevated
			</div>
			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">Label & icon</div>
			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Label & icon - elevated
			</div>
			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">Label & icon</div>

			<div className="text text-title text-title-large">
				Label only - elevated
			</div>
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
			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Label & branded icon
			</div>
			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Label & branded icon - elevated
			</div>
			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>

			<div className="text text-title text-title-large">Suggestion Chips</div>

			<div className="text text-label text-label-small">Outlined </div>
			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">Elevated </div>
			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Leading icon & label Outlined
			</div>
			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
			<div className="text text-label text-label-small">
				Leading icon & label Elevated
			</div>
			<pre>
				<code className="language-html"> {"<Chip></Chip>"} </code>
			</pre>
		</div>
	);
}

export default ChipsFrame;
