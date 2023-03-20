import React, { useState } from "react";
import { IBadgeProps } from "./IBadgeProps";

const Badge: React.FC<IBadgeProps> = ({ disabled, children, id, className }) => {

  const [_disabled] = useState(disabled || false);
  const [_id] = useState(id || undefined);
  const [_className] = useState(className || "");


  const click = () => {
    console.log("Clicked", { disabled: _disabled, id: _id, className: _className})
  }

  const handleClick = () => {
    click();
  }

  return (
    <div
      onClick={(e) => {
        handleClick();
      }}
      id={_id}
      className={"badge"}
        >
      {children}
      badge
    </div>
  );
};

export default Badge;
