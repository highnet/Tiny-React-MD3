import React, { useState, useRef, useEffect } from "react";
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

    const menuRef = useRef<HTMLUListElement>(null);

    const handleMouseLeave = () => {
        if (menuRef.current?.classList.contains("menu-parent")) {
            menuRef.current.classList.remove("menu-active");
        }
    };

	useEffect(() => {
		const handleResize = () => {
			if (menuRef.current) {
				menuRef.current.classList.remove("menu-active");
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

    return (
        <ul
            id={_id}
            className={_computedComponentClassName}
            onMouseEnter={onMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={onMouseMove}
            onClick={onClick}
            ref={menuRef}
        >
            {children}
        </ul>
    );
};

export default Menu;