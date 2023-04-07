
/*
      This code is used to create a row of five icons for a web page.
      It uses a flexbox layout to arrange the icons horizontally with some gap between them.
      It also uses a text component to display the title of the row. Each icon is a span element
      with a class name of “material-symbols-outlined”, which uses a custom font to render the icons.
      The icons are specified by the text content of the span elements, such as “search”, “home”, “air”,
      “water”, or “check”. The code demonstrates how to use the material symbols font to create icons with
      different names and styles. 
*/

<div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", padding: "50px 60px", gap: "18px" }}>
      {/* ICONS */}
      <div className="text text-title text-title-large">Icons</div>
      <span className="material-symbols-outlined">
            search
      </span>
      <span className="material-symbols-outlined">
            home
      </span>
      <span className="material-symbols-outlined">
            air
      </span>
      <span className="material-symbols-outlined">
            water
      </span>
      <span className="material-symbols-outlined">
            check
      </span>
</div>