import RadioButton from "../RadioButton";

/*
    This code is used to create a column of four radio buttons with different values and states.
    It uses a flexbox layout to arrange the radio buttons vertically with some gap between them.
    It also uses some text components to display the title and labels of the radio buttons.
    Each radio button is a component imported from another file and has a name, value, disabled, and defaultChecked prop.
    The name prop is a string that groups the radio buttons together. The value prop is a string that assigns a value to each radio button.
    The disabled prop is a boolean that determines whether or not the radio button is disabled and cannot be selected.
    The defaultChecked prop is a boolean that determines whether or not the radio button is selected by default.
    The code demonstrates how to use the RadioButton component with different props and styles. 
*/

<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "70px",
    gap: "40px"
  }}>
  {/* RADIO BUTTONS */}
  <div
    className="text text-title text-title-large">
    Radio Buttons
  </div>
  <RadioButton
    name={"tiny md3"}
    value={"option-1"}
  />
  <div
    className="text text-label text-label-small">
    Option 1
  </div>
  <RadioButton
    name={"tiny md3"}
    value={"option-2"}
  />
  <div
    className="text text-label text-label-small">
    Option 2
  </div>
  <RadioButton
    name={"tiny md3"}
    value={"option-3"}
  />
  <div
    className="text text-label text-label-small">
    Option 3
  </div>
  <RadioButton
    name={"tiny md3"}
    value={"option-4"}
    disabled={true}
    defaultChecked={true}

  />
  <div
    className="text text-label text-label-small">
    Option 4 (Inactive)
  </div>
</div>