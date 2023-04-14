import Checkbox from "../Checkbox";

/* 
  Checkboxes can have different configurations, states, and styles.
  selected: a boolean value that indicates whether the checkbox is checked or not
  onChange: a function that is called when the user clicks on the checkbox
  configuration: a string that specifies the style of the checkbox, such as “default” or “error”
  disabled: a boolean value that indicates whether the checkbox is interactive or not
*/
const _theme = localStorage.getItem("theme") || "light-theme";

function CheckboxesFrame() {
	return (
		<div
			className={
				"flex-trmd3 " +
				"checkboxes-frame-trmd3 " +
				"checkboxes-frame-" +
				_theme +
				"-trmd3"
			}
		>
			{/* CHECKBOXES */}
			<div className={"flex-trmd3 flex-row-trmd3"}>
				<div className="text text-label text-label-small checkbox-label-trmd3">
					Default
				</div>
				<Checkbox selected={true} onChange={undefined}></Checkbox>
			</div>

			<div className={"flex-trmd3 flex-row-trmd3"}>
				<div className="text text-label text-label-small checkbox-label-trmd3">
					Default (inactive)
				</div>
				<Checkbox
					selected={true}
					onChange={undefined}
					configuration={"default"}
					disabled={true}
				></Checkbox>
			</div>

			<div className={"flex-trmd3 flex-row-trmd3"}>
				<div className="text text-label text-label-small checkbox-label-trmd3">
					Error
				</div>
				<Checkbox
					selected={true}
					onChange={undefined}
					configuration={"error"}
				></Checkbox>
			</div>

			<div className={"flex-trmd3 flex-row-trmd3"}>
				<div className="text text-label text-label-small checkbox-label-trmd3">
					Error (inactive)
				</div>
				<Checkbox
					selected={true}
					onChange={undefined}
					configuration={"error"}
					disabled={true}
				></Checkbox>
			</div>
		</div>
	);
}

export default CheckboxesFrame;
