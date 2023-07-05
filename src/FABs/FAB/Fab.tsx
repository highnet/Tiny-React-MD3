import React, { useState, useEffect, useRef } from "react";
import { IFabProps } from "./IFabProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";

const Fab: React.FC<IFabProps> = ({
	id,
	className,
	onClick,
	configuration,
	size,
	iconName,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	children,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_config] = useState(configuration || "surface");
	const [_iconName] = useState(iconName || "edit");
	const [_size] = useState(size || "small");

	const boxRef = useRef<HTMLButtonElement>(null);
	const innerCircleRef = useRef<HTMLSpanElement>(null);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	useEffect(() => {
		const box = boxRef.current;
		const innerCircle = innerCircleRef.current;

		const handleMouseMove = (e: MouseEvent) => {
			if (innerCircle && box) {
				const boxRect = box.getBoundingClientRect();
				const offsetX = e.clientX - boxRect.left;
				const offsetY = e.clientY - boxRect.top;
				innerCircle.style.left = `${offsetX / 10}rem`;
				innerCircle.style.top = `${offsetY / 10}rem`;
			}
		};

		if (box && innerCircle) {
			box.addEventListener("mousemove", handleMouseMove);
		}

		return () => {
			if (box && innerCircle) {
				box.removeEventListener("mousemove", handleMouseMove);
			}
		};
	}, [boxRef, innerCircleRef]);

	let _computedComponentClassName = new StringBuilder()
		.add("fab")
		.add("fab-" + _size)
		.add("fab-" + _config)
		.add("fab-" + _theme)
		.add(_className)
		.toString();

	return (
		<div className="fab-container">
			<button
				id={_id}
				className={_computedComponentClassName}
				onClick={onClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onMouseMove={onMouseMove}
				ref={boxRef}
			>
				<Icon>{_iconName}</Icon>
				<span className="fab-inner-circle" ref={innerCircleRef}></span>
			</button>
			<Typography variant="text-label-medium">{children}</Typography>
		</div>
	);
};

export default Fab;
