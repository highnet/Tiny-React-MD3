import Badge from "../Badge";

/*  
    This code demonstrates how to use the Badge component from the Tiny-React-MD3 library to create badges of different sizes and numbers.
    Badges are small circular indicators that can be used to show counts, statuses or notifications on other elements.
    The code creates a div element with some styles to display three badges: a small badge without a number, a single digit badge with the number 3,
    and a multiple digit badge with the number 123. The Badge component takes a configuration prop to specify the size of the badge,
    an xOffset and yOffset prop to adjust the position of the badge relative to its parent element,
    and an optional label prop to display a number on the badge.
*/

<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "70px", gap: "40px" }}>
    {/* BADGES */}
    <div className="text text-title text-title-large">Badges</div>
    <div className="text text-label text-label-small">Small</div>
    <div style={{ backgroundColor: "#F8AF50", width: "50px", height: "50px" }}>
        <Badge
            configuration={"small"}
            xOffset={95}
            yOffset={-2}
        >
        </Badge>
    </div>

    <div className="text text-label text-label-small">Single Digit</div>
    <div style={{ backgroundColor: "#F8AF50", width: "100px", height: "100px" }}>
        <Badge
            configuration={"single-digit"}
            xOffset={93}
            yOffset={-4}
            label={"3"}
        >
        </Badge>
    </div>

    <div className="text text-label text-label-small">Multiple Digits</div>
    <div style={{ backgroundColor: "#F8AF50", width: "150px", height: "150px" }}>
        <Badge
            configuration={"multiple-digits"}
            xOffset={93}
            yOffset={-4}
            label={"123"}
        >
        </Badge>
    </div>

</div>