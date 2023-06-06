import React, { useState, useRef } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { IDIalogProps } from "./IDialogProps";
import Button from "../Button/Button";
import { closeDialogRef } from "../Gizmos/Modals";

const Dialog: React.FC<IDIalogProps> = ({
	className,
	id,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	openDialogTrigger,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const dialogRef = useRef<HTMLDialogElement>(null);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("dialog")
		.add("dialog-" + _theme)
		.add(_className)
		.toString();

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
				<h2>Dialog Title</h2>
				<p>Dialog content goes here.</p>
				<Button onClick={(event) => closeDialogRef(dialogRef)}>
					Close Dialog
				</Button>
			</dialog>
		</div>
	);
};

export default Dialog;
