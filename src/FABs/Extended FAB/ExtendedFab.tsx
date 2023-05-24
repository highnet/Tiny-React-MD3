import React, { useState } from "react";
import { IExtendedFabProps } from "./IExtendedFabProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";


const ExtendedFab: React.FC<IExtendedFabProps> = ({
  id,
  children,
  className,
  onClick,
  configuration,
  iconName,
}) => {
  const [_id] = useState(id || undefined);
  const [_className] = useState(className || "");
  const [_config] = useState(configuration || "surface");
  const [_children] = useState(children || "Label");
  const [_iconName] = useState(iconName || "edit");
  const _theme =
    localStorage.getItem("theme") || getPreferredScheme() + "-theme";

  let _computedComponentClassName = new StringBuilder()
    .add("fab")
    .add("fab-" + _config)
    .add("fab-" + _theme)
    .add("extended-fab")
    .add("extended-fab-" + _config)
    .add("extended-fab-" + _theme)
    .add(_className)
    .toString();

  const click = () => {
    console.log("Thanks for Using Tiny React MD3!");
  };

  return (
    <button
      id={_id}
      className={_computedComponentClassName}
      onClick={(e) => {
        onClick?.(e);
        click();
      }}
    >
      <Icon className={"icon-on-fab icon-on-fab-" + _theme}>{_iconName}</Icon>
      <Typography variant="text-label-large" className={"label-on-fab label-on-fab-" + _theme}>
        {_children}
        </Typography>
    </button>
  );
};

export default ExtendedFab;
