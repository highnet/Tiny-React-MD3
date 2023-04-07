import Checkbox from "../Checkbox";

/* 
    This code is used to create different types of checkboxes for a web page. It imports a Checkbox component from another
    file and uses it to render various checkboxes with different configurations, states, and styles. The code also uses some 
    styles and text components to arrange and label the checkboxes. The code demonstrates how to use the Checkbox component with 
    different props and how to handle the selected and disabled states of the checkboxes. 
*/

<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "70px", gap: "40px" }}>
  {/* SWITCHES */}
  <div className="text text-title text-title-large">Checkboxes</div>
  <div className="text text-label text-label-small">Default</div>

  <Checkbox
    selected={true}
    onChange={undefined}
    configuration={"default"}
  ></Checkbox>
  <div className="text text-label text-label-small">Default (inactive)</div>

  <Checkbox
    selected={true}
    onChange={undefined}
    configuration={"default"}
    disabled={true}
  ></Checkbox>
  <div className="text text-label text-label-small">Error</div>

  <Checkbox
    selected={true}
    onChange={undefined}
    configuration={"error"}
  ></Checkbox>
  <div className="text text-label text-label-small">Error (inactive)</div>

  <Checkbox
    selected={true}
    onChange={undefined}
    configuration={"error"}
    disabled={true}

  ></Checkbox>

</div>