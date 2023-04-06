import RadioButton from "../RadioButton";

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