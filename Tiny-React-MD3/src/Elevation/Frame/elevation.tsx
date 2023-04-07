/* 
  This code is used to create a row of five div elements with different elevation styles. It uses a flexbox layout
  to arrange the div elements horizontally with some gap between them. It also uses some text components to display
  the title of the row. Each div element has a fixed width, height, and border radius, and a linear gradient background
  color with different shades of purple. The elevation styles are defined by the class names of the div elements, such
  as “elevation-light-1” or “elevation-light-5”. The elevation styles create a visual effect of depth and shadow for the
  div elements.
*/

<div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "50px 60px", gap: "18px" }}>
  {/* ELEVATION */}
  <div className="text text-title text-title-large">Elevation</div>

  <div className="elevation-light-1" style={{ background: "linear-gradient(0deg, rgba(103, 80, 164, 0.05), rgba(103, 80, 164, 0.05))", width: "80px", height: "80px", borderRadius: "16px" }}></div>
  <div className="elevation-light-2" style={{ background: "linear-gradient(0deg, rgba(103, 80, 164, 0.08), rgba(103, 80, 164, 0.08))", width: "80px", height: "80px", borderRadius: "16px" }}></div>
  <div className="elevation-light-3" style={{ background: "linear-gradient(0deg, rgba(113, 90, 174, 0.11), rgba(113, 90, 174, 0.11))", width: "80px", height: "80px", borderRadius: "16px" }}></div>
  <div className="elevation-light-4" style={{ background: "linear-gradient(0deg, rgba(103, 80, 164, 0.12), rgba(103, 80, 164, 0.12))", width: "80px", height: "80px", borderRadius: "16px" }}></div>
  <div className="elevation-light-5" style={{ background: "linear-gradient(0deg, rgba(103, 80, 164, 0.14), rgba(103, 80, 164, 0.14))", width: "80px", height: "80px", borderRadius: "16px" }}></div>
</div>