import React, { useState } from "react";
import { IBadgeProps } from "./IBadgeProps";

const Badge: React.FC<IBadgeProps> = ({ children, id, className, configuration, xOffset, yOffset, label}) => {

  const [_id] = useState(id || undefined); // State for the ID of the badge
  const [_className] = useState(className || ""); // State for the class name of the badge
  const [_config] = useState(configuration || "small"); // State for the configuration of the badge
  const [_xOffset] = useState(xOffset || 0); // State for the x offset of the badge
  const [_yOffset] = useState(yOffset || 0); // State for the y offset of the badge
  const [_label] = useState(label || ""); // State for the label of the badge

  let _finalXOffset: string = _xOffset.toString() + "%"; // Final x offset value
  let _finalYOffset: string = _yOffset.toString() + "%"; // Final y offset value

  return (
    <div

      id={_id}
      className={"badge badge-" + _config}
      style={{marginLeft: _finalXOffset, marginTop:_finalYOffset}}
      >
      <div style={{paddingLeft:"4px", paddingRight:"4px", margin: "0 auto"}} className="text text-label text-label-small">{_label}</div>
      {children}
    </div>
  );
};

export default Badge;