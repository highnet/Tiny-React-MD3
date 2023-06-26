import React, { useState, useRef } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { IMenuProps } from "./IMenuProps";

const Menu: React.FC<IMenuProps> = ({
    className,
    id,
    children,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onClick,
}) => {
    const [_className] = useState(className || "");
    const [_id] = useState(id || undefined);

    const _theme =
        localStorage.getItem("theme") || getPreferredScheme() + "-theme";

    let _computedComponentClassName = new StringBuilder()
        .add("menu")
        .add("menu-" + _theme)
        .add(_className)
        .toString();

    const ulRef = useRef<HTMLUListElement>(null);

    const handleMouseLeave = () => {
        if (ulRef.current?.classList.contains("menu-parent")) {
            ulRef.current.classList.remove("menu-active");
        }
    };

    return (
        <ul
            id={_id}
            className={_computedComponentClassName}
            onMouseEnter={onMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={onMouseMove}
            onClick={onClick}
            ref={ulRef}
        >
            {children}
        </ul>
    );
};

export default Menu;