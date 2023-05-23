import { useState } from "react";
import Icon from "../../Icon/Icon";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import Typography from "../../Typography/Typography";

interface IComponentFrameTitlesProps {
    children?: React.ReactNode;
    link?: string;
}

function openLinkInNewTab(url: string) {
    if (url == undefined || url == "") return;
    window.open(url, "_blank");
}

const ComponentFrameTitle: React.FC<IComponentFrameTitlesProps> = ({ children, link }) => {
    const [_children] = useState(children || "");
    const [_link] = useState(link || "");
    const _theme =
        localStorage.getItem("theme") || getPreferredScheme() + "-theme";

    return (
            <div onClick={() => openLinkInNewTab(_link)} className={"component-frame-title-trmd3 component-frame-title-" + _theme + "-trmd3"}>
                <Icon className={"icon-on-component-frame-title-trmd3"}>
                    link
                </Icon>
                <Typography variant={"text-title-large"}>{_children}</Typography>
            </div>
    );
};

export default ComponentFrameTitle;