import { getPreferredScheme } from "../../../Gizmos/Themeing";
import InputChip from "../InputChip";

/*

TODO: NEEDS DOCUMENTATION

*/

function InputChipsFrame() {
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
			<InputChip onClick={undefined}></InputChip>
			<pre>
				<code className="language-html">
					{" "}
					{"<InputChip onClick={undefined}></InputChip>"}{" "}
				</code>
			</pre>

			<div className="text text-label text-label-small">
				Label & trailing icon
			</div>
			<InputChip trailingIcon={true} onClick={undefined}></InputChip>
			<pre>
				<code className="language-html">
					{" "}
					{
						"<InputChip trailingIcon={true} onClick={undefined}></InputChip>"
					}{" "}
				</code>
			</pre>

			<div className="text text-label text-label-small">
				Leading icon & label
			</div>
			<InputChip leadingIcon={true} onClick={undefined}></InputChip>
			<pre>
				<code className="language-html">
					{" "}
					{
						"<InputChip leadingIcon={true} onClick={undefined}></InputChip>"
					}{" "}
				</code>
			</pre>

			<div className="text text-label text-label-small">
				Leading icon, label & trailing icon
			</div>
			<InputChip
				leadingIcon={true}
				trailingIcon={true}
				onClick={undefined}
			></InputChip>
			<pre>
				<code className="language-html">
					{" "}
					{
						"<InputChip leadingIcon={true} trailingIcon={true} onClick={undefined}></InputChip>"
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">Label & avatar</div>
			<InputChip avatar={true} onClick={undefined}></InputChip>

			<pre>
				<code className="language-html">
					{" "}
					{"<InputChip avatar={true} onClick={undefined}></InputChip>"}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small">
				Label, avatar & trailing icon
			</div>
			<InputChip
				avatar={true}
				trailingIcon={true}
				onClick={undefined}
			></InputChip>

			<pre>
				<code className="language-html">
					{" "}
					{
						"<InputChip avatar={true} trailingIcon={true} onClick={undefined}></InputChip>"
					}{" "}
				</code>
			</pre>
		</div>
	);
}

export default InputChipsFrame;
