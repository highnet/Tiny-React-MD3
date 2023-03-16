import Switch from "../Switch";

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "70px", gap: "40px" }}>
        {/* SWITCHES */}

        <div className="text text-title text-title-large">Switches</div>
        <div className="text text-label text-label-small">No Icon</div>

        <Switch
        selected={true}
        onChange={undefined}

       ></Switch>
        <div className="text text-label text-label-small">No Icon (Inactive)</div>

        <Switch
        selected={true}
        onChange={undefined}
        disabled={true}

       ></Switch>
      </div>