import React, { useEffect, useRef, useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { INavigationDrawerProps } from "./INavigationDrawerProps";

const NavigationDrawer: React.FC<INavigationDrawerProps> = ({
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
        .add("navigation-drawer")
        .add("navigation-drawer-" + _theme)
        .add(_className)
        .toString();

    const navDrawerRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (navDrawerRef.current) {
                navDrawerRef.current.classList.remove("navigation-drawer-active");
            }
        };

        const handleScroll = () => {
            if (navDrawerRef.current && navDrawerRef.current.classList.contains("navigation-drawer-active")) {
                navDrawerRef.current.classList.remove("navigation-drawer-active");
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ul
            id={_id}
            className={_computedComponentClassName}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
            onClick={onClick}
            ref={navDrawerRef}
        >
            {children}
        </ul>
    );
};

export default NavigationDrawer;