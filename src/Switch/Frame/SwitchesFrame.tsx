import { getPreferredScheme } from "../../TRMD3/Gizmos/Themeing";
import Switch from "../Switch";

/*
  The Switch component is essentially toggle button that can be selected or deselected by the user.
  The props are: selected: a boolean value that indicates whether the switch is on or off
  onChange: a function that is called when the user clicks on the switch
  disabled: a boolean value that indicates whether the switch is interactive or not
  icon: a boolean value that indicates whether the switch has an icon or not
  iconNameSelected: a string that specifies the name of the icon when the switch is on
  iconNameDeselected: a string that specifies the name of the icon when the switch is off 
*/

function SwitchesFrame() {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			className={
				"flex-trmd3 flex-column-trmd3 frame-trmd3 switches-frame-trmd3 switches-frame-" +
				_theme +
				"-trmd3"
			}
		>
			{/* SWITCHES */}
			<div className="text text-label text-label-small frame-label-trmd3">
				No Icon
			</div>
			<Switch selected={true} onChange={undefined} />
			<pre>
				<code className="language-html">
					{" "}
					{"<Switch selected={true} onChange={undefined} />"}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small checkbox-label-trmd3">
				No Icon (Inactive)
			</div>
			<Switch selected={true} onChange={undefined} disabled={true} />
			<pre>
				<code className="language-html">
					{" "}
					{
						"<Switch selected={true} onChange={undefined} disabled={true} />"
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small checkbox-label-trmd3">
				With Icon
			</div>
			<Switch
				selected={true}
				onChange={undefined}
				icon={true}
				iconNameSelected={"warning"}
				iconNameDeselected={"house"}
			/>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Switch selected={true} onChange={undefined} icon={true} iconNameSelected={"warning"} iconNameDeselected={"house"} />'
					}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small checkbox-label-trmd3">
				With Icon (Inactive)
			</div>
			<Switch selected={true} onChange={undefined} disabled={true} />
			<pre>
				<code className="language-html">
					{" "}
					{
						"<Switch selected={true} onChange={undefined} disabled={true} />"
					}{" "}
				</code>
			</pre>
		</div>
	);
}

export default SwitchesFrame;
