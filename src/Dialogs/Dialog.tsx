import React, { useState, useRef, useEffect } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { IDIalogProps } from "./IDialogProps";
import Button from "../Button/Button";
import { closeDialogRef } from "../Gizmos/Modals";
import Typography from "../Typography/Typography";
import HorizontalDivider from "../Dividers/HorizontalDivider/HorizontalDivider";
import List from "../Lists/List";
import ListItem from "../Lists/List Items/ListItem";

const Dialog: React.FC<IDIalogProps> = ({
    className,
    id,
    children,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onClick,
    title,
    buttons,
    showCloseButton,
    showDivider,
    configuration,
}) => {
    const [_className] = useState(className || "");
    const [_id] = useState(id || undefined);
    const [_children] = useState(children || "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.");
    const [_title]	= useState(title || "Dialog Title");
    const [_buttons] = useState(buttons || undefined);
    const [_showActions] = useState(!!_buttons);
    const [_showCloseButton] = useState(showCloseButton || false);
    const [_showDivider] = useState(showDivider || false);
    const [_configuration] = useState(configuration || "basic");

    const dialogRef = useRef<HTMLDialogElement>(null);

    const _theme =
        localStorage.getItem("theme") || getPreferredScheme() + "-theme";

    let _computedComponentClassName = new StringBuilder()
        .add("dialog")
        .add("dialog-" + _theme)
        .add("dialog-" + _configuration)
        .add(_showDivider ? "dialog-with-divider" : "")
        .add(_className)
        .toString();

    const actionButtons = _showActions && (
        <div className="dialog-actions">
            {_showCloseButton && 
                <Button onClick={(event) => closeDialogRef(dialogRef)} configuration="elevated">
                    Close
                </Button>}

            {_buttons?.map((button, index) => (
                <Button key={index} onClick={button.onClick} configuration={button.configuration || "text"}>
                    {button.label || "Action"}
                </Button>
            ))}
        </div>
    );

    const list = _configuration === "list" && (
        <List>
            
            <ListItem
                size="2-line"
                showDivider={true}
                leadingElement="switch"
                elementSelected={true}
            >
                Supporting line text lorem ipsum dolor sit amet, consectetur.
            </ListItem>
            
            <ListItem
                size="3-line"
                showDivider={true}
                leadingElement="switch"
                onElementChange={() => {
                    alert("hi");
                }}
                trailingElement="icon"
                onTrailingIconClick={() => {
                    alert("hi");
                }}
                switchIconNameDeselected="star"
                switchIconNameSelected="flag"
            >
                Supporting line text lorem ipsum dolor sit amet, consectetur.
            </ListItem>
            
            <ListItem
                size="2-line"
                showDivider={true}
                leadingElement="radio"
                onElementChange={() => {
                    alert("hi");
                }}
                radioButtonGroupName="list-item-radio-group-1"
                radioButtonValue="1"
                trailingElement="icon"
                onTrailingIconClick={() => {
                    alert("hi");
                }}
            >
                Supporting line text lorem ipsum dolor sit amet, consectetur.
            </ListItem>
         </List>
    );

    useEffect(() => {
        const handleClose = () => {
            dialogRef.current?.classList.remove("dialog-visible");
        };

        dialogRef.current?.addEventListener("close", handleClose);

        return () => {
            dialogRef.current?.removeEventListener("close", handleClose);
        };
    }, []);

    return (
        <div>
            <dialog
                id={_id}
                className={_computedComponentClassName}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
                onClick={onClick}
                ref={dialogRef}
            >
                <div className="dialog-text-content">
                    <Typography variant="text-headline-small">{_title}</Typography>
                    <Typography variant="text-body-medium">{_children}</Typography>
                </div>
                {_showDivider && <div className="dialog-divider"><HorizontalDivider></HorizontalDivider></div>}
                {list}
                {actionButtons}

            </dialog>
        </div>
    );
};

export default Dialog;