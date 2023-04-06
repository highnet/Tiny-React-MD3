// Import React and some hooks from React library
import React, { useState } from "react";
import { IHorizontalDividerProps } from "./IHorizontalDividerProps";

// Define a functional component for the button
const HorizontalDivider: React.FC<IHorizontalDividerProps> = ({ id, className, height, width, inset, insetRightWidth, insetLeftWidth, showInsets }) => {
    // Initialize state variables
    const [_id] = useState(id || undefined);
    const [_className] = useState(className || "");
    const [_height] = useState(height || 1)
    const [_width] = useState(width || 288);
    const [_inset] = useState(inset || "none");
    const [_insetRightWidth] = useState(insetRightWidth || 16);
    const [_insetLeftWidth] = useState(insetLeftWidth || 16);
    const [_showInsets] = useState(showInsets || false);

    let _finalHeight: string = _height.toString() + "px"; // Final height value
    let _finalWidth: string = _width.toString() + "px"; // Final width value
    let _finalInsetRightWidth: string = _insetRightWidth + "px";  // Final inset right width value
    let _finalInsetLeftWidth: string = _insetLeftWidth + "px"; // Final inset left width value
    let _finalInsetColor: string = (_showInsets ? "red" : "transparent"); // Final inset color

    // Return the JSX element for the button
    return (
        <div 
            id={_id}
            className={"horizontal-divider" + " " + _className}
        >
             
            {_inset == "right" || _inset == "center" ?
                <div
                    className={"horizontal-divider-inset-right"}
                    style={{
                        height: _finalHeight,
                        width: _finalInsetRightWidth,
                        backgroundColor: _finalInsetColor
                    }}>
                </div> :
                ""}

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
                        width: _finalInsetLeftWidth,
                        backgroundColor: _finalInsetColor
                    }}>
                </div> :
                ""}
        </div>
    );
};

// Export the button component as default
export default HorizontalDivider;