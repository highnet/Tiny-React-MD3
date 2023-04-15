import RadioButton from "../RadioButton";

/*
    Each radio button is a component and has a name, value, disabled, and defaultChecked prop. The name prop is a string that
    groups the radio buttons together. The value prop is a string that assigns a value to each radio button.
    The disabled prop is a boolean that determines whether or not the radio button is disabled and cannot be selected.
    The defaultChecked prop is a boolean that determines whether or not the radio button is selected by default. 
*/

function RadioButtonsFrame() {
	const _theme = localStorage.getItem("theme") || "light-theme";

	return (
		<div
			className={
				"flex-trmd3 frame-trmd3 radio-buttons-frame-trmd3 radio-buttons-frame-" +
				_theme +
				"-trmd3"
			}
		>
			{/* RADIO BUTTONS */}
			<RadioButton name={"tiny md3"} value={"option-1"} />
			<div className="text text-label text-label-small frame-label-trmd3">
				Option 1
			</div>
			<RadioButton name={"tiny md3"} value={"option-2"} />
			<div className="text text-label text-label-small frame-label-trmd3">
				Option 2
			</div>
			<RadioButton name={"tiny md3"} value={"option-3"} />
			<div className="text text-label text-label-small frame-label-trmd3">
				Option 3
			</div>
			<RadioButton
				name={"tiny md3"}
				value={"option-4"}
				disabled={true}
				defaultChecked={true}
			/>
			<div className="text text-label text-label-small frame-label-trmd3">
				Option 4 (Inactive)
			</div>
		</div>
	);
}

export default RadioButtonsFrame;
