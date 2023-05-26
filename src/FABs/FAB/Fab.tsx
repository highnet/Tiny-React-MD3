import React, { useState, useEffect, useRef } from "react";
import { IFabProps } from "./IFabProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import Icon from "../../Icon/Icon";

const Fab: React.FC<IFabProps> = ({
	id,
	className,
	onClick,
	configuration,
	iconName,
	size,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_config] = useState(configuration || "surface");
	const [_iconName] = useState(iconName || "edit");
	const [_size] = useState(size || "small");
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("fab")
		.add("fab-" + _size)
		.add("fab-" + _config)
		.add("fab-" + _theme)
		.add(_className)
		.toString();

	const click = () => {
		console.log("Thanks for Using Tiny React MD3!");
	};

	const boxRef = useRef<HTMLButtonElement>(null);
	const innerCircleRef = useRef<HTMLSpanElement>(null);

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

	return (
		<button
			id={_id}
			className={_computedComponentClassName}
			onClick={(e) => {
				onClick?.(e);
				click();
			}}
			ref={boxRef}
		>
			<Icon className={"icon-on-fab icon-on-fab-" + _theme}>{_iconName}</Icon>
			<span className="fab-inner-circle" ref={innerCircleRef}></span>
		</button>
	);
};

export default Fab;
