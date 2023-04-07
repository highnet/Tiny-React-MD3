import Checkbox from "../Checkbox";

/* 
  This code is used to create different types of checkboxes for a web page. It imports a Checkbox component from another
  file and uses it to render various checkboxes with different configurations, states, and styles. The code also uses some 
  styles and text components to arrange and label the checkboxes. The code demonstrates how to use the Checkbox component with 
  different props and how to handle the selected and disabled states of the checkboxes. 
*/

<div
  className="component-display-section-row-trmd3"
>
  {/* CHECKBOXES */}
  <div
    className="text text-label text-label-small"
  >
    Default
  </div>
  <Checkbox
    selected={true}
    onChange={undefined}
  ></Checkbox>
  <div
    className="text text-label text-label-small"
  >
    Default (inactive)
  </div>
  <Checkbox
    selected={true}
    onChange={undefined}
    configuration={"default"}
    disabled={true}
  >
  </Checkbox>
  <div
    className="text text-label text-label-small"
  >
    Error
  </div>
  <Checkbox
    selected={true}
    onChange={undefined}
    configuration={"error"}
  ></Checkbox>
  <div
    className="text text-label text-label-small"
  >
    Error (inactive)
  </div>
  <Checkbox
    selected={true}
    onChange={undefined}
    configuration={"error"}
    disabled={true}
  >
  </Checkbox>
</div>