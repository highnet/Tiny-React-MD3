// Import React and some hooks from React library
import React, { useState } from "react";

import { IAssistChipProps } from "./IAssistChipProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";

const AssistChip: React.FC<IAssistChipProps> = ({}) => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const click = () => {
		console.log("Thank you for using Tiny React MD3!");
	};

	let _computedComponentClassName = new StringBuilder().toString();

	return <button></button>;
};

export default AssistChip;
