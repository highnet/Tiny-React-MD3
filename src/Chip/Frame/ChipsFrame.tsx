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
			<Chip configuration="label-only" onClick={undefined}>
				<div className="text text-label text-label-large">Label</div>
			</Chip>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Chip configuration="label-only" onClick={undefined}><div className="text text-label text-label-large">Label</div></Chip>'
					}{" "}
				</code>
			</pre>

			<div className="text text-label text-label-small">
				Label & trailing icon
			</div>
			<div className="text text-label text-label-small">
				Leading icon & label
			</div>
			<div className="text text-label text-label-small">
				Leading icon, label & trailing icon
			</div>
			<div className="text text-label text-label-small">Label & avatar</div>
			<div className="text text-label text-label-small">
				Label, avatar & trailing icon
			</div>

			<div className="text text-title text-title-large">Assist Chips</div>

			<div className="text text-label text-label-small">Label Only</div>
			<div className="text text-label text-label-small">
				Label only - elevated
			</div>
			<div className="text text-label text-label-small">Label & icon</div>
			<div className="text text-label text-label-small">
				Label & icon - elevated
			</div>
			<div className="text text-label text-label-small">Label & icon</div>

			<div className="text text-title text-title-large">
				Label only - elevated
			</div>
			<div className="text text-label text-label-small">Label & favicon</div>
			<div className="text text-label text-label-small">
				Label & favicon - elevated
			</div>
			<div className="text text-label text-label-small">
				Label & branded icon
			</div>
			<div className="text text-label text-label-small">
				Label & branded icon - elevated
			</div>

			<div className="text text-title text-title-large">Suggestion Chips</div>
			<div className="text text-label text-label-small">Outlined </div>
			<div className="text text-label text-label-small">Elevated </div>
			<div className="text text-label text-label-small">
				Leading icon & label Outlined
			</div>
			<div className="text text-label text-label-small">
				Leading icon & label Elevated
			</div>
		</div>
	);
}

export default ChipsFrame;
