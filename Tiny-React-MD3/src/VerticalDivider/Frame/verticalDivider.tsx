import VerticalDivider from "../VerticalDivider";

<div
    style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "70px",
        gap: "40px"
    }}>
    {/* VERTICAL DIVIDERS */}

    <div
        className="text text-title text-title-large">
        Vertical Dividers
    </div>

    <div
        className="text text-label text-label-small">
        Inset None
    </div>
    <VerticalDivider
        inset={"none"}
    />

    <div
        className="text text-label text-label-small">
        Inset Top
    </div>
    <VerticalDivider
        inset={"top"}
        showInsets={true}
        insetTopHeight={50}
    />

    <div
        className="text text-label text-label-small">
        Inset Bottom
    </div>
    <VerticalDivider
        inset={"bottom"}
        insetBottomHeight={50}
        showInsets={true}
    />

    <div
        className="text text-label text-label-small">
        Inset Center
    </div>
    <VerticalDivider
        inset={"center"}
        insetBottomHeight={50}
        insetTopHeight={50}
        showInsets={true}
    />
</div>