// Import React and some hooks from React library
import React, { useState } from "react";
import { IVerticalDividerProps } from "./IVerticalDividerProps";

// Define a functional component for the button
const VerticalDivider: React.FC<IVerticalDividerProps> = ({ id, className, height, width, inset, insetTopHeight, insetBottomHeight, showInsets }) => {
  // Initialize state variables
  const [_id] = useState(id || undefined);
  const [_className] = useState(className || "");
  const [_width] = useState(width || 1);
  const [_height] = useState(height || 288)
  const [_inset] = useState(inset || "none");
  const [_insetTopHeight] = useState(insetTopHeight || 16);
  const [_insetBottomHeight] = useState(insetBottomHeight || 16);
  const [_showInsets] = useState(showInsets || false);

  let _finalWidth: string = _width.toString() + "px"; // Final width value
  let _finalHeight: string = _height.toString() + "px"; // Final height value
  let _finalInsetTopHeight = _insetTopHeight + "px";
  let _finalInsetBottomHeight = _insetBottomHeight + "px";
  let _finalInsetColor: string = (_showInsets ? "red" : "transparent"); // Final inset color

  // Return the JSX element for the button
  return (
    <div 
      id={_id}
      className={"vertical-divider" + " " + _className}
    >
      
      {_inset == "top" || _inset == "center" ?
        <div
          className={"vertical-divider-inset-top"}
          style={{
            width: _finalWidth,
            height: _finalInsetTopHeight,
            color: _finalInsetColor
          }}>
        </div> :
        ""}

      <div
        className={"vertical-divider-bar"}
        style={{
          width: _finalWidth,
          height: _finalHeight
        }}>
      </div>

      {_inset == "bottom" || _inset == "center" ?
        <div
          className={"vertical-divider-inset-bottom"}
          style={{
            width: _finalWidth,
            height: _finalInsetBottomHeight,
            color: _finalInsetColor
          }}>
        </div> :
        ""}

    </div>
  );
};

// Export the button component as default
export default VerticalDivider;