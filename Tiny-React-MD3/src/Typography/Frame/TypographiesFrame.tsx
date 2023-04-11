/*
    Typography styles are defined using CSS classes to style text elements inside of div elements. The CSS classes specify the font family,
    size, weight, line height, and letter spacing of the text elements. There are four typography variants: display, headline, title, and body.
    Each variant has three subvariants: large, medium, and small.
*/

function TypographiesFrame() {
    return (<div
        className="component-display-section-column-trmd3"
    >
        {/* TYPOGRAPHY */}
        <div
            className="typography-display-section-trmd3"
        >
            <div
                className="text text-display text-display-large"
            >
                Display Large - Roboto 57/54 . 0
            </div>
            <div
                className="text text-display text-display-medium"
            >
                Display Medium - Roboto 45/52 .  0
            </div>
            <div
                className="text text-display text-display-small"
            >
                Display Small - Roboto 36/44 . 0
            </div>
        </div>
        <div
            className="typography-display-section-trmd3"
        >
            <div
                className="text text-headline text-headline-large"
            >
                Headline Large - Roboto 32/40 . 0
            </div>
            <div
                className="text text-headline text-headline-medium"
            >
                Headline Medium - Roboto 28/36 . 0
            </div>
            <div
                className="text text-headline text-headline-small"
            >
                Headline Small - Roboto 24/32 . 0
            </div>
        </div>
        <div
            className="typography-display-section-trmd3"
        >
            <div
                className="text text-title text-title-large"
            >
                Title Large - Roboto Regular 22/28 . 0
            </div>
            <div
                className="text text-title text-title-medium"
            >
                Title Medium - Roboto Medium 16/24 . +0.15
            </div>
            <div
                className="text text-title text-title-small"
            >
                Title Small - Roboto Medium 14/20 . +0.1
            </div>
        </div>
        <div
            className="typography-display-section-trmd3"
        >
            <div
                className="text text-label text-label-large"
            >
                Label Large - Roboto Medium 14/20 . +0.1
            </div>
            <div
                className="text text-label text-label-medium"
            >
                Label Medium - Roboto Medium 12/16 . +0.5
            </div>
            <div
                className="text text-label text-label-small"
            >
                Label Small - Roboto Medium 11/16 . +0.5
            </div>
        </div>
        <div
            className="typography-display-section-trmd3"
        >
            <div
                className="text text-body text-body-large"
            >
                Body Large - Roboto 16/24 . +0.5
            </div>
            <div
                className="text text-body text-body-medium"
            >
                Body Large - Roboto 16/24 . +0.5
            </div>
            <div
                className="text text-body text-body-small"
            >
                Body Large - Roboto 16/24 . +0.5
            </div>
        </div>
    </div>);
}

export default TypographiesFrame;
