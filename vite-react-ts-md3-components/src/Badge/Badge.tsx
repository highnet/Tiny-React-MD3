import React, { useState } from "react";
import { IBadgeProps } from "./IBadgeProps";

const Badge: React.FC<IBadgeProps> = ({ children, id, className, configuration, xOffset, yOffset, label}) => {

  const [_id] = useState(id || undefined);
  const [_className] = useState(className || "");
  const [_config] = useState(configuration || "small");
  const [_xOffset] = useState(xOffset || 0);
  const [_yOffset] = useState(yOffset || 0);
  const [_label] = useState(label || "");

  const click = () => {
    console.log("Clicked", { id: _id, className: _className})
  }

  let finalXOffset: string = _xOffset.toString() + "%";
  let finalYOffset: string = _yOffset.toString() + "%";

  const handleClick = () => {
    click();
  }

  return (
    <div
      onClick={(e) => {
        handleClick();
      }}
      id={_id}
      className={"badge badge-" + _config}
      style={{marginLeft: finalXOffset, marginTop:finalYOffset}}
      >
      <div style={{paddingLeft:"4px", paddingRight:"4px", margin: "0 auto"}} className="text text-label text-label-small">{_label}</div>
      {children}
    </div>
  );
};

export default Badge;
