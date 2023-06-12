import React, { useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { ISliderProps } from "./ISliderProps";

const Slider: React.FC<ISliderProps> = ({
    className,
    id,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onClick,
    min,
    max,
    value,
    step,
    onValueChange, // new prop
}) => {
    const [_className] = useState(className || "");
    const [_id] = useState(id || undefined);
    const [_min]  = useState(min || 0);
    const [_max] = useState(max || 100);
    const [_value, setValue] = useState(value || 50);

    const _theme =
        localStorage.getItem("theme") || getPreferredScheme() + "-theme";

    let _computedComponentClassName = new StringBuilder()
        .add("slider")
        .add("slider-" + _theme)
        .add(_className)
        .toString();

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(event.target.value));
        onValueChange && onValueChange(parseInt(event.target.value));
    };

    const gradient = `linear-gradient(to right, var(--m3-sys-light-primary) ${_value}%, var(--m3-sys-light-surface-container-highest) 0%)`;

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
            onClick={onClick}
            className="slider-container"
        >
            <input
                className={_computedComponentClassName}
                id={_id}
                type="range"
                min={_min}
                max={_max}
                value={_value}
                step={step || "0.1"}
                onChange={handleValueChange}
                style={{ background: gradient }}

            ></input>
            <p>Value: {_value}</p>
        </div>
    );
};

export default Slider;