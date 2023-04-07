/*
  This code defines a HTML div element that displays some examples of typography styles using CSS classes.
  The code uses inline styles to set the display, flex direction, alignment, padding, gap, border and border
  radius of the div element and its children. The code also uses some predefined CSS classes to style the text
  elements inside the div element. The CSS classes specify the font family, size, weight, line height and letter
  spacing of the text elements. The code shows four categories of typography styles: display, headline, title and body.
  Each category has three variants: large, medium and small. The code also shows the font specifications for each text element
  as a comment next to it. 
*/

<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "70px", gap: "40px" }}>
  {/* TYPOGRAPHY */}

  <div className="text text-title text-title-large">Typography</div>

  <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "24px", gap: "24px", border: "1px solid #79747E", borderRadius: "16px" }}>
    <div className="text text-display text-display-large">Display Large - Roboto 57/54 . 0</div>
    <div className="text text-display text-display-medium">Display Medium - Roboto 45/52 .  0</div>
    <div className="text text-display text-display-small">Display Small - Roboto 36/44 . 0</div>
  </div>

  <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "24px", gap: "24px", border: "1px solid #79747E", borderRadius: "16px" }}>
    <div className="text text-headline text-headline-large">Headline Large - Roboto 32/40 . 0</div>
    <div className="text text-headline text-headline-medium">Headline Medium - Roboto 28/36 . 0</div>
    <div className="text text-headline text-headline-small">Headline Small - Roboto 24/32 . 0</div>
  </div>

  <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "24px", gap: "24px", border: "1px solid #79747E", borderRadius: "16px" }}>
    <div className="text text-title text-title-large">Title Large - Roboto Regular 22/28 . 0</div>
    <div className="text text-title text-title-medium">Title Medium - Roboto Medium 16/24 . +0.15</div>
    <div className="text text-title text-title-small">Title Small - Roboto Medium 14/20 . +0.1</div>
  </div>

  <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "24px", gap: "24px", border: "1px solid #79747E", borderRadius: "16px" }}>
    <div className="text text-label text-label-large">Label Large - Roboto Medium 14/20 . +0.1</div>
    <div className="text text-label text-label-medium">Label Medium - Roboto Medium 12/16 . +0.5</div>
    <div className="text text-label text-label-small">Label Small - Roboto Medium 11/16 . +0.5</div>
  </div>

  <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "24px", gap: "24px", border: "1px solid #79747E", borderRadius: "16px" }}>
    <div className="text text-body text-body-large">Body Large - Roboto 16/24 . +0.5</div>
    <div className="text text-body text-body-medium">Body Large - Roboto 16/24 . +0.5</div>
    <div className="text text-body text-body-small">Body Large - Roboto 16/24 . +0.5</div>
  </div>

</div>