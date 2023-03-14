import Button from "../Button";

<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "70px", gap: "40px" }}>
  {/* BUTTONS */}

  <div className="text text-title text-title-large">Buttons</div>
  <div className="text text-title text-title-small">Filled Buttons</div>
  <div className="text text-label text-label-small">No Icon</div>

  <Button
    configuration="filled"
    disabled={false}
    onClick={undefined}
  >
    <div className="text text-label text-label-large">Click Me</div>
  </Button>
  <div className="text text-label text-label-small">No Icon (inactive) </div>

  <Button
    configuration="filled"
    disabled={true}
    onClick={undefined}
  >
    <div className="text text-label text-label-large">Click Me</div>
  </Button>

</div>