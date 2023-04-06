import HorizontalDivider from "../HorizontalDivider";

<div
    style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "70px",
        gap: "40px"
    }}>
    {/* HORIZONTAL DIVIDERS */}

    <div
        className="text text-title text-title-large">
        Horizontal Dividers
    </div>

    <div
        className="text text-label text-label-small">
        Inset None
    </div>
    <HorizontalDivider
        inset={"none"}
    />

    <div
        className="text text-label text-label-small">
        Inset Right
    </div>
    <HorizontalDivider
        inset={"right"}
        showInsets={true}
    />

    <div
        className="text text-label text-label-small">
        Inset Left
    </div>
    <HorizontalDivider
        inset={"left"}
        showInsets={true}
    />

    <div
        className="text text-label text-label-small">
        Inset Center
    </div>
    <HorizontalDivider
        inset={"center"}
        showInsets={true}
    />
</div>