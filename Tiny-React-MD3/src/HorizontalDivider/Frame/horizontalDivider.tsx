import HorizontalDivider from "../HorizontalDivider";

/* 
    This code is used to create a column of four horizontal dividers with different inset styles.
    It uses a flexbox layout to arrange the dividers vertically with some gap between them.
    It also uses some text components to display the title and labels of the dividers.
    Each divider is a component imported from another file and has an inset prop that determines
    how much space is left on the left and right sides of the divider. The inset prop can be either
    “none”, “right”, “left”, or “center”. The dividers also have a showInsets prop that controls whether
    or not to show the inset spaces with a different color. The code demonstrates how to use the HorizontalDivider
    component with different props and styles.
*/

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