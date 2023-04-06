import Checkbox from "../Checkbox";

<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "70px", gap: "40px" }}>
  {/* SWITCHES */}
  <div className="text text-title text-title-large">Checkboxes</div>
  <div className="text text-label text-label-small">Default</div>

  <Checkbox
    selected={true}
    onChange={undefined}
    configuration={"default"}
  ></Checkbox>
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