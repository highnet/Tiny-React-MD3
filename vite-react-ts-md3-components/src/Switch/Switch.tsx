import React, { useState } from "react";
import { ISwitchProps } from "./ISwitchProps";

const Switch: React.FC<ISwitchProps> = ({ disabled, children, id, className, selected, onChange }) => {

  const [_disabled] = useState(disabled || false);
  const [_id] = useState(id || undefined);
  const [_className] = useState(className || "");
  
  const [_selected, setSelected] = useState(selected || false);

  const handleClick = () => {
    setSelected(!_selected);
    onChange(!_selected);
  };

  return (
    <div 
        id={_id}
        className={"switch" + " " + _className + " " +  "switch-disabled-"+_disabled}
        >

        <div className={"switch-track switch-track-selected-" + _selected + " " +"switch-track-disabled-"+ _disabled}
        onClick={handleClick}
        >
            <div className={"switch-handle switch-handle-selected-" + _selected + " " + "switch-handle-disabled-" + _disabled}
            >
                <div className={"switch-handle-overlay switch-handle-overlay-selected-" + _selected}>
                </div>
            </div>
        </div>
        {children}
    </div>
  );
};

export default Switch;
