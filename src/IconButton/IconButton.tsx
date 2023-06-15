import React, { useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { IIconButtonProps } from "./IIconButtonProps";
import Icon from "../Icon/Icon";

const Component: React.FC<IIconButtonProps> = ({
	className,
	id,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
    configuration,
	disabled,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
    const [_configuration] = useState(configuration || "standard");

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("icon-button")
		.add("icon-button-" + _theme)
        .add("icon-button-" + _configuration)
		.add(disabled ? "icon-button-disabled" : "")
		.add(_className)
		.toString();

	return (
		<div
			id={_id}
			className={_computedComponentClassName}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			onClick={onClick}
			tabIndex={0}
		>
            <Icon>{children}</Icon>
		</div>
	);
};

export default Component;
