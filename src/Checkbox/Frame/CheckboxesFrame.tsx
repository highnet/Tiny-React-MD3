import Checkbox from "../Checkbox";

/* 
  Checkboxes can have different configurations, states, and styles.
  selected: a boolean value that indicates whether the checkbox is checked or not
  onChange: a function that is called when the user clicks on the checkbox
  configuration: a string that specifies the style of the checkbox, such as “default” or “error”
  disabled: a boolean value that indicates whether the checkbox is interactive or not
*/

function CheckboxesFrame() {
	return (
		<div className="flex-trmd3 flex-row-trmd3">
			{/* CHECKBOXES */}
			<div className="text text-label text-label-small">Default</div>
			<Checkbox selected={true} onChange={undefined}></Checkbox>
			<div className="text text-label text-label-small">Default (inactive)</div>
			<Checkbox
				selected={true}
				onChange={undefined}
				configuration={"default"}
				disabled={true}
			></Checkbox>
			<div className="text text-label text-label-small">Error</div>
			<Checkbox
				selected={true}
				onChange={undefined}
				configuration={"error"}
			></Checkbox>
			<div className="text text-label text-label-small">Error (inactive)</div>
			<Checkbox
				selected={true}
				onChange={undefined}
				configuration={"error"}
				disabled={true}
			></Checkbox>
		</div>
	);
}

export default CheckboxesFrame;
