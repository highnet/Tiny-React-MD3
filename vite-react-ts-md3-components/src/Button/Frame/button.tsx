import Button from "../Button";

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "70px", gap: "40px" }}>
        {/* BUTTONS */}

        <div className="text text-title text-title-large">Buttons</div>
        <div className="text text-title text-title-medium">Filled Buttons</div>
        <div className="text text-label text-label-small">No Icon</div>

        <Button
          configuration="filled"
          disabled={false}
          onClick={undefined}
          id={"test"}
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
        <div className="text text-label text-label-small">With Icon</div>

        <Button
          configuration="filled"
          disabled={false}
          icon={true}
          iconName={"search"}
          onClick={undefined}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>

        <div className="text text-label text-label-small">With Icon (inactive)</div>
        <Button
          configuration="filled"
          disabled={true}
          icon={true}
          iconName={"search"}
          onClick={undefined}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>

        <div className="text text-title text-title-large">Outlined Buttons</div>
        <div className="text text-label text-label-small">No Icon</div>
        <Button
          configuration="outlined"
          disabled={false}
          onClick={undefined}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>
        <div className="text text-label text-label-small">No Icon (inactive)</div>
        <Button
          configuration="outlined"
          disabled={true}
          onClick={undefined}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>
        <div className="text text-label text-label-small">With Icon</div>
        <Button
          configuration="outlined"
          disabled={false}
          onClick={undefined}
          icon={true}
          iconName={"search"}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>
        <div className="text text-label text-label-small">With Icon (inactive)</div>
        <Button
          configuration="outlined"
          disabled={true}
          onClick={undefined}
          icon={true}
          iconName={"search"}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>

        <div className="text text-title text-title-large">Text Buttons</div>
        <div className="text text-label text-label-small">No Icon</div>
        <Button
          configuration="text"
          disabled={false}
          onClick={undefined}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>
        <div className="text text-label text-label-small">No Icon (inactive)</div>
        <Button
          configuration="text"
          disabled={true}
          onClick={undefined}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>
        <div className="text text-label text-label-small">With Icon</div>
        <Button
          configuration="text"
          disabled={false}
          onClick={undefined}
          icon={true}
          iconName={"search"}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>
        <div className="text text-label text-label-small">With Icon (inactive)</div>
        <Button
          configuration="text"
          disabled={true}
          onClick={undefined}
          icon={true}
          iconName={"search"}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>

        <div className="text text-title text-title-large">Elevated Buttons</div>
        <div className="text text-label text-label-small">No Icon</div>
        <Button
          configuration="elevated"
          disabled={false}
          onClick={undefined}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>
        <div className="text text-label text-label-small">No Icon (inactive)</div>
        <Button
          configuration="elevated"
          disabled={true}
          onClick={undefined}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>
        <div className="text text-label text-label-small">With Icon</div>
        <Button
          configuration="elevated"
          disabled={false}
          onClick={undefined}
          icon={true}
          iconName={"search"}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>
        <div className="text text-label text-label-small">With Icon (inactive)</div>
        <Button
          configuration="elevated"
          disabled={true}
          onClick={undefined}
          icon={true}
          iconName={"search"}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>

        <div className="text text-title text-title-large">Tonal Buttons</div>
        <div className="text text-label text-label-small">No Icon</div>
        <Button
          configuration="tonal"
          disabled={false}
          onClick={undefined}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>
        <div className="text text-label text-label-small">No Icon (inactive)</div>
        <Button
          configuration="tonal"
          disabled={true}
          onClick={undefined}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>
        <div className="text text-label text-label-small">With Icon</div>
        <Button
          configuration="tonal"
          disabled={false}
          onClick={undefined}
          icon={true}
          iconName={"search"}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>
        <div className="text text-label text-label-small">With Icon (inactive)</div>
        <Button
          configuration="tonal"
          disabled={true}
          onClick={undefined}
          icon={true}
          iconName={"search"}
        >
          <div className="text text-label text-label-large">Click Me</div>
        </Button>

      </div>