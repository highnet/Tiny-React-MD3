import React, { useState } from "react";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { ITopAppBarProps } from "./ITopAppBarProps";
import Typography from "../../Typography/Typography";
import Icon from "../../Icon/Icon";

const TopAppBar: React.FC<ITopAppBarProps> = ({
    className,
    id,
    configuration,
    title,
    leadingIcon = {
        name: "arrow_back",
        onClick: () => {
            alert("hi");
        },
    },
    trailingIcons,
}) => {
    const [_className] = useState(className || "");
    const [_id] = useState(id || undefined);
    const [_configuration] = useState(configuration || "small");
    const [_title] = useState(title || "TRMD3");
    const [_trailingIcons] = useState(
        trailingIcons || [
			{ name: _configuration === "small-centered" ? "account_circle" : "attach_file", onClick: () => { alert("hi"); } },
            { name: "today", onClick: () => { alert("hi"); } },
            { name: "more_vert", onClick: () => {alert("hi"); } },
        ]
    );

    const _theme =
        localStorage.getItem("theme") || getPreferredScheme() + "-theme";

    let _computedComponentClassName = new StringBuilder()
        .add("top-app-bar")
        .add("top-app-bar-" + _theme)
		.add("top-app-bar-" + _configuration)
        .add(_className)
        .toString();

    let iconElements = null;
    if (_configuration === "small-centered") {
        iconElements = (
            <div
                className={
                    "icon-container-on-top-app-bar icon-container-on-top-app-bar-" +
                    _theme
                }
                key={0}
                tabIndex={0}
            >
                <Icon
                    className={"icon-on-top-app-bar icon-on-top-app-bar-" + _theme}
                    onClick={_trailingIcons[0].onClick}
                >
                    {_trailingIcons[0].name}
                </Icon>
            </div>
        );
    } 
	else {
        iconElements = _trailingIcons.map((icon, index) => (
            <div
                className={
                    "icon-container-on-top-app-bar icon-container-on-top-app-bar-" +
                    _theme
                }
                key={index}
                tabIndex={0}
            >
                <Icon
                    className={"icon-on-top-app-bar icon-on-top-app-bar-" + _theme}
                    onClick={icon.onClick}
                >
                    {icon.name}
                </Icon>
            </div>
        ));
    }

    return (
        <div id={_id} className={_computedComponentClassName} style={{display: "flex", flexDirection: (configuration === "medium" || configuration == "large" ? "column" : "row")}}>
			<div className="left-container-on-top-app-bar">
            <div
                className="icon-container-on-top-app-bar"
                onClick={leadingIcon.onClick}
            >
                <Icon className="icon-on-top-app-bar">{leadingIcon.name}</Icon>
            </div>
			{(_configuration === "small" || _configuration == "small-centered") && (
      			<Typography variant="text-title-large" className="title-on-top-app-bar">
        			{_title}
      			</Typography>
    		)}
			

			<div className="right-container-on-top-app-bar">
            	{iconElements}
			</div>
            </div>

            {(_configuration === "medium" || configuration === "large" ) && (
      			<Typography variant="text-title-large" className="title-on-top-app-bar">
        			{_title}
      			</Typography>
    		)}
        </div>
    );
};
export default TopAppBar;