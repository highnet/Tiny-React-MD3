import React, { useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { IComponentProps } from "../Component/IComponentProps";
import { IListProps } from "./IListProps";

const List: React.FC<IListProps> = ({
	className,
	id,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	height,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("list")
		.add("list-" + _theme)
		.add(_className)
		.toString();

	return (
		<div className="list-scroll" style={{ height: height }}>
			<ul
				id={_id}
				className={_computedComponentClassName}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onMouseMove={onMouseMove}
				onClick={onClick}
			>
				{children}
			</ul>
		</div>
	);
};

export default List;
