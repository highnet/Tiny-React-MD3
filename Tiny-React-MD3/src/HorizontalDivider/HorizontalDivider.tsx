// Import React and some hooks from React library
import React, { useState } from "react";
import { IDividerProps } from "./IHorizontalDividerProps";

// Define a functional component for the button
const Divider: React.FC<IDividerProps> = ({ disabled, children, id, className, height, width, inset, insetRightWidth, insetLeftWidth }) => {
  // Initialize state variables
  const [_height] = useState(height || 1)
  const [_width] = useState(width || 288);
  const [_inset] = useState(inset || "none");
  const [_insetRightWidth] = useState(insetRightWidth || 16);
  const [_insetLeftWidth] = useState(insetLeftWidth || 16);

  let _finalHeight: string = _height.toString() + "px"; // Final height value
  let _finalWidth: string = _width.toString() + "px"; // Final width value
  let _finalInsetRightWidth = _insetRightWidth + "px";  // Final inset right width value
  let _finalInsetLeftWidth = _insetLeftWidth + "px"; // Final inset left width value

  // Return the JSX element for the button
  return (
    <div className={"horizontal-divider"}>
        {_inset == "right" || _inset == "center" ? 
            <div 
                className={"horizontal-divider-inset-right"} 
                style={{
                    height: _finalHeight,
                    width: _finalInsetRightWidth
                    }}>

            </div>:
            "" }

        <div 
            className={"horizontal-divider-bar"} 
            style={{
                width: _finalWidth,
                height: _finalHeight
                }}>
        </div>

        {_inset == "left" || _inset == "center" ?
            <div 
                className={"horizontal-divider-inset-left"} 
                style={{
                    height: _finalHeight,
                    width: _finalInsetLeftWidth
                    }}>

            </div>:
            "" }
    </div>
  );
};

// Export the button component as default
export default Divider;