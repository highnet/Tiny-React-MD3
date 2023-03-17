import React, { useState } from "react";
import { ISwitchProps } from "./ISwitchProps";

const Switch: React.FC<ISwitchProps> = ({ disabled, children, id, className, selected, onChange, icon, iconNameSelected, iconNameDeselected }) => {

  const [_disabled] = useState(disabled || false);
  const [_id] = useState(id || undefined);
  const [_className] = useState(className || "");

  const [_icon] = useState(icon || false);
  const [_iconNameSelected] = useState(iconNameSelected || "check");
  const [_iconNameDeselected] = useState(iconNameDeselected || "close");

  const [_selected, setSelected] = useState(selected || false);

  const click = () => {
    console.log("Clicked", { disabled: _disabled, id: _id, className: _className, selected: _selected })
  }

  const handleClick = () => {
    setSelected(!_selected);
    click();
  }

  return (
    <div
      onClick={(e) => {
        onChange?.(e);
        handleClick();
      }}
      id={_id}
      className={"switch" + " " + "switch-" + (_selected ? "selected" : "deselected") + " " + "switch-" + (_disabled ? "disabled" : "enabled") + " " + "switch-" + (_icon ? "with" : "without") + "-icon" + " " +_className}>
      <div className={"switch-track switch-track-" + (_selected ? "selected" : "deselected") + " " + "switch-track-" + (_disabled ? "disabled" : "enabled") + " " + "switch-track-" + (_icon ? "with" : "without") + "-icon"}>
        <div className={"switch-handle switch-handle-" + (_selected ? "selected" : "deselected") + " " + "switch-handle-" + (_disabled ? "disabled" : "enabled") + " " + "switch-handle-" + (_icon ? "with" : "without") + "-icon"}>
          <div className={"switch-handle-overlay"}>
            {_icon ? <span className={"material-symbols-outlined" + " " + "switch-icon" + " " + "switch-icon-" + (_selected ? "selected" : "deselected") + " " + "switch-icon-" + (_disabled ? "disabled" : "enabled")}> {(_selected ? _iconNameSelected : _iconNameDeselected) } </span> : ""}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Switch;
