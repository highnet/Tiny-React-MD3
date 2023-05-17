import React, { useState } from "react";
import { ISuggestionChipProps } from "./ISuggestionChipProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";

const SuggestionChip: React.FC<ISuggestionChipProps> = ({}) => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const click = () => {
		console.log("Thank you for using Tiny React MD3!");
	};

	let _computedComponentClassName = new StringBuilder().toString();

	return <button></button>;
};

export default SuggestionChip;
