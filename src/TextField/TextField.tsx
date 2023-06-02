import React, { useRef, useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { ITextFieldProps } from "./ITextFieldProps";
import Typography from "../Typography/Typography";
import Icon from "../Icon/Icon";

const TextField: React.FC<ITextFieldProps> = ({
    className,
    children,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onClick,
    configuration = "filled",
    textConfiguration = "label-input",
    leadingIconName,
    trailingIcon = true,
    label = "Label",
    placeholder,
    input = textConfiguration === "label-input" ? "Input" : "Label",
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [_className] = useState(className || "");
    const [_configuration] = useState(configuration);
    const [_textConfiguration] = useState(textConfiguration);
    const [_leadingIconName] = useState(leadingIconName || undefined);
    const [_trailingIcon] = useState(trailingIcon);
    const [_label] = useState(label);
    const [_placeholder] = useState(placeholder || undefined);
    const [_input] = useState(input);

    const _theme =
        localStorage.getItem("theme") || getPreferredScheme() + "-theme";

    let _computedComponentClassName = new StringBuilder()
        .add("text-field")
        .add("text-field-" + _theme)
        .add(_className)
        .toString();

    const handleIconClick = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    return (
        <div className={_computedComponentClassName}>
            <div className="text-field-container">
                <div className="text-field-content">
                    <Typography variant="text-body-small">
                        {_textConfiguration === "label-input" ? _label : ""}
                    </Typography>
                    <input
                        className="text-field-input"
                        ref={inputRef}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onMouseMove={onMouseMove}
                        onClick={onClick}
                        defaultValue={_input}
                        placeholder={_placeholder}
                    >
                        {children}
                    </input>
                </div>
                {trailingIcon && (
                    <div>
                        <Icon
                            className="icon-on-text-field"
                            onClick={handleIconClick}
                        >
                            cancel
                        </Icon>
                    </div>
                )}
            </div>
            <div className="text-field-"></div>
        </div>
    );
};

export default TextField;