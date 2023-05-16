import { StringBuilder } from "../../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../../Gizmos/Themeing";
import Typography from "../../../Typography/Typography";
import InputChip from "../InputChip";

/*

TODO: NEEDS DOCUMENTATION

*/

const InputChipsFrame: React.FC = () => {
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
			<Typography variant={"text-title-large"}>Input Chips</Typography>
			<Typography variant={"text-label-small"}>Label Only</Typography>
			<InputChip onClick={undefined}></InputChip>
			<pre>
				<code className="language-html">
					{" "}
					{"<InputChip onClick={undefined}></InputChip>"}{" "}
				</code>
			</pre>
			<Typography variant={"text-label-small"}>
				Label & trailing icon
			</Typography>
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
};

export default InputChipsFrame;
